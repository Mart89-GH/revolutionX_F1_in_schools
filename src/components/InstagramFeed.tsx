import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle, Play } from 'lucide-react';

const InstagramFeed = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Mock Instagram posts - In a real implementation, you'd fetch from Instagram API
  const mockPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
      caption: "Trabajando en el diseño aerodinámico del nuevo prototipo 🏎️",
      likes: 127,
      comments: 23
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400",
      caption: "Pruebas de velocidad en el túnel de viento ⚡",
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      caption: "El equipo RevolutionX preparándose para la competición 🏆",
      likes: 156,
      comments: 31
    }
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-rx-dark to-rx-black p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-rx-gold/20 hover:border-rx-gold/40 transition-all duration-500 shadow-2xl hover:shadow-rx-gold/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
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
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium">Seguir</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.a>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
        {mockPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <img
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
              
              {/* Play icon for video-like effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-1" />
                </motion.div>
              </div>
            </div>
          </motion.div>
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

export default InstagramFeed;