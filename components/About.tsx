import React from 'react';
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">01.</span> About Me
          </h2>
          <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
        </div>
        <div className="grid md:grid-cols-5 gap-12">
          <article className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
            <p>
              I'm a Software Engineer with production experience building <span className="text-emerald-400">backend systems</span> and <span className="text-cyan-400">ML-powered services</span>. I work in Python (FastAPI) and Java — designing REST APIs, serving machine learning models, tuning databases, and shipping containerized services to the cloud.
            </p>
            <p>
              At <span className="text-cyan-400 font-mono">Xenara Inc.</span>, I developed and tested ML features for a customer engagement platform: FastAPI services serving models in production, NLP workflows with Azure OpenAI and Hugging Face, custom models trained in PyTorch and TensorFlow, and a RAG pipeline built on LangChain and Pinecone. At <span className="text-cyan-400 font-mono">Appy.yo</span>, I improved PostgreSQL query performance by 20% through indexing and schema refactoring, and built OAuth 2.0-secured REST components in Python and Java.
            </p>
            <p>
              Outside of work, I'm building toward a <span className="text-emerald-400">geospatial specialization</span> — I shipped a flood-risk analysis tool with GeoPandas at NASA Space Apps, ran a full ArcGIS Pro accessibility study of Ottawa, and I'm self-training in ArcPy ahead of formal GIS study. I'm drawn to problems where data has a location attached.
            </p>
          </article>
          
          <div className="md:col-span-2 relative group">
            {/* Abstract visual representation of the stack */}
            <div className="relative w-full aspect-square bg-slate-800 rounded border border-slate-700 overflow-hidden flex items-center justify-center shadow-xl group-hover:translate-y-[-4px] transition-transform duration-300">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
               <div className="text-center p-6">
                 <i className="fa-solid fa-layer-group text-6xl text-slate-600 mb-4 group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"></i>
                 <div className="font-mono text-sm text-slate-500 mt-2">
                   &lt;Backend /&gt;<br/>
                   &lt;Models /&gt;<br/>
                   &lt;Pipelines /&gt;
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
