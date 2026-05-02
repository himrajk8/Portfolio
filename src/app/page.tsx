import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import ResumeCertificates from "@/components/ResumeCertificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-indigo/30 selection:text-indigo">
      <Header />
      <Hero />
      <AboutMe />
      <Timeline />
      <Projects />
      <section className="px-8 py-10 md:px-16 lg:px-24">
        <ResumeCertificates />
      </section>
      <Footer />
    </main>
  );
}
