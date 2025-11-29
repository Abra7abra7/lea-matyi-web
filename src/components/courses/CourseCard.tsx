'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button-simple';
import { cardHover, imageZoom } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface CourseFeature {
  text: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
  students?: number;
  rating?: number;
  features: string[];
  isFeatured?: boolean;
}

export interface CourseCardProps {
  course: Course;
  onEnroll?: (course: Course) => void;
  className?: string;
}

/**
 * 🎓 COURSE CARD
 * Premium course card with trust signals
 * 
 * Features:
 * - Lift hover animation
 * - Featured badge
 * - Trust signals (students, rating)
 * - Feature list with checkmarks
 * - Magnetic CTA button
 */
export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEnroll,
  className,
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={cn(
        'group relative bg-soft-pink/50 backdrop-blur-sm rounded-2xl overflow-hidden',
        'shadow-lg hover:shadow-2xl transition-shadow duration-300',
        className
      )}
    >
      {/* Featured Badge */}
      {course.isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-gold text-espresso text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          BESTSELLER
        </div>
      )}

      {/* Course Image */}
      <motion.div
        variants={imageZoom}
        className="relative h-64 overflow-hidden"
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="p-8">
        {/* Meta Info */}
        <div className="flex items-center gap-2 text-bronze text-sm font-mono mb-3">
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.level}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl text-espresso mb-4 leading-tight">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-taupe text-body mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 4).map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-charcoal"
            >
              <Check className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="md"
          onClick={() => onEnroll?.(course)}
          className="w-full mb-4"
        >
          ENROLL NOW — €{course.price}
        </Button>

        {/* Trust Signals */}
        <div className="flex items-center justify-center gap-4 text-xs text-taupe">
          {course.rating && (
            <div className="flex items-center gap-1">
              <span className="text-gold">★★★★★</span>
              <span className="ml-1">{course.rating}/5</span>
            </div>
          )}
          {course.students && (
            <span>{course.students.toLocaleString()}+ študentov</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

