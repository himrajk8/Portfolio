import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Abstract Visualization Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[1px] border-indigo rounded-full absolute animate-[spin_60s_linear_infinite]" />
        <div className="w-[600px] h-[600px] border-[1px] border-indigo/50 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
        <div className="w-[400px] h-[400px] border-[1px] border-indigo/30 rounded-full absolute animate-[spin_20s_linear_infinite]" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-space mb-8 leading-tight">
          Software Engineer.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-[#9d4edd]">Web & Mobile Specialist.</span><br/>
          Ready for scale.
        </h1>
        
        <p className="text-lg md:text-xl text-space-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Architecting robust web platforms and high-performance native iOS/Android applications. 
          Focused on clean code, agile collaboration, and measurable business impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/himrajk8/" 
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-space hover:bg-space-light text-snow px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <FaLinkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
          <a 
            href="https://github.com/himrajk8" 
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white-adaptive hover:bg-gray-50 text-space border border-gray-200 px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <FaGithub className="w-5 h-5" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
