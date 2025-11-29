'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { galleryStagger, galleryItem, imageZoom, overlayReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  technique?: string;
  width?: number;
  height?: number;
}

export interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: {
    sm: number;
    md: number;
    lg: number;
  };
  gap?: number;
  className?: string;
  onImageClick?: (image: GalleryImage) => void;
}

/**
 * 🖼️ MASONRY GALLERY
 * Responsive masonry layout with stagger animations
 * 
 * Features:
 * - Masonry layout (random sizes)
 * - Stagger entrance animation
 * - Hover zoom + metadata overlay
 * - Lightbox ready
 */
export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  columns = { sm: 2, md: 3, lg: 4 },
  gap = 4,
  className,
  onImageClick,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Determine special sizes (random pattern)
  const getGridSpan = (index: number) => {
    if (index % 7 === 0) return 'row-span-2'; // Tall
    if (index % 5 === 0) return 'md:col-span-2'; // Wide
    return '';
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={galleryStagger}
      className={cn(
        'grid gap-4 p-8',
        `grid-cols-${columns.sm}`,
        `md:grid-cols-${columns.md}`,
        `lg:grid-cols-${columns.lg}`,
        className
      )}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={galleryItem}
          className={cn(
            'relative overflow-hidden rounded-lg cursor-pointer group',
            getGridSpan(index)
          )}
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onImageClick?.(image)}
        >
          {/* Image */}
          <motion.div
            initial="rest"
            whileHover="hover"
            variants={imageZoom}
            className="relative w-full h-full aspect-[4/5]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </motion.div>

          {/* Overlay (on hover) */}
          <AnimatePresence>
            {hoveredId === image.id && (image.title || image.technique) && (
              <motion.div
                variants={overlayReveal}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent flex items-end p-6"
              >
                <div>
                  {image.title && (
                    <h4 className="text-ivory font-heading text-xl mb-1">
                      {image.title}
                    </h4>
                  )}
                  {image.technique && (
                    <p className="text-cream/90 text-sm tracking-wide">
                      {image.technique}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

