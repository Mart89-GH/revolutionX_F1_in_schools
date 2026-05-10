import { OpenRouterConfig, ChatMessage, OpenRouterResponse, StreamChunk } from '../types/openrouter';

class OpenRouterService {
  private apiKey: string;
  private baseUrl: string;
  private model: string;
  private maxRetries: number;
  private retryDelay: number;
  private rateLimitDelay: number;
  private lastRequestTime: number;

  constructor(config: OpenRouterConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://openrouter.ai/api/v1';
    this.model = config.model || 'openai/gpt-3.5-turbo';
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
    data: unknown,
    options: RequestInit = {}
  ): Promise<Response> {
    await this.enforceRateLimit();

    const url = `${this.baseUrl}${endpoint}`;
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'RevolutionX AI Assistant',
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
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`HTTP ${response.status}: ${errorData.error?.message || response.statusText}`);
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
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': window.location.origin,
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  async chat(messages: ChatMessage[], stream: boolean = false): Promise<OpenRouterResponse> {
    try {
      const systemPrompt = this.buildSystemPrompt();
      const formattedMessages = [
        { role: 'system', content: systemPrompt },
        ...messages
      ];

      const response = await this.makeRequest('/chat/completions', {
        model: this.model,
        messages: formattedMessages,
        stream,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1,
      });

      const data = await response.json();

      return {
        id: data.id,
        object: data.object,
        created: data.created,
        model: data.model,
        choices: data.choices || [{
          index: 0,
          message: {
            role: 'assistant',
            content: 'Lo siento, no pude generar una respuesta.'
          },
          finish_reason: 'error'
        }],
        usage: data.usage || {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      };
    } catch (error) {
      console.error('Chat error:', error);
      throw new Error(`Error en la comunicación con OpenRouter: ${error}`);
    }
  }

  async *chatStream(messages: ChatMessage[]): AsyncGenerator<string, void, unknown> {
    try {
      const systemPrompt = this.buildSystemPrompt();
      const formattedMessages = [
        { role: 'system', content: systemPrompt },
        ...messages
      ];

      const response = await this.makeRequest('/chat/completions', {
        model: this.model,
        messages: formattedMessages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1,
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
          if (line.trim() && line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') return;

            try {
              const parsed: StreamChunk = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content;
              if (content) {
                yield content;
              }
            } catch {
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

  private buildSystemPrompt(): string {
    const isEnglish = document.documentElement.lang === 'en';

    return isEnglish ? `You are the official assistant of RevolutionX, an STEM Racing team from IES José Saramago in Madrid, Spain.

TEAM INFORMATION:
- Saúl Morán: Project Manager (General coordination, resource management)
- Víctor Jiménez: Design Engineer (CAD design, aerodynamic optimization)
- Martín Cendra: Team Manager (Team management and leadership, activity coordination, goal supervision)
- Martina Corredor: Head of Strategy, Engineering & External Relations (Technical strategy, engineering leadership, external relations)
- Ibrahim Aharrar: Manufacturing Engineer (Manufacturing, quality control)
- Yago Álvarez: Marketing Director (Brand strategy, sponsors)
- Pablo Bianchi: Digital Marketing (Social media, digital content)

MAIN ACHIEVEMENTS:
- Fastest Car in Entry Category - Community of Madrid 2025
- 1st Regional Position Madrid 2025
- Qualified for National Spain 2025
- 3rd Place in Madrid Regional Finals, Professional Category, 2025/26 Season

TECHNICAL SPECIFICATIONS:
- Length: 185 mm, Width: 69 mm, Height: 44 mm
- Weight: 72.8 grams, Material: PLA
- Technologies: CAD, CFD, aerodynamic optimization

SPONSORS:
- Ayuntamiento de Majadahonda, Pañalón, Black and White
- Lorena Solutions, Titanes Atletismo, Moñita
- El Postrecito de Isabel, F1 Bearings

CONTACT:
- Email: revolutionx.f1@gmail.com
- Instagram: @revolutionx_f1
- Location: IES José Saramago, Madrid

INSTRUCTIONS:
1. Always respond in English
2. Be professional but friendly
3. Provide accurate information based on the above data
4. Promote collaboration opportunities
5. If you don't know something specific, refer to direct contact
6. Keep responses concise but informative` : `Eres el asistente oficial de RevolutionX, un equipo de STEM Racing del IES José Saramago en Madrid, España.

INFORMACIÓN DEL EQUIPO:
- Saúl Morán: Jefe de Proyectos (Coordinación general, gestión de recursos)
- Víctor Jiménez: Ingeniero de Diseño (Diseño CAD, optimización aerodinámica)
- Martín Cendra: Team Manager (Gestión y liderazgo del equipo, coordinación de actividades, supervisión de objetivos)
- Martina Corredor: Head of Strategy, Engineering & External Relations (Estrategia técnica, liderazgo de ingeniería, relaciones externas)
- Ibrahim Aharrar: Ingeniero de Manufactura (Fabricación, control de calidad)
- Yago Álvarez: Director de Marketing (Estrategia de marca, patrocinadores)
- Pablo Bianchi: Marketing Digital (Redes sociales, contenido digital)

LOGROS PRINCIPALES:
- Coche Más Rápido en Categoría Entry - Comunidad de Madrid 2025
- 1º Puesto Regional Madrid 2025
- Clasificados para Nacional España 2025
- 3º Puesto en Finales Regionales Madrid, Categoría Professional, Temporada 25/26

ESPECIFICACIONES TÉCNICAS:
- Longitud: 185 mm, Ancho: 69 mm, Altura: 44 mm
- Peso: 72.8 gramos, Material: PLA
- Tecnologías: CAD, CFD, optimización aerodinámica

PATROCINADORES:
- Ayuntamiento de Majadahonda, Pañalón, Black and White
- Lorena Solutions, Titanes Atletismo, Moñita
- El Postrecito de Isabel, F1 Bearings

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

  async getAvailableModels(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': window.location.origin,
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.statusText}`);
      }

      const data = await response.json();
      return data.data?.map((model: { id: string }) => model.id) || [];
    } catch (error) {
      console.error('Error fetching models:', error);
      return [];
    }
  }

  async validateApiKey(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': window.location.origin,
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

export default OpenRouterService;
