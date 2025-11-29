'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ShimmerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shimmerColor?: string;
  shimmerSpeed?: number;
}

/**
 * ✨ SHIMMER CARD
 * Card with animated shimmer effect
 */
export const ShimmerCard: React.FC<ShimmerCardProps> = ({
  children,
  shimmerColor = 'rgba(212, 175, 55, 0.1)', // Gold
  shimmerSpeed = 2.5,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Shimmer Animation */}
      <motion.div
        animate={{
          x: ['0%', '200%'],
        }}
        transition={{
          duration: shimmerSpeed,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute inset-0 w-1/3 -skew-x-12 -left-full pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
        }}
      />
    </div>
  );
};

