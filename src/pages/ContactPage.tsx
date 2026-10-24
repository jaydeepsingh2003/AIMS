import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';
import { PageMeta } from '../components/feedback/PageMeta';
import { siteInfo } from '../data/site';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteInfo.address
  )}`;

  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with AIMS Healthcare College in Stoney Creek, Ontario. Inquire about admissions, program schedules, tuition, and directions."
      />

      <PageHero
        title="Contact Our Campus"
        subtitle="We're here to answer your questions about our Personal Support Worker Diploma, class timetables, and admissions steps."
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
      </Container>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Campus Details & Office Hours */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="card-premium p-6 sm:p-8">
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4">
                  Campus Location & Details
                </h3>

                <address className="not-italic space-y-4 text-sm text-brand-text/80 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block mb-0.5">Campus Address</span>
                      <span>{siteInfo.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-teal/15 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block mb-0.5">Telephone Inquiries</span>
                      <a
                        href={`tel:${siteInfo.phone.replace(/[^0-9]/g, '')}`}
                        className="text-brand-blue hover:underline font-medium"
                      >
                        {siteInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block mb-0.5">General Email</span>
                      <a
                        href={`mailto:${siteInfo.email}`}
                        className="text-brand-blue hover:underline font-medium"
                      >
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>
                </address>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-brand-blue/30 text-brand-blue font-semibold text-xs hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>

              {/* Office Hours Card */}
              <div className="card-premium p-6 sm:p-8">
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <span>Campus Office Hours</span>
                </h3>

                <ul className="space-y-2 text-sm">
                  {siteInfo.hours.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-1.5 border-b border-brand-border/60 last:border-0"
                    >
                      <span className="font-medium text-brand-navy">{h.day}</span>
                      <span
                        className={
                          h.time === 'Closed'
                            ? 'font-semibold text-rose-600'
                            : 'text-brand-text/75'
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-brand-text/60 mt-4 leading-relaxed italic">
                  Note: In-person visits outside of scheduled hours can be arranged by appointment with an admissions advisor.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
