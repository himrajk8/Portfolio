import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React and Tailwind CSS, showcasing projects and experience.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/himrajk8/Portfolio",
    liveUrl: "https://github.com/himrajk8/Portfolio",
    visual: "portfolio",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location search and forecast.",
    category: "Web App",
    tags: ["React", "API", "Tailwind CSS"],
    githubUrl: "https://github.com/himrajk8/Weather-app",
    liveUrl: "https://github.com/himrajk8/Weather-app",
    visual: "weather",
  },
  {
    title: "NexDo",
    description:
      "A task and activity tracker built with React, TypeScript, and Vite for fast, responsive workflow management.",
    category: "Web App",
    tags: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/himrajk8/NexDo",
    liveUrl: "https://github.com/himrajk8/NexDo",
    visual: "todo",
  },
];

function ProjectVisual({ type, title }: { type: string; title: string }) {
  if (type === "traffic") {
    return (
      <div className="relative h-full overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,7,18,0.95),rgba(3,7,18,0.2)),linear-gradient(180deg,rgba(125,211,252,0.4),rgba(15,23,42,0.4))]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(105deg,transparent_0_30%,rgba(31,41,55,0.95)_30%_70%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 h-24 w-1 -translate-x-1/2 bg-yellow-300/80" />
        <div className="absolute right-6 top-5 flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-red-600 bg-gray-100 text-3xl font-black text-gray-900 shadow-xl">
          TP
        </div>
        <div className="absolute left-7 top-11 max-w-[58%] text-white">
          <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
          <p className="mt-3 text-[10px] font-semibold text-emerald-300">
            Real-time sign detection
          </p>
        </div>
      </div>
    );
  }

  if (type === "weather") {
    return (
      <div className="relative h-full overflow-hidden bg-[#1477bd] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.45),transparent_18%),linear-gradient(135deg,#0d66a7,#1e8ed6)]" />
        {/* Sun */}
        <div className="absolute right-10 top-5 h-12 w-12 rounded-full bg-yellow-300 shadow-[0_0_24px_8px_rgba(253,224,71,0.4)]" />
        <div className="absolute left-7 top-8">
          <p className="text-3xl font-bold">32°C</p>
          <p className="text-xs text-white/80 mt-0.5">Bengaluru, India</p>
          <p className="text-[10px] text-white/60 mt-0.5">Partly Cloudy · Humidity 68%</p>
        </div>
        <div className="absolute inset-x-5 bottom-5 grid grid-cols-5 gap-2">
          {[["Mon", "☀️", "34°"], ["Tue", "🌤", "31°"], ["Wed", "🌦", "28°"], ["Thu", "⛅", "30°"], ["Fri", "☀️", "33°"]].map(([day, icon, temp]) => (
            <div key={day} className="flex flex-col items-center rounded-lg bg-white/15 px-1 py-2 backdrop-blur gap-0.5">
              <span className="text-base leading-none">{icon}</span>
              <p className="text-[8px] font-bold uppercase tracking-wide">{day}</p>
              <p className="text-[9px] font-semibold text-yellow-200">{temp}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="relative h-full overflow-hidden bg-[#0d1b2f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(111,0,255,0.15),transparent_40%),linear-gradient(130deg,#0b1220,#13263f)]" />
        <div className="absolute left-5 top-6 max-w-[55%] lg:left-6 lg:top-7 lg:max-w-[48%]">
          <h3 className="text-xl font-extrabold leading-tight lg:text-2xl">{title}</h3>
          <p className="mt-2 text-[10px] font-semibold text-violet-300">
            Personal developer portfolio
          </p>
        </div>
        <div className="absolute right-4 top-5 w-40 origin-top-right scale-75 rounded-xl border border-violet-300/20 bg-slate-100/95 p-3 text-slate-700 shadow-2xl sm:scale-90 md:scale-75 lg:right-6 lg:top-6 lg:scale-[0.70] xl:scale-[0.85] 2xl:scale-100">
          <div className="mb-2 h-2 w-14 rounded bg-slate-300" />
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-violet-500" />
              <div className="h-2 w-full rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-indigo-400" />
              <div className="h-2 w-[80%] rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
              <div className="h-2 w-[60%] rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-pink-400" />
              <div className="h-2 w-[72%] rounded bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 rounded bg-violet-500/20 px-3 py-1 text-xs font-bold text-violet-200 lg:left-6">
          React · Next.js
        </div>
      </div>
    );
  }

  if (type === "todo") {
    return (
      <div className="relative h-full overflow-hidden bg-[#0d1b2f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(110,231,255,0.15),transparent_30%),linear-gradient(130deg,#0b1220,#13263f)]" />
        <div className="absolute left-5 top-6 max-w-[55%] lg:left-6 lg:top-7 lg:max-w-[48%]">
          <h3 className="text-xl font-extrabold leading-tight lg:text-2xl">{title}</h3>
          <p className="mt-2 text-[10px] font-semibold text-cyan-300">
            Advanced to-do workflow
          </p>
        </div>
        <div className="absolute right-4 top-5 w-40 origin-top-right scale-75 rounded-xl border border-slate-300/20 bg-slate-100/95 p-3 text-slate-700 shadow-2xl sm:scale-90 md:scale-75 lg:right-6 lg:top-6 lg:scale-[0.70] xl:scale-[0.85] 2xl:scale-100">
          <div className="mb-2 h-2 w-16 rounded bg-slate-300" />
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
              <div className="h-2 w-full rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-indigo-400" />
              <div className="h-2 w-[84%] rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
              <div className="h-2 w-[68%] rounded bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 rounded bg-indigo/30 px-3 py-1 text-xs font-bold text-violet-100 lg:left-6">
          Task Manager
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#080b1f] text-white">
      <div className="absolute left-7 top-7 max-w-[32%]">
        <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
        <p className="mt-4 text-[10px] font-semibold text-cyan-300">
          Binary classifier
        </p>
      </div>
      <div className="absolute right-8 top-6 h-24 w-36 rounded-md border border-cyan-200/20 bg-cyan-50/95 p-3 shadow-2xl">
        <div className="mb-2 h-2 w-20 rounded bg-slate-300" />
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
        </div>
        <div className="ml-auto mt-3 h-3 w-10 rounded bg-emerald-200" />
      </div>
      <div className="absolute bottom-4 left-7 rounded bg-indigo/30 px-3 py-1 text-xs font-bold text-violet-100">
        ML / NLP
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-10 sm:px-8 md:px-16 lg:px-24">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-indigo" />
          <h2 className="text-2xl font-bold text-space">Featured Projects</h2>
        </div>
        <a
          href="https://github.com/himrajk8"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo transition-colors hover:text-indigo-hover"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white-adaptive shadow-[0_3px_18px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-[0_14px_34px_rgba(111,0,255,0.12)] dark:border-gray-800"
          >
            {/* Visual Banner */}
            <div className="aspect-[16/9] overflow-hidden">
              <ProjectVisual type={project.visual} title={project.title} />
            </div>

            {/* Card Body */}
            <div className="flex flex-col gap-3 p-4">
              {/* Title */}
              <h3 className="text-base font-bold leading-snug text-indigo">{project.title}</h3>


              {/* Description */}
              <p className="text-sm leading-6 text-space-light">
                {project.description}
              </p>

              {/* Tags + Links row */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-ghost px-2.5 py-1 text-xs font-semibold text-space-light shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-3 text-space">
                  {project.liveUrl && project.title !== "Portfolio Website" ? null : project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="transition-colors hover:text-indigo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code`}
                    className="transition-colors hover:text-indigo"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
