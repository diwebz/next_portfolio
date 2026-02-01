'use client';

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

const buttonStyles = (
  variant: ButtonVariant = 'default',
  size: ButtonSize = 'default',
  className?: string
) =>
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90':
        variant === 'default',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80':
        variant === 'secondary',
      'border border-input bg-transparent hover:bg-secondary hover:text-secondary-foreground':
        variant === 'outline',
      'hover:bg-secondary hover:text-secondary-foreground':
        variant === 'ghost',
      'text-primary underline-offset-4 hover:underline': variant === 'link',
    },
    {
      'h-10 px-6 py-2 text-sm': size === 'default',
      'h-8 px-4 text-xs': size === 'sm',
      'h-12 px-8 text-base': size === 'lg',
      'h-10 w-10': size === 'icon',
    },
    className
  );

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={buttonStyles(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <a
        className={buttonStyles(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink, buttonStyles };
