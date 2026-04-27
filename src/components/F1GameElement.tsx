import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, RotateCcw, Trophy } from 'lucide-react';

type GameState = 'idle' | 'waiting' | 'ready' | 'result' | 'too-early';

const F1GameElement = () => {
  const gameStatusRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [readyTimestamp, setReadyTimestamp] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const announceGameStatus = useCallback((message: string) => {
    if (gameStatusRef.current) {
      gameStatusRef.current.textContent = message;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const startGame = useCallback(() => {
    setGameState('waiting');
    setReactionTime(null);
    announceGameStatus('Espera a que la pantalla cambie de color... ¡No hagas clic antes!');

    // Random delay between 1.5 and 5 seconds
    const delay = 1500 + Math.random() * 3500;
    timeoutRef.current = setTimeout(() => {
      setReadyTimestamp(performance.now());
      setGameState('ready');
      announceGameStatus('¡Ahora! ¡Haz clic lo más rápido posible!');
    }, delay);
  }, [announceGameStatus]);

  const handleClick = useCallback(() => {
    if (gameState === 'idle') {
      startGame();
      return;
    }

    if (gameState === 'waiting') {
      // Clicked too early
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setGameState('too-early');
      announceGameStatus('¡Demasiado pronto! Hiciste clic antes de tiempo.');
      return;
    }

    if (gameState === 'ready') {
      const time = Math.round(performance.now() - readyTimestamp);
      setReactionTime(time);
      setGameState('result');
      
      if (!bestTime || time < bestTime) {
        setBestTime(time);
      }
      announceGameStatus(`Tu tiempo de reacción fue ${time} milisegundos.`);
      return;
    }

    if (gameState === 'result' || gameState === 'too-early') {
      startGame();
    }
  }, [gameState, readyTimestamp, bestTime, startGame, announceGameStatus]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  const resetGame = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setGameState('idle');
    setReactionTime(null);
    announceGameStatus('Juego reiniciado.');
  }, [announceGameStatus]);

  const getPerformanceMessage = useCallback(() => {
    if (!reactionTime) return '';
    if (reactionTime <= 200) return '¡Reflejos de piloto F1! 🏆';
    if (reactionTime <= 300) return '¡Excelente reacción! ⚡';
    if (reactionTime <= 400) return '¡Buen reflejo! 🎯';
    if (reactionTime <= 500) return '¡Nada mal! Sigue intentando 💪';
    return '¡Puedes hacerlo mejor! 🏁';
  }, [reactionTime]);

  const getBackgroundColor = () => {
    switch (gameState) {
      case 'waiting': return 'from-red-600/10 to-red-900/5 border-red-500/20';
      case 'ready': return 'from-emerald-600/10 to-emerald-900/5 border-emerald-500/20';
      case 'too-early': return 'from-orange-600/10 to-orange-900/5 border-orange-500/20';
      default: return 'from-white/[0.02] to-white/[0.01] border-white/[0.06]';
    }
  };

  return (
    <motion.div
      className={`card-glass !rounded-2xl p-6 sm:p-8 w-full cursor-pointer select-none transition-all duration-500 bg-gradient-to-br ${getBackgroundColor()} !border`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label="Juego de tiempo de reacción"
    >
      {/* Screen reader announcements */}
      <div
        ref={gameStatusRef}
        className="sr-only"
        role="status"
        aria-live="polite"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rx-gold/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-rx-gold" />
          </div>
          <h3 className="font-display text-base sm:text-lg text-white font-medium tracking-tight">
            Test de Reacción
          </h3>
        </div>
        {bestTime && (
          <div className="flex items-center gap-1.5 text-rx-gold/50">
            <Trophy className="w-3 h-3" />
            <span className="font-mono text-[11px]">{bestTime}ms</span>
          </div>
        )}
      </div>

      {/* Game Area */}
      <div className="min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center text-center">
          {gameState === 'idle' && (
            <div className="space-y-4">
              <p className="text-white/30 text-sm">
                ¿Qué tan rápido reaccionas?
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rx-gold/10 border border-rx-gold/20 text-rx-gold text-sm font-medium">
                <Zap className="w-3.5 h-3.5" />
                Clic para empezar
              </div>
            </div>
          )}

          {gameState === 'waiting' && (
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto">
                <div className="w-6 h-6 rounded-full bg-red-500/60 animate-pulse" />
              </div>
              <p className="text-red-400/70 text-sm font-medium">Espera...</p>
              <p className="text-white/20 text-xs">No hagas clic todavía</p>
            </div>
          )}

          {gameState === 'ready' && (
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <div className="w-6 h-6 rounded-full bg-emerald-500" />
              </div>
              <p className="text-emerald-400 text-lg font-display font-bold">¡AHORA!</p>
              <p className="text-white/20 text-xs">¡Haz clic lo más rápido posible!</p>
            </div>
          )}

          {gameState === 'too-early' && (
            <div className="space-y-4">
              <p className="text-orange-400 font-display text-lg font-bold">¡Demasiado pronto!</p>
              <p className="text-white/30 text-sm">Hiciste clic antes de que apareciera la señal</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm">
                <RotateCcw className="w-3.5 h-3.5" />
                Clic para reintentar
              </div>
            </div>
          )}

          {gameState === 'result' && reactionTime !== null && (
            <div className="space-y-4">
              <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {reactionTime}<span className="text-white/30 text-lg ml-1">ms</span>
              </div>
              <p className={`text-sm font-medium ${
                reactionTime <= 250 ? 'text-emerald-400' : 
                reactionTime <= 400 ? 'text-rx-gold' : 'text-orange-400'
              }`}>
                {getPerformanceMessage()}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm">
                <RotateCcw className="w-3.5 h-3.5" />
                Clic para reintentar
              </div>
            </div>
          )}
      </div>

      {/* F1 context note */}
      <div className="mt-4 pt-4 border-t border-white/[0.04]">
        <p className="text-white/15 text-[11px] font-mono text-center">
          Referencia: Un piloto F1 reacciona en ~200ms al semáforo de salida
        </p>
      </div>
    </motion.div>
  );
};

export default F1GameElement;