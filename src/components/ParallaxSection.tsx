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
    threshold: 0.1,
    triggerOnce: false
  });

  // Memoize mobile detection and effective speed
  const { isMobile, effectiveSpeed } = useMemo(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return {
      isMobile: mobile,
      effectiveSpeed: mobile ? speed * 0.2 : speed // Reduce parallax on mobile for performance
    };
  }, [speed]);
  
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * effectiveSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{ y: inView && !isMobile ? y : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;