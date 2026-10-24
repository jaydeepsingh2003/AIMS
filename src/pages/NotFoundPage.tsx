import { Container } from '../components/common/Container';
import { PageMeta } from '../components/feedback/PageMeta';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { GraduationCap, Home, BookOpen, Phone } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found (404)"
        description="The page you requested could not be found. Explore our healthcare programs and admissions information."
      />

      <section className="py-24 md:py-32 bg-white flex items-center justify-center min-h-[60vh]">
        <Container className="text-center max-w-xl">
          <div className="w-16 h-16 rounded-2xl bg-brand-lavender/80 text-brand-blue flex items-center justify-center mx-auto mb-6 shadow-sm">
            <GraduationCap className="w-9 h-9" />
          </div>

          <span className="text-sm font-bold uppercase tracking-wider text-brand-teal block mb-2">
            Error 404
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-brand-navy mb-4">
            Page Not Found
          </h1>

          <p className="text-base text-brand-text/75 leading-relaxed mb-8">
            The page you are looking for may have been moved, updated, or is temporarily unavailable. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryButton to="/" size="md">
              <Home className="w-4 h-4 mr-2" />
              <span>Return to Home</span>
            </PrimaryButton>

            <PrimaryButton to="/programs" variant="secondary" size="md">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Explore Programs</span>
            </PrimaryButton>

            <PrimaryButton to="/contact" variant="outline" size="md">
              <Phone className="w-4 h-4 mr-2" />
              <span>Contact Campus</span>
            </PrimaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
