"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Check on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/70 dark:bg-[#030712]/70 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-space">
            HIM RAJ
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-space-light">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  link.name === "Home" ? "text-indigo" : "hover:text-indigo"
                } transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Desktop Download Button - Hidden on mobile */}
            <a
              href="/resume.pdf"
              className="hidden md:flex items-center gap-2 bg-indigo hover:bg-indigo-hover text-[white] px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-space p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-[70] w-64 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--theme-snow)" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-glass-border">
          <span className="text-xl font-bold tracking-tight text-space">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-space hover:text-indigo transition-colors p-2 -mr-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex flex-col p-6 gap-6 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                link.name === "Home" ? "text-indigo" : "text-space-light hover:text-indigo"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Download Button inside Sidebar */}
        <div className="p-6 border-t border-glass-border mt-auto">
          <a
            href="/resume.pdf"
            className="flex items-center justify-center gap-2 bg-indigo hover:bg-indigo-hover text-[white] px-6 py-3 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}
