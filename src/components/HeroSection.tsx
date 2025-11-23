import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';
import ParallaxSection from './ParallaxSection';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ParallaxSection speed={0.5}>
            <section
                className="relative h-screen flex items-center justify-center text-center overflow-hidden"
                aria-label="Inicio"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-rx-black via-rx-dark to-rx-black opacity-95"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rx-gold/10 via-transparent to-transparent"></div>

                    {/* Optimized Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-rx-gold/30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: Math.random(),
                                }}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-4"
                >
                    <motion.div
                        className="w-32 sm:w-48 md:w-56 mx-auto mb-6 sm:mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <OptimizedImage
                            src="/revolutionx-logo.png"
                            alt="RevolutionX - Equipo F1 in Schools del IES José Saramago"
                            width={224}
                            height={224}
                            priority
                            className="drop-shadow-2xl"
                        />
                    </motion.div>

                    <motion.h1
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-rx-gold bg-clip-text text-transparent bg-gradient-to-r from-rx-gold via-yellow-200 to-rx-gold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        data-translate="true"
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-3 sm:space-y-4"
                    >
                        <h2 className="font-display text-base sm:text-xl md:text-2xl text-white/90 font-light tracking-wide" data-translate="true">
                            {t('hero.subtitle')}
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4" data-translate="true">
                            {t('hero.description')}
                        </p>
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rx-gold to-transparent mx-auto my-4 sm:my-6" aria-hidden="true"></div>
                        <p className="text-xs sm:text-base md:text-lg text-rx-gold font-medium px-4" data-translate="true">
                            {t('hero.sponsorMessage')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-8 sm:mt-12"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden="true"
                    >
                        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-rx-gold/80" />
                    </motion.div>
                </motion.div>
            </section>
        </ParallaxSection>
    );
};

export default React.memo(HeroSection);
