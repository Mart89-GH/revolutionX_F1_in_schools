import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
}

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({
    label,
    error,
    helperText,
    multiline = false,
    rows = 4,
    leftIcon,
    rightIcon,
    required = false,
    className = '',
    id,
    ...props
  }, ref) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    
    const baseInputClasses = `
      w-full bg-rx-black/50 border rounded-xl px-4 py-3 text-white 
      focus:outline-none focus:ring-2 transition-all duration-300
      ${hasError 
        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
        : 'border-rx-gold/20 focus:border-rx-gold/50 focus:ring-rx-gold/20'
      }
      ${leftIcon ? 'pl-12' : ''}
      ${rightIcon ? 'pr-12' : ''}
      ${className}
    `;
    
    const InputComponent = multiline ? 'textarea' : 'input';
    
    return (
      <div className="space-y-2">
        <label 
          htmlFor={fieldId}
          className="block text-gray-300 text-sm font-medium"
        >
          {label}
          {required && (
            <span className="text-red-400 ml-1" aria-label="campo obligatorio">*</span>
          )}
        </label>
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <InputComponent
            ref={ref as any}
            id={fieldId}
            className={baseInputClasses}
            rows={multiline ? rows : undefined}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
            }
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
          
          {hasError && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400">
              <AlertCircle className="w-5 h-5" aria-label="Error en el campo" role="img" />
            </div>
          )}
        </div>
        
        <AnimatePresence>
          {error && (
            <motion.div
              id={`${fieldId}-error`}
              role="alert"
              aria-live="polite"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 text-red-400 text-sm"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" aria-label="Mensaje de error" role="img" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {helperText && !error && (
          <p 
            id={`${fieldId}-helper`} 
            className="text-gray-400 text-sm"
            role="status"
            aria-live="polite"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;