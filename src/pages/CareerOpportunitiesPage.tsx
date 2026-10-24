import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { CareerPathCard } from '../components/cards/CareerPathCard';
import { CTASection } from '../components/common/CTASection';
import { PageMeta } from '../components/feedback/PageMeta';
import { careerIntro, careerPaths } from '../data/careers';
import { Building2, Home, HeartPulse, CheckCircle2, ShieldAlert } from 'lucide-react';

export function CareerOpportunitiesPage() {
  const settingsDetailed = [
    {
      title: 'Long-Term Care Homes & Nursing Residences',
      icon: <Building2 className="w-6 h-6 text-brand-blue" />,
      description:
        'In long-term care settings, PSWs work alongside Registered Nurses and Registered Practical Nurses to care for residents requiring ongoing 24/7 assistance. Daily tasks involve personal grooming, mobility assistance, medication reminders, mealtime companionship, and fostering social connection.',
      benefits: ['Consistent scheduled shift rotations', 'Collaborative multidisciplinary team environment', 'Deep, meaningful relationships with residents'],
    },
    {
      title: 'Home Care & Community Agencies',
      icon: <Home className="w-6 h-6 text-brand-teal" />,
      description:
        'Home care gives you the autonomy to support clients in their personal residences across local communities. PSWs help individuals maintain independence, recover from illnesses or surgery, and remain safely in their own homes for as long as possible.',
      benefits: ['High scheduling flexibility (full-time, part-time, casual)', 'One-on-one personalized care experience', 'Growing demand in suburban and rural Ontario'],
    },
    {
      title: 'Hospitals & Specialized Complex Care',
      icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
      description:
        'In acute care, rehabilitation hospitals, and complex continuing care facilities, PSWs assist medical nursing teams with vitals monitoring support, transfers, ambulation, and patient hygiene in fast-paced medical environments.',
      benefits: ['Exposure to complex clinical healthcare environments', 'Opportunity to work alongside specialized medical professionals', 'Fast-paced, dynamic learning experience'],
    },
  ];

  return (
    <>
      <PageMeta
        title="Career Opportunities for PSWs"
        description="Discover diverse healthcare employment settings for Personal Support Worker graduates in Ontario, including Long-Term Care, Home Care, and Hospitals."
      />

      <PageHero
        title={careerIntro.title}
        subtitle={careerIntro.description}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Career Opportunities' }]} />
      </Container>

      {/* Overview & High Demand */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy">
              Essential Healthcare Professionals Across Ontario
            </h2>
            <p className="text-base text-brand-text/80 leading-relaxed">
              {careerIntro.extendedDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((career, idx) => (
              <CareerPathCard key={career.id} career={career} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Work Settings */}
      <section className="section-padding bg-brand-bg border-y border-brand-border">
        <Container>
          <SectionHeading
            title="Work Environments in Detail"
            subtitle="Understand the everyday responsibilities and distinct advantages of each major care setting."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {settingsDetailed.map((setting, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-premium p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lavender/60 flex items-center justify-center shrink-0">
                    {setting.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy">
                    {setting.title}
                  </h3>
                </div>

                <p className="text-sm text-brand-text/80 leading-relaxed mb-5">
                  {setting.description}
                </p>

                <div className="bg-brand-bg rounded-xl p-4 border border-brand-border/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-2">
                    Key Highlights & Advantages:
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-text/75">
                    {setting.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Regulatory & Career Note */}
      <section className="py-10 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-slate-50 border border-brand-border/80 text-xs text-brand-text/70 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-brand-navy block mb-0.5">Professional Outcomes Notice:</span>
              Employment availability, wage rates, and shift options vary by employer, location, and individual candidate qualifications. While Ontario experiences strong structural demand for personal support workers, AIMS Healthcare College does not guarantee specific employment positions or salary levels upon graduation.
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Prepare for Your Healthcare Career?"
        description="Our Personal Support Worker program gives you the exact training and practicum needed to enter these care settings with confidence."
        primaryAction={{ label: 'Apply for Admission', href: '/apply' }}
        secondaryAction={{ label: 'Explore PSW Program Details', href: '/programs/personal-support-worker' }}
      />
    </>
  );
}
