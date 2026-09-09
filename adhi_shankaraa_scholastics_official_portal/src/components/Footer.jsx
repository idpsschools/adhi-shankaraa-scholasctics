import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { navLinks, IMG } from '../data/societyData.js';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary mt-space-4xl border-t-2 border-secondary shadow-lg">
      <div className="shell py-space-3xl">
        <Reveal as="div" className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-2xl border-b border-primary-container">
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-secondary bg-surface-container-lowest flex items-center justify-center">
                <img
                  alt="Society Seal"
                  className="w-full h-full object-contain"
                  src={IMG.societySeal}
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
              </div>
              <span className="font-headline-sm text-headline-sm text-surface-bright font-bold">
                Adhi Shankaraa Scholastics
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container">
              An education-focused company supporting modern schooling through educational licensing, scholastic services, certification, and institutional partnerships, with a commitment to quality education and the development of well-rounded learning environments across Andhra Pradesh.
            </p>
            <div className="flex flex-col gap-space-3xs pt-space-xs">
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold">
                Corporate Credentials
              </span>
              <span className="font-body-sm text-body-sm text-surface-bright">
                Educational Licensing & Scholastic Services
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container">
                Trademark Licensing · Certification · Institutional Support
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold">
              Institutional Association
            </span>
            <div className="flex flex-col gap-space-2xs">
              <span className="font-headline-sm text-[16px] text-surface-bright font-bold">
                Educational Licensing & Scholastic Services:
              </span>
              <p className="font-body-sm text-body-sm text-surface-bright font-semibold">
                International Delhi Public School, Cherukupalli
              </p>
              <p className="font-body-sm text-body-sm text-secondary-fixed">CBSE Affiliation No. 130739</p>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-2xs">
              <div className="flex flex-col gap-space-3xs">
                <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold">
                  Registered Administrative Office
                </span>
                <p className="font-body-sm text-body-sm text-surface-bright font-semibold">
                  Adhi Shankaraa Scholastics
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  AREPALLI ROAD, PONNAPALLI(V), CHERUKUPALLI (M), BAPTLA (DT) ANDHRA PRADESH -INDIA,
                  PIN 522309
                </p>
              </div>
              <div className="flex flex-col gap-space-3xs pt-space-xs border-t border-secondary/20">
                <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold">
                  Contact
                </span>
                <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-primary-container">
                  <a
                    className="inline-flex items-center gap-space-2xs hover:text-secondary-fixed transition-colors text-surface-bright"
                    href="tel:+917075164143"
                  >
                    <Icon name="call" className="text-[16px] text-secondary-fixed shrink-0" />
                    <span>+91- 7075164143</span>
                  </a>
                  <a
                    className="flex items-center gap-space-2xs hover:text-secondary-fixed transition-colors text-surface-bright min-w-0"
                    href="mailto:adhishankaraascholasticswork@gmail.com"
                  >
                    <Icon name="mail" className="text-[16px] text-secondary-fixed shrink-0" />
                    <span className="break-all">adhishankaraascholasticswork@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold">
              Navigation
            </span>
            <div className="flex flex-col gap-space-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="font-label-md text-label-md text-surface-bright/80 hover:text-secondary-fixed transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
          <p className="font-body-sm text-body-sm text-on-primary-container">
            © 2024 Adhi Shankaraa Scholastics. All statutory rights reserved.
          </p>
          <p className="font-label-sm text-label-sm text-secondary-fixed">
            Managed in accordance with Andhra Pradesh Societies Registration Act, 2001.
          </p>
        </div>
      </div>
    </footer>
  );
}
