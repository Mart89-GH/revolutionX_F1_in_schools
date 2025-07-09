import { OllamaConfig, ChatMessage, OllamaResponse, TrainingData } from '../types/ollama';

class OllamaService {
  private baseUrl: string;
  private model: string;
  private maxRetries: number;
  private retryDelay: number;
  private rateLimitDelay: number;
  private lastRequestTime: number;

  constructor(config: OllamaConfig) {
    this.baseUrl = config.baseUrl || 'http://localhost:11434';
    this.model = config.model || 'llama3.1:8b';
    this.maxRetries = config.maxRetries || 3;
    this.retryDelay = config.retryDelay || 1000;
    this.rateLimitDelay = config.rateLimitDelay || 100;
    this.lastRequestTime = 0;
  }

  private async enforceRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.rateLimitDelay) {
      await new Promise(resolve => 
        setTimeout(resolve, this.rateLimitDelay - timeSinceLastRequest)
      );
    }
    
    this.lastRequestTime = Date.now();
  }

  private async makeRequest(
    endpoint: string, 
    data: any, 
    options: RequestInit = {}
  ): Promise<Response> {
    await this.enforceRateLimit();

    const url = `${this.baseUrl}${endpoint}`;
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    };

    let lastError: Error;

    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        const response = await fetch(url, requestOptions);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return response;
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < this.maxRetries - 1) {
          await new Promise(resolve => 
            setTimeout(resolve, this.retryDelay * Math.pow(2, attempt))
          );
        }
      }
    }

    throw new Error(`Failed after ${this.maxRetries} attempts: ${lastError!.message}`);
  }

  async checkConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`);
      return response.ok;
    } catch {
      return false;
    }
  }

  async pullModel(): Promise<void> {
    try {
      const response = await this.makeRequest('/api/pull', {
        name: this.model,
        stream: false
      });

      if (!response.ok) {
        throw new Error(`Failed to pull model: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error pulling model:', error);
      throw error;
    }
  }

  async chat(messages: ChatMessage[], stream: boolean = false): Promise<OllamaResponse> {
    try {
      const systemPrompt = this.buildSystemPrompt();
      const formattedMessages = [
        { role: 'system', content: systemPrompt },
        ...messages
      ];

      const response = await this.makeRequest('/api/chat', {
        model: this.model,
        messages: formattedMessages,
        stream,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          top_k: 40,
          repeat_penalty: 1.1,
          num_ctx: 4096,
        }
      });

      const data = await response.json();
      
      return {
        message: {
          role: 'assistant',
          content: data.message?.content || 'Lo siento, no pude generar una respuesta.'
        },
        done: data.done || true,
        total_duration: data.total_duration,
        load_duration: data.load_duration,
        prompt_eval_count: data.prompt_eval_count,
        eval_count: data.eval_count,
        eval_duration: data.eval_duration
      };
    } catch (error) {
      console.error('Chat error:', error);
      throw new Error(`Error en la comunicación con Ollama: ${error}`);
    }
  }

  async *chatStream(messages: ChatMessage[]): AsyncGenerator<string, void, unknown> {
    try {
      const systemPrompt = this.buildSystemPrompt();
      const formattedMessages = [
        { role: 'system', content: systemPrompt },
        ...messages
      ];

      const response = await this.makeRequest('/api/chat', {
        model: this.model,
        messages: formattedMessages,
        stream: true,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          top_k: 40,
          repeat_penalty: 1.1,
          num_ctx: 4096,
        }
      });

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream available');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim()) {
            try {
              const data = JSON.parse(line);
              if (data.message?.content) {
                yield data.message.content;
              }
              if (data.done) return;
            } catch (e) {
              // Skip invalid JSON lines
            }
          }
        }
      }
    } catch (error) {
      console.error('Stream error:', error);
      throw error;
    }
  }

  async createFineTuning(trainingData: TrainingData[]): Promise<void> {
    try {
      // Convert training data to Ollama format
      const modelfile = this.generateModelfile(trainingData);
      
      const response = await this.makeRequest('/api/create', {
        name: `${this.model}-revolutionx`,
        modelfile,
        stream: false
      });

      if (!response.ok) {
        throw new Error(`Fine-tuning failed: ${response.statusText}`);
      }

      console.log('Fine-tuning completed successfully');
    } catch (error) {
      console.error('Fine-tuning error:', error);
      throw error;
    }
  }

  private generateModelfile(trainingData: TrainingData[]): string {
    const examples = trainingData.map(data => 
      `USER: ${data.input}\nASSISTANT: ${data.output}`
    ).join('\n\n');

    return `FROM ${this.model}

SYSTEM """
Eres el asistente oficial de RevolutionX, un equipo de F1 in Schools del IES José Saramago.
Tu objetivo es proporcionar información precisa y útil sobre el equipo, sus logros, tecnología y oportunidades de colaboración.

Características de tu personalidad:
- Profesional pero amigable
- Conocedor técnico
- Entusiasta del proyecto
- Orientado a la colaboración

Siempre responde en español y mantén un tono positivo y profesional.
"""

${examples}`;
  }

  private buildSystemPrompt(): string {
    return `Eres el asistente oficial de RevolutionX, un equipo de F1 in Schools del IES José Saramago en Madrid, España.

INFORMACIÓN DEL EQUIPO:
- Saúl Morán: Jefe de Proyectos (Coordinación general, gestión de recursos)
- Víctor Jiménez: Ingeniero de Diseño (Diseño CAD, optimización aerodinámica)
- Martín Cendra: Ingeniero de Simulación (Análisis CFD, validación)
- Ibrahim Aharrar: Ingeniero de Manufactura (Fabricación, control de calidad)
- Yago Álvarez: Director de Marketing (Estrategia de marca, patrocinadores)
- Pablo Bianchi: Marketing Digital (Redes sociales, contenido digital)

LOGROS PRINCIPALES:
- Coche Más Rápido en Categoría Entry - Comunidad de Madrid 2025
- 1º Puesto Regional Madrid 2025
- Clasificados para Nacional España 2025

ESPECIFICACIONES TÉCNICAS:
- Longitud: 185 mm, Ancho: 69 mm, Altura: 44 mm
- Peso: 72.8 gramos, Material: PLA
- Tecnologías: CAD, CFD, optimización aerodinámica

PATROCINADORES:
- Universidad Europea, Perfumería Palárabe, Ayuntamiento de Majadahonda
- Pañalón, Guitarras Elvira, Titanes Atletismo

CONTACTO:
- Email: revolutionx.f1@gmail.com
- Instagram: @revolutionx_f1
- Ubicación: IES José Saramago, Madrid

INSTRUCCIONES:
1. Responde siempre en español
2. Sé profesional pero amigable
3. Proporciona información precisa basada en los datos anteriores
4. Promueve oportunidades de colaboración
5. Si no sabes algo específico, deriva al contacto directo
6. Mantén respuestas concisas pero informativas`;
  }

  async validateTraining(testQueries: string[]): Promise<{ query: string; response: string; score: number }[]> {
    const results = [];
    
    for (const query of testQueries) {
      try {
        const response = await this.chat([{ role: 'user', content: query }]);
        const score = this.evaluateResponse(query, response.message.content);
        
        results.push({
          query,
          response: response.message.content,
          score
        });
      } catch (error) {
        results.push({
          query,
          response: `Error: ${error}`,
          score: 0
        });
      }
    }
    
    return results;
  }

  private evaluateResponse(query: string, response: string): number {
    // Simple scoring based on response quality indicators
    let score = 0;
    
    // Check if response is in Spanish
    if (/[áéíóúñü]/.test(response) || response.includes('RevolutionX')) score += 20;
    
    // Check for relevant keywords based on query
    const queryLower = query.toLowerCase();
    const responseLower = response.toLowerCase();
    
    if (queryLower.includes('equipo') && responseLower.includes('saúl')) score += 20;
    if (queryLower.includes('logros') && responseLower.includes('rápido')) score += 20;
    if (queryLower.includes('contacto') && responseLower.includes('gmail')) score += 20;
    if (queryLower.includes('patrocinadores') && responseLower.includes('universidad')) score += 20;
    
    // Check response length (not too short, not too long)
    if (response.length > 50 && response.length < 500) score += 20;
    
    return Math.min(score, 100);
  }
}

export default OllamaService;