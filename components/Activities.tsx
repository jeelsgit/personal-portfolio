import React from 'react';
import { ACTIVITY_DATA } from '../constants';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">07.</span> Activities & Volunteering
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="space-y-8">
          {ACTIVITY_DATA.map((activity, index) => (
            <article 
              key={index} 
              className="relative border-l-2 border-cyan-400/30 pl-8 md:pl-12 hover:border-cyan-400 transition-colors duration-300 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-cyan-400 border-2 border-slate-950" aria-hidden="true"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {activity.title}
                </h3>
                <span className="text-cyan-400 font-mono text-xs mt-2 sm:mt-0 bg-cyan-900/20 px-2 py-1 rounded">
                  {activity.category}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <p className="text-emerald-400 font-mono text-sm">{activity.organization}</p>
                <span className="hidden sm:inline text-slate-600">•</span>
                <p className="text-slate-400 text-sm">{activity.date}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
