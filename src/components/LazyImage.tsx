import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  loading = 'lazy',
  sizes,
  srcSet,
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'eager' || isInView) {
      return;
    }

    // Use a single observer instance if possible, but for now local is fine
    // Ensure we clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
          observerRef.current = null;
        }
      },
      { threshold: 0.01, rootMargin: '50px' } // Reduced margin for more precise loading
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading, isInView]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Faster exit
            className="absolute inset-0 bg-gradient-to-br from-rx-gold/10 to-rx-gold/5"
          >
            {placeholder && (
              <img
                src={placeholder}
                alt=""
                className="w-full h-full object-cover opacity-50 blur-sm"
                aria-hidden="true"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {(isInView || loading === 'eager') && !hasError && (
        <motion.img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding="async"
          width={width}
          height={height}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}

      {hasError && (
        <div className="absolute inset-0 bg-rx-dark flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="w-8 h-8 bg-gray-600 rounded mx-auto mb-2"></div>
            <p className="text-xs">Error</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(LazyImage);