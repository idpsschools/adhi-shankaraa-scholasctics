import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { heroStats, IMG } from '../data/societyData.js';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface pb-space-3xl lg:pb-space-4xl border-b border-outline-variant/30">
      <div className="shell pt-space-xl lg:pt-space-2xl">
        {/* Dignified Pre-Title Accreditation Badge */}
        <Reveal as="div" variant="fade" className="flex flex-wrap items-center gap-space-xs mb-space-md">
          <span className="inline-flex items-center gap-space-2xs bg-primary/5 border border-secondary/40 px-space-sm py-space-3xs rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-caps text-label-caps text-primary font-bold uppercase tracking-widest">
              Scholastic Licensing & Brand Services
            </span>
          </span>
          <span className="text-secondary font-label-caps text-label-caps">♦</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">
            Trademark Licensing, Certification & Institutional Support
          </span>
        </Reveal>

        {/* Main Editorial Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <Reveal as="div" className="lg:col-span-8 flex flex-col">
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-[1.15] mb-space-sm text-balance">
              Adhi Shankaraa Scholastics
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant font-normal leading-relaxed mb-space-md max-w-3xl">
              A registered company, Adhi Shankaraa Scholastics, based in Cherukupalli, Andhra Pradesh, engaged in providing legal, certification, and licensing services, including the licensing of trademarks and franchises to International Delhi Public School, Cherukupalli,.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-space-sm pt-space-xs">
              <a
                className="inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-md shadow-md hover:bg-primary-container hover:-translate-y-0.5 border border-secondary/40 transition-all duration-200"
                href="#contact"
              >
                <span>Get in Touch</span>
                <Icon name="arrow_forward" className="text-[18px] text-secondary-container" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary font-label-md text-label-md px-space-md py-space-sm rounded-md border border-outline-variant/60 shadow-sm hover:border-secondary hover:-translate-y-0.5 transition-all duration-200"
                href="#school"
              >
                <Icon name="school" className="text-[18px] text-secondary" />
                <span>Explore Affiliated School</span>
              </a>
            </div>
          </Reveal>
          <Reveal
            as="div"
            variant="fade"
            delay={120}
            className="lg:col-span-4 flex flex-col justify-end h-full pt-space-md lg:pt-0"
          >
            <div className="bg-surface-container-lowest p-space-md rounded-xl border border-secondary/30 shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
              <div className="flex items-center gap-space-xs text-secondary">
                <Icon name="verified" className="text-[20px]" />
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">
                  Educational Licensing & Brand Management
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                A registered company engaged in legal documentation, certification, and licensing services, including the authorized licensing of educational trademarks and franchises. Supporting associated educational institutions through structured licensing and royalty arrangements.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual: School Main Entrance Photography */}
        <Reveal as="div" variant="fade" className="mt-space-2xl relative">
          <div className="w-full rounded-xl overflow-hidden shadow-2xl bg-surface-container-high relative aspect-[4/3] xs:aspect-[16/10] md:aspect-[16/9] max-h-[580px] border border-outline-variant/40">
            <img
              alt="International Delhi Public School, Cherukupalli Campus Entrance Gate — Managed by Adhi Shankaraa Scholastics"
              className="w-full h-full object-cover object-center"
              src={IMG.heroCampus}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            {/* Bottom Floating Caption Card */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-auto md:max-w-xl bg-primary/95 text-on-primary backdrop-blur-md p-space-sm md:p-space-md rounded-lg shadow-2xl border border-secondary/40 flex items-center gap-space-sm md:gap-space-md">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-surface-container-lowest p-1 shadow-sm shrink-0 flex items-center justify-center">
                <img
                  alt="IDPS Emblem"
                  className="w-full h-full object-contain"
                  src={IMG.heroCaptionEmblem}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider">
                  Campus Showcase
                </span>
                <span className="font-headline-sm text-[15px] md:text-[18px] text-surface-bright font-bold leading-snug">
                  Campus of International Delhi Public School, Cherukupalli
                </span>
                <span className="font-body-sm text-body-sm text-on-primary-container hidden xs:block">
                  Managed by Adhi Shankaraa Scholastics
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick Statutory Highlight Ribbon */}
        <Reveal
          as="div"
          variant="fade"
          className="mt-space-lg bg-surface-container-lowest rounded-xl p-space-md border border-secondary/20 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md text-center md:text-left">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index < 3
                    ? 'flex flex-col gap-space-3xs border-b md:border-b-0 md:border-r border-outline-variant/40 pb-space-xs md:pb-0 md:pr-space-md'
                    : 'flex flex-col gap-space-3xs justify-center md:justify-start'
                }
              >
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider flex items-center gap-space-3xs justify-center md:justify-start">
                  <Icon name={stat.icon} className="text-[14px]" /> {stat.label}
                </span>
                <span className="font-headline-sm text-[17px] text-primary font-bold break-words">
                  {stat.value}
                </span>
                <span
                  className={
                    stat.noteAccent
                      ? 'font-label-sm text-label-sm text-secondary font-semibold'
                      : 'font-label-sm text-label-sm text-on-surface-variant'
                  }
                >
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
