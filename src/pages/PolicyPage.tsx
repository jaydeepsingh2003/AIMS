import { useState } from 'react';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PageMeta } from '../components/feedback/PageMeta';
import { policies } from '../data/policies';
import { siteInfo } from '../data/site';
import {
  FileText,
  Download,
  ShieldCheck,
  Phone,
  Mail,
  ExternalLink,
  Printer,
  BookOpen,
  UserCheck,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

export function PolicyPage() {
  const policy = policies[0];
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');

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
                <span>Ontario Compliance & Student Safety Standard</span>
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

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap pt-2">
                <a
                  href={policy.pdfPath}
                  download="sexual-violence-harassment-action-plan.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-semibold text-sm shadow-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official PDF</span>
                </a>

                <a
                  href={policy.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border hover:bg-slate-50 text-brand-navy font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF in New Window</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border hover:bg-slate-50 text-brand-text/80 font-semibold text-sm transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>

            {/* Document Viewer Area with Toggle */}
            <div className="card-premium overflow-hidden border border-brand-border">
              {/* Header with View Tabs */}
              <div className="p-4 sm:p-6 bg-slate-50/80 border-b border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-lg font-bold font-heading text-brand-navy">
                    Official Action Plan Document
                  </h3>
                </div>

                {/* View Mode Toggle Buttons */}
                <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/60 self-start sm:self-auto text-xs font-semibold">
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      viewMode === 'pdf'
                        ? 'bg-white text-brand-navy shadow-sm'
                        : 'text-brand-text/70 hover:text-brand-navy'
                    }`}
                  >
                    PDF Viewer
                  </button>
                  <button
                    onClick={() => setViewMode('text')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      viewMode === 'text'
                        ? 'bg-white text-brand-navy shadow-sm'
                        : 'text-brand-text/70 hover:text-brand-navy'
                    }`}
                  >
                    Read Online
                  </button>
                </div>
              </div>

              {/* View Mode 1: PDF Viewer */}
              {viewMode === 'pdf' ? (
                <div className="p-4 sm:p-6 bg-white">
                  <div className="w-full h-[620px] rounded-xl overflow-hidden border border-brand-border bg-slate-100 relative">
                    <object
                      data={policy.pdfPath}
                      type="application/pdf"
                      className="w-full h-full block"
                    >
                      {/* Fallback iframe */}
                      <iframe
                        src={policy.pdfPath}
                        title="Sexual Violence and Harassment Action Plan PDF"
                        className="w-full h-full border-0"
                      >
                        <div className="p-8 text-center space-y-4">
                          <p className="text-sm text-brand-text/80">
                            Your browser does not support inline PDF viewing.
                          </p>
                          <a
                            href={policy.pdfPath}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue text-white text-sm font-semibold"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download PDF File Directly</span>
                          </a>
                        </div>
                      </iframe>
                    </object>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-brand-text/60 px-1">
                    <span>AIMS Healthcare College • Ontario Approved Policy</span>
                    <a
                      href={policy.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Full screen view</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                /* View Mode 2: In-Browser Formatted Policy Reader */
                <div className="p-6 sm:p-10 bg-white space-y-6 text-sm text-brand-text/85 leading-relaxed">
                  <div className="border-b border-brand-border pb-4">
                    <span className="text-xs uppercase font-bold text-brand-blue tracking-wider block mb-1">
                      AIMS Healthcare College
                    </span>
                    <h4 className="text-2xl font-bold font-heading text-brand-navy">
                      Sexual Violence and Harassment Action Plan
                    </h4>
                    <p className="text-xs text-brand-text/60 mt-1">
                      Official Institutional Policy • Stoney Creek, Ontario
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-teal" />
                      <span>1. Institutional Policy Statement</span>
                    </h5>
                    <p className="text-brand-text/80">
                      AIMS Healthcare College is committed to providing its students with an educational environment free from sexual violence and treating its students who report incidents of sexual violence with dignity and respect. The College has adopted the Sexual Violence Policy, which defines sexual violence and outlines training, reporting, investigative, and disciplinary responses to complaints of sexual violence made by its students on its campus or at one of its events and involves students.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-teal" />
                      <span>2. Definitions & Principles</span>
                    </h5>
                    <ul className="space-y-2 text-brand-text/80">
                      <li>
                        <strong>Complainant:</strong> The person making an allegation or reporting an incident of sexual violence or harassment.
                      </li>
                      <li>
                        <strong>Respondent:</strong> The person accused of engaging in sexual violence or harassment.
                      </li>
                      <li>
                        <strong>Consent:</strong> The active, direct, conscious, voluntary, and revocable agreement to engage in sexual activity. Consent cannot be inferred by silence or passivity, nor can it be given when an individual is incapacitated.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-brand-teal" />
                      <span>3. Designated Reporting Officer</span>
                    </h5>
                    <p className="text-brand-text/80 mb-3">
                      For the Sexual Violence Policy, any student at AIMS Healthcare College may file a report of an incident or complaint to <strong>Imran Qureshi</strong> in writing. However, students are encouraged to also speak directly with Imran Qureshi regarding any concerns they may have while understanding their right to pursue this Sexual Violence Policy.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-brand-border space-y-1 text-xs">
                      <div className="font-bold text-brand-navy">Imran Qureshi — Campus Administrator</div>
                      <div>AIMS Healthcare College • 309-800 Queenston Road, Stoney Creek, ON</div>
                      <div>Phone: (905) 525-5111 • Email: info@aimshealthcarecollege.com</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-brand-teal" />
                      <span>4. Support Services & Accommodations</span>
                    </h5>
                    <p className="text-brand-text/80 mb-2">
                      Regardless of whether a formal investigation or police complaint is initiated, AIMS Healthcare College will provide reasonable academic and personal safety accommodations for the complainant, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-brand-text/80">
                      <li>Academic scheduling adjustments and assignment deadline extensions.</li>
                      <li>Assistance in connecting with regional medical and psychological counseling services.</li>
                      <li>Implementation of mutual no-contact orders and on-campus safety protocols.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-brand-navy text-base mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span>5. Protection Against Reprisal</span>
                    </h5>
                    <p className="text-brand-text/80">
                      AIMS Healthcare College maintains strict zero tolerance for retaliation. Any reprisal, threat, or intimidation directed at an individual for making a report or participating in an investigation will result in immediate disciplinary measures, up to and including termination of employment or expulsion from the College.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Support Resources & Confidential Contact */}
            <div className="card-premium p-6 sm:p-8 bg-brand-bg border border-brand-border">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">
                Confidential Reporting & 24/7 Crisis Support
              </h3>
              <p className="text-sm text-brand-text/75 leading-relaxed mb-6">
                If you or someone you know at AIMS Healthcare College has experienced sexual harassment or violence, confidential support is available 24/7.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-brand-border space-y-1.5">
                  <span className="font-bold text-brand-navy block text-sm">Campus Contact</span>
                  <div className="flex items-center gap-2 text-brand-text/80">
                    <Phone className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{siteInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-text/80">
                    <Mail className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{siteInfo.email}</span>
                  </div>
                  <div className="text-[11px] text-brand-text/60 pt-1">
                    Designated Officer: Imran Qureshi
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border space-y-1.5">
                  <span className="font-bold text-brand-navy block text-sm">Ontario Crisis Line (24/7)</span>
                  <div className="text-brand-text/80">
                    Ontario Assaulted Women’s Helpline:
                  </div>
                  <div className="font-bold text-brand-blue text-sm">
                    1-866-863-0511 <span className="font-normal text-xs text-brand-text/60">(TTY: 1-866-863-7868)</span>
                  </div>
                  <div className="text-[11px] text-brand-text/60 pt-1">
                    Free, confidential, and accessible across Ontario
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
