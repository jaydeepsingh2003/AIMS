import { useState } from 'react';
import { contactFormSchema, type ContactFormData } from '../../lib/validation';
import { FormField } from './FormField';
import { FormStatus } from '../feedback/FormStatus';
import { PrimaryButton } from '../common/PrimaryButton';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  // Honeypot field for anti-spam protection
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
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

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const key = err.path[0] as keyof ContactFormData;
        if (key) {
          fieldErrors[key] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    // Simulate short submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div className="card-premium p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-brand-navy font-heading mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
        Have questions about admissions, schedules, or fees? Fill out the form below and an admissions advisor will get back to you.
      </p>

      <FormStatus
        status={status}
        title={status === 'success' ? 'Message Validated' : 'Please Fix Errors'}
        message={
          status === 'success'
            ? 'Thank you! Your message passed frontend validation.'
            : 'Please correct the highlighted fields before submitting.'
        }
      />

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-spam honeypot (hidden from humans, bots fill it) */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="website_url_contact">Do not fill this field</label>
          <input
            id="website_url_contact"
            name="website_url_contact"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <FormField
          label="Your Full Name"
          id="name"
          required
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Jane Doe"
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
            placeholder="e.g. jane.doe@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
          />
        </FormField>

        <FormField
          label="Message or Questions"
          id="message"
          required
          hint="Minimum 10 characters."
          error={errors.message}
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you would like to know about our healthcare programs..."
            className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm resize-none"
          />
        </FormField>

        <div className="pt-2">
          <PrimaryButton
            type="submit"
            disabled={isSubmitting}
            fullWidth
            size="md"
          >
            {isSubmitting ? (
              <span>Validating...</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>Submit Message</span>
              </>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
