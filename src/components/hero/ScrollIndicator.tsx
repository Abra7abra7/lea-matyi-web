'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { scrollIndicatorBounce } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface ScrollIndicatorProps {
  className?: string;
}

/**
 * ⬇️ SCROLL INDICATOR
 * Animated scroll indicator for hero sections
 */
export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <motion.div
      {...scrollIndicatorBounce}
      className={cn('flex flex-col items-center gap-3', className)}
    >
      <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1 h-3 bg-bronze rounded-full"
        />
      </div>
      <p className="text-cream/50 text-xs tracking-widest">SCROLL</p>
    </motion.div>
  );
};

