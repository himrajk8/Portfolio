"use client";

import { Send } from "lucide-react";
import { useState } from "react";

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

      // Web3Forms sometimes returns an HTML redirect instead of JSON depending on browser configurations.
      // If the network response is 200 OK, the email was sent successfully.
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
    <footer id="contact" className="text-space pt-24 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 relative mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Currently open to new opportunities.
        </h2>
        <p className="text-xl text-space-light mb-12 max-w-2xl mx-auto">
          Let's discuss how I can contribute to your engineering team. Fill out the form below to get in touch.
        </p>

        <form className="max-w-md mx-auto text-left space-y-6 bg-white-adaptive p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-space mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-space mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-space mb-2">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              className="w-full bg-ghost border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-space placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent transition-all resize-none"
              placeholder="Hi Him, we are looking for a Senior Engineer..."
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full flex items-center justify-center gap-2 bg-indigo hover:bg-indigo-hover text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:shadow-none"
          >
            <Send className="w-5 h-5" />
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>
          
          {status === "success" && (
            <p className="text-sm font-medium text-green-500 dark:text-green-400 text-center mt-2 animate-in fade-in">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400 text-center mt-2 animate-in fade-in">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm text-space-light">
        <p>© {new Date().getFullYear()} Him Raj. All rights reserved.</p>
      </div>
    </footer>
  );
}
