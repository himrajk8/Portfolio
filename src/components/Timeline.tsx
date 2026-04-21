export default function Timeline() {
  const experiences = [
    {
      title: "Senior Full-Stack Engineer",
      company: "TechNova Solutions",
      date: "2021 — Present",
      bullets: [
        "Led migration to React Native, reducing codebase size by 30% and accelerating feature delivery across iOS and Android.",
        "Architected scalable microservices using Node.js and AWS, supporting a 200% increase in active daily users.",
        "Mentored a team of 5 junior developers, improving code review turnaround time by 40%."
      ]
    },
    {
      title: "Mobile App Developer",
      company: "AppSphere Inc",
      date: "2018 — 2021",
      bullets: [
        "Developed and launched 4 top-ranking iOS applications using Swift and Objective-C.",
        "Implemented robust CI/CD pipelines with GitHub Actions and Fastlane, reducing deployment time by 50%.",
        "Collaborated with product designers to create award-winning UI/UX interfaces."
      ]
    },
    {
      title: "Web Developer",
      company: "Creative Digital",
      date: "2016 — 2018",
      bullets: [
        "Built responsive web applications using React and Redux.",
        "Optimized frontend performance, achieving a Lighthouse score of 98/100 across all core pages."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-space mb-16 tracking-tight">Experience</h2>
      
      <div className="relative border-l border-gray-200 ml-3 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className={`ml-8 md:ml-12 relative ${index !== experiences.length - 1 ? 'mb-16' : ''}`}>
            <span className="absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-5 h-5 rounded-full bg-snow border-2 border-indigo ring-4 ring-white"></span>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <h3 className="text-xl font-bold text-space">{exp.title}</h3>
              <time className="text-sm font-medium text-indigo mt-1 md:mt-0">{exp.date}</time>
            </div>
            <h4 className="text-md font-medium text-space-light mb-4">{exp.company}</h4>
            
            <ul className="space-y-3">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-space-light leading-relaxed flex gap-3">
                  <span className="text-indigo mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
