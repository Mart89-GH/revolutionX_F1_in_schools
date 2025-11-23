import React, { useMemo, useState, useEffect } from 'react';
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
    threshold: 0, // Trigger as soon as it enters
    triggerOnce: false,
    rootMargin: "50px 0px" // Pre-load slightly
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoize effective speed
  const effectiveSpeed = useMemo(() => {
    return isMobile ? 0 : speed * 0.2; // Further reduce for better performance
  }, [speed, isMobile]);

  const y = useTransform(scrollY, [0, 2000], [0, -500 * effectiveSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: !isMobile ? y : 0,
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

export default React.memo(ParallaxSection);