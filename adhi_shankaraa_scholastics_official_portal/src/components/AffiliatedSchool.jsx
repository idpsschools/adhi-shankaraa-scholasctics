import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { schoolFacts, IMG } from "../data/societyData.js";

// Google Maps search for the campus (name + full postal address).
const SCHOOL_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "International Delhi Public School, Ponnappalli, Cherukupalli, Bapatla District, Andhra Pradesh 522259",
  );
const SCHOOL_WEBSITE_URL = "https://www.idpscherukupalli.com";

export default function AffiliatedSchool() {
  return (
    <section
      className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low relative border-t border-b border-outline-variant/30"
      id="school"
    >
      <div className="shell">
        {/* Section Kicker and Headings with IDPS Crest Integration */}
        <Reveal
          as="div"
          className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl"
        >
          <div className="flex flex-col items-start max-w-3xl">
            <div className="flex items-center gap-space-2xs mb-space-2xs">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
                Central CBSE Affiliation
              </span>
            </div>
            <h2 className="font-display-md text-display-md text-primary tracking-tight text-balance">
              Our Associated Institution
            </h2>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-space-3xs text-balance">
              International Delhi Public School — Cherukupalli
            </h3>
          </div>
          <div className="flex items-center gap-space-sm bg-surface-container-lowest border border-secondary/30 px-space-md py-space-sm rounded-xl shadow-sm self-start md:self-auto md:shrink-0">
            <img
              alt="International Delhi Public School Official Crest"
              className="w-14 h-14 object-contain shrink-0"
              src={IMG.schoolCrest}
              loading="lazy"
              decoding="async"
              width="56"
              height="56"
            />
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-bold">
                Official School Emblem
              </span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">
                CBSE No. 130739
              </span>
            </div>
          </div>
        </Reveal>

        {/* Bold Institutional Callout Banner in Regal Purple */}
        <Reveal
          as="div"
          variant="fade"
          className="bg-primary text-on-primary p-space-lg md:p-space-xl rounded-xl shadow-lg border border-secondary/40 mb-space-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md"
        >
          <div className="flex items-start sm:items-center gap-space-md">
            <div className="w-14 h-14 rounded-full bg-surface-container-lowest p-1 flex items-center justify-center shrink-0 border border-secondary">
              <img
                alt="IDPS Emblem"
                className="w-full h-full object-contain"
                src={IMG.calloutEmblem}
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider font-semibold">
                Statutory Oversight &amp; Management
              </span>
              <p className="font-headline-sm text-[18px] md:text-headline-sm text-surface-bright font-bold text-pretty">
                International Delhi Public School, Cherukupalli.
              </p>
            </div>
          </div>
          <div className="shrink-0 self-start md:self-auto bg-primary-container border border-secondary/40 px-space-md py-space-xs rounded text-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider font-bold">
            CBSE Affiliated No. 130739
          </div>
        </Reveal>

        {/* Institutional Summary — card + description on a white surface */}
        <div className="bg-surface-bright rounded-xl border border-secondary/20 shadow-md p-space-md sm:p-space-lg lg:p-space-xl mb-space-2xl">
          <Reveal
            as="h3"
            className="font-headline-md text-primary font-bold leading-tight tracking-tight text-[15px] sm:whitespace-nowrap sm:text-[clamp(0.7rem,2.4vw,1.25rem)] mb-space-md md:mb-space-lg"
          >
            INTERNATIONAL DELHI PUBLIC SCHOOL, CHERUKUPALLI
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-space-xl items-start">
            {/* Left — campus photo card */}
            <Reveal as="figure" variant="fade" className="w-full">
              <a
                href={SCHOOL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit the International Delhi Public School, Cherukupalli website"
                className="group block rounded-xl overflow-hidden shadow-xl border border-secondary/20 bg-surface-container-high relative aspect-[4/3] sm:aspect-[16/10] focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary focus-visible:ring-inset"
              >
                <img
                  alt="International Delhi Public School campus building at Cherukupalli, Andhra Pradesh — opens the school website"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  src={IMG.heroCampus}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 bg-primary/90 backdrop-blur-md text-on-primary p-space-xs rounded shadow-md flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border border-secondary/30">
                  <span className="font-label-md text-label-md text-surface-bright font-semibold">
                    International Delhi Public School — Cherukupalli Campus
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary-fixed inline-flex items-center gap-space-3xs group-hover:underline">
                    Visit idpscherukupalli.com
                    <span aria-hidden="true">↗</span>
                  </span>
                </figcaption>
              </a>
            </Reveal>

            {/* Right — summary + quick links */}
            <Reveal as="div" delay={120} className="flex flex-col gap-space-md">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed text-justify">
                IDPS Cherukupalli is a renowned educational institution that
                delivers high-quality education by integrating modern teaching
                methodologies with a strong emphasis on holistic student
                development. With a team of over 100 CBSE-trained teachers
                boasting years of experience, we consistently achieve outstanding
                results and prepare our students to secure admission to some of
                the world’s leading universities. Recognized as India’s best CBSE
                school, IDPS Cherukupalli has received multiple accolades,
                including Best School of the Year, Best School with STEM Courses,
                Best School in Andhra Pradesh, Best School for Kids' Overall
                Development.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-2xs">
                <a
                  href={SCHOOL_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the school location in Google Maps"
                  title="View campus location on Google Maps"
                  className="inline-flex items-center gap-space-2xs bg-surface-container-lowest border border-secondary/40 text-primary px-space-md py-space-xs rounded-full shadow-sm hover:border-secondary hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Icon name="location_on" className="text-[20px] text-secondary" />
                  <span className="font-label-md text-label-md font-semibold">Location</span>
                </a>
                <a
                  href={SCHOOL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the school website"
                  title="Open idpscherukupalli.com"
                  className="inline-flex items-center gap-space-2xs bg-surface-container-lowest border border-secondary/40 text-primary px-space-md py-space-xs rounded-full shadow-sm hover:border-secondary hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Icon name="language" className="text-[20px] text-secondary" />
                  <span className="font-label-md text-label-md font-semibold">Website</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Structured Fact Panel / Info Card Grid */}
        <div className="mt-space-2xl">
          <Reveal as="div" className="mb-space-md">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
              Official Accreditation Record
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mt-space-3xs font-bold">
              Verified Institutional Registry &amp; Affiliation Data
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {schoolFacts.map((fact, index) => (
              <Reveal
                as="div"
                key={fact.label}
                delay={index * 90}
                className="bg-surface-container-lowest p-space-md rounded-xl border border-secondary/20 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-secondary transition-all duration-300"
              >
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-space-3xs font-semibold">
                  {fact.label}
                </span>
                <span
                  className={`font-headline-sm ${fact.valueSize} text-primary block leading-snug font-bold`}
                >
                  {fact.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {fact.sub}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
