import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    const metrics = [
        { label: 'DRAG COEF', value: '0.024 Cd' },
        { label: 'TUNNEL TESTS', value: '42 Cycles' },
        { label: 'MANUFACTURING', value: 'CNC/MADCUP' },
    ];

    return (
        <section
            className="relative min-h-screen bg-rx-black text-white flex items-center justify-center overflow-hidden"
            aria-label="Inicio"
        >
            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-mesh opacity-60" />
            
            {/* Subtle radial glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rx-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 sm:py-0">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 sm:mb-12"
                    >
                        <OptimizedImage
                            src="/revolutionx-logo.png"
                            alt="RevolutionX Engineering Logo"
                            width={140}
                            height={140}
                            priority
                            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain opacity-80"
                        />
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-display font-bold tracking-tight text-white leading-[0.85] mb-6"
                        data-translate="true"
                    >
                        REVOLUTION
                        <span className="text-gradient-gold">X</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 mb-12 sm:mb-16"
                    >
                        <p className="font-mono text-xs sm:text-sm text-rx-gold/60 tracking-[0.3em] uppercase">
                            F1 IN SCHOOLS — Engineering Documentation
                        </p>
                        <p className="font-body text-white/30 text-sm sm:text-base max-w-lg mx-auto leading-relaxed" data-translate="true">
                            {t('hero.description')}
                        </p>
                    </motion.div>

                    {/* Metrics row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-8 sm:gap-12"
                    >
                        {metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                                <span className="block text-white/20 font-mono text-[10px] tracking-widest mb-1">{metric.label}</span>
                                <span className="block text-white/70 font-mono text-sm font-medium">{metric.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-white/20" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default React.memo(HeroSection);
