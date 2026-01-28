import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">04.</span> Education
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <article key={index} className="relative border-l-2 border-emerald-400/30 pl-8 md:pl-12 hover:border-emerald-400 transition-colors duration-300">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-emerald-400 border-2 border-slate-950" aria-hidden="true"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                <time className="font-mono text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded border border-slate-700 mt-2 sm:mt-0">
                  {edu.graduatedDate}
                </time>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <p className="text-emerald-400 font-mono text-sm">{edu.school}</p>
                <span className="hidden sm:inline text-slate-600">•</span>
                <p className="text-slate-400 text-sm">{edu.location}</p>
                {edu.honors && (
                  <>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <p className="text-slate-400 text-sm font-semibold">{edu.honors}</p>
                  </>
                )}
                {edu.gpa && (
                  <>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <p className="text-slate-400 text-sm">GPA: {edu.gpa}</p>
                  </>
                )}
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{edu.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Areas of Study</h4>
                <ul className="space-y-2">
                  {edu.keyAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500/60" aria-hidden="true"></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
