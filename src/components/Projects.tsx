import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Fake News Detection",
    description:
      "A machine learning model that classifies news as real or fake using NLP and TF-IDF.",
    category: "ML / NLP",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    githubUrl: "https://github.com/himrajk8",
    liveUrl: "https://github.com/himrajk8",
    visual: "fake-news",
  },
  {
    title: "Traffic Sign Detection",
    description: "Detects and classifies traffic signs using CNN and OpenCV.",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/himrajk8",
    liveUrl: "https://github.com/himrajk8",
    visual: "traffic",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location search and forecast.",
    category: "Web App",
    tags: ["React", "API", "Tailwind CSS"],
    githubUrl: "https://github.com/himrajk8",
    liveUrl: "https://github.com/himrajk8",
    visual: "weather",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/himrajk8/Portfolio",
    liveUrl: "https://github.com/himrajk8/Portfolio",
    visual: "portfolio",
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
        <div className="absolute right-12 top-7 h-9 w-16 rounded-full bg-white/90 shadow-lg before:absolute before:-top-4 before:left-5 before:h-9 before:w-9 before:rounded-full before:bg-white after:absolute after:-top-2 after:right-3 after:h-7 after:w-7 after:rounded-full after:bg-white" />
        <div className="absolute left-7 top-9">
          <p className="text-3xl font-bold">24°C</p>
          <p className="text-xs text-white/80">New York, USA</p>
        </div>
        <div className="absolute inset-x-7 bottom-7 grid grid-cols-5 gap-3">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
            <div key={day} className="rounded-md bg-white/10 p-2 text-center backdrop-blur">
              <div className="mx-auto mb-1 h-3 w-3 rounded-full bg-yellow-300" />
              <p className="text-[9px] font-semibold">{day}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="relative h-full overflow-hidden bg-[#fbf8ff] dark:bg-[#131827]">
        <div className="absolute inset-x-4 top-4 h-2 rounded-full bg-violet-100 dark:bg-white/10" />
        <div className="absolute right-5 top-7 h-20 w-20 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400 shadow-lg" />
        <div className="absolute left-6 top-10 max-w-[58%]">
          <p className="text-xl font-extrabold leading-tight text-space">
            Software Engineer.
            <br />
            <span className="text-indigo">Web &amp; Mobile Specialist.</span>
          </p>
          <div className="mt-4 h-2 w-28 rounded-full bg-indigo/20" />
          <div className="mt-2 h-2 w-20 rounded-full bg-indigo/10" />
        </div>
        <div className="absolute bottom-5 left-6 rounded bg-indigo/10 px-3 py-1 text-xs font-bold text-indigo">
          Frontend
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
    <section id="projects" className="px-8 py-10 md:px-16 lg:px-24">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white-adaptive shadow-[0_3px_18px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-[0_14px_34px_rgba(111,0,255,0.12)] dark:border-gray-800"
          >
            <div className="aspect-[16/8.7] overflow-hidden">
              <ProjectVisual type={project.visual} title={project.title} />
            </div>

            <div className="flex min-h-[174px] flex-col p-4">
              <h3 className="text-lg font-bold text-indigo">{project.title}</h3>
              <p className="mt-3 min-h-[48px] text-sm leading-6 text-space-light">
                {project.description}
              </p>

              <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                <div className="flex flex-wrap gap-2">
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="transition-colors hover:text-indigo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
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
