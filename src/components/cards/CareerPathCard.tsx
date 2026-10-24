import { motion } from 'framer-motion';
import { Building2, Home, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CareerPath } from '../../types/content';

interface CareerPathCardProps {
  career: CareerPath;
  index?: number;
}

export function CareerPathCard({ career, index = 0 }: CareerPathCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'long-term-care':
        return <Building2 className="w-6 h-6 text-brand-blue" />;
      case 'home-care':
        return <Home className="w-6 h-6 text-brand-teal" />;
      case 'hospitals':
      default:
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-premium p-6 sm:p-8 flex flex-col justify-between h-full group hover:border-brand-blue/50"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-brand-lavender/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
          {getIcon(career.id)}
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-3 font-heading">
          {career.title}
        </h3>
        <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
          {career.description}
        </p>
      </div>

      <div className="pt-4 border-t border-brand-border/60">
        <Link
          to="/programs/personal-support-worker"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue group-hover:text-brand-navy transition-colors"
        >
          <span>View PSW Training Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
