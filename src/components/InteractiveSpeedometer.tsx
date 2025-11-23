import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Timer, Target } from 'lucide-react';

const InteractiveSpeedometer = () => {
  const speedAnnouncementRef = useRef<HTMLDivElement>(null);
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const animationRef = useRef<number | null>(null);
  const mountedRef = useRef<boolean>(true);

  const maxSpeed = 100; // Maximum speed in km/h
  const targetSpeed = 45; // Target speed to reach
  const animationDuration = 2000; // Duration in milliseconds - faster for better responsiveness

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

      // Clean up any existing animation
      cleanup();

      setIsAnimating(true);
      setCurrentSpeed(0);


      const startTime = performance.now();

      const animate = (currentTime: number) => {
        if (!mountedRef.current) return;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Smooth easing function
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

    // Only start animation if component is mounted and not already animating
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
  const circumference = 2 * Math.PI * 90; // radius = 90
  const strokeDashoffset = circumference - (speedPercentage / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="speedometer"
        className="relative w-56 xs:w-64 sm:w-80 h-56 xs:h-64 sm:h-80 mx-auto touch-manipulation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {/* Speedometer Background */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {/* Background Circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(212, 175, 55, 0.1)"
            strokeWidth="8"
          />

          {/* Progress Circle */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#speedGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-center"
            animate={{ scale: isAnimating ? [1, 1.05, 1] : 1 }}
            transition={{ duration: 0.4, repeat: isAnimating ? Infinity : 0, repeatDelay: 0.1 }}
          >
            <div className="text-2xl xs:text-3xl sm:text-5xl font-display font-bold text-rx-gold mb-1 xs:mb-2 sm:mb-3 font-mono">
              {Math.round(currentSpeed)}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              km/h equiv.
            </div>
          </motion.div>

          {/* Speed Indicators */}
          <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-rx-gold" />
            </motion.div>
          </div>
        </div>

        {/* Interactive Button */}
        {/* Anuncio de velocidad para lectores de pantalla */}
        <div
          ref={speedAnnouncementRef}
          className="sr-only"
          role="status"
          aria-live="polite"
        />

        <motion.button
          onClick={(e) => {
            e.preventDefault();
            if (!isAnimating) {
              reset();
              startAnimation();
            }
          }}
          onKeyDown={handleKeyPress}
          disabled={isAnimating}
          className="absolute -bottom-10 xs:-bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 bg-rx-gold/20 hover:bg-rx-gold/30 focus:bg-rx-gold/40 focus:outline-none focus:ring-2 focus:ring-rx-gold focus:ring-offset-2 focus:ring-offset-rx-black disabled:opacity-50 disabled:cursor-not-allowed px-3 xs:px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm touch-manipulation"
          whileHover={{ scale: isAnimating ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={isAnimating ? 'Midiendo velocidad...' : 'Probar velocidad'}
          role="button"
          tabIndex={0}
        >
          {isAnimating ? (
            <div className="flex items-center space-x-2">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Midiendo...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Probar Velocidad</span>
            </div>
          )}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveSpeedometer;