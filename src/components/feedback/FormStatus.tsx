import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
  title?: string;
  message?: string;
  isDemoNotice?: boolean;
}

export function FormStatus({
  status,
  title,
  message,
  isDemoNotice = true,
}: FormStatusProps) {
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
            {title || (isSuccess ? 'Validation Passed' : 'Submission Issue')}
          </p>
          <p className="text-xs leading-relaxed opacity-90">
            {message ||
              (isSuccess
                ? 'Your submission passed all frontend validation rules successfully!'
                : 'Please check the required fields and try again.')}
          </p>

          {isDemoNotice && isSuccess && (
            <div className="mt-2 pt-2 border-t border-emerald-200/60 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
              <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                Demo Notice: This is a frontend demo. No email or database record was transmitted. For real inquiries, please contact the campus office directly at (905) 525-5111.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
