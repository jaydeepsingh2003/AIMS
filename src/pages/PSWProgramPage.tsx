import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScheduleCard } from '../components/cards/ScheduleCard';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { PageMeta } from '../components/feedback/PageMeta';
import { programs } from '../data/programs';
import {
  BookOpen,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export function PSWProgramPage() {
  const psw = programs[0];

  const modules = [
    {
      title: 'PSW Role & Scope of Practice',
      description: 'Understanding the professional standards, ethics, legal responsibilities, and client rights under Ontario health legislation.',
    },
    {
      title: 'Human Anatomy & Body Systems',
      description: 'Detailed study of normal body structures, common pathological conditions, aging processes, and assistive measures.',
    },
    {
      title: 'Patient Care & Daily Living Support',
      description: 'Practical training in personal hygiene, grooming, bed-making, positioning, transfers, and nutritional feeding assistance.',
    },
    {
      title: 'Safety, Mobility & Infection Prevention',
      description: 'Routine infection control practices, WHMIS, standard precautions, body mechanics, and safe client transfer equipment.',
    },
    {
      title: 'Clinical Practicum (Long-Term Care & Community)',
      description: '300 hours of direct supervised patient care in accredited nursing homes, hospitals, or specialized home care placements.',
    },
    {
      title: 'Palliative Care & Cognitive Conditions',
      description: 'Specialized approaches for dementia, Alzheimer’s, end-of-life care, and providing empathetic emotional support for families.',
    },
  ];

  return (
    <>
      <PageMeta
        title="Personal Support Worker (PSW) Program"
        description="Comprehensive 700-hour Personal Support Worker diploma in Ontario with 400 hours theory, 300 hours clinical practicum, and flexible Day, Evening, and Weekend schedules."
      />

      <PageHero
        title={psw.title}
        subtitle="Gain the knowledge, compassionate care skills, and hands-on practicum experience required to thrive as a certified Personal Support Worker across Ontario."
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Personal Support Worker' },
          ]}
        />
      </Container>

      {/* Program Summary & Visual Banner */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Ontario Vocational Training Standard</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy">
                Empowering You for an Essential Healthcare Career
              </h2>

              <p className="text-base text-brand-text/80 leading-relaxed">
                {psw.overview}
              </p>

              <p className="text-base text-brand-text/80 leading-relaxed">
                {psw.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-lavender/60 flex items-center justify-center text-brand-blue shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-text/60 font-semibold uppercase">Theory Hours</div>
                    <div className="text-base font-bold text-brand-navy">400 Classroom Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/15 flex items-center justify-center text-brand-teal shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-text/60 font-semibold uppercase">Clinical Hours</div>
                    <div className="text-base font-bold text-brand-navy">300 Practicum Hours</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <PrimaryButton to="/apply" size="md">
                  Apply for PSW Program
                </PrimaryButton>
                <PrimaryButton to="/admissions" variant="outline" size="md">
                  View Admissions Prerequisites
                </PrimaryButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/psw-program.jpg"
                  alt="Personal Support Worker assisting an elderly resident with a walker in an Ontario healthcare facility"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-5 bg-brand-navy text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-brand-lavender mb-1">
                    <span>Program Delivery</span>
                    <span>In-Person & Distance</span>
                  </div>
                  <p className="text-sm text-white/90">
                    Combines high-engagement interactive lectures with direct clinical placement experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Curriculum Modules */}
      <section className="section-padding bg-brand-bg border-y border-brand-border">
        <Container>
          <SectionHeading
            title="Core Curriculum & Clinical Modules"
            subtitle="Carefully engineered modules designed to build your medical knowledge and practical bedside confidence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="card-premium p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span>Module {idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-brand-text/75 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Available Study Schedules */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Choose Your Study Schedule"
            subtitle="We offer day, evening, and weekend class cohorts to align with your personal obligations."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {psw.schedules.map((schedule, idx) => (
              <ScheduleCard key={idx} schedule={schedule} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* Practicum Placement Details */}
      <section className="section-padding bg-brand-lavender/30 border-t border-brand-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center mx-auto shadow-md">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-brand-navy">
              300 Hours of Supervised Clinical Placement
            </h2>
            <p className="text-base text-brand-text/80 leading-relaxed">
              Clinical experience is where classroom principles transform into real patient care mastery. AIMS Healthcare College coordinates with reputable healthcare partners across Ontario to ensure our students gain practical experience under the direct guidance of qualified clinical preceptors.
            </p>
            <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
              <PrimaryButton to="/apply" size="md">
                Register for Next Class
              </PrimaryButton>
              <PrimaryButton to="/contact" variant="outline" size="md">
                Ask a Question
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Begin Your PSW Training?"
        description="Take the first step toward a fulfilling career providing compassionate healthcare support in Ontario."
        primaryAction={{ label: 'Apply Online', href: '/apply' }}
        secondaryAction={{ label: 'View Requirements', href: '/admissions' }}
      />
    </>
  );
}
