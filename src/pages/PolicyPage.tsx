import { useState, useEffect } from 'react';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PageMeta } from '../components/feedback/PageMeta';
import { policies } from '../data/policies';
import { siteInfo } from '../data/site';
import {
  FileText,
  Download,
  AlertCircle,
  ShieldCheck,
  Phone,
  Mail,
  ExternalLink,
} from 'lucide-react';

export function PolicyPage() {
  const policy = policies[0];
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if PDF file exists on the server
    fetch(policy.pdfPath, { method: 'HEAD' })
      .then((res) => {
        setPdfAvailable(res.ok);
      })
      .catch(() => {
        setPdfAvailable(false);
      });
  }, [policy.pdfPath]);

  return (
    <>
      <PageMeta
        title="Sexual Violence & Harassment Action Plan"
        description="Official Sexual Violence and Harassment Action Plan policy and reporting protocol for students and staff at AIMS Healthcare College, Ontario."
      />

      <PageHero
        title={policy.title}
        subtitle="Our commitment to maintaining a safe, respectful, and violence-free academic learning environment for all students and staff."
      />

      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'College Policies' },
            { label: 'Sexual Violence Action Plan' },
          ]}
        />
      </Container>

      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Policy Overview Card */}
            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal" />
                <span>Ontario Compliance & Student Safety</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy mb-4">
                Policy Statement & Reporting Rights
              </h2>

              <p className="text-base text-brand-text/80 leading-relaxed mb-6">
                {policy.description}
              </p>

              <div className="p-4 rounded-xl bg-brand-lavender/40 border border-brand-border text-sm text-brand-text/85 space-y-2 mb-6">
                <div className="font-semibold text-brand-navy">
                  Key Principles of the Action Plan:
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-brand-text/80">
                  <li>Zero tolerance for any form of sexual violence, harassment, or coercion.</li>
                  <li>Immediate confidential support and accommodations for affected individuals.</li>
                  <li>Clear, fair investigation and reporting procedures without threat of reprisal.</li>
                  <li>Annual compliance reporting in accordance with the Ontario Ministry of Colleges and Universities requirements.</li>
                </ul>
              </div>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <a
                  href={policy.pdfPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-semibold text-sm shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Action Plan (PDF)</span>
                </a>

                <a
                  href={policy.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border hover:bg-slate-50 text-brand-navy font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF in New Tab</span>
                </a>
              </div>
            </div>

            {/* Embedded PDF Viewer Area */}
            <div className="card-premium overflow-hidden p-6 sm:p-8 border border-brand-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-heading text-brand-navy flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <span>Document Viewer</span>
                </h3>
                <span className="text-xs text-brand-text/60">
                  Document path: {policy.pdfPath}
                </span>
              </div>

              {pdfAvailable === false ? (
                <div className="p-8 rounded-xl bg-slate-50 border border-brand-border text-center space-y-3">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <p className="font-semibold text-brand-navy text-base">
                    Document Pending Upload
                  </p>
                  <p className="text-xs text-brand-text/70 max-w-md mx-auto">
                    The approved college policy document is expected at{' '}
                    <code className="bg-slate-200 px-1 py-0.5 rounded text-xs">{policy.pdfPath}</code>.
                    Please contact the college administration office for an official printed copy.
                  </p>
                </div>
              ) : (
                <div className="w-full h-[550px] rounded-xl overflow-hidden border border-brand-border bg-slate-100">
                  <iframe
                    src={policy.pdfPath}
                    title="Sexual Violence and Harassment Action Plan PDF"
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>

            {/* Support Resources & Confidential Contact */}
            <div className="card-premium p-6 sm:p-8 bg-brand-bg border border-brand-border">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Confidential Reporting & Support Services
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
                If you or someone you know at AIMS Healthcare College has experienced sexual harassment or violence, confidential support is available 24/7.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-brand-border space-y-1">
                  <span className="font-bold text-brand-navy block">Campus Contact</span>
                  <div className="flex items-center gap-2 text-brand-text/80">
                    <Phone className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{siteInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-text/80">
                    <Mail className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{siteInfo.email}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border space-y-1">
                  <span className="font-bold text-brand-navy block">Ontario Crisis Line (24/7)</span>
                  <div className="text-brand-text/80">
                    Ontario Assaulted Women’s Helpline:
                  </div>
                  <div className="font-bold text-brand-blue">
                    1-866-863-0511 (TTY: 1-866-863-7868)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
