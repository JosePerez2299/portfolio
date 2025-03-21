'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'alternate';
}

const Section = ({ id, className, children, variant = 'default' }: SectionProps) => {
  const baseStyles = 'py-[var(--section-spacing)] relative';
  const variants = {
    default: 'bg-[var(--color-bg-primary)]',
    alternate: 'bg-[var(--color-bg-secondary)]'
  };

  return (
    <section
      id={id}
      className={twMerge(
        baseStyles,
        variants[variant],
        className
      )}
    >
      <div className="container mx-auto px-[var(--container-padding)]">
        {children}
      </div>
    </section>
  );
};

export default Section;
