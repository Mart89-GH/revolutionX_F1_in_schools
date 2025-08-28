import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Wifi, 
  WifiOff, 
  RefreshCw,
  Settings,
  BarChart3,
  Key,
  AlertTriangle
} from 'lucide-react';
import useOpenRouter from '../hooks/useOpenRouter';
import { ChatMessage } from '../types/openrouter';

interface OpenRouterAIAssistantProps {
  apiKey?: string;
  model?: string;
}

const OpenRouterAIAssistant: React.FC<OpenRouterAIAssistantProps> = ({ 
  apiKey = import.meta.env.VITE_OPENROUTER_API_KEY,
  model = 'openai/gpt-3.5-turbo'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [useStreaming, setUseStreaming] = useState(true);
  const [streamingResponse, setStreamingResponse] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    isConnected,
    isLoading,
    error,
    messages,
    model: currentModel,
    performance,
    sendMessage,
    sendMessageStream,
    clearMessages,
    resetConnection,
    checkConnection
  } = useOpenRouter({ 
    apiKey: apiKey || tempApiKey,
    model 
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingResponse]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading || !isConnected) return;

    const messageText = inputText;
    setInputText('');

    try {
      if (useStreaming) {
        setStreamingResponse('');
        let fullResponse = '';
        
        for await (const chunk of sendMessageStream(messageText)) {
          fullResponse += chunk;
          setStreamingResponse(fullResponse);
        }
        
        setStreamingResponse('');
      } else {
        await sendMessage(messageText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleApiKeySubmit = () => {
    if (tempApiKey.trim()) {
      setShowApiKeyInput(false);
      // The hook will automatically reconnect with the new API key
    }
  };

  const getConnectionStatus = () => {
    if (!apiKey && !tempApiKey) return { icon: Key, color: 'text-orange-400', text: 'API Key requerida' };
    if (isLoading) return { icon: Loader2, color: 'text-yellow-400', text: 'Conectando...' };
    if (isConnected) return { icon: Wifi, color: 'text-green-400', text: 'Conectado' };
    return { icon: WifiOff, color: 'text-red-400', text: 'Desconectado' };
  };

  const connectionStatus = getConnectionStatus();
  const ConnectionIcon = connectionStatus.icon;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-rx-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-rx-gold/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-7 h-7 text-rx-black" />
        {(!isConnected || error) && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-rx-dark to-rx-black rounded-2xl border border-rx-gold/30 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rx-gold to-yellow-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-rx-black/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-rx-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-rx-black text-sm">RevolutionX AI</h3>
                  <div className="flex items-center space-x-2">
                    <ConnectionIcon className={`w-3 h-3 ${connectionStatus.color} ${isLoading ? 'animate-spin' : ''}`} />
                    <p className="text-rx-black/70 text-xs">{connectionStatus.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="w-8 h-8 bg-rx-black/20 rounded-full flex items-center justify-center hover:bg-rx-black/30 transition-colors"
                >
                  <Settings className="w-4 h-4 text-rx-black" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-rx-black/20 rounded-full flex items-center justify-center hover:bg-rx-black/30 transition-colors"
                >
                  <X className="w-4 h-4 text-rx-black" />
                </button>
              </div>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-rx-black/50 border-b border-rx-gold/20 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Modelo:</span>
                    <span className="text-rx-gold text-xs font-mono">{currentModel}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Streaming:</span>
                    <button
                      onClick={() => setUseStreaming(!useStreaming)}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        useStreaming ? 'bg-rx-gold' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        useStreaming ? 'translate-x-5' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Performance:</span>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-rx-gold" />
                      <span className="text-xs text-gray-300">
                        {performance.averageResponseTime.toFixed(0)}ms avg
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Tokens:</span>
                    <span className="text-xs text-gray-300">
                      {performance.tokensUsed.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowApiKeyInput(true)}
                      className="flex-1 bg-orange-500/20 hover:bg-orange-500/30 px-3 py-2 rounded-lg text-orange-400 text-xs font-medium transition-colors flex items-center justify-center space-x-1"
                    >
                      <Key className="w-3 h-3" />
                      <span>API Key</span>
                    </button>
                    <button
                      onClick={resetConnection}
                      className="flex-1 bg-rx-gold/20 hover:bg-rx-gold/30 px-3 py-2 rounded-lg text-rx-gold text-xs font-medium transition-colors flex items-center justify-center space-x-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reconectar</span>
                    </button>
                    <button
                      onClick={clearMessages}
                      className="flex-1 bg-red-500/20 hover:bg-red-500/30 px-3 py-2 rounded-lg text-red-400 text-xs font-medium transition-colors"
                    >
                      Limpiar
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* API Key Input */}
            <AnimatePresence>
              {showApiKeyInput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-orange-500/10 border-b border-orange-500/20 p-4"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Key className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 text-sm font-medium">Configurar API Key</span>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="password"
                      value={tempApiKey}
                      onChange={(e) => setTempApiKey(e.target.value)}
                      placeholder="sk-or-v1-..."
                      className="w-full bg-rx-black/50 border border-orange-400/30 rounded-lg px-3 py-2 text-white text-sm focus:border-orange-400/50 focus:outline-none"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleApiKeySubmit}
                        className="flex-1 bg-orange-500/20 hover:bg-orange-500/30 px-3 py-2 rounded-lg text-orange-400 text-xs font-medium transition-colors"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={() => setShowApiKeyInput(false)}
                        className="flex-1 bg-gray-600/20 hover:bg-gray-600/30 px-3 py-2 rounded-lg text-gray-400 text-xs font-medium transition-colors"
                      >
                        Cancelar
                      </button>
                    </div>
                    <p className="text-orange-300 text-xs">
                      Obtén tu API key gratuita en{' '}
                      <a 
                        href="https://openrouter.ai/keys" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-orange-200"
                      >
                        openrouter.ai/keys
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Connection Error */}
            {error && (
              <div className="bg-red-500/20 border-b border-red-500/30 p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <p className="text-red-400 text-xs font-medium">Error de Conexión</p>
                </div>
                <p className="text-red-300 text-xs mb-2">{error}</p>
                <button
                  onClick={checkConnection}
                  className="text-red-300 hover:text-red-200 text-xs underline"
                >
                  Reintentar conexión
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {!apiKey && !tempApiKey && (
                <div className="text-center py-8">
                  <Key className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <p className="text-orange-400 text-sm mb-2 font-medium">
                    API Key Requerida
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    Necesitas una API key de OpenRouter para usar el asistente
                  </p>
                  <button
                    onClick={() => setShowApiKeyInput(true)}
                    className="bg-orange-500/20 hover:bg-orange-500/30 px-4 py-2 rounded-lg text-orange-400 text-sm font-medium transition-colors"
                  >
                    Configurar API Key
                  </button>
                </div>
              )}

              {(apiKey || tempApiKey) && !isConnected && !isLoading && (
                <div className="text-center py-8">
                  <WifiOff className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm mb-2">
                    No hay conexión con OpenRouter
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    Verifica tu API key y conexión a internet
                  </p>
                  <button
                    onClick={checkConnection}
                    className="bg-rx-gold/20 hover:bg-rx-gold/30 px-4 py-2 rounded-lg text-rx-gold text-sm font-medium transition-colors"
                  >
                    Verificar Conexión
                  </button>
                </div>
              )}

              {isConnected && messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-rx-gold mx-auto mb-4" />
                  <p className="text-white text-sm mb-2">
                    ¡Hola! Soy el asistente de RevolutionX
                  </p>
                  <p className="text-gray-400 text-xs">
                    Pregúntame sobre el equipo, logros, tecnología o patrocinadores
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' ? 'bg-rx-gold' : 'bg-rx-gold/20'
                    }`}>
                      {message.role === 'user' ? (
                        <User className="w-3 h-3 text-rx-black" />
                      ) : (
                        <Bot className="w-3 h-3 text-rx-gold" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.role === 'user'
                        ? 'bg-rx-gold text-rx-black' 
                        : 'bg-rx-gold/10 text-white border border-rx-gold/20'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Streaming Response */}
              {streamingResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-6 h-6 bg-rx-gold/20 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-rx-gold" />
                    </div>
                    <div className="bg-rx-gold/10 border border-rx-gold/20 rounded-2xl px-3 py-2">
                      <p className="text-sm text-white whitespace-pre-line">
                        {streamingResponse}
                        <span className="inline-block w-2 h-4 bg-rx-gold ml-1 animate-pulse" />
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {isLoading && !streamingResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-rx-gold/20 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-rx-gold" />
                    </div>
                    <div className="bg-rx-gold/10 border border-rx-gold/20 rounded-2xl px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 text-rx-gold animate-spin" />
                        <span className="text-sm text-gray-300">Procesando con Llama 3...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-rx-gold/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isConnected ? "Pregunta sobre RevolutionX..." : "Configurar API key primero..."}
                  className="flex-1 bg-rx-black/50 border border-rx-gold/20 rounded-xl px-3 py-2 text-white text-sm focus:border-rx-gold/50 focus:outline-none disabled:opacity-50"
                  disabled={isLoading || !isConnected}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading || !isConnected}
                  className="w-10 h-10 bg-rx-gold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 text-rx-black" />
                </button>
              </div>
              
              {isConnected && (
                <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                  <span>
                    {performance.totalQueries} consultas • {performance.successRate.toFixed(1)}% éxito
                  </span>
                  <span>
                    {performance.tokensUsed.toLocaleString()} tokens
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OpenRouterAIAssistant;