import { useState } from 'react';
import { applicationFormSchema, type ApplicationFormData } from '../../lib/validation';
import { FormField } from './FormField';
import { FormStatus } from '../feedback/FormStatus';
import { PrimaryButton } from '../common/PrimaryButton';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    program: 'Personal Support Worker (PSW)',
    studyFormat: 'Day Classes (26 Weeks)',
    message: '',
  });

  // Honeypot field for bot spam prevention
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrors({});

    // Drop automated bot submissions silently
    if (honeypot) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus('success');
      }, 500);
      return;
    }

    const result = applicationFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ApplicationFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const key = err.path[0] as keyof ApplicationFormData;
        if (key) {
          fieldErrors[key] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: 'Personal Support Worker (PSW)',
        studyFormat: 'Day Classes (26 Weeks)',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="card-premium p-6 sm:p-10">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
        <Sparkles className="w-4 h-4 text-brand-teal" />
        <span>Ontario Healthcare Training</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading mb-2">
        Start Your Healthcare Journey
      </h3>
      <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
        Submit your preliminary application enquiry below. Our admissions coordinator will review your information and guide you through the enrollment and documentation process.
      </p>

      <FormStatus
        status={status}
        title={status === 'success' ? 'Application Validated' : 'Please Review Fields'}
        message={
          status === 'success'
            ? 'Success! Your enquiry passed all frontend validation tests.'
            : 'Please correct the highlighted inputs to proceed.'
        }
      />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam honeypot (hidden from humans, bots fill it) */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="website_url">Do not fill this field</label>
          <input
            id="website_url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            label="Full Legal Name"
            id="fullName"
            required
            error={errors.fullName}
          >
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Maria Gonzalez"
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
            />
          </FormField>

          <FormField
            label="Email Address"
            id="email"
            required
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. maria@example.ca"
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
            />
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            label="Phone Number"
            id="phone"
            hint="Optional for phone consultation"
            error={errors.phone}
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone || ''}
              onChange={handleChange}
              placeholder="e.g. (905) 555-0199"
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
            />
          </FormField>

          <FormField
            label="Program of Choice"
            id="program"
            required
            error={errors.program}
          >
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
            >
              <option value="Personal Support Worker (PSW)">
                Personal Support Worker (PSW) Diploma
              </option>
            </select>
          </FormField>
        </div>

        <FormField
          label="Preferred Study Format & Schedule"
          id="studyFormat"
          required
          error={errors.studyFormat}
        >
          <select
            id="studyFormat"
            name="studyFormat"
            value={formData.studyFormat}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
          >
            <option value="Day Classes (26 Weeks)">Day Classes: 9:00 am – 3:00 pm (26 Weeks)</option>
            <option value="Evening Classes (33 Weeks)">Evening Classes: 5:30 pm – 11:45 pm (33 Weeks)</option>
            <option value="Weekend Classes (40 Weeks)">Weekend Classes: 8:30 am – 5:00 pm (40 Weeks)</option>
          </select>
        </FormField>

        <FormField
          label="Additional Background or Notes"
          id="message"
          hint="Let us know if you need assistance with prerequisites, testing, or funding."
          error={errors.message}
        >
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message || ''}
            onChange={handleChange}
            placeholder="Share any questions regarding your application or previous academic experience..."
            className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm resize-none"
          />
        </FormField>

        <div className="pt-3">
          <PrimaryButton
            type="submit"
            disabled={isSubmitting}
            fullWidth
            size="lg"
          >
            {isSubmitting ? (
              <span>Validating Application...</span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Submit Application Enquiry</span>
              </span>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
