import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = "", 
  speed = 0.5 
}) => {
  const { scrollY } = useScroll();
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: false
  });

  // Memoize mobile detection and effective speed
  const { isMobile, effectiveSpeed } = useMemo(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return {
      isMobile: mobile,
      effectiveSpeed: mobile ? 0 : speed * 0.2 // Further reduce for better performance
    };
  }, [speed]);
  
  const y = useTransform(scrollY, [0, 2000], [0, -500 * effectiveSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y: inView && !isMobile ? y : 0,
        position: 'relative',
        zIndex: 1,
        willChange: inView && !isMobile ? 'transform' : 'auto'
      }}
      className={`${className} relative gpu-accelerated`}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(ParallaxSection, (prevProps, nextProps) => {
  return (
    prevProps.speed === nextProps.speed &&
    prevProps.className === nextProps.className &&
    prevProps.children === nextProps.children
  );
});