'use client';

import { useRef, useState, MouseEvent } from 'react';

interface Position {
  x: number;
  y: number;
}

interface MagneticEffectOptions {
  strength?: number;
  disabled?: boolean;
}

/**
 * 🧲 MAGNETIC EFFECT HOOK
 * Creates a "magnetic" button that follows cursor
 * 
 * Usage:
 * const { ref, position, handleMouseMove, handleMouseLeave } = useMagneticEffect();
 */
export const useMagneticEffect = (options: MagneticEffectOptions = {}) => {
  const { strength = 0.3, disabled = false } = options;
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (disabled || !buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate position relative to button center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref: buttonRef,
    position,
    handleMouseMove,
    handleMouseLeave,
  };
};


