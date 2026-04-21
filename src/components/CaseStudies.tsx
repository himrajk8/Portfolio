import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Scalable Fintech API",
      problem: "Legacy monolithic architecture caused slow transaction processing and frequent timeouts during peak trading hours.",
      solution: "Architected a distributed microservices ecosystem utilizing event-driven patterns to handle high-throughput financial data.",
      tags: ["Node.js", "PostgreSQL", "Kafka", "Docker"],
      linkText: "Read Engineering Case Study"
    },
    {
      title: "Real-time Logistics App",
      problem: "Fleet tracking application suffered from severe battery drain and inaccurate geolocation updates on low-end devices.",
      solution: "Implemented efficient background location tracking with intelligent batching and WebSocket integration for real-time dashboard updates.",
      tags: ["Flutter", "Firebase", "WebSockets"],
      linkText: "View Source Code"
    },
    {
      title: "Enterprise CRM Migration",
      problem: "Client's existing CRM was heavily bloated, resulting in 5+ second page load times and poor user adoption.",
      solution: "Spearheaded a ground-up rebuild using a modern React stack with aggressive code-splitting and an optimized GraphQL layer.",
      tags: ["Next.js", "GraphQL", "Tailwind CSS"],
      linkText: "Read Engineering Case Study"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-space tracking-tight mb-4">Impact-Driven Case Studies</h2>
          <p className="text-space-light text-lg max-w-2xl">Focusing on complex technical problems and the architectural decisions required to solve them.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <div key={index} className="flex flex-col h-full bg-white-adaptive p-8 rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(111,0,255,0.08)] transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-space mb-6 group-hover:text-indigo transition-colors">{item.title}</h3>
            
            <div className="flex-grow space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-space-light mb-2">The Problem</h4>
                <p className="text-space-light leading-relaxed">{item.problem}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-space-light mb-2">The Solution</h4>
                <p className="text-space-light leading-relaxed">{item.solution}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-snow text-space-light text-xs font-semibold rounded-full border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-indigo font-semibold hover:text-indigo-hover transition-colors">
                {item.linkText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
