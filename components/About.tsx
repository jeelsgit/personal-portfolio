import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">01.</span> About Me
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <article className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
            <h3 className="text-xl text-slate-200 font-bold mb-2">The Spatial Engineer</h3>
            <p>
              I am a Software Engineer specializing in <span className="text-emerald-400">high-performance backend architecture</span> and <span className="text-cyan-400">geospatial intelligence</span>. Expert in developing scalable systems using Python (FastAPI) and optimizing enterprise relational databases (Oracle/PostgreSQL).
            </p>
            <p>
              With professional experience at <span className="text-cyan-400 font-mono">Xenara AI</span> and <span className="text-cyan-400 font-mono">Appy.yo</span>, I specialize in integrating AI/LLMs with GIS workflows (ArcGIS/PostGIS) to automate complex data processing and deliver evidence-based location intelligence.
            </p>
            <p>
              My goal is to break down the silos between traditional software engineering and spatial analysis, creating tools that leverage the power of location data to solve real-world problems.
            </p>
          </article>
          
          <div className="md:col-span-2 relative group">
            {/* Abstract visual representation of "Spatial Engineer" since no image was provided */}
            <div className="relative w-full aspect-square bg-slate-800 rounded border border-slate-700 overflow-hidden flex items-center justify-center shadow-xl group-hover:translate-y-[-4px] transition-transform duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
               <div className="text-center p-6">
                 <i className="fa-solid fa-layer-group text-6xl text-slate-600 mb-4 group-hover:text-emerald-400 transition-colors duration-300"></i>
                 <div className="font-mono text-sm text-slate-500 mt-2">
                   &lt;System /&gt;<br/>
                   &lt;Space /&gt;<br/>
                   &lt;Intelligence /&gt;
                 </div>
               </div>
               
               {/* Decorative border frame effect */}
               <div className="absolute inset-0 border-2 border-emerald-400/30 translate-x-3 translate-y-3 -z-10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
