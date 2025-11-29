'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button-simple';
import { cn } from '@/lib/utils';

export interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  videoSrc?: string;
  fallbackImage?: string;
  onCtaClick?: () => void;
  className?: string;
}

/**
 * 🎬 CINEMATIC HERO
 * Full-viewport hero with video background and dramatic text reveal
 * 
 * Features:
 * - Video background with fallback
 * - Animated text reveals
 * - Magnetic CTA button
 * - Scroll indicator
 * - Gradient overlay
 */
export const CinematicHero: React.FC<CinematicHeroProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'Explore Courses',
  ctaHref,
  videoSrc,
  fallbackImage,
  onCtaClick,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative min-h-[80vh] md:min-h-screen w-full overflow-hidden',
        'flex items-center justify-center',
        'py-20 md:py-0',
        className
      )}
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            poster={fallbackImage}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : fallbackImage ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        ) : null}
      </div>

      {/* Gradient Overlay - Lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/30 to-espresso/50" />

      {/* Content - Simplified */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {/* Title - Smaller, cleaner */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight"
          >
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line.includes('<span>') ? (
                  <span
                    className="italic text-bronze"
                    dangerouslySetInnerHTML={{
                      __html: line.replace('<span>', '').replace('</span>', ''),
                    }}
                  />
                ) : (
                  line
                )}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Subtitle - Only if exists */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl font-medium text-bronze"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA Button - Simpler */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onCtaClick}
              className="shadow-xl"
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

