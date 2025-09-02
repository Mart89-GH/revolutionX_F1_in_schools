import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Trophy, Timer } from 'lucide-react';

const F1GameElement = () => {
  // Ref para anuncios de estado del juego
  const gameStatusRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const targetTime = 1.587; // Our actual best time
  const tolerance = 0.1;

  // Función para anunciar el estado del juego
  const announceGameStatus = useCallback((message: string) => {
    if (gameStatusRef.current) {
      gameStatusRef.current.textContent = message;
    }
  }, []);

  // Efecto para anunciar el estado inicial
  useEffect(() => {
    announceGameStatus('Juego listo. Presiona la barra espaciadora o Enter para comenzar.');
  }, [announceGameStatus]);

  // Fixed timer with proper 0.01 second increments (back to normal speed)
  useEffect(() => {
    if (isPlaying && gameState === 'playing') {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.01; // Back to 0.01 for normal speed
          if (newTime >= 5) { // Max time limit
            setIsPlaying(false);
            setGameState('finished');
            announceGameStatus(`Juego terminado. Tu tiempo fue ${currentTime.toFixed(3)} segundos.`);
            return newTime;
          }
          return newTime;
        });
      }, 10); // 10ms interval for smooth but normal speed
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, gameState, currentTime, announceGameStatus]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  }, []);

  const startGame = useCallback(() => {
    setCurrentTime(0);
    setIsPlaying(true);
    setGameState('playing');
    announceGameStatus('Juego iniciado. Presiona la barra espaciadora o Enter para detener el tiempo.');
  }, [announceGameStatus]);

  const stopGame = useCallback(() => {
    setIsPlaying(false);
    setGameState('finished');
    
    const timeDiff = Math.abs(currentTime - targetTime);
    if (timeDiff <= tolerance) {
      if (!bestTime || currentTime < bestTime) {
        setBestTime(currentTime);
      }
    }
  }, [currentTime, targetTime, tolerance, bestTime]);

  const resetGame = useCallback(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    setGameState('ready');
    announceGameStatus('Juego reiniciado. Presiona la barra espaciadora o Enter para comenzar.');
  }, [announceGameStatus]);

  const getPerformanceMessage = useCallback(() => {
    const timeDiff = Math.abs(currentTime - targetTime);
    if (timeDiff <= 0.05) return "¡Perfecto! Tiempo de campeón 🏆";
    if (timeDiff <= 0.1) return "¡Excelente! Muy cerca del récord ⚡";
    if (timeDiff <= 0.2) return "¡Bien! Sigue practicando 🎯";
    return "¡Inténtalo de nuevo! 🏁";
  }, [currentTime, targetTime]);

  return (
    <motion.div
      className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-rx-gold/20 hover:border-rx-gold/40 transition-all duration-500 shadow-2xl hover:shadow-rx-gold/10 w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Anuncios para lectores de pantalla */}
      <div
        ref={gameStatusRef}
        className="sr-only"
        role="status"
        aria-live="polite"
      />

      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-rx-gold mr-3 sm:mr-4" />
          </motion.div>
          <h3 className="font-display text-lg sm:text-xl md:text-2xl text-rx-gold font-semibold">
            Desafío de Tiempo
          </h3>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm">
          ¿Puedes igualar nuestro tiempo récord de {targetTime}s?
        </p>
      </div>

      {/* Timer Display */}
      <div className="relative mb-8 sm:mb-10">
        <div className="text-center">
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-rx-gold mb-2 sm:mb-3 font-mono"
            animate={{ 
              scale: isPlaying ? [1, 1.01, 1] : 1,
              color: gameState === 'finished' ? 
                (Math.abs(currentTime - targetTime) <= tolerance ? '#00FF00' : '#FF6B6B') : 
                '#D4AF37'
            }}
            transition={{ duration: 0.3, repeat: isPlaying ? Infinity : 0, repeatDelay: 0.1 }}
          >
            {currentTime.toFixed(3)}s
          </motion.div>
          <div className="text-gray-400 text-xs sm:text-sm">
            Objetivo: {targetTime}s
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-rx-gold/10 rounded-full h-2 sm:h-3 mt-4 sm:mt-6 shadow-inner">
          <motion.div
            className="bg-gradient-to-r from-rx-gold to-yellow-500 h-2 sm:h-3 rounded-full shadow-lg"
            style={{ width: `${Math.min((currentTime / 5) * 100, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Game Controls */}
      <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
        <AnimatePresence mode="wait">
          {gameState === 'ready' && (
            <motion.button
              key="start"
              onClick={startGame}
              onKeyDown={(e) => handleKeyPress(e, startGame)}
              aria-label="Iniciar juego"
              role="button"
              tabIndex={0}
              className="flex items-center space-x-2 bg-rx-gold/20 hover:bg-rx-gold/30 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Iniciar</span>
            </motion.button>
          )}
          
          {gameState === 'playing' && (
            <motion.button
              key="stop"
              onClick={stopGame}
              onKeyDown={(e) => handleKeyPress(e, stopGame)}
              aria-label="Detener tiempo"
              role="button"
              tabIndex={0}
              className="flex items-center space-x-2 bg-red-600/20 hover:bg-red-600/30 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-red-500/50 text-red-400 font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Parar</span>
            </motion.button>
          )}
          
          {gameState === 'finished' && (
            <motion.button
              key="reset"
              onClick={resetGame}
              onKeyDown={(e) => handleKeyPress(e, resetGame)}
              aria-label="Reiniciar juego"
              role="button"
              tabIndex={0}
              className="flex items-center space-x-2 bg-rx-gold/20 hover:bg-rx-gold/30 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rx-gold/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Reintentar</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Results */}
      <AnimatePresence>
        {gameState === 'finished' && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-rx-gold/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-rx-gold/20 mb-3 sm:mb-4 shadow-lg">
              <p className="text-rx-gold font-semibold mb-2 text-sm sm:text-base md:text-lg">
                {getPerformanceMessage()}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Diferencia: {Math.abs(currentTime - targetTime).toFixed(3)}s
              </p>
            </div>
            
            {bestTime && (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <Timer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Mejor tiempo: {bestTime.toFixed(3)}s</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default F1GameElement;