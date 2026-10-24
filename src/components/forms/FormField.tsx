import React from 'react';
import { cn } from '../../lib/utils';

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  id,
  error,
  required,
  hint,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-brand-navy"
      >
        {label}
        {required && <span className="text-rose-500 ml-1" aria-hidden="true">*</span>}
      </label>

      {children}

      {hint && !error && (
        <p className="text-xs text-brand-text/60 mt-1">{hint}</p>
      )}

      {error && (
        <p className="text-xs font-medium text-rose-600 mt-1 flex items-center gap-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
