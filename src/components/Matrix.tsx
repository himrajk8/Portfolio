import { Smartphone, Server, Database, Cloud, Blocks, Layout, Terminal, Globe } from "lucide-react";
import { SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiGraphql, SiGooglecloud, SiDocker, SiVercel, SiFlutter, SiSwift, SiKotlin, SiRedux, SiMobx, SiFastlane } from "react-icons/si";
import { FaJava, FaNetworkWired, FaDatabase, FaAws, FaApple } from "react-icons/fa";

export default function Matrix() {
  const webStack = [
    {
      category: "Frontend",
      icon: <Layout className="w-4 h-4" />,
      items: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="dark:text-white" /> },
        { name: "Vue", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-4 h-4" />,
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="dark:text-white" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
        { name: "REST APIs", icon: <FaNetworkWired className="text-gray-500" /> }
      ]
    },
    {
      category: "Infrastructure",
      icon: <Cloud className="w-4 h-4" />,
      items: [
        { name: "AWS", icon: <FaAws className="text-[#FF9900] text-lg" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Vercel", icon: <SiVercel className="dark:text-white" /> }
      ]
    }
  ];

  const mobileStack = [
    {
      category: "Cross-Platform",
      icon: <Blocks className="w-4 h-4" />,
      items: [
        { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> }
      ]
    },
    {
      category: "Native OS",
      icon: <Terminal className="w-4 h-4" />,
      items: [
        { name: "Swift", icon: <SiSwift className="text-[#F05138]" /> },
        { name: "Objective-C", icon: <FaApple className="dark:text-gray-300" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
        { name: "Java", icon: <FaJava className="text-[#5382A1] text-lg" /> }
      ]
    },
    {
      category: "Architecture",
      icon: <Database className="w-4 h-4" />,
      items: [
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "MobX", icon: <SiMobx className="text-[#FF9955]" /> },
        { name: "CoreData", icon: <FaDatabase className="text-gray-400" /> },
        { name: "Fastlane CI/CD", icon: <SiFastlane className="text-[#00F200]" /> }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-16 px-6 relative overflow-hidden transition-colors duration-500">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-space to-space-light dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-lg text-space-light dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my core technologies, optimized for scalable web applications and high-performance native mobile experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Web Stack Card */}
          <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent hover:from-indigo-500/50 hover:to-purple-500/50 dark:hover:from-indigo-500/50 dark:hover:to-purple-500/50 transition-all duration-500 shadow-xl dark:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-2xl" />
            <div className="relative h-full bg-snow/90 dark:bg-[#0a0f1c]/90 backdrop-blur-3xl p-10 md:p-12 rounded-3xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.1)] dark:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-space dark:text-white tracking-tight">Web Engineering</h3>
              </div>
              
              <div className="space-y-10 flex-grow">
                {webStack.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-3 text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-5 uppercase tracking-widest">
                      {group.icon}
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map(tech => (
                        <span 
                          key={tech.name} 
                          className="px-4 py-2 bg-white dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 border border-gray-200 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/40 rounded-full text-sm font-medium text-space-light dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-default flex items-center gap-2"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stack Card */}
          <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent dark:from-white/10 dark:to-transparent hover:from-purple-500/50 hover:to-pink-500/50 dark:hover:from-purple-500/50 dark:hover:to-pink-500/50 transition-all duration-500 shadow-xl dark:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-2xl" />
            <div className="relative h-full bg-snow/90 dark:bg-[#0a0f1c]/90 backdrop-blur-3xl p-10 md:p-12 rounded-3xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.1)] dark:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-space dark:text-white tracking-tight">Mobile Native</h3>
              </div>
              
              <div className="space-y-10 flex-grow">
                {mobileStack.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-3 text-sm font-bold text-purple-600 dark:text-purple-400 mb-5 uppercase tracking-widest">
                      {group.icon}
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map(tech => (
                        <span 
                          key={tech.name} 
                          className="px-4 py-2 bg-white dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-500/20 border border-gray-200 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/40 rounded-full text-sm font-medium text-space-light dark:text-gray-300 hover:text-purple-700 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-default flex items-center gap-2"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
