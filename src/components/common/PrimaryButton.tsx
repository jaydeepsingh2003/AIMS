import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface PrimaryButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'white' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: boolean;
  fullWidth?: boolean;
}

export function PrimaryButton({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  icon = false,
  fullWidth = false,
}: PrimaryButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-brand-blue text-white hover:bg-brand-navy focus:ring-brand-blue shadow-md shadow-brand-blue/20 hover:shadow-lg',
    outline:
      'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue',
    white:
      'bg-white text-brand-blue hover:bg-brand-lavender focus:ring-white shadow-md',
    secondary:
      'bg-white/15 text-white hover:bg-white/25 border border-white/20 focus:ring-white',
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4 ml-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {icon && <ArrowRight className="w-4 h-4 ml-1" />}
    </button>
  );
}
