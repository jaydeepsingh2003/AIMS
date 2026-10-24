import { motion } from 'framer-motion';
import { Container } from './Container';
import { PrimaryButton } from './PrimaryButton';
import { cn } from '../../lib/utils';

export interface CTAAction {
  label: string;
  to?: string;
  href?: string;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  variant?: 'blue' | 'lavender';
}

export function CTASection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  variant = 'blue',
}: CTASectionProps) {
  const textBody = subtitle || description;
  const primaryTo = primaryAction?.to || primaryAction?.href;
  const secondaryTo = secondaryAction?.to || secondaryAction?.href;

  return (
    <section
      className={cn(
        'relative py-20 md:py-24 overflow-hidden',
        variant === 'blue'
          ? 'bg-gradient-to-r from-brand-blue to-brand-navy'
          : 'bg-brand-lavender'
      )}
    >
      {variant === 'blue' && (
        <>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        </>
      )}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={cn(
              'text-3xl md:text-4xl font-bold mb-4 font-heading',
              variant === 'blue' ? 'text-white' : 'text-brand-navy'
            )}
          >
            {title}
          </h2>
          {textBody && (
            <p
              className={cn(
                'text-lg mb-8 max-w-xl mx-auto leading-relaxed',
                variant === 'blue' ? 'text-white/85' : 'text-brand-text/75'
              )}
            >
              {textBody}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && primaryTo && (
              <PrimaryButton
                to={primaryTo}
                variant={variant === 'blue' ? 'white' : 'primary'}
                size="lg"
              >
                {primaryAction.label}
              </PrimaryButton>
            )}
            {secondaryAction && secondaryTo && (
              <PrimaryButton
                to={secondaryTo}
                variant="outline"
                size="lg"
                className={
                  variant === 'blue'
                    ? 'border-white text-white hover:bg-white/10 hover:text-white'
                    : ''
                }
              >
                {secondaryAction.label}
              </PrimaryButton>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
