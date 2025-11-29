'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-bronze text-ivory hover:bg-espresso',
      secondary: 'bg-taupe text-ivory hover:bg-espresso',
      ghost: 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-ivory',
    };

    const sizeStyles = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-medium tracking-wide transition-all duration-300',
          'hover:scale-105 active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

