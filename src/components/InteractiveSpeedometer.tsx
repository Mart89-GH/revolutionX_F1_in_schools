import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Timer, Target } from 'lucide-react';

const InteractiveSpeedometer = () => {
  const speedAnnouncementRef = useRef<HTMLDivElement>(null);
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const animationRef = useRef<number | null>(null);
  const mountedRef = useRef<boolean>(true);

  const maxSpeed = 100;
  const targetSpeed = 45;
  const animationDuration = 2000;

  const cleanup = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    cleanup();
    setCurrentSpeed(0);
    setIsAnimating(false);
  }, [cleanup]);

  const announceSpeed = useCallback((speed: number) => {
    if (speedAnnouncementRef.current) {
      speedAnnouncementRef.current.textContent =
        `Velocidad actual: ${Math.round(speed)} kilómetros por hora equivalentes`;
    }
  }, []);

  const startAnimation = useCallback(() => {
    try {
      if (isAnimating || !mountedRef.current) return;
      cleanup();
      setIsAnimating(true);
      setCurrentSpeed(0);

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        if (!mountedRef.current) return;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const newSpeed = targetSpeed * eased;

        setCurrentSpeed(newSpeed);
        announceSpeed(newSpeed);

        if (progress < 1 && mountedRef.current) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    } catch (err) {
      console.error('Animation error:', err);
      setIsAnimating(false);
      cleanup();
    }
  }, [isAnimating, targetSpeed, announceSpeed, cleanup, animationDuration, mountedRef]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      startAnimation();
    }
  }, [startAnimation]);

  useEffect(() => {
    mountedRef.current = true;

    if (!isAnimating) {
      const timer = setTimeout(() => {
        if (mountedRef.current && !isAnimating) {
          startAnimation();
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {
      mountedRef.current = false;
      cleanup();
    };
  }, [startAnimation, isAnimating, cleanup]);

  const speedPercentage = (currentSpeed / maxSpeed) * 100;
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (speedPercentage / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="speedometer"
        className="card-glass !rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 self-start mb-6">
          <div className="w-8 h-8 rounded-lg bg-rx-gold/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-rx-gold" />
          </div>
          <h3 className="font-display text-base sm:text-lg text-white font-medium tracking-tight">
            Velocímetro
          </h3>
        </div>

        {/* SVG Speedometer */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="4"
            />
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#speedGradientNew)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="speedGradientNew" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8A951" />
                <stop offset="100%" stopColor="#E8D48B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight font-mono">
              {Math.round(currentSpeed)}
            </div>
            <div className="text-[11px] text-white/20 font-mono uppercase tracking-widest mt-1">
              km/h equiv.
            </div>
          </div>
        </div>

        {/* Speed Announce */}
        <div
          ref={speedAnnouncementRef}
          className="sr-only"
          role="status"
          aria-live="polite"
        />

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!isAnimating) {
              reset();
              startAnimation();
            }
          }}
          onKeyDown={handleKeyPress}
          disabled={isAnimating}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-rx-gold hover:border-rx-gold/30 disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-all duration-300 focus-ring"
          aria-label={isAnimating ? 'Midiendo velocidad...' : 'Probar velocidad'}
          tabIndex={0}
        >
          {isAnimating ? (
            <>
              <Timer className="w-4 h-4 animate-spin" />
              <span>Midiendo...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              <span>Probar Velocidad</span>
            </>
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveSpeedometer;