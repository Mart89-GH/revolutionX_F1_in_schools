import { useState, useEffect, useCallback, useRef } from 'react';
import OpenRouterService from '../services/openRouterService';
import { ChatMessage, AIAssistantState, OpenRouterConfig } from '../types/openrouter';

const useOpenRouter = (config: OpenRouterConfig) => {
  const [state, setState] = useState<AIAssistantState>({
    isConnected: false,
    isLoading: false,
    error: null,
    messages: [],
    model: config.model || 'openai/gpt-3.5-turbo',
    performance: {
      averageResponseTime: 0,
      totalQueries: 0,
      successRate: 0,
      tokensUsed: 0
    }
  });

  const openRouterService = useRef<OpenRouterService | null>(null);
  const performanceData = useRef<number[]>([]);
  const successCount = useRef(0);

  useEffect(() => {
    if (!config.apiKey) {
      setState(prev => ({ 
        ...prev, 
        error: 'API key de OpenRouter requerida. Por favor, configúrela en las variables de entorno.' 
      }));
      return;
    }

    openRouterService.current = new OpenRouterService(config);
    checkConnection();
  }, [config.apiKey]);

  const checkConnection = useCallback(async () => {
    if (!openRouterService.current) return;

    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const isConnected = await openRouterService.current.checkConnection();
      
      setState(prev => ({ 
        ...prev, 
        isConnected, 
        isLoading: false,
        error: isConnected ? null : 'No se pudo conectar con OpenRouter. Verifique su API key.'
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
    if (!openRouterService.current || !state.isConnected) {
      throw new Error('OpenRouter no está conectado');
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

      const response = await openRouterService.current.chat(updatedMessages);
      const responseTime = Date.now() - startTime;
      
      // Update performance metrics
      performanceData.current.push(responseTime);
      successCount.current++;
      
      const avgResponseTime = performanceData.current.reduce((a, b) => a + b, 0) / performanceData.current.length;
      const successRate = (successCount.current / (state.performance.totalQueries + 1)) * 100;

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.choices[0]?.message?.content || 'No se pudo generar una respuesta.'
      };

      setState(prev => ({
        ...prev,
        isLoading: false,
        messages: [...updatedMessages, assistantMessage],
        performance: {
          averageResponseTime: avgResponseTime,
          totalQueries: prev.performance.totalQueries + 1,
          successRate: successRate,
          tokensUsed: prev.performance.tokensUsed + (response.usage?.total_tokens || 0)
        }
      }));

      return response.choices[0]?.message?.content || 'No se pudo generar una respuesta.';
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
    if (!openRouterService.current || !state.isConnected) {
      throw new Error('OpenRouter no está conectado');
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
      let totalTokens = 0;
      
      for await (const chunk of openRouterService.current.chatStream(updatedMessages)) {
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
          totalQueries: prev.performance.totalQueries + 1,
          tokensUsed: prev.performance.tokensUsed + totalTokens
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

  const getAvailableModels = useCallback(async (): Promise<string[]> => {
    if (!openRouterService.current) return [];
    return openRouterService.current.getAvailableModels();
  }, []);

  return {
    ...state,
    sendMessage,
    sendMessageStream,
    clearMessages,
    resetConnection,
    checkConnection,
    getAvailableModels
  };
};

export default useOpenRouter;