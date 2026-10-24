import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, Stethoscope, CheckCircle2 } from 'lucide-react';
import type { ProgramInfo } from '../../types/content';
import { PrimaryButton } from '../common/PrimaryButton';

interface ProgramCardProps {
  program: ProgramInfo;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="card-premium overflow-hidden border border-brand-border hover:border-brand-blue/40 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="grid md:grid-cols-12 gap-0 items-stretch">
        {/* Left Column: Image / Visual Accent */}
        <div className="md:col-span-5 relative p-8 text-white flex flex-col justify-between overflow-hidden min-h-[320px]">
          {/* Background Photo */}
          <img
            src={program.image}
            alt={program.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-blue/80" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/15 backdrop-blur-sm text-brand-lavender rounded-full mb-4">
              Featured Program
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">
              {program.shortTitle}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Comprehensive healthcare training designed for career stability, clinical confidence, and compassionate patient care across Ontario.
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/15 space-y-2 text-xs text-white/85">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Format: {program.deliveryFormat}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-teal" />
              <span>400 Hours Theory Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-brand-teal" />
              <span>300 Hours Clinical Practicum</span>
            </div>
          </div>
        </div>

        {/* Right Column: Program Details & Schedules */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <h4 className="text-lg font-bold text-brand-navy font-heading mb-2">
              Flexible Study Schedules Designed for You
            </h4>
            <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
              Balance your education with work and family commitments. Choose from three flexible study formats:
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {program.schedules.map((schedule, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-brand-bg border border-brand-border/70 hover:border-brand-blue/30 transition-colors"
                >
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                    {schedule.format}
                  </span>
                  <div className="text-sm font-semibold text-brand-navy mb-1">
                    {schedule.duration}
                  </div>
                  <div className="text-[11px] text-brand-text/70 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-teal shrink-0" />
                    <span>{schedule.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-brand-border/60">
            <PrimaryButton to={`/programs/${program.slug}`} size="md">
              <span>View Full Program Details</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
            <PrimaryButton to="/apply" variant="outline" size="md">
              Apply Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
