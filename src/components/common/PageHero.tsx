import { motion } from 'framer-motion';
import { Container } from './Container';
import { cn } from '../../lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
}

export function PageHero({ title, subtitle, backgroundClass }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-28 overflow-hidden',
        backgroundClass || 'bg-gradient-to-br from-brand-blue via-brand-navy to-brand-blue'
      )}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
