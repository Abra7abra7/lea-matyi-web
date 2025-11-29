'use client';

import { useEffect, useState } from 'react';

/**
 * 📊 SCROLL PROGRESS HOOK
 * Tracks scroll progress and visibility states
 * 
 * Usage:
 * const { scrollY, scrollProgress, isScrolled } = useScrollProgress();
 */
export const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    scrollProgress,
    isScrolled,
  };
};

