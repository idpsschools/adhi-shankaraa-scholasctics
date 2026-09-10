import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { carouselSlides } from '../data/societyData.js';

const AUTOPLAY_MS = 4500;

export default function CampusShowcase() {
  const slideCount = carouselSlides.length;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current && !document.hidden) {
        setCurrent((index) => (index + 1) % slideCount);
      }
    }, AUTOPLAY_MS);
  }, [slideCount]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goToSlide = (index) => {
    setCurrent((index + slideCount) % slideCount);
    startTimer();
  };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low border-b border-outline-variant/30">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <Reveal as="div" className="lg:col-span-5 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              Across Campus Life
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight text-balance">
              From Classrooms to Playing Fields
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A school needs more than textbooks. Adhi Shankaraa Scholastics supplies materials for every part of institutional life — classroom teaching, sports and physical education, examinations, health rooms, and school events and cultural programmes — so administrators can source it all from one partner.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-space-sm pt-space-xs">
              <div className="p-space-sm bg-surface-container-lowest rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-space-2xs text-secondary font-bold text-[18px]">
                  <Icon name="menu_book" className="text-[20px]" />
                  <span>Academic Supplies</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Books, stationery &amp; exam materials
                </span>
              </div>
              <div className="p-space-sm bg-surface-container-lowest rounded-lg border border-outline-variant/50">
                <div className="flex items-center gap-space-2xs text-secondary font-bold text-[18px]">
                  <Icon name="checkroom" className="text-[20px]" />
                  <span>Campus Essentials</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Uniforms, sports &amp; facility supplies
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" variant="fade" delay={120} className="lg:col-span-7">
            {/* Interactive Slider Card */}
            <div
              className="rounded-xl overflow-hidden shadow-xl border border-secondary/30 bg-surface-container-high relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] group"
              id="campus-carousel"
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
              }}
            >
              {/* Carousel Slides Container */}
              <div className="w-full h-full relative" id="carousel-slides">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-hidden={index === current ? undefined : 'true'}
                  >
                    <img
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      src={slide.src}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-primary/90 backdrop-blur-md text-on-primary p-space-xs sm:p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border border-secondary/30 shadow-lg">
                      <span className="font-label-md text-[12px] sm:text-label-md text-surface-bright flex items-center gap-space-2xs min-w-0">
                        <Icon name={slide.icon} className="text-[16px] text-secondary shrink-0" />
                        <span className="truncate">{slide.title}</span>
                      </span>
                      <span className="font-label-sm text-[10px] sm:text-label-sm text-secondary-fixed font-semibold shrink-0">
                        {slide.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrow Controls */}
              <button
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary/85 text-surface-bright hover:bg-primary border border-secondary/50 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 z-20 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed"
                id="prev-slide-btn"
                type="button"
                onClick={() => goToSlide(current - 1)}
              >
                <Icon name="chevron_left" className="text-[22px] text-secondary-container" />
              </button>
              <button
                aria-label="Next Slide"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary/85 text-surface-bright hover:bg-primary border border-secondary/50 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 z-20 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed"
                id="next-slide-btn"
                type="button"
                onClick={() => goToSlide(current + 1)}
              >
                <Icon name="chevron_right" className="text-[22px] text-secondary-container" />
              </button>

              {/* Slide Counter Badge (Top Right) */}
              <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-md border border-secondary/40 text-surface-bright px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider flex items-center gap-1 z-20 shadow-md">
                <span className="text-secondary-fixed" id="carousel-current-index">
                  {current + 1}
                </span>
                <span className="text-surface-dim/70">/</span>
                <span className="text-surface-dim/90">{slideCount}</span>
              </div>

              {/* Pagination Dots Container */}
              <div
                className="absolute top-3 left-3 sm:left-4 flex items-center gap-1.5 z-20 bg-primary/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-secondary/30"
                id="carousel-dots"
              >
                {carouselSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === current ? 'true' : undefined}
                    className={
                      index === current
                        ? 'w-5 h-2.5 rounded-full bg-secondary-container transition-all duration-300 shadow-sm'
                        : 'w-2.5 h-2.5 rounded-full bg-surface-bright/40 hover:bg-surface-bright/80 transition-all duration-300'
                    }
                    type="button"
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
