/**
 * 🎨 LUXURY DESIGN SYSTEM TOKENS
 * Lea Matyi — PMU Education Platform
 * 
 * "Silent Luxury Meets Editorial Precision"
 */

export const colors = {
  // Primary Palette: Skin & Earth
  espresso: '#2B1810',
  taupe: '#8B7355',
  cream: '#F5EDE0',
  ivory: '#FFFEF9',
  
  // Accent Colors: Luxury Highlights
  bronze: '#B87D4B',
  gold: '#D4AF37',
  charcoal: '#1A1A1A',
  softPink: '#F4E4DA',
  
  // Functional
  white: '#FFFFFF',
  black: '#000000',
  
  // With opacity helpers
  withOpacity: (color: string, opacity: number) => `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
} as const;

export const typography = {
  // Font Families (loaded in layout.tsx)
  fontHeading: 'var(--font-fraunces)',
  fontBody: 'var(--font-geist)',
  fontMono: 'JetBrains Mono, monospace',
  
  // Type Scale (Fluid Typography)
  scale: {
    display: 'clamp(3.5rem, 8vw, 7rem)',
    h1: 'clamp(2.5rem, 5vw, 4rem)',
    h2: 'clamp(2rem, 4vw, 3rem)',
    h3: 'clamp(1.5rem, 3vw, 2rem)',
    h4: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    bodyLg: '1.25rem',
    body: '1rem',
    bodySm: '0.875rem',
    caption: '0.75rem',
  },
  
  // Font Weights
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line Heights
  leading: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },
  
  // Letter Spacing
  tracking: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },
} as const;

export const spacing = {
  section: {
    xs: '4rem',
    sm: '6rem',
    md: '8rem',
    lg: '12rem',
    xl: '16rem',
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1600px', // Custom for luxury feel
  },
  grid: {
    gap: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
  },
} as const;

export const effects = {
  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(43, 24, 16, 0.05)',
    md: '0 4px 6px -1px rgba(43, 24, 16, 0.1), 0 2px 4px -1px rgba(43, 24, 16, 0.06)',
    lg: '0 10px 15px -3px rgba(43, 24, 16, 0.1), 0 4px 6px -2px rgba(43, 24, 16, 0.05)',
    xl: '0 20px 25px -5px rgba(43, 24, 16, 0.1), 0 10px 10px -5px rgba(43, 24, 16, 0.04)',
    '2xl': '0 25px 50px -12px rgba(43, 24, 16, 0.25)',
    bronze: '0 10px 30px -5px rgba(184, 125, 75, 0.3)',
    gold: '0 10px 30px -5px rgba(212, 175, 55, 0.3)',
  },
  
  // Blur
  blur: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  
  // Transitions
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    elegant: '800ms cubic-bezier(0.25, 0.1, 0.25, 1)', // Custom easing for luxury
  },
} as const;

export const gradients = {
  hero: `linear-gradient(135deg, ${colors.espresso} 0%, rgba(43, 24, 16, 0.7) 100%)`,
  heroVertical: `linear-gradient(180deg, ${colors.espresso} 0%, rgba(43, 24, 16, 0.4) 60%, transparent 100%)`,
  card: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.softPink} 100%)`,
  shimmer: `linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)`,
  overlay: `linear-gradient(to top, ${colors.espresso}F0 0%, ${colors.espresso}60 50%, transparent 100%)`,
  bronze: `linear-gradient(135deg, ${colors.bronze} 0%, ${colors.gold} 100%)`,
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Helper functions
export const utils = {
  /**
   * Convert hex to RGB for Tailwind opacity
   */
  hexToRgb: (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
      : '0 0 0';
  },
  
  /**
   * Generate responsive padding/margin
   */
  responsive: (mobile: string, desktop: string) => ({
    base: mobile,
    lg: desktop,
  }),
};

export type DesignTokens = {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  effects: typeof effects;
  gradients: typeof gradients;
  breakpoints: typeof breakpoints;
};

