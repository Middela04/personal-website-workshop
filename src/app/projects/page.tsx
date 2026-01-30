type Project = {
  title: string;
  date: string;
  role?: string;
  description: string;
  tags: string[];
  imageUrl?: string; // optional (use /images/xyz.png if in public)
  link?: string; // optional
};

const PROJECTS: Project[] = [
  {
    title: "Project One: Prediction Model",
    date: "2026",
    role: "Role / Team",
    description:
      "1–2 sentences about what you built, what problem it solved, and the impact.",
    tags: ["Next.js", "AI", "Design"],
    imageUrl: "/placeholder1.png",
    link: "https://example.com",
  },
  {
    title: "Project Two",
    date: "2025",
    role: "Role / Class",
    description:
      "What you did, what you learned, and what you’re proud of. Keep it short and punchy.",
    tags: ["Data", "Python", "Visualization"],
    imageUrl: "/placeholder2.png",
  },
  {
    title: "Project Three",
    date: "2025",
    role: "Hackathon",
    description:
      "A fun one-liner + a detail. Example: Built a prototype in 48 hours and demoed to judges.",
    tags: ["MVP", "Product", "UX"],
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070717] to-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute left-[10%] top-[12%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[22%] top-[48%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[40%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[64%] top-[32%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[80%] top-[14%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[88%] top-[62%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[16%] top-[78%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[52%] top-[72%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      {/* Nebula blobs */}
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-44 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-[-8rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-10 sm:mb-12">
          <p className="font-galaxy text-sm tracking-[0.25em] text-white/70">
            MISSION LOG
          </p>
          <h1 className="font-galaxy mt-2 text-3xl font-semibold tracking-widest text-white sm:text-4xl">
            Projects
          </h1>
          <p className="mt-2 max-w-2xl text-white/70">
            A timeline of things I’ve built — each one a little trip into space ✦
          </p>
        </div>

        <Timeline projects={PROJECTS} />
      </div>
    </div>
  );
}

function Timeline({ projects }: { projects: Project[] }) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 md:block" />

      <div className="space-y-10 sm:space-y-12">
        {projects.map((p, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={p.title} className="relative">
              {/* Dot */}
              <div className="pointer-events-none absolute left-1/2 top-7 hidden -translate-x-1/2 md:block">
                <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
              </div>

              {/* Mobile: single column cards */}
              <div className="md:hidden">
                <ProjectCard project={p} />
              </div>

              {/* Desktop: alternating left/right */}
              <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-10">
                <div className={isLeft ? "flex justify-end" : ""}>
                  {isLeft ? <ProjectCard project={p} /> : <Spacer />}
                </div>

                <div className={!isLeft ? "flex justify-start" : ""}>
                  {!isLeft ? <ProjectCard project={p} /> : <Spacer />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="h-1 w-full" />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-galaxy text-xl font-semibold tracking-wide text-white">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-white/70">
            {project.date}
            {project.role ? <span className="text-white/50"> • {project.role}</span> : null}
          </p>
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            View ↗
          </a>
        ) : null}
      </div>

      {project.imageUrl ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          {/* Use normal img to keep it simple. If you want Next/Image, tell me and I’ll switch it. */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-48 w-full object-cover sm:h-56"
            loading="lazy"
          />
        </div>
      ) : null}

      <p className="mt-4 text-white/80">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
