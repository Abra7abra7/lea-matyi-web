/**
 * 🎬 FRAMER MOTION ANIMATION LIBRARY
 * Lea Matyi — Luxury Design System
 * 
 * Reusable animation variants for consistent motion design
 */

import { Variants, Transition } from 'framer-motion';

// ============================
// EASING FUNCTIONS
// ============================

export const easings = {
  // Standard easing curves
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  
  // Custom luxury easing
  elegant: [0.25, 0.1, 0.25, 1],
  smooth: [0.43, 0.13, 0.23, 0.96],
  
  // Spring presets
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  } as Transition,
  
  springBouncy: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
  } as Transition,
  
  springGentle: {
    type: 'spring',
    stiffness: 80,
    damping: 20,
  } as Transition,
} as const;

// ============================
// TEXT ANIMATIONS
// ============================

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

export const textFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easings.easeOut,
    },
  }),
};

export const textStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const textWord: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

// ============================
// ELEMENT ANIMATIONS
// ============================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easings.elegant,
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

// ============================
// CARD & GALLERY ANIMATIONS
// ============================

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const imageZoom: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.7,
      ease: easings.elegant,
    },
  },
};

export const overlayReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const galleryStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const galleryItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

// ============================
// BUTTON & INTERACTION
// ============================

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: easings.easeOut,
  },
};

// Magnetic button effect (use with custom hook)
export const magneticButton = {
  transition: easings.springGentle,
};

// ============================
// SCROLL-TRIGGERED ANIMATIONS
// ============================

export const parallaxConfig = {
  scrollYProgress: [0, 1],
  y: ['-20%', '20%'],
  transition: {
    ease: 'linear',
  },
};

export const scaleOnScroll: Variants = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

export const revealOnScroll: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

// ============================
// PAGE TRANSITIONS
// ============================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easings.easeIn,
    },
  },
};

export const modalTransition: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

// ============================
// NAVIGATION
// ============================

export const navSlideDown: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const mobileMenuSlide: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

export const menuItemStagger: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

export const menuItem: Variants = {
  closed: {
    x: 50,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

// ============================
// SHIMMER & LOADING
// ============================

export const shimmerEffect = {
  animate: {
    x: ['0%', '200%'],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const pulseEffect: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================
// SCROLL INDICATOR
// ============================

export const scrollIndicatorBounce = {
  animate: {
    y: [0, 12, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================
// VIEWPORT CONFIG
// ============================

export const viewportConfig = {
  once: true,
  amount: 0.3, // Trigger when 30% visible
  margin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
};

export const viewportConfigStrict = {
  once: true,
  amount: 0.5, // Trigger when 50% visible
};

// ============================
// HELPER FUNCTIONS
// ============================

/**
 * Generate stagger delay for child animations
 */
export const staggerDelay = (index: number, baseDelay = 0.1) => ({
  transition: {
    delay: index * baseDelay,
  },
});

/**
 * Combine multiple variants
 */
export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({ ...acc, ...variant }), {});
};

