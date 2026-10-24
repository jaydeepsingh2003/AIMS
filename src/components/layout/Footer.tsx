import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { siteInfo } from '../../data/site';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-10 border-t border-brand-navy/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: College Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-white tracking-tight block">
                  AIMS
                </span>
                <span className="text-xs text-brand-lavender font-medium tracking-wider uppercase block">
                  Healthcare College
                </span>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Dedicated to preparing passionate individuals for essential, rewarding careers in healthcare across Ontario with compassionate, practical education.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-teal font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Career College in Ontario</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-base font-semibold font-body text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/75 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/community-support"
                  className="text-white/75 hover:text-white hover:underline transition-colors"
                >
                  Community Support
                </Link>
              </li>
              <li>
                <Link
                  to="/policies/sexual-violence-harassment"
                  className="text-white/75 hover:text-white hover:underline transition-colors"
                >
                  Sexual Violence & Harassment Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Office Hours */}
          <div>
            <h3 className="text-base font-semibold font-body text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-teal" />
              <span>Office Hours</span>
            </h3>
            <ul className="space-y-1.5 text-sm text-white/75">
              {siteInfo.hours.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center text-xs py-0.5 border-b border-white/10">
                  <span className="font-medium text-white/90">{item.day}</span>
                  <span className={item.time === 'Closed' ? 'text-amber-400 font-semibold' : 'text-white/70'}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h3 className="text-base font-semibold font-body text-white uppercase tracking-wider mb-4">
              Campus Contact
            </h3>
            <address className="not-italic text-sm text-white/75 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>{siteInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a
                  href={`tel:${siteInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteInfo.email}
                </a>
              </div>
            </address>

            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="font-medium text-white block mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-brand-teal" />
                Your Success Is Our Priority
              </span>
              Flexible day, evening & weekend schedules to match your lifestyle.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>{siteInfo.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/policies/sexual-violence-harassment" className="hover:text-white transition-colors">
              College Policies
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact & Directions
            </Link>
            <span>•</span>
            <span>Ontario, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
