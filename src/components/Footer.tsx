"use client";

import { Send, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "af44b2b5-5a13-4c2e-be02-5f2046ef19b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="text-space pt-10 pb-8 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Anchor for contact nav link */}
      <div id="contact" className="scroll-mt-24" />
      {/* Main two-column section */}
      <div className="w-full mb-8">

        {/* Title — unchanged */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">
          Currently open to new opportunities.
        </h2>
        <p className="text-xl text-space-light mb-8 text-center">
          Let&apos;s discuss how I can contribute to your engineering team.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_240px] gap-8 items-start">
          {/* ── LEFT: contact info ── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-indigo inline-block"></span>
              <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
            </div>
            <p className="text-space-light mb-10 text-base leading-relaxed">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-space uppercase tracking-wide mb-0.5">Email</p>
                  <a
                    href="mailto:[himrajk8@gmail.com]"
                    className="text-sm text-space-light hover:text-indigo transition-colors break-all"
                  >
                    himrajk8@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-space uppercase tracking-wide mb-0.5">Phone</p>
                  <a
                    href="tel:+919631966076"
                    className="text-sm text-space-light hover:text-indigo transition-colors"
                  >
                    +91 9631 966 076
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-space uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm text-space-light">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── MIDDLE: contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="bg-white-adaptive border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-xl space-y-4"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all text-sm"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all text-sm"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message */}
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all resize-none text-sm"
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full flex items-center justify-center gap-2 bg-indigo hover:bg-indigo-hover text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:shadow-none"
            >
              <Send className="w-5 h-5" />
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-500 dark:text-green-400 text-center animate-in fade-in">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-500 dark:text-red-400 text-center animate-in fade-in">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>

          {/* ── RIGHT: social links ── */}
          <div className="bg-white-adaptive border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xl">
            <h4 className="text-lg font-bold text-space">Connect with me</h4>
            <div className="mt-4 space-y-4">
              <a
                href="https://www.linkedin.com/in/himrajk8/"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-space-light transition-colors hover:text-indigo"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo/10 text-indigo">
                  <FaLinkedinIn className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-space">LinkedIn</span>
                  <span className="block text-xs">linkedin.com/in/himrajk8</span>
                </span>
              </a>
              <a
                href="https://github.com/himrajk8"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-space-light transition-colors hover:text-indigo"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo/10 text-indigo">
                  <FaGithub className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-space">GitHub</span>
                  <span className="block text-xs">github.com/himrajk8</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative flex items-center justify-center text-sm text-space-light border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-center">© {new Date().getFullYear()} Him Raj. All rights reserved.</p>
        <a
          href="#"
          className="absolute right-0 inline-flex items-center gap-1.5 font-medium text-space-light transition-colors hover:text-indigo"
        >
          <span className="hidden sm:inline">Back to top</span>
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
