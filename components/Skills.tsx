import React from 'react';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">02.</span> Technical Arsenal
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, index) => (
            <div key={index} className="bg-slate-850 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:text-cyan-400 transition-colors">
                  <i className={`${group.icon} text-lg`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-200">{group.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                    <i className="fa-solid fa-caret-right text-emerald-500/70 text-xs"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
