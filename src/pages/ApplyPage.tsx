import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ApplicationForm } from '../components/forms/ApplicationForm';
import { PageMeta } from '../components/feedback/PageMeta';
import { siteInfo } from '../data/site';
import { CheckCircle2, ShieldCheck, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ApplyPage() {
  return (
    <>
      <PageMeta
        title="Apply Now"
        description="Submit your application for the Personal Support Worker (PSW) Diploma at AIMS Healthcare College in Ontario."
      />

      <PageHero
        title="Apply for Admission"
        subtitle="Take the next step toward a meaningful career in Ontario healthcare. Submit your application details below."
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Apply Now' }]} />
      </Container>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-8">
              <ApplicationForm />
            </div>

            {/* Right Column: Support & Step-by-Step Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Enrollment Steps Card */}
              <div className="card-premium p-6">
                <h3 className="text-lg font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                  <span>Enrolment Steps</span>
                </h3>

                <ol className="space-y-4 text-xs text-brand-text/80 relative border-l-2 border-brand-lavender pl-4 ml-2">
                  <li className="relative">
                    <span className="absolute -left-[23px] top-0 w-3 h-3 rounded-full bg-brand-blue border-2 border-white" />
                    <span className="font-semibold text-brand-navy block text-sm">
                      1. Submit Online Enquiry
                    </span>
                    Fill out the form with your program and preferred schedule format.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[23px] top-0 w-3 h-3 rounded-full bg-brand-blue border-2 border-white" />
                    <span className="font-semibold text-brand-navy block text-sm">
                      2. Advisor Consultation
                    </span>
                    Discuss prerequisite transcripts, testing, and clinical clearances with admissions.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[23px] top-0 w-3 h-3 rounded-full bg-brand-blue border-2 border-white" />
                    <span className="font-semibold text-brand-navy block text-sm">
                      3. Enrolment & Clearances
                    </span>
                    Complete standard registration agreement, VSC screening, and immunizations.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[23px] top-0 w-3 h-3 rounded-full bg-brand-teal border-2 border-white" />
                    <span className="font-semibold text-brand-navy block text-sm">
                      4. Begin Classes
                    </span>
                    Start theory training and prepare for your hands-on clinical practicum!
                  </li>
                </ol>
              </div>

              {/* Need Assistance Card */}
              <div className="card-premium p-6 bg-brand-lavender/30 border-brand-border">
                <h4 className="text-base font-bold text-brand-navy font-heading mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-blue" />
                  <span>Questions Before Applying?</span>
                </h4>
                <p className="text-xs text-brand-text/75 leading-relaxed mb-4">
                  Unsure whether you qualify under high school or mature student status? Call our admissions team directly:
                </p>
                <a
                  href={`tel:${siteInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors mb-3"
                >
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>{siteInfo.phone}</span>
                </a>
                <Link
                  to="/admissions"
                  className="text-xs font-semibold text-brand-navy underline hover:text-brand-blue"
                >
                  Review Admissions Criteria & Checklist →
                </Link>
              </div>

              {/* Regulatory Notice */}
              <div className="p-4 rounded-xl bg-slate-50 border border-brand-border text-xs text-brand-text/70 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  AIMS Healthcare College is registered and compliant under the Ontario Ministry of Colleges and Universities framework.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
