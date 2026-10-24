import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { PageMeta } from '../components/feedback/PageMeta';
import { aboutData } from '../data/about';
import { ShieldCheck, Heart, Sparkles, Target, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about AIMS Healthcare College, our mission, clinical faculty, and dedication to excellence in Ontario healthcare education."
      />

      <PageHero
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
      />

      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      </Container>

      {/* College Story & History */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Our Roots in Ontario</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy">
                {aboutData.history.title}
              </h2>

              {aboutData.history.content.map((paragraph, idx) => (
                <p key={idx} className="text-brand-text/80 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-brand-border/60 flex items-center gap-6 text-sm font-semibold text-brand-navy">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                  <span>Licensed Career College</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span>Student-Centred Culture</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/about-heritage.jpg"
                  alt="Healthcare professionals and nursing students collaborating in a clinical training environment"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-4 bg-white border-t border-brand-border">
                  <p className="text-xs text-brand-text/70 italic text-center">
                    Dedicated instruction environments designed for practical, real-world healthcare learning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Core Pillars */}
      <section className="section-padding bg-brand-bg border-y border-brand-border">
        <Container>
          <SectionHeading
            title="Our Mission & Principles"
            subtitle={aboutData.mission.statement}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.mission.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-premium p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-lavender/60 flex items-center justify-center text-brand-blue mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-text/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team & Academic Faculty */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Our Faculty & Student Support"
            subtitle="Experienced educators committed to providing compassionate mentorship and career guidance."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutData.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-premium p-6 sm:p-8 border border-brand-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-brand-navy">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-brand-text/80 leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.credentials && (
                  <div className="pt-3 border-t border-brand-border/60 text-xs font-medium text-brand-navy/70">
                    Credentials: {member.credentials}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Our Healthcare Programs?"
        description="Discover how our Personal Support Worker Diploma can prepare you for a rewarding career in Ontario."
        primaryAction={{ label: 'View Programs', href: '/programs' }}
        secondaryAction={{ label: 'Check Admission Criteria', href: '/admissions' }}
      />
    </>
  );
}
