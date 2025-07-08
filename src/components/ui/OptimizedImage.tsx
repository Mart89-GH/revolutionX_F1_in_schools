import React, { useState } from 'react';
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
  const generateOptimizedUrl = (originalUrl: string, format?: string, size?: string) => {
    if (!originalUrl.includes('unsplash.com')) return originalUrl;
    
    const url = new URL(originalUrl);
    if (format) url.searchParams.set('fm', format);
    if (quality) url.searchParams.set('q', quality.toString());
    if (size) url.searchParams.set('w', size);
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    
    return url.toString();
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (originalUrl: string) => {
    if (!originalUrl.includes('unsplash.com')) return undefined;
    
    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => `${generateOptimizedUrl(originalUrl, 'webp', size.toString())} ${size}w`)
      .join(', ');
  };

  const optimizedSrc = generateOptimizedUrl(src, 'webp');
  const srcSet = generateSrcSet(src);
  const sizes = width 
    ? `(max-width: 768px) ${Math.min(width, 400)}px, ${width}px`
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder === 'blur' && !isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
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
        className="w-full h-full object-cover"
        loading={priority ? 'eager' : loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;