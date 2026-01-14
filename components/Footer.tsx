import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Open for opportunities in Full Stack Development, Data Engineering, and GIS Analysis.
        </p>
        
        <a 
          href={SOCIAL_LINKS.email} 
          className="inline-block border border-emerald-400 text-emerald-400 px-6 py-3 rounded font-mono text-sm hover:bg-emerald-400/10 transition-colors mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mb-8">
           <a href={SOCIAL_LINKS.github} className="text-slate-400 hover:text-emerald-400 text-xl transition-colors">
             <i className="fa-brands fa-github"></i>
           </a>
           <a href={SOCIAL_LINKS.linkedin} className="text-slate-400 hover:text-cyan-400 text-xl transition-colors">
             <i className="fa-brands fa-linkedin"></i>
           </a>
           <a href={SOCIAL_LINKS.email} className="text-slate-400 hover:text-emerald-400 text-xl transition-colors">
             <i className="fa-solid fa-envelope"></i>
           </a>
        </div>

        <div className="text-slate-600 font-mono text-xs">
          <p>Designed & Built by Jeel Tandel</p>
          <p className="mt-1">
            <i className="fa-solid fa-code-branch text-emerald-500 mr-1"></i>
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
