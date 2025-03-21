'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  neonEffect?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  neonEffect = false,
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-[var(--color-accent-primary)] text-black hover:opacity-90',
    outline: 'border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-black',
    ghost: 'text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const neonStyles = neonEffect ? 'shadow-[0_0_10px_var(--color-accent-primary)] hover:shadow-[0_0_20px_var(--color-accent-primary)]' : '';

  return (
    <button
      ref={ref}
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        neonStyles,
        isLoading && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
