import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-300 bg-slate-950 min-h-screen selection:bg-emerald-400 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
