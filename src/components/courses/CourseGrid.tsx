'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CourseCard, Course } from './CourseCard';
import { revealOnScroll } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface CourseGridProps {
  courses: Course[];
  columns?: {
    sm: number;
    md: number;
    lg: number;
  };
  onEnroll?: (course: Course) => void;
  className?: string;
}

/**
 * 📚 COURSE GRID
 * Responsive grid of course cards with stagger animation
 */
export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  columns = { sm: 1, md: 2, lg: 3 },
  onEnroll,
  className,
}) => {
  return (
    <div
      className={cn(
        'grid gap-8',
        `grid-cols-${columns.sm}`,
        `md:grid-cols-${columns.md}`,
        `lg:grid-cols-${columns.lg}`,
        className
      )}
    >
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealOnScroll}
          transition={{ delay: index * 0.1 }}
        >
          <CourseCard course={course} onEnroll={onEnroll} />
        </motion.div>
      ))}
    </div>
  );
};

