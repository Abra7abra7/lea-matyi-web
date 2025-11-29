'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { textReveal, fadeIn, scrollIndicatorBounce } from '@/lib/animations';
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
        'relative h-screen w-full overflow-hidden',
        'flex items-center justify-center',
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
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            poster={fallbackImage}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : fallbackImage ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        ) : null}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 via-dark-blue/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          {/* Title */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="font-heading text-[clamp(3rem,8vw,6rem)] font-bold text-ivory leading-none mb-6"
          >
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line.includes('<span>') ? (
                  <span
                    className="italic text-sky-blue"
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

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-heading text-sky-blue mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[clamp(1rem,2vw,1.25rem)] text-cream/90 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={onCtaClick}
              className="shadow-2xl hover:shadow-sky-blue/50"
            >
              {ctaText}
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        {...scrollIndicatorBounce}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
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
            className="w-1 h-3 bg-sky-blue rounded-full"
          />
        </div>
        <p className="text-cream/50 text-xs mt-3 tracking-widest">SCROLL</p>
      </motion.div>
    </section>
  );
};

