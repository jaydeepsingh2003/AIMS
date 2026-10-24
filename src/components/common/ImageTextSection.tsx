import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ImageTextSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  bgClass?: string;
}

export function ImageTextSection({
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'left',
  children,
  className,
  bgClass,
}: ImageTextSectionProps) {
  return (
    <section className={cn('section-padding', bgClass, className)}>
      <div className="container-site">
        <div
          className={cn(
            'grid md:grid-cols-2 gap-12 lg:gap-16 items-center',
            imagePosition === 'right' && 'md:[direction:rtl] md:[&>*]:text-left md:[&>*]:[direction:ltr]'
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="rounded-2xl shadow-xl w-full h-80 md:h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-heading">
              {title}
            </h2>
            <p className="text-brand-text/80 leading-relaxed mb-6">{description}</p>
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
