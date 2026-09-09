import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll / entrance reveal.
 *
 * Renders a wrapper element that starts hidden (see `[data-reveal]` rules in
 * index.css) and transitions in — opacity + transform only — the first time it
 * enters the viewport. A single IntersectionObserver per instance, disconnected
 * immediately after firing, so there are no lingering scroll listeners.
 *
 * Falls back to "always visible" when IntersectionObserver is unavailable or the
 * user prefers reduced motion.
 *
 * Props:
 *  - as       : element/tag to render (default 'div')
 *  - variant  : 'slide' (default) | 'fade' | 'zoom'
 *  - delay    : ms of transition-delay, for staggering sibling reveals
 *  - className: forwarded to the wrapper
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'slide',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    // Already at or above the top of the viewport (deep-link, refresh mid-page,
    // or a fast programmatic scroll that jumped past this element) — reveal now
    // so content can never get stranded at opacity: 0.
    if (el.getBoundingClientRect().bottom <= 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      // threshold 0 (not a ratio) keeps elements taller than the viewport
      // reliable; the negative bottom margin delays the trigger until the
      // element is ~10% into view.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);

    // Safety net so content can never stay stuck at opacity: 0 if the observer
    // misfires (tab throttling, browser quirks). Near-fold elements get a short
    // fuse; far-down elements get a long backstop (by which point any engaged
    // reader has scrolled past and the observer has long since handled them).
    const nearFold = el.getBoundingClientRect().top < window.innerHeight * 1.5;
    const failsafe = window.setTimeout(() => setShown(true), nearFold ? 2500 : 10000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-variant={variant}
      data-shown={shown ? 'true' : 'false'}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
