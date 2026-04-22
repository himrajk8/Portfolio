"use client";

import { GraduationCap, Briefcase, MapPin, Code2 } from "lucide-react";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React",        icon: <SiReact       className="text-[#61DAFB] text-3xl" /> },
      { name: "HTML5",        icon: <SiHtml5        className="text-[#E34F26] text-3xl" /> },
      { name: "CSS3",         icon: <SiCss          className="text-[#1572B6] text-3xl" /> },
      { name: "JavaScript",   icon: <SiJavascript   className="text-[#F7DF1E] text-3xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss  className="text-[#06B6D4] text-3xl" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",    icon: <SiNodedotjs      className="text-[#339933] text-3xl" /> },
      { name: "Express.js", icon: <SiExpress        className="dark:text-white text-3xl" /> },
      { name: "REST API",   icon: <FaNetworkWired   className="text-gray-500 text-3xl" /> },
      { name: "MySQL",      icon: <SiMysql          className="text-[#4479A1] text-3xl" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git",      icon: <SiGit      className="text-[#F05032] text-3xl" /> },
      { name: "GitHub",   icon: <SiGithub   className="dark:text-white text-3xl" /> },
      { name: "VS Code",  icon: <Code2      className="text-[#007ACC] w-8 h-8" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-3xl" /> },
      { name: "Postman",  icon: <SiPostman  className="text-[#FF6C37] text-3xl" /> },
    ],
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

        {/* ── LEFT: About Me ── */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-indigo inline-block flex-shrink-0" />
            <h2 className="text-2xl font-bold text-space">About Me</h2>
          </div>

          <div className="space-y-4 mb-8 text-space-light leading-relaxed text-base flex-grow">
            <p>
              I&apos;m{" "}
              <span className="text-indigo font-semibold">Him Raj</span>, a
              B.Tech graduate in Electronics &amp; Communication Engineering from{" "}
              <span className="font-semibold text-space">
                Vellore Institute of Technology
              </span>
              , with a strong passion for data, software, and building impactful
              digital products. I love{" "}
              <strong className="text-space font-semibold">
                crafting intelligent, scalable and meaningful
              </strong>{" "}
              solutions using modern technologies.
            </p>
            <p>
              Currently working as a{" "}
              <span className="font-semibold text-space">Data Analyst at PW</span>
              , I have hands-on experience spanning data analysis, web development,
              and mobile applications. I enjoy turning ideas into real-world
              products that make a difference.
            </p>
          </div>

          {/* Info cards */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-indigo" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-space mb-0.5">B.Tech in ECE</p>
                <p className="text-sm text-space-light">Vellore Institute of Technology</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-indigo" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-space mb-0.5">Data Analyst</p>
                <p className="text-sm text-space-light">PW (Physics Wallah)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-indigo" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-space mb-0.5">Based in</p>
                <p className="text-sm text-space-light">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Tech Stack ── */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 rounded-full bg-indigo inline-block flex-shrink-0" />
            <h2 className="text-2xl font-bold text-space">Tech Stack</h2>
          </div>
          <p className="text-sm text-space-light mb-6 pl-5">The technologies I work with</p>

          <div className="space-y-5 flex-grow">
            {techStack.map((group) => (
              <div key={group.category} className="flex gap-4 items-center">
                {/* Category label */}
                <p className="w-28 flex-shrink-0 text-sm font-bold text-space">
                  {group.category}
                </p>

                {/* Icon cards */}
                <div className="flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center gap-1.5 w-[68px] h-[68px] bg-white-adaptive border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:border-indigo/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
                    >
                      {tech.icon}
                      <span className="text-[9px] font-semibold text-space-light text-center leading-tight px-0.5">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
