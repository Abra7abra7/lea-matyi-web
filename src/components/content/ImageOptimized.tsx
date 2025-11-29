/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getR2ImageUrl, extractImageHash } from '@/lib/r2-mapping';

interface ImageData {
  src: string;
  alt: string;
  title?: string;
  width?: string;
  height?: string;
}

interface ImageOptimizedProps {
  image: ImageData;
  priority?: boolean;
  className?: string;
}

export function ImageOptimized({ image, priority = false, className = '' }: ImageOptimizedProps) {
  // Skip tracking pixels and invalid images
  const isValidImage = (src: string) => {
    // Skip tracking pixels (facebook, analytics, etc.)
    if (src.includes('facebook.com/tr') || src.includes('?id=') || src.includes('noscript')) {
      return false;
    }
    // Skip empty or very short srcs
    if (!src || src.length < 10) return false;
    
    // Must have valid image extension or be from kajabi CDN
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(src.split('?')[0]) || src.includes('kajabi-cdn.com');
  };

  // Get image URL (prefer R2, fallback to Kajabi CDN)
  const getImageUrl = (src: string): string | null => {
    // Try to extract hash and get R2 URL
    const hash = extractImageHash(src);
    if (hash) {
      const r2Url = getR2ImageUrl(hash);
      if (r2Url) return r2Url;
    }
    
    // Fallback: use Kajabi CDN directly
    if (src.includes('kajabi-cdn.com') || src.includes('kajabi-storefronts')) {
      return src;
    }
    
    return null;
  };

  // Skip invalid images
  if (!isValidImage(image.src)) {
    return null;
  }

  const imageUrl = getImageUrl(image.src);

  // Skip if we couldn't determine URL
  if (!imageUrl) {
    return null;
  }

  return (
    <div className={`group relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={image.alt || 'Image'}
          className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading={priority ? 'eager' : 'lazy'}
        />
        {/* Overlay s jemným gradientom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#abdbe3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Alt text pri hoveri */}
      {image.alt && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.alt}
        </div>
      )}
    </div>
  );
}

