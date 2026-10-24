import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { ProgramCard } from '../components/cards/ProgramCard';
import { ScheduleCard } from '../components/cards/ScheduleCard';
import { PageMeta } from '../components/feedback/PageMeta';
import { programs } from '../data/programs';
import { Stethoscope, BookOpen, Award } from 'lucide-react';

export function ProgramsPage() {
  const psw = programs[0];

  return (
    <>
      <PageMeta
        title="Programs"
        description="Explore healthcare diploma programs at AIMS Healthcare College, featuring the Personal Support Worker (PSW) Diploma with flexible schedules in Ontario."
      />

      <PageHero
        title="Our Academic Programs"
        subtitle="Practical healthcare diploma training designed to equip you with the clinical competencies, compassionate care practices, and job readiness demanded across Ontario."
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Programs' }]} />
      </Container>

      {/* Main Program Card */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Healthcare Diploma Offerings"
            subtitle="Industry-aligned training approved under Ontario vocational standards."
          />
          <ProgramCard program={psw} />
        </Container>
      </section>

      {/* Program Highlights & Practical Training */}
      <section className="section-padding bg-brand-bg border-y border-brand-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">
              Comprehensive 700-Hour Curriculum
            </h2>
            <p className="text-base text-brand-text/80 leading-relaxed">
              Our Personal Support Worker program combines extensive classroom theory with immersive hands-on clinical placement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                400 Hours Theory
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Foundations in anatomy, physiology, clinical documentation, patient safety, infection control, and communication techniques.
              </p>
            </div>

            <div className="card-premium p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                300 Hours Practicum
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Hands-on clinical training in accredited Ontario long-term care homes, hospitals, and community care agencies.
              </p>
            </div>

            <div className="card-premium p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Provincial Recognition
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Prepares graduates for immediate career entry across Ontario’s public and private healthcare sectors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Schedules */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Available Study Schedules"
            subtitle="Select the timetable that matches your lifestyle and family commitments."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {psw.schedules.map((schedule, idx) => (
              <ScheduleCard key={idx} schedule={schedule} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Start Your Personal Support Worker Training"
        description="Our admissions advisors are here to help you select the right schedule and start date."
        primaryAction={{ label: 'Apply Now', href: '/apply' }}
        secondaryAction={{ label: 'Contact Campus', href: '/contact' }}
      />
    </>
  );
}
