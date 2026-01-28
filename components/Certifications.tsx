import React from 'react';
import { CERTIFICATION_DATA } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">06.</span> Licenses & Certifications
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATION_DATA.map((cert, index) => (
            <article 
              key={index} 
              className="group bg-slate-850 rounded-lg p-6 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-emerald-400 font-mono text-sm">{cert.issuer}</p>
                </div>
                <div className="ml-4 text-2xl text-slate-600 group-hover:text-emerald-400/50 transition-colors flex-shrink-0">
                  <i className="fa-solid fa-certificate" aria-hidden="true"></i>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <i className="fa-solid fa-calendar text-cyan-500/60" aria-hidden="true"></i>
                  <span className="font-mono">
                    {cert.issuedDate}
                    {cert.expiryDate && <span className="text-slate-500"> • Expires {cert.expiryDate}</span>}
                  </span>
                </div>

                {cert.credentialId && (
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <i className="fa-solid fa-key text-cyan-500/60" aria-hidden="true"></i>
                    <span className="font-mono text-xs break-all">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="inline-block text-xs font-mono text-cyan-400/80 bg-cyan-900/10 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
