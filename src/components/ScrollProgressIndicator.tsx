import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(Math.min(progress, 100));
  }, []);

  useEffect(() => {
    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 3 ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-rx-gold/80 to-rx-gold/40"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgressIndicator;