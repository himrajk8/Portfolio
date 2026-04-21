import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-space">
          HIM RAJ
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-space-light">
          <a href="#experience" className="hover:text-indigo transition-colors">Experience</a>
          <a href="#tech-stack" className="hover:text-indigo transition-colors">Tech Stack</a>
          <a href="#case-studies" className="hover:text-indigo transition-colors">Case Studies</a>
          <a href="#contact" className="hover:text-indigo transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="/resume.pdf" 
            className="flex items-center gap-2 bg-indigo hover:bg-indigo-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
