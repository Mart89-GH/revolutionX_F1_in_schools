import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Timer, Target } from 'lucide-react';

const InteractiveSpeedometer = () => {
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const maxSpeed = 100; // km/h equivalent for F1 in Schools
  const targetSpeed = 45; // Our achieved speed

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSpeed(0);
    
    const duration = 3000; // 3 seconds
    const steps = 60;
    const increment = targetSpeed / steps;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentSpeed(Math.min(increment * step, targetSpeed));
      
      if (step >= steps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, duration / steps);
  };

  useEffect(() => {
    // Auto-start animation when component mounts
    const timer = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timer);
  }, []);

  const speedPercentage = (currentSpeed / maxSpeed) * 100;
  const circumference = 2 * Math.PI * 90; // radius = 90
  const strokeDashoffset = circumference - (speedPercentage / 100) * circumference;

  return (
    <motion.div
      className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
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
          animate={{ scale: isAnimating ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.5, repeat: isAnimating ? Infinity : 0 }}
        >
          <div className="text-3xl sm:text-5xl font-display font-bold text-rx-gold mb-2 sm:mb-3">
            {Math.round(currentSpeed)}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
            km/h equiv.
          </div>
        </motion.div>
        
        {/* Speed Indicators */}
        <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-rx-gold" />
          </motion.div>
        </div>
      </div>

      {/* Interactive Button */}
      <motion.button
        onClick={startAnimation}
        disabled={isAnimating}
        className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 bg-rx-gold/20 hover:bg-rx-gold/30 disabled:opacity-50 px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-rx-gold/50 text-rx-gold font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
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
  );
};

export default InteractiveSpeedometer;