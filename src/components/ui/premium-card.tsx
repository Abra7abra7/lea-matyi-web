'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, shimmerEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  enableShimmer?: boolean;
  enableHover?: boolean;
  variant?: 'default' | 'elevated' | 'flat';
}

/**
 * ✨ PREMIUM CARD
 * Luxury card component with shimmer effect
 * 
 * Features:
 * - Hover lift animation
 * - Shimmer effect on hover
 * - Multiple variants
 * - Glassmorphism option
 */
export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  (
    {
      children,
      enableShimmer = true,
      enableHover = true,
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-soft-pink/50 backdrop-blur-sm shadow-lg',
      elevated: 'bg-cream shadow-2xl',
      flat: 'bg-cream/80',
    };

    return (
      <motion.div
        ref={ref}
        initial="rest"
        whileHover={enableHover ? 'hover' : undefined}
        variants={enableHover ? cardHover : undefined}
        className={cn(
          'group relative overflow-hidden rounded-2xl transition-shadow duration-300',
          variantStyles[variant],
          enableHover && 'hover:shadow-2xl',
          className
        )}
        {...props}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Shimmer Effect */}
        {enableShimmer && (
          <motion.div
            variants={{
              rest: { x: '-100%' },
              hover: {
                x: '200%',
                transition: {
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              },
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-full pointer-events-none"
          />
        )}
      </motion.div>
    );
  }
);

PremiumCard.displayName = 'PremiumCard';


