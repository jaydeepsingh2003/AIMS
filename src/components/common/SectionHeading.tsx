import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={cn(centered && 'text-center', 'mb-12', className)}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold mb-4',
          light ? 'text-white' : 'text-brand-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-brand-text/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
