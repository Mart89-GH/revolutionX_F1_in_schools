import { useState, useEffect, useCallback, useRef } from 'react';
import OllamaService from '../services/ollamaService';
import { ChatMessage, AIAssistantState, OllamaConfig } from '../types/ollama';

const useOllama = (config: OllamaConfig = {}) => {
  const [state, setState] = useState<AIAssistantState>({
    isConnected: false,
    isLoading: false,
    error: null,
    messages: [],
    model: config.model || 'llama3.1:8b',
    performance: {
      averageResponseTime: 0,
      totalQueries: 0,
      successRate: 0
    }
  });

  const ollamaService = useRef<OllamaService | null>(null);
  const performanceData = useRef<number[]>([]);
  const successCount = useRef(0);

  useEffect(() => {
    ollamaService.current = new OllamaService(config);
    checkConnection();
  }, []);

  const checkConnection = useCallback(async () => {
    if (!ollamaService.current) return;

    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const isConnected = await ollamaService.current.checkConnection();
      
      if (isConnected) {
        // Try to pull the model if not available
        await ollamaService.current.pullModel();
      }
      
      setState(prev => ({ 
        ...prev, 
        isConnected, 
        isLoading: false,
        error: isConnected ? null : 'No se pudo conectar con Ollama. Asegúrate de que esté ejecutándose.'
      }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isConnected: false, 
        isLoading: false,
        error: `Error de conexión: ${error}`
      }));
    }
  }, []);

  const sendMessage = useCallback(async (message: string): Promise<string> => {
    if (!ollamaService.current || !state.isConnected) {
      throw new Error('Ollama no está conectado');
    }

    const startTime = Date.now();
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const userMessage: ChatMessage = { role: 'user', content: message };
      const updatedMessages = [...state.messages, userMessage];
      
      setState(prev => ({ 
        ...prev, 
        messages: updatedMessages 
      }));

      const response = await ollamaService.current.chat(updatedMessages);
      const responseTime = Date.now() - startTime;
      
      // Update performance metrics
      performanceData.current.push(responseTime);
      successCount.current++;
      
      const avgResponseTime = performanceData.current.reduce((a, b) => a + b, 0) / performanceData.current.length;
      const successRate = (successCount.current / state.performance.totalQueries) * 100;

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.message.content
      };

      setState(prev => ({
        ...prev,
        isLoading: false,
        messages: [...updatedMessages, assistantMessage],
        performance: {
          averageResponseTime: avgResponseTime,
          totalQueries: prev.performance.totalQueries + 1,
          successRate: successRate
        }
      }));

      return response.message.content;
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: `Error al enviar mensaje: ${error}`,
        performance: {
          ...prev.performance,
          totalQueries: prev.performance.totalQueries + 1,
          successRate: (successCount.current / (prev.performance.totalQueries + 1)) * 100
        }
      }));
      throw error;
    }
  }, [state.isConnected, state.messages, state.performance.totalQueries]);

  const sendMessageStream = useCallback(async function* (message: string): AsyncGenerator<string, void, unknown> {
    if (!ollamaService.current || !state.isConnected) {
      throw new Error('Ollama no está conectado');
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const userMessage: ChatMessage = { role: 'user', content: message };
      const updatedMessages = [...state.messages, userMessage];
      
      setState(prev => ({ 
        ...prev, 
        messages: updatedMessages 
      }));

      let fullResponse = '';
      
      for await (const chunk of ollamaService.current.chatStream(updatedMessages)) {
        fullResponse += chunk;
        yield chunk;
      }

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: fullResponse
      };

      setState(prev => ({
        ...prev,
        isLoading: false,
        messages: [...updatedMessages, assistantMessage],
        performance: {
          ...prev.performance,
          totalQueries: prev.performance.totalQueries + 1
        }
      }));

      successCount.current++;
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: `Error en streaming: ${error}`,
        performance: {
          ...prev.performance,
          totalQueries: prev.performance.totalQueries + 1
        }
      }));
      throw error;
    }
  }, [state.isConnected, state.messages]);

  const clearMessages = useCallback(() => {
    setState(prev => ({ ...prev, messages: [] }));
  }, []);

  const resetConnection = useCallback(() => {
    setState(prev => ({
      ...prev,
      isConnected: false,
      error: null,
      messages: []
    }));
    checkConnection();
  }, [checkConnection]);

  return {
    ...state,
    sendMessage,
    sendMessageStream,
    clearMessages,
    resetConnection,
    checkConnection
  };
};

export default useOllama;