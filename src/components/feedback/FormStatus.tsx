import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
  title?: string;
  message?: string;
}

export function FormStatus({ status, title, message }: FormStatusProps) {
  if (status === 'idle') return null;

  const isSuccess = status === 'success';

  return (
    <div
      role="status"
      className={cn(
        'p-4 rounded-xl border mb-6 transition-all animate-fade-in',
        isSuccess
          ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900'
          : 'bg-rose-50 border-rose-200 text-rose-900'
      )}
    >
      <div className="flex items-start gap-3">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        )}

        <div className="space-y-1">
          <p className="font-semibold text-sm">
            {title || (isSuccess ? 'Sent Successfully' : 'Submission Issue')}
          </p>
          <p className="text-xs leading-relaxed opacity-90">
            {message ||
              (isSuccess
                ? 'Your submission has been received. We will be in touch shortly.'
                : 'Please check the required fields and try again.')}
          </p>
        </div>
      </div>
    </div>
  );
}
