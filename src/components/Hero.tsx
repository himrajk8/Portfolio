import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-20 sm:px-8 md:px-16 lg:px-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-3/5 bg-[radial-gradient(circle_at_50%_50%,rgba(111,0,255,0.13),transparent_36%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] grid-cols-1">
        <div className="flex flex-col items-start">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white-adaptive px-4 py-2 text-xs font-bold text-space shadow-sm dark:border-gray-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for Opportunities
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] text-space sm:text-5xl md:text-6xl">
            <span className="hero-typing">Software Engineer.</span>
            <br />
            <span className="text-indigo">Web Development Specialist.</span>
            <br />
            Ready for scale.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-space-light sm:text-base">
            I build robust, scalable and user-centric web applications
            that solve real-world problems and deliver exceptional experiences.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-hover hover:shadow-xl sm:w-auto"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white-adaptive px-8 py-4 text-sm font-bold text-space shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo/30 hover:shadow-md dark:border-gray-800 sm:w-auto"
            >
              Contact Me
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden lg:flex min-h-[480px] w-full max-w-[600px] items-center justify-center">
          <div className="absolute h-[580px] w-[580px] rounded-full border border-indigo/10" />
          <div className="absolute h-[470px] w-[470px] rounded-full border border-indigo/15" />
          <div className="absolute h-[430px] w-[430px] rounded-full border-2 border-indigo/70 shadow-[0_0_34px_rgba(111,0,255,0.16)]" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-indigo/20" />
          <div className="relative h-[334px] w-[334px] overflow-hidden rounded-full bg-gradient-to-b from-indigo/10 via-indigo/5 to-indigo/20 ring-8 ring-white-adaptive">
            <Image
              src="/profile-photo.jpg"
              alt="Him Raj profile photo"
              fill
              priority
              sizes="334px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute right-8 top-10 rounded-lg border border-gray-200 bg-white-adaptive px-7 py-5 text-center shadow-xl dark:border-gray-800">
            <p className="text-2xl font-extrabold text-indigo">15+</p>
            <p className="mt-1 text-xs font-semibold text-space-light">
              Projects
              <br />
              Completed
            </p>
          </div>

          <div className="absolute bottom-12 right-8 rounded-lg border border-gray-200 bg-white-adaptive px-7 py-5 text-center shadow-xl dark:border-gray-800">
            <p className="text-sm font-extrabold text-indigo">Open to</p>
            <p className="mt-1 text-xs font-semibold text-space-light">
              SDE / Android
              <br />
              Roles
            </p>
          </div>
        </div>

        {/* Mobile-only profile image — compact, centered below text */}
        <div className="flex lg:hidden justify-center mt-4">
          <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full bg-gradient-to-b from-indigo/10 via-indigo/5 to-indigo/20 ring-6 ring-white-adaptive shadow-xl">
            <Image
              src="/profile-photo.jpg"
              alt="Him Raj profile photo"
              fill
              priority
              sizes="220px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
