import React from 'react';
import { PROJECT_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">04.</span> Featured Projects
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DATA.map((project, index) => (
            <article 
              key={index} 
              className="group bg-slate-850 rounded-lg p-6 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-emerald-400 text-4xl">
                  <i className="fa-regular fa-folder" aria-hidden="true"></i>
                </div>
                <div className="flex gap-4 text-slate-400">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-850 rounded" aria-label={`View ${project.title} on GitHub`}>
                      <i className="fa-brands fa-github text-lg" aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="font-mono text-xs text-cyan-400/80 bg-cyan-900/10 px-2 py-1 rounded">
                      {tech}
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

export default Projects;
