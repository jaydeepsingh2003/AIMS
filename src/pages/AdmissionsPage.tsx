import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { RequirementCard } from '../components/cards/RequirementCard';
import { CTASection } from '../components/common/CTASection';
import { PageMeta } from '../components/feedback/PageMeta';
import { admissionRequirements, admissionIntro } from '../data/admissions';
import { CheckSquare, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';

export function AdmissionsPage() {
  const checklist = [
    'Ontario Secondary School Diploma (OSSD) transcript or evaluated foreign equivalent credential.',
    'Proof of Canadian Citizenship, Permanent Residency, or valid Study Permit.',
    'Government-issued photo identification.',
    'Wonderlic SLE or English proficiency test results (if applying under mature student status).',
    'Physician-signed Medical Certificate of Fitness verifying physical capability.',
    'Complete immunization records (including 2-step TB test, MMR, Varicella, Tdap, Hepatitis B).',
    'Clear Police Vulnerable Sector Check (VSC) dated within 6 months of program start.',
    'Standard First Aid & CPR Level C Certificate (must remain valid throughout practicum).',
  ];

  return (
    <>
      <PageMeta
        title="Admission Requirements"
        description="Comprehensive admission prerequisites and document checklist for the Personal Support Worker (PSW) Diploma at AIMS Healthcare College in Ontario."
      />

      <PageHero
        title={admissionIntro.title}
        subtitle={admissionIntro.description}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Admissions' }]} />
      </Container>

      {/* 6 Core Requirement Categories */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Prerequisite Categories"
            subtitle="Review each requirement carefully to ensure you are fully prepared for academic and clinical placement phases."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionRequirements.map((req, idx) => (
              <RequirementCard key={req.id} requirement={req} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* Document Checklist & Submission Timeline */}
      <section className="section-padding bg-brand-bg border-y border-brand-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                <FileCheck className="w-4 h-4 text-brand-teal" />
                <span>Preparation Guide</span>
              </div>
              <h2 className="text-3xl font-bold font-heading text-brand-navy mb-3">
                Admissions Document Checklist
              </h2>
              <p className="text-sm text-brand-text/75">
                Keep this checklist handy when preparing your application package for submission.
              </p>
            </div>

            <div className="card-premium p-6 sm:p-10 mb-8">
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-sm text-brand-text/85 pb-3 border-b border-brand-border/60 last:border-0 last:pb-0"
                  >
                    <CheckSquare className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Important Practicum Clearances:</span>
                  The Vulnerable Sector Check (VSC) and medical immunization forms must be submitted within 30 to 45 days of classes commencing to ensure placement clearance with clinical healthcare partner agencies.
                </div>
              </div>
            </div>

            <div className="text-center">
              <PrimaryButton to="/apply" size="lg">
                <span>Start Your Application Today</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have Questions About Foreign Credential Evaluation or Testing?"
        description="Our dedicated admissions advisors are available to assess your documents and help you find the quickest pathway to enrolment."
        primaryAction={{ label: 'Contact Admissions', href: '/contact' }}
        secondaryAction={{ label: 'Explore Programs', href: '/programs' }}
      />
    </>
  );
}
