import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { foundingObjects, IMG } from '../data/societyData.js';

export default function About() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface relative" id="about">
      <div className="shell">
        {/* Section Eyebrow & Headline */}
        <Reveal as="div" className="flex flex-col items-start max-w-3xl mb-space-2xl">
          <div className="flex items-center gap-space-2xs mb-space-2xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
              Who We Are
            </span>
          </div>
          <h2 className="font-display-md text-display-md text-primary tracking-tight mb-space-md text-balance">
            About Adhi Shankaraa Scholastics
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed text-left">
            Adhi Shankaraa Scholastics is a partnership firm based in Cherukupalli, Bapatla district, Andhra Pradesh, supplying educational materials and institutional services to schools and educational institutions. Our work covers school books and learning materials, uniforms, stationery and academic essentials, and the wider range of supplies an institution needs to run day to day. We work with multiple schools and educational organisations — handling bulk and recurring orders, coordinating delivery around the academic calendar, and supporting administrators with dependable procurement. We are an independent supplier and are not tied to any single school or institution.
          </p>
        </Reveal>

        {/* Founding Objects Grid (4 Objects) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {foundingObjects.map((object, index) => (
            <Reveal
              as="div"
              key={object.number}
              delay={index * 90}
              className="bg-surface-container-lowest p-space-lg rounded-xl border border-secondary/20 shadow-sm hover:shadow-md hover:border-secondary hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-space-md">
                  <Icon name={object.icon} className="text-[28px] text-primary" />
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-space-2xs font-bold">
                  {object.number}
                </span>
                <h3 className="font-headline-sm text-[18px] text-primary mb-space-xs font-bold text-balance">
                  {object.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {object.description}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/30 flex items-center gap-space-2xs text-secondary">
                <Icon name="check_circle" className="text-[16px]" />
                <span className="font-label-sm text-label-sm font-semibold">{object.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Institutional Quote Card with company seal */}
        <Reveal
          as="div"
          variant="fade"
          className="mt-space-2xl bg-surface-container-low border border-secondary/30 p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-space-lg"
        >
          <div className="w-20 h-20 rounded-full border-2 border-secondary/60 bg-primary shrink-0 flex items-center justify-center overflow-hidden shadow-md">
            <img
              alt="Adhi Shankaraa Scholastics Seal"
              className="w-full h-full object-contain"
              src={IMG.societySeal}
              loading="lazy"
              decoding="async"
              width="80"
              height="80"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-headline-md text-headline-md text-primary italic leading-snug text-pretty">
              “Schools run on the small things arriving on time — the right books, the right uniforms,
              the right supplies, ready before the term begins. That is the job we take on for every
              institution we work with.”
            </p>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mt-space-xs font-bold">
              The Partners • Adhi Shankaraa Scholastics
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
