import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import AnimatedMap from './AnimatedMap';
import SpinningGlobe from './SpinningGlobe';
import FloatingTerminal from './FloatingTerminal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decor - simple topographic rings simulation via border radius if CSS not sufficient, but using Tailwind radial gradient in index.html mainly */}
      <div className="absolute inset-0 z-0 bg-topography opacity-30 pointer-events-none"></div>
      
      {/* Spinning Globe - positioned in top right area */}
      <SpinningGlobe />
      
      {/* Floating Terminal - positioned in bottom right area */}
      <FloatingTerminal />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center w-full">
        <p className="font-mono text-emerald-400 mb-4 animate-fade-in-down">
          Hi, my name is
        </p>
        
        <div className="relative w-full">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              Jeel Tandel.
            </h1>
            <AnimatedMap />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
          Software Engineer & <br className="hidden md:block" />
          <span className="text-cyan-400">Spatial Data Analyst</span>.
        </h2>
        
        <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
          Bridging the gap between Enterprise Software, AI, and Geospatial Intelligence.
          I build systems that understand the <span className="text-emerald-400 font-mono text-base">where</span> as much as the <span className="text-cyan-400 font-mono text-base">what</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#projects" className="px-8 py-4 bg-transparent border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-all duration-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-slate-200 rounded hover:bg-slate-700 transition-all duration-300 font-mono text-sm border border-transparent hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            Contact Me
          </a>
          <a href="/Jeel_Tandel_Resume.pdf" download="Jeel_Tandel_Resume.pdf" className="px-8 py-4 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded hover:bg-cyan-400/20 transition-all duration-300 font-mono text-sm flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950" aria-label="Download Resume">
            <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform"></i>
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="h-px w-12 bg-slate-700"></span>
          <div className="flex gap-6 text-2xl text-slate-400">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded" aria-label="Visit GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded" aria-label="Visit LinkedIn Profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={SOCIAL_LINKS.email} className="hover:text-emerald-400 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded" aria-label="Send Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <div className="font-mono text-xs text-slate-500 flex items-center gap-2 ml-4">
            <i className="fas fa-location-dot text-emerald-500"></i>
            Canada
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
