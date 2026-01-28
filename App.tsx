import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-300 bg-slate-950 min-h-screen selection:bg-emerald-400 selection:text-slate-900">
      {/* Skip to Content Link - Hidden until focused */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-400 focus:text-slate-900 focus:rounded focus:font-mono focus:font-bold focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default App;
