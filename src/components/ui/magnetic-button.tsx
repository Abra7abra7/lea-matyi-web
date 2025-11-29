'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '@/lib/hooks/useMagneticEffect';
import { easings } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  magneticStrength?: number;
  disableMagnetic?: boolean;
  asChild?: boolean;
}

/**
 * 🧲 MAGNETIC BUTTON
 * Luxury button with magnetic hover effect
 * 
 * Features:
 * - Follows cursor on hover
 * - Smooth spring animations
 * - Multiple variants (primary/secondary/ghost)
 * - Respects prefers-reduced-motion
 */
export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      magneticStrength = 0.3,
      disableMagnetic = false,
      className,
      disabled,
      ...props
    },
    forwardedRef
  ) => {
    const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticEffect({
      strength: magneticStrength,
      disabled: disableMagnetic || disabled,
    });

    // Variant styles
    const variantStyles = {
      primary: 'bg-dark-blue text-ivory hover:bg-accent-blue shadow-lg hover:shadow-dark-blue',
      secondary: 'bg-sky-blue text-dark-blue hover:bg-accent-blue hover:text-ivory',
      ghost: 'border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-ivory',
      link: 'text-dark-blue underline-offset-4 hover:underline',
    };

    // Size styles
    const sizeStyles = {
      sm: 'h-10 px-6 text-xs tracking-wider',
      md: 'h-12 px-8 text-sm tracking-wider',
      lg: 'h-14 px-12 text-base tracking-wider',
    };

    return (
      <motion.button
        ref={(node) => {
          // Handle both refs
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-medium',
          'transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-blue focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variant & Size
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

