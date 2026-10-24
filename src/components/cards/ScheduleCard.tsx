import { motion } from 'framer-motion';
import { Sun, Moon, Calendar, Clock, BookOpen, Stethoscope } from 'lucide-react';
import type { ProgramSchedule } from '../../types/content';
import { PrimaryButton } from '../common/PrimaryButton';

interface ScheduleCardProps {
  schedule: ProgramSchedule;
  index?: number;
}

export function ScheduleCard({ schedule, index = 0 }: ScheduleCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'sun':
        return <Sun className="w-6 h-6 text-amber-500" />;
      case 'moon':
        return <Moon className="w-6 h-6 text-indigo-400" />;
      case 'calendar':
      default:
        return <Calendar className="w-6 h-6 text-brand-teal" />;
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
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-lavender/60 flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon(schedule.icon)}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
            {schedule.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold text-brand-navy mb-2 font-heading">
          {schedule.format}
        </h3>

        <div className="flex items-center gap-2 text-sm text-brand-text/75 mb-6">
          <Clock className="w-4 h-4 text-brand-teal shrink-0" />
          <span>{schedule.time}</span>
        </div>

        <div className="space-y-3 pt-4 border-t border-brand-border/80 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-brand-text/70">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              <span>Theory Training</span>
            </span>
            <span className="font-semibold text-brand-navy">{schedule.theoryHours} Hours</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-brand-text/70">
              <Stethoscope className="w-4 h-4 text-brand-teal" />
              <span>Clinical Practicum</span>
            </span>
            <span className="font-semibold text-brand-navy">{schedule.practicumHours} Hours</span>
          </div>
          <div className="flex items-center justify-between text-sm pt-2 border-t border-dashed border-brand-border font-medium">
            <span className="text-brand-text">Total Instruction</span>
            <span className="text-brand-blue font-bold">
              {schedule.theoryHours + schedule.practicumHours} Hours
            </span>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <PrimaryButton to="/apply" variant="outline" fullWidth size="sm">
          Select This Schedule
        </PrimaryButton>
      </div>
    </motion.div>
  );
}
