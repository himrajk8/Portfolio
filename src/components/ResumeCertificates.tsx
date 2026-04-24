import { ArrowRight, Download } from "lucide-react";

const certificates = [
  {
    title: "Data Science",
    subtitle: "Professional Certificate",
    issuer: "IBM",
    tone: "border-amber-300",
  },
  {
    title: "Machine Learning",
    subtitle: "A-Z",
    issuer: "Udemy",
    tone: "border-stone-400",
  },
  {
    title: "Python for Data",
    subtitle: "Science",
    issuer: "Coursera",
    tone: "border-sky-400",
  },
  {
    title: "Android Development",
    subtitle: "Basics",
    issuer: "Google",
    tone: "border-zinc-500",
  },
];

const resumeSummary =
  "Motivated and detail-oriented graduate with a strong foundation in programming, problem-solving, and software development. Experienced in building projects using modern technologies and continuously learning new skills. Seeking an opportunity to contribute, learn, and grow in a dynamic work environment.";

const resumeSkills = ["Java", "React", "SQL", "JavaScript", "REST API"];

function CertificateCard({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  return (
    <div className="aspect-[1.55/1] rounded-lg border border-gray-200 bg-white-adaptive p-2 shadow-[0_3px_18px_rgba(15,23,42,0.06)] dark:border-gray-800">
      <div
        className={`flex h-full flex-col items-center justify-center rounded border-2 ${certificate.tone} bg-[radial-gradient(circle_at_top_right,rgba(111,0,255,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(248,249,250,0.9))] px-4 text-center dark:bg-none dark:bg-ghost`}
      >
        <div className="mb-3 h-8 w-8 rounded-full border border-gray-300 bg-white/80 dark:border-gray-700 dark:bg-white/5" />
        <p className="text-sm font-extrabold leading-tight text-space">
          {certificate.title}
        </p>
        <p className="text-sm font-extrabold leading-tight text-space">
          {certificate.subtitle}
        </p>
        <p className="mt-2 text-xs font-semibold text-space-light">
          {certificate.issuer}
        </p>
      </div>
    </div>
  );
}

export default function ResumeCertificates() {
  return (
    <section id="resume" className="scroll-mt-24 mb-10 grid grid-cols-1 gap-8 xl:grid-cols-[0.42fr_0.58fr]">
      <div>
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-indigo" />
          <h2 className="text-2xl font-bold text-space">Resume Preview</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_210px] md:items-center">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white-adaptive p-5 shadow-[0_3px_18px_rgba(15,23,42,0.06)] dark:border-gray-800">
            <div className="flex gap-5">
              <div className="w-16 flex-shrink-0">
                <img
                  src="/profile-photo.jpg"
                  alt="Him Raj profile"
                  className="h-20 w-16 rounded object-cover"
                />
                <div className="mt-5 text-[10px] font-semibold text-space-light">
                  <p className="mb-2 text-space">SKILLS</p>
                  <div className="space-y-0.5">
                    {resumeSkills.map((skill) => (
                      <p key={skill}>• {skill}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-extrabold text-space">HIM RAJ</h3>
                <p className="text-sm font-semibold text-space-light">
                  Web Developer
                </p>
                <div className="mt-2 h-px bg-gray-200 dark:bg-gray-800" />
                <p className="mt-2 text-xs font-medium leading-5 text-space-light">
                  {resumeSummary}
                </p>
                <div className="mt-5 text-[10px] font-semibold text-space-light">
                  <p className="mb-2 text-space">EDUCATION</p>
                  <p>B.Tech in Electronics &amp; Communication Engineering</p>
                  <p>Vellore Institute of Technology / 2021 - 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-base leading-7 text-space-light">
              Want to know more about my professional journey? Download my
              resume for detailed information.
            </p>
            <a
              href="/resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-hover hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 flex-shrink-0 rounded-full bg-indigo" />
            <h2 className="text-2xl font-bold text-space">Certificates</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/himrajk8/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo transition-colors hover:text-indigo-hover"
          >
            View all certificates
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.subtitle}`}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
