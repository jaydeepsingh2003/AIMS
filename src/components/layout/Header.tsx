import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, GraduationCap, ArrowRight } from 'lucide-react';
import { mainNavigation, moreNavigation } from '../../data/navigation';
import { siteInfo } from '../../data/site';
import { PrimaryButton } from '../common/PrimaryButton';
import { cn } from '../../lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isMoreActive = moreNavigation.some((item) => location.pathname === item.href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-brand-border">
      {/* Top Bar for Contact & Ontario Info */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-site mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`tel:${siteInfo.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>{siteInfo.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href={`mailto:${siteInfo.email}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-teal" />
              <span>{siteInfo.email}</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-brand-teal" />
              <span>Stoney Creek, Ontario, Canada</span>
            </span>
          </div>
          <div className="text-[11px] font-medium tracking-wide text-brand-lavender/90">
            Registered Career College in Ontario
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* College Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group focus-visible:outline-brand-blue">
            <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md group-hover:bg-brand-navy transition-colors">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-brand-navy tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                AIMS
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-blue leading-tight">
                Healthcare College
              </span>
              <span className="text-[10px] text-brand-text/60 italic leading-tight">
                A Way to Success
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-brand-blue',
                    isActive
                      ? 'text-brand-blue bg-brand-lavender/60 font-semibold'
                      : 'text-brand-text/80 hover:text-brand-blue hover:bg-slate-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-brand-blue',
                  isMoreActive || moreDropdownOpen
                    ? 'text-brand-blue bg-brand-lavender/60 font-semibold'
                    : 'text-brand-text/80 hover:text-brand-blue hover:bg-slate-50'
                )}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={cn('w-4 h-4 transition-transform duration-200', moreDropdownOpen && 'rotate-180')}
                />
              </button>

              {moreDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-border py-2 z-50 animate-fade-in"
                  role="menu"
                >
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      role="menuitem"
                      className={cn(
                        'block px-4 py-2.5 text-sm transition-colors hover:bg-brand-lavender/40 hover:text-brand-blue',
                        location.pathname === item.href
                          ? 'text-brand-blue font-semibold bg-brand-lavender/30'
                          : 'text-brand-text/80'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Action: Apply Now */}
          <div className="hidden lg:flex items-center gap-3">
            <PrimaryButton to="/apply" size="md">
              Apply Now
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/apply"
              className="text-xs font-semibold bg-brand-blue text-white px-3 py-1.5 rounded-lg hover:bg-brand-navy transition-colors"
            >
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors focus-visible:outline-brand-blue"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2.5 rounded-lg text-base font-medium transition-colors',
                    isActive
                      ? 'text-brand-blue bg-brand-lavender/60 font-semibold'
                      : 'text-brand-text/80 hover:text-brand-blue hover:bg-slate-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-2 pb-1 border-t border-brand-border/60 mt-2">
              <span className="px-4 text-xs font-bold text-brand-navy/60 uppercase tracking-wider">
                Explore More
              </span>
            </div>

            {moreNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-blue bg-brand-lavender/60 font-semibold'
                      : 'text-brand-text/75 hover:text-brand-blue hover:bg-slate-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 mt-2">
              <Link
                to="/apply"
                className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-navy text-white py-3 rounded-xl font-semibold shadow-md transition-colors"
              >
                <span>Apply Now for Next Intake</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
