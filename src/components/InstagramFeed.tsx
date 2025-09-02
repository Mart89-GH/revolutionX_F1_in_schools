import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
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

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
    <p className="text-red-400 mb-2">Error al cargar el feed de Instagram</p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors"
    >
      Reintentar
    </button>
  </div>
);

const InstagramPost: React.FC<InstagramPostProps> = React.memo(({ post, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  if (imageError) {
    return (
    <div className="aspect-square bg-purple-600/10 rounded-xl flex items-center justify-center">
        <p className="text-purple-400 text-xs text-center px-2">Imagen no disponible</p>
      </div>
    );
  }

  return (
    <motion.div
      key={post.id}
      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 bg-purple-600/10 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <img
        src={post.image}
        alt={post.caption}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      

    </motion.div>
  );
});

const InstagramFeed: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-rx-gold/20 hover:border-rx-gold/40 transition-all duration-500 shadow-2xl hover:shadow-rx-gold/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 180, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-rx-gold font-semibold">
              @revolutionx_f1
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">Síguenos en Instagram</p>
          </div>
        </div>
        
        <motion.a
          href="https://instagram.com/revolutionx_f1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-500/30 text-white hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-medium">Seguir a RevolutionX en Instagram</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.a>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {instagramPosts.map((post, index) => (
          <InstagramPost key={post.id} post={post} index={index} />

        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-gradient-to-r from-rx-gold/10 to-rx-gold/5 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-rx-gold/20"
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
          Descubre más contenido exclusivo y actualizaciones del equipo
        </p>
        <div className="flex items-center justify-center space-x-2 text-rx-gold">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium">@revolutionx_f1</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WrappedInstagramFeed: React.FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <InstagramFeed />
  </ErrorBoundary>
);

export default React.memo(WrappedInstagramFeed);