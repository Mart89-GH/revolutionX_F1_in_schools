export interface OpenRouterConfig {
  apiKey: string;
  baseUrl?: string;
  model?: string;
  maxRetries?: number;
  retryDelay?: number;
  rateLimitDelay?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouterResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface StreamChunk {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    delta: {
      role?: string;
      content?: string;
    };
    finish_reason?: string;
  }[];
}

export interface AIAssistantState {
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  messages: ChatMessage[];
  model: string;
  performance: {
    averageResponseTime: number;
    totalQueries: number;
    successRate: number;
    tokensUsed: number;
  };
}

export interface TrainingData {
  input: string;
  output: string;
  metadata?: {
    category: string;
    confidence: number;
    source: string;
  };
}