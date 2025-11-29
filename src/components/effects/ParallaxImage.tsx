'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

/**
 * 🎢 PARALLAX IMAGE
 * Image with smooth parallax scroll effect
 * 
 * Features:
 * - Ken Burns zoom effect
 * - Customizable speed
 * - Optimized with next/image
 * - Respects reduced motion
 */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className,
  imageClassName,
  priority = false,
  fill = true,
  width,
  height,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 20}%`, `${speed * 20}%`]
  );

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden rounded-2xl', className)}
    >
      <motion.div
        style={{ y }}
        className={cn('relative w-full h-full scale-110', imageClassName)}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="object-cover w-full h-full"
          />
        )}
      </motion.div>
    </div>
  );
};


