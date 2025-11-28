import React from 'react';

interface HeadingData {
  level: number;
  text: string;
  id?: string;
}

interface HeadingProps {
  heading: HeadingData;
  className?: string;
}

export function Heading({ heading, className = '' }: HeadingProps) {
  const HeadingTag = `h${heading.level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  const baseClasses = 'font-heading font-bold text-gray-900';
  const sizeClasses = {
    1: 'text-5xl md:text-6xl mb-8',
    2: 'text-4xl md:text-5xl mb-6',
    3: 'text-3xl md:text-4xl mb-5',
    4: 'text-2xl md:text-3xl mb-4',
    5: 'text-xl md:text-2xl mb-3',
    6: 'text-lg md:text-xl mb-2',
  };

  const sizeClass = sizeClasses[heading.level as keyof typeof sizeClasses] || sizeClasses[3];

  return (
    <HeadingTag
      id={heading.id}
      className={`${baseClasses} ${sizeClass} ${className}`}
    >
      {heading.text}
    </HeadingTag>
  );
}

