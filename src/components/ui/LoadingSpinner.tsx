import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-[200px]">
      <motion.div
        className="w-8 h-8 border-2 border-rx-gold/20 border-t-rx-gold rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;