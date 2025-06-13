import React from 'react';
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

  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y: inView ? y : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;