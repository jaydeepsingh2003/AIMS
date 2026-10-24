import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { PageMeta } from '../components/feedback/PageMeta';
import { communityIntro, communityServices } from '../data/community';
import { Heart } from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { cn } from '../lib/utils';

export function CommunitySupportPage() {
  return (
    <>
      <PageMeta
        title="Community Support"
        description="Learn how AIMS Healthcare College Personal Support Workers empower Ontario communities across retirement residences, local programs, and specialized care."
      />

      <PageHero
        title={communityIntro.title}
        subtitle={communityIntro.subtitle}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Community Support' }]} />
      </Container>

      {/* Intro Context */}
      <section className="py-12 bg-white border-b border-brand-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
              <Heart className="w-4 h-4 text-rose-500" />
              <span>Serving Ontario Families</span>
            </div>
            <h2 className="text-3xl font-bold font-heading text-brand-navy">
              Compassionate Care at the Heart of Every Community
            </h2>
            <p className="text-base text-brand-text/80 leading-relaxed">
              {communityIntro.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Alternating Image + Text Sections */}
      <div className="space-y-0">
        {communityServices.map((service, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section
              key={service.id}
              className={cn(
                'section-padding',
                isEven ? 'bg-brand-bg border-y border-brand-border' : 'bg-white'
              )}
            >
              <Container>
                <div
                  className={cn(
                    'grid md:grid-cols-2 gap-12 lg:gap-16 items-center',
                    service.imagePosition === 'right' &&
                      'md:[direction:rtl] md:[&>*]:text-left md:[&>*]:[direction:ltr]'
                  )}
                >
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: service.imagePosition === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-80 sm:h-96 object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: service.imagePosition === 'left' ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                  >
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal">
                      Focus Area 0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-heading">
                      {service.title}
                    </h3>
                    <p className="text-base text-brand-text/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <PrimaryButton
                        to="/programs/personal-support-worker"
                        variant="outline"
                        size="sm"
                      >
                        Learn How We Train for This Role
                      </PrimaryButton>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <CTASection
        title="Make a Lasting Impact in Your Community"
        description="Enroll in our Personal Support Worker program and prepare for an essential role supporting Ontario residents."
        primaryAction={{ label: 'Apply for Admission', href: '/apply' }}
        secondaryAction={{ label: 'Contact Campus Office', href: '/contact' }}
      />
    </>
  );
}
