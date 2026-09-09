import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import AffiliatedSchool from './components/AffiliatedSchool.jsx';
import CampusShowcase from './components/CampusShowcase.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="w-full pt-20 bg-surface overflow-x-clip">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <AffiliatedSchool />
          <CampusShowcase />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
