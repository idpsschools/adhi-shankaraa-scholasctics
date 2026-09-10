import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { navLinks, IMG } from '../data/societyData.js';

const activeLinkClass =
  'whitespace-nowrap transition-colors bg-primary text-on-primary font-label-md text-label-md rounded-md px-space-sm py-space-2xs shadow-sm';
const linkClass =
  'whitespace-nowrap font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-space-xs py-space-2xs';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on Escape; lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Move focus into the freshly opened panel.
    menuRef.current?.querySelector('a, button')?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  // Auto-close if the viewport grows to the desktop breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => event.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-secondary/20 shadow-[0_2px_12px_rgba(59,18,89,0.06)]">
      <div className="shell h-20 flex items-center justify-between gap-space-sm">
        <a
          href="#top"
          className="flex items-center gap-space-sm min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 border-secondary/60 shadow-sm flex items-center justify-center bg-primary">
            <img
              alt="Adhi Shankaraa Scholastics Seal Logo"
              className="w-full h-full object-contain"
              src={IMG.societySeal}
              width="48"
              height="48"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-[15px] xs:text-[16px] sm:text-[18px] md:text-headline-sm text-primary font-bold leading-tight tracking-tight">
              Adhi Shankaraa Scholastics
            </span>
            <span className="block font-label-caps text-[9px] xs:text-[10px] md:text-label-caps text-secondary font-semibold tracking-wider uppercase mt-space-3xs truncate">
              Educational Supplies &amp; Institutional Services
            </span>
          </div>
        </a>

        <div className="flex items-center gap-space-md shrink-0">
          <nav className="hidden lg:flex items-center gap-space-sm xl:gap-space-md">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                {...(index === 0 ? { 'aria-current': 'page' } : {})}
                className={index === 0 ? activeLinkClass : linkClass}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-sm">
            <a
              className="hidden lg:inline-flex whitespace-nowrap items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-space-md py-space-xs rounded-md shadow-md hover:bg-primary-container hover:-translate-y-0.5 border border-secondary/30 transition-all duration-200"
              href="#contact"
            >
              Get in Touch
            </a>
            <a
              className="hidden lg:flex w-9 h-9 rounded-full bg-surface-container border border-secondary/40 items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
              href="#contact"
              aria-label="Email Adhi Shankaraa Scholastics"
            >
              <Icon name="mail" className="text-[20px]" />
            </a>

            {/* Mobile / tablet menu toggle */}
            <button
              ref={toggleRef}
              type="button"
              className="lg:hidden w-11 h-11 -mr-1.5 rounded-full flex items-center justify-center text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="text-[26px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop — blocks interaction with the page behind the panel. */}
      <div
        className={`lg:hidden fixed inset-0 top-20 z-40 bg-on-surface/30 backdrop-blur-[2px] transition-opacity duration-200 ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Slide-down mobile / tablet navigation panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden absolute left-0 right-0 top-20 z-50 origin-top border-b border-secondary/20 bg-surface-container-lowest shadow-[0_16px_32px_rgba(59,18,89,0.12)] transition-[opacity,transform] duration-200 ease-out ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav
          className="px-4 xs:px-layout-margin-mobile py-space-md flex flex-col gap-space-3xs"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              {...(index === 0 ? { 'aria-current': 'page' } : {})}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-md px-space-sm py-space-sm transition-colors"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-space-2xs inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-md shadow-md hover:bg-primary-container border border-secondary/30 transition-colors"
            href="#contact"
            onClick={closeMenu}
          >
            <Icon name="mail" className="text-[18px] text-secondary-container" />
            <span>Get in Touch</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
