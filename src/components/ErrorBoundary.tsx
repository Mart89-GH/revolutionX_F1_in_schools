import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  componentStack?: string;
}

interface ErrorInfo {
  lastError: Error | null;
  retryCount: number;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  const [errorInfo, setErrorInfo] = React.useState<ErrorInfo>({ lastError: null, retryCount: 0 });

  React.useEffect(() => {
    if (error !== errorInfo.lastError) {
      setErrorInfo(prev => ({
        lastError: error,
        retryCount: error === prev.lastError ? prev.retryCount + 1 : 0
      }));
    }
  }, [error, errorInfo.lastError]);
  return (
    <div className="min-h-screen bg-rx-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-rx-dark to-rx-black p-8 rounded-2xl border border-red-500/30 max-w-md w-full text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: 3 }}
          className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </motion.div>

        <h2 className="text-2xl font-display text-white mb-4">
          Algo salió mal
        </h2>

        <p className="text-gray-300 mb-6 text-sm">
          Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
        </p>

        <div className="space-y-3">
          {errorInfo.retryCount < 3 ? (
            <button
              onClick={resetErrorBoundary}
              className="w-full flex items-center justify-center space-x-2 bg-rx-gold/20 hover:bg-rx-gold/30 px-6 py-3 rounded-lg border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reintentar ({3 - errorInfo.retryCount} intentos restantes)</span>
            </button>
          ) : (
            <p className="text-red-400 text-sm mb-4">
              No se pudo recuperar después de varios intentos.
              Por favor, regrese al inicio o contacte con soporte.
            </p>
          )}

          <button
            onClick={() => window.location.href = '/'}
            className="w-full flex items-center justify-center space-x-2 bg-gray-600/20 hover:bg-gray-600/30 px-6 py-3 rounded-lg border border-gray-500/50 text-gray-300 font-medium transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Ir al inicio</span>
          </button>
        </div>

        {(process.env.NODE_ENV === 'development' || errorInfo.retryCount >= 3) && (
          <details className="mt-6 text-left">
            <summary className="text-red-400 cursor-pointer text-sm">
              Detalles del error (desarrollo)
            </summary>
            <pre className="mt-2 text-xs text-gray-400 bg-rx-black/50 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </motion.div>
    </div>
  );
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackRender?: (props: ErrorFallbackProps) => React.ReactNode;
  onReset?: () => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, componentStack) => {
        // Log error to monitoring service in production
        console.error('Error caught by boundary:', error, componentStack);

        // Send error to monitoring service
        if (process.env.NODE_ENV === 'production') {
          // TODO: Implement error reporting service
          // reportError(error, componentStack);
        }
      }}
      onReset={() => {
        // Clear any cached state that might be causing the error
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;