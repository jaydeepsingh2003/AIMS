import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  Heart,
  Users,
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { ProgramCard } from '../components/cards/ProgramCard';
import { ScheduleCard } from '../components/cards/ScheduleCard';
import { CareerPathCard } from '../components/cards/CareerPathCard';
import { RequirementCard } from '../components/cards/RequirementCard';
import { PageMeta } from '../components/feedback/PageMeta';
import { programs } from '../data/programs';
import { careerPaths } from '../data/careers';
import { admissionRequirements } from '../data/admissions';

export function HomePage() {
  const pswProgram = programs[0];

  return (
    <>
      <PageMeta
        title="Home"
        description="AIMS Healthcare College in Ontario offers career-focused healthcare training, featuring our Personal Support Worker (PSW) Diploma with flexible schedules."
      />

      {/* 1. Hero Section - Exact Reference Match with 100% Fully Visible Banner */}
      <section className="relative w-full bg-gradient-to-r from-[#eef2fa] via-[#f4f7fc] to-[#eef2fa] overflow-hidden">
        {/* Desktop & Tablet Banner Container (100% visible, zero cropping, full fidelity) */}
        <div className="relative w-full max-w-[1920px] mx-auto select-none">
          {/* Main Hero Banner Image */}
          <img
            src="/images/hero-banner.png"
            alt="AIMS Healthcare College - Build a Rewarding Career in Healthcare"
            className="w-full h-auto block"
            loading="eager"
            decoding="async"
          />

          {/* Interactive Clickable Overlays mapped to button & card positions */}
          <div className="absolute inset-0">
            {/* APPLY NOW Button Hotspot */}
            <Link
              to="/apply"
              className="absolute rounded-full transition-all duration-200 hover:ring-2 hover:ring-white/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer"
              style={{
                left: '5.4%',
                top: '59.2%',
                width: '15.4%',
                height: '9.0%',
              }}
              title="Apply Now for Next Intake"
              aria-label="Apply Now for Next Intake"
            >
              <span className="sr-only">Apply Now</span>
            </Link>

            {/* EXPLORE PROGRAMS Button Hotspot */}
            <Link
              to="/programs"
              className="absolute rounded-full transition-all duration-200 hover:ring-2 hover:ring-brand-blue/50 hover:bg-brand-blue/[0.04] focus:outline-none focus:ring-2 focus:ring-brand-navy cursor-pointer"
              style={{
                left: '21.4%',
                top: '59.2%',
                width: '16.6%',
                height: '9.0%',
              }}
              title="Explore Healthcare Programs"
              aria-label="Explore Healthcare Programs"
            >
              <span className="sr-only">Explore Programs</span>
            </Link>

            {/* 4 Stat Cards Hotspots */}
            <Link
              to="/programs/personal-support-worker"
              className="absolute rounded-2xl transition-all duration-200 hover:bg-brand-blue/[0.04] cursor-pointer"
              style={{ left: '5.2%', top: '71.5%', width: '9.8%', height: '21.0%' }}
              title="400+ Theory Hours"
              aria-label="400+ Theory Hours - Comprehensive learning"
            />
            <Link
              to="/programs/personal-support-worker"
              className="absolute rounded-2xl transition-all duration-200 hover:bg-brand-blue/[0.04] cursor-pointer"
              style={{ left: '15.6%', top: '71.5%', width: '9.8%', height: '21.0%' }}
              title="300+ Practicum Hours"
              aria-label="300+ Practicum Hours - Hands-on experience"
            />
            <Link
              to="/programs/personal-support-worker"
              className="absolute rounded-2xl transition-all duration-200 hover:bg-brand-blue/[0.04] cursor-pointer"
              style={{ left: '26.0%', top: '71.5%', width: '9.8%', height: '21.0%' }}
              title="Flexible Study Options"
              aria-label="Flexible Study Options - Day, Evening & Weekend"
            />
            <Link
              to="/career-opportunities"
              className="absolute rounded-2xl transition-all duration-200 hover:bg-brand-blue/[0.04] cursor-pointer"
              style={{ left: '36.4%', top: '71.5%', width: '9.8%', height: '21.0%' }}
              title="Career Opportunities Across Ontario"
              aria-label="Career Opportunities Across Ontario"
            />
          </div>
        </div>

        {/* Mobile Action Buttons (< 640px) for optimal touch convenience */}
        <div className="block sm:hidden px-4 py-4 bg-white border-b border-brand-border/60">
          <div className="flex flex-col gap-2.5">
            <PrimaryButton to="/apply" size="md" fullWidth className="!rounded-full shadow-md">
              <span>Apply Now for Next Intake</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </PrimaryButton>
            <PrimaryButton to="/programs" variant="outline" size="md" fullWidth className="!rounded-full !border-brand-navy/20 !text-brand-navy">
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </PrimaryButton>
          </div>
        </div>

        {/* Semantic HTML for SEO and Accessibility */}
        <div className="sr-only">
          <h1>AIMS Healthcare College - Build a Rewarding Career in Healthcare</h1>
          <p>
            Gain the skills, knowledge and hands-on experience to make a real difference in people's lives. Join AIMS Healthcare College and take the next step towards a meaningful career as a Personal Support Worker (PSW) in Ontario, Canada.
          </p>
          <ul>
            <li>400+ Theory Hours - Comprehensive learning</li>
            <li>300+ Practicum Hours - Hands-on experience</li>
            <li>Flexible Study Options - Day, Evening & Weekend</li>
            <li>Career Opportunities - Across Ontario</li>
          </ul>
        </div>
      </section>

      {/* 2. Key Value Propositions / College Introduction */}
      <section className="py-16 bg-white border-b border-brand-border">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border/60 hover:border-brand-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Whether you need daytime, evening, or weekend classes, our schedules are built to accommodate your family and work responsibilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border/60 hover:border-brand-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-teal mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Hands-on Clinical Practicum
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Gain real-world patient care experience with 300 hours of clinical placement in licensed Ontario healthcare and long-term care facilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border/60 hover:border-brand-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Supportive Community
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Small class sizes and experienced clinical preceptors dedicated to your personal, academic, and career success from day one.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Featured Personal Support Worker Program */}
      <section className="section-padding bg-brand-bg">
        <Container>
          <SectionHeading
            title="Featured Diploma Program"
            subtitle="Prepare for one of Ontario's most in-demand and impactful healthcare careers."
          />
          <ProgramCard program={pswProgram} />
        </Container>
      </section>

      {/* 4. Flexible Study Schedules */}
      <section className="section-padding bg-white border-t border-brand-border">
        <Container>
          <SectionHeading
            title="Study Schedules Built Around Your Life"
            subtitle="Choose the timetable that best fits your commitments without compromising instructional quality."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {pswProgram.schedules.map((schedule, idx) => (
              <ScheduleCard key={idx} schedule={schedule} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Career Pathways */}
      <section className="section-padding bg-brand-lavender/30 border-y border-brand-border">
        <Container>
          <SectionHeading
            title="Rewarding Career Pathways for PSW Graduates"
            subtitle="Explore the diverse healthcare and community settings where Ontario Personal Support Workers make a difference."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {careerPaths.map((career, idx) => (
              <CareerPathCard key={career.id} career={career} index={idx} />
            ))}
          </div>

          <div className="text-center">
            <PrimaryButton to="/career-opportunities" variant="outline" size="md">
              <span>Explore All Career Opportunities</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </PrimaryButton>
          </div>
        </Container>
      </section>

      {/* 6. Admissions Requirements Preview */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Simple, Transparent Admissions"
            subtitle="Are you ready for your next educational chapter? Review our key prerequisite areas below."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {admissionRequirements.slice(0, 3).map((req, idx) => (
              <RequirementCard key={req.id} requirement={req} index={idx} />
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold text-brand-navy font-heading">
                Need details on testing, medical clearances, or VSC?
              </h4>
              <p className="text-sm text-brand-text/70">
                View our complete list of 6 prerequisite categories and admissions documentation checklist.
              </p>
            </div>
            <PrimaryButton to="/admissions" size="md">
              View Full Admissions Guide
            </PrimaryButton>
          </div>
        </Container>
      </section>

      {/* 7. Final Enrolment CTA */}
      <CTASection
        title="Begin Your Journey in Healthcare Today"
        description="Connect with our friendly admissions team in Stoney Creek, Ontario to discuss course schedules, entry requirements, and upcoming class start dates."
        primaryAction={{ label: 'Apply for Admission', href: '/apply' }}
        secondaryAction={{ label: 'Contact Campus Office', href: '/contact' }}
      />
    </>
  );
}
