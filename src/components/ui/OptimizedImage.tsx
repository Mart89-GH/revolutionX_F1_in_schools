import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../LazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 80,
  loading = 'lazy',
  priority = false,
  placeholder = 'empty',
  blurDataURL
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate optimized URLs for different formats and sizes
  const generateOptimizedUrl = useMemo(() => (originalUrl: string, format?: string, size?: string) => {
    // Handle Unsplash images
    if (originalUrl.includes('unsplash.com')) {
      const url = new URL(originalUrl);
      if (format) url.searchParams.set('fm', format);
      if (quality) url.searchParams.set('q', Math.min(quality, 75).toString());
      if (size) url.searchParams.set('w', size);
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('dpr', '2');
      return url.toString();
    }

    // Handle local images or other providers if needed
    // For now, return original if not Unsplash, but this structure allows easy extension
    return originalUrl;
  }, [quality]);

  // Generate srcSet for responsive images
  const srcSet = useMemo(() => {
    if (!src.includes('unsplash.com')) return undefined;

    const sizes = [320, 640, 768, 1024, 1280, 1536];
    return sizes
      .map(size => `${generateOptimizedUrl(src, 'webp', size.toString())} ${size}w`)
      .join(', ');
  }, [src, generateOptimizedUrl]);

  const optimizedSrc = useMemo(() => generateOptimizedUrl(src, 'webp'), [src, generateOptimizedUrl]);

  const sizes = useMemo(() => {
    if (width) {
      return `(max-width: 768px) ${Math.min(width, 400)}px, ${width}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }, [width]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder === 'blur' && !isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-rx-gold/10 to-rx-gold/5"
        >
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover blur-sm scale-110"
              aria-hidden="true"
            />
          )}
        </motion.div>
      )}

      <LazyImage
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        loading={priority ? 'eager' : loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default React.memo(OptimizedImage);