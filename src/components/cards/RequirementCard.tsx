import { motion } from 'framer-motion';
import {
  GraduationCap,
  UserCheck,
  FileText,
  HeartPulse,
  ShieldCheck,
  ScanSearch,
  CheckCircle2,
} from 'lucide-react';
import type { AdmissionRequirement } from '../../types/content';

interface RequirementCardProps {
  requirement: AdmissionRequirement;
  index?: number;
}

export function RequirementCard({ requirement, index = 0 }: RequirementCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="w-6 h-6 text-brand-blue" />;
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-brand-teal" />;
      case 'file-text':
        return <FileText className="w-6 h-6 text-indigo-500" />;
      case 'heart-pulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'scan-search':
      default:
        return <ScanSearch className="w-6 h-6 text-amber-600" />;
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
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-lavender/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            {getIcon(requirement.icon)}
          </div>
          <h3 className="text-lg font-bold text-brand-navy font-heading leading-tight">
            {requirement.title}
          </h3>
        </div>

        <ul className="space-y-3 mt-4 text-sm text-brand-text/80">
          {requirement.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
