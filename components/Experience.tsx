import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">03.</span> Where I've Worked
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <article key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-slate-700 border border-slate-900 group-hover:bg-emerald-400 transition-colors duration-300" aria-hidden="true"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <time className="font-mono text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded border border-slate-700" dateTime={exp.date}>{exp.date}</time>
              </div>
              
              <div className="text-emerald-400 font-mono text-sm mb-4">{exp.company}</div>
              
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500/60" aria-hidden="true"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
