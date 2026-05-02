import { BarChart3, Cpu } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    company: "PW",
    dateRange: ["May 2025", "Present"],
    accent: "Analytics",
    icon: BarChart3,
    bullets: [
      "Worked on analytics dashboards and reporting workflows.",
      "Analyzed business data to surface actionable insights.",
      "Collaborated with teams to improve data visibility.",
    ],
  },
  {
    role: "VLSI Design Intern",
    company: "Maven Silicon",
    dateRange: ["Aug 2023", "Oct 2023"],
    accent: "VLSI Design",
    icon: Cpu,
    bullets: [
      "Gained practical experience in designing and implementing SPI communication protocols in VLSI systems.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="scroll-mt-24 px-8 py-10 md:px-16 lg:px-24">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-3 w-3 flex-shrink-0 rounded-full bg-indigo" />
        <h2 className="text-2xl font-bold text-space">Experience</h2>
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => {
          const Icon = experience.icon;

          return (
            <article
              key={`${experience.role}-${experience.company}`}
              className="flex flex-col md:grid overflow-hidden rounded-lg border border-gray-200 bg-white-adaptive shadow-[0_3px_18px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-indigo/30 hover:shadow-[0_14px_34px_rgba(111,0,255,0.1)] dark:border-gray-800 md:min-h-[118px] md:grid-cols-[96px_minmax(0,1fr)_210px]"
            >
              <div className="order-last md:order-first relative flex items-center justify-start md:justify-center border-t border-gray-200 bg-gray-50/50 px-6 py-3 dark:border-gray-800 dark:bg-gray-900/30 md:border-t-0 md:border-r md:bg-transparent md:px-4 md:py-4 md:dark:bg-transparent">
                
                {/* Desktop vertical layout */}
                <div className="hidden md:grid justify-items-center gap-2 text-center text-xs font-bold uppercase tracking-wide text-space-light">
                  <p>{experience.dateRange[0]}</p>
                  <div className="h-7 w-0.5 rounded-full bg-indigo/70 dark:bg-indigo" />
                  <p>{experience.dateRange[1]}</p>
                </div>
                
                {/* Mobile horizontal layout */}
                <div className="flex md:hidden items-center gap-3 text-xs font-bold uppercase tracking-wide text-space-light">
                  <p>{experience.dateRange[0]}</p>
                  <div className="h-0.5 w-6 rounded-full bg-indigo/70 dark:bg-indigo" />
                  <p>{experience.dateRange[1]}</p>
                </div>

                <span className="absolute right-[-4px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-indigo ring-4 ring-white-adaptive md:block" />
              </div>

              <div className="px-6 py-4">
                <h3 className="text-base font-bold text-indigo">{experience.role}</h3>
                <p className="mt-1 text-sm font-semibold text-space">{experience.company}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-5 text-space-light">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="hidden items-center justify-center px-7 text-[#17325c] dark:text-indigo md:flex">
                <div className="flex items-center gap-3">
                  <Icon className="h-10 w-10 text-indigo" strokeWidth={1.8} />
                  <p className="max-w-[120px] text-lg font-extrabold leading-5">
                    {experience.accent}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
