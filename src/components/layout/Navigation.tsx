'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { navSlideDown, mobileMenuSlide, menuItemStagger, menuItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Domov', href: '/' },
  { label: 'Kurzy', href: '/courses' },
  { label: 'Galéria', href: '/gallery' },
  { label: 'O mne', href: '/about' },
  { label: 'Kontakt', href: '/contact' },
];

/**
 * 🧭 NAVIGATION
 * Responsive navigation with scroll effects
 * 
 * Features:
 * - Transparent → solid on scroll
 * - Mobile hamburger menu
 * - Smooth animations
 * - Magnetic CTA button
 */
export const Navigation: React.FC<NavigationProps> = ({
  links = defaultLinks,
  ctaText = 'Začať',
  ctaHref,
  onCtaClick,
  className,
}) => {
  const { isScrolled } = useScrollProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        variants={navSlideDown}
        initial="hidden"
        animate="visible"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                'font-heading text-2xl font-bold transition-colors',
                isScrolled ? 'text-espresso' : 'text-ivory'
              )}
            >
              Lea Matyi
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors hover:text-bronze',
                    isScrolled ? 'text-charcoal' : 'text-cream'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton
              variant={isScrolled ? 'primary' : 'ghost'}
              size="sm"
              onClick={onCtaClick}
            >
              {ctaText}
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-espresso hover:bg-bronze/10'
                : 'text-ivory hover:bg-ivory/10'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuSlide}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso/95 backdrop-blur-lg"
              onClick={toggleMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              variants={menuItemStagger}
              className="relative z-10 flex flex-col items-center justify-center h-full"
            >
              {/* Links */}
              <ul className="space-y-8 text-center">
                {links.map((link) => (
                  <motion.li key={link.href} variants={menuItem}>
                    <Link
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="font-heading text-3xl text-ivory hover:text-bronze transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div variants={menuItem} className="mt-12">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onCtaClick?.();
                    toggleMobileMenu();
                  }}
                >
                  {ctaText}
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

