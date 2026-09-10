import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import AffiliatedSchool from './components/AffiliatedSchool.jsx';
import CampusShowcase from './components/CampusShowcase.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

/**
 * Minimal hash-based routing — no dependency, works on any static host with no
 * server rewrite rules. `#/privacy` renders the Privacy Policy page; anything
 * else renders the single-page home. In-page section anchors (`#about`,
 * `#school`, `#contact`, `#top`) keep working exactly as before.
 */
const readRoute = () =>
  window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();

export default function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => {
      const next = readRoute();
      setRoute(next);

      if (next === 'privacy') {
        window.scrollTo(0, 0);
        return;
      }

      // Coming back to the home page with a section anchor in the URL
      // (e.g. the footer "Contact" link tapped from the Privacy Policy page):
      // scroll to that section once it has rendered.
      const id = window.location.hash.replace(/^#\/?/, '');
      if (id && id !== 'top') {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView();
        });
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      <Header />
      {route === 'privacy' ? (
        <PrivacyPolicy />
      ) : (
        <main id="top" className="w-full pt-20 bg-surface overflow-x-clip">
          <div className="flex flex-col w-full">
            <Hero />
            <About />
            <AffiliatedSchool />
            <CampusShowcase />
            <Contact />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
