import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}

interface InstagramPostProps {
  post: InstagramPost;
  index: number;
}

const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => (
  <div className="text-center p-4 card-glass !rounded-xl">
    <p className="text-white/40 mb-2 text-sm">Error al cargar el feed de Instagram</p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm transition-colors hover:border-rx-gold/30"
    >
      Reintentar
    </button>
  </div>
);

const InstagramPost: React.FC<InstagramPostProps> = React.memo(({ post, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="aspect-square bg-white/[0.02] rounded-xl flex items-center justify-center">
        <p className="text-white/20 text-xs text-center px-2">Imagen no disponible</p>
      </div>
    );
  }

  return (
    <motion.div
      key={post.id}
      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 bg-white/[0.02] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-6 h-6 border-2 border-white/10 border-t-rx-gold/40 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <img
        src={post.image}
        alt={post.caption}
        className={`w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </motion.div>
  );
});

const InstagramFeed: React.FC = () => {
  // Publicaciones reales del equipo RevolutionX
  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      image: "/instagram/coche-f1.png",
      caption: "¡Nuestro coche F1 listo para la competición! 🏎️ #F1inSchools #RevolutionX",
      likes: 145,
      comments: 28
    },
    {
      id: 2,
      image: "/instagram/equipo-trabajo.png",
      caption: "El equipo RevolutionX trabajando en los últimos ajustes antes de la competición regional 💪 #TeamWork",
      likes: 132,
      comments: 19
    },
    {
      id: 3,
      image: "/instagram/presentacion-sponsors.png",
      caption: "Presentando nuestro proyecto a los patrocinadores. ¡Gracias por confiar en nosotros! 🤝 #Sponsors",
      likes: 178,
      comments: 34
    }
  ];

  return (
    <motion.div
      className="card-glass p-5 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg text-white font-medium tracking-tight">
              @revolutionx_f1
            </h3>
            <p className="text-white/20 text-xs">Instagram</p>
          </div>
        </div>

        <a
          href="https://instagram.com/revolutionx_f1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white hover:border-white/10 transition-all duration-300 text-xs"
        >
          <span>Seguir</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        {instagramPosts.map((post, index) => (
          <InstagramPost key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-4 border-t border-white/[0.04]">
        <div className="flex items-center justify-center gap-2 text-white/20">
          <Instagram className="w-3.5 h-3.5" />
          <span className="text-xs font-mono">@revolutionx_f1</span>
        </div>
      </div>
    </motion.div>
  );
};

const WrappedInstagramFeed: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <InstagramFeed />
  </ErrorBoundary>
);

export default React.memo(WrappedInstagramFeed);