export interface OllamaConfig {
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

export interface OllamaResponse {
  message: {
    role: string;
    content: string;
  };
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
  eval_duration?: number;
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

export interface WebSocketMessage {
  type: 'chat' | 'status' | 'error';
  data: any;
  timestamp: number;
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
  };
}