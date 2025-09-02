import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface EnhancedButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rx-black disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-rx-gold to-yellow-600 text-rx-black hover:from-yellow-600 hover:to-rx-gold focus:ring-rx-gold shadow-lg hover:shadow-xl',
      secondary: 'bg-rx-dark text-white border border-rx-gold/30 hover:border-rx-gold/50 hover:bg-rx-gold/10 focus:ring-rx-gold',
      outline: 'border-2 border-rx-gold text-rx-gold hover:bg-rx-gold hover:text-rx-black focus:ring-rx-gold',
      ghost: 'text-rx-gold hover:bg-rx-gold/10 focus:ring-rx-gold',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl'
    };
    
    const sizeClasses = {
      sm: 'px-2.5 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm',
      md: 'px-3 xs:px-4 py-2 xs:py-2.5 text-sm xs:text-base',
      lg: 'px-4 xs:px-6 py-2.5 xs:py-3 text-base xs:text-lg',
      xl: 'px-6 xs:px-8 py-3 xs:py-4 text-lg xs:text-xl'
    };
    
    const widthClass = fullWidth ? 'w-full' : '';
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
    
    return (
      <motion.button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02, y: disabled || loading ? 0 : -2 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 animate-spin" aria-label="Cargando" role="img" />
        )}
        {!loading && leftIcon && (
          <span className="mr-1.5 xs:mr-2 [&>svg]:w-3 [&>svg]:h-3 xs:[&>svg]:w-4 xs:[&>svg]:h-4">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && (
          <span className="ml-1.5 xs:ml-2 [&>svg]:w-3 [&>svg]:h-3 xs:[&>svg]:w-4 xs:[&>svg]:h-4">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

EnhancedButton.displayName = 'EnhancedButton';

export default EnhancedButton;