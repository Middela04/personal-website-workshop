type Experience = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  description: string[];
  skills: string[];
  logoUrl?: string; // optional: /logos/company.png
};

const EXPERIENCES: Experience[] = [
  {
    company: "Boeing",
    title: "AI / Data Science Engineering Intern",
    dates: "Summer 2026",
    location: "—",
    description: [
      "Built analytics to measure training effectiveness and identify interventions.",
      "Worked with operational psychology + dev ops to improve outcomes for mechanics.",
      "Created dashboards/metrics to track learning and performance trends.",
    ],
    skills: ["Python", "Data", "ML", "Analytics", "Dashboards"],
    logoUrl: "/logos/boeing.png",
  },
  {
    company: "Your Org / Lab",
    title: "Research / Data Role",
    dates: "2025 – 2026",
    location: "Austin, TX",
    description: [
      "Analyzed large survey datasets to study mental health trends.",
      "Built classification / scoring pipelines and summarized findings for stakeholders.",
    ],
    skills: ["R", "Python", "Research", "Stats", "Data Cleaning"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070717] to-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute left-[12%] top-[16%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[28%] top-[44%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[44%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[66%] top-[32%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[82%] top-[14%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[88%] top-[62%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[18%] top-[76%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[54%] top-[78%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      {/* Nebula blobs */}
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-[-8rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
        <p className="font-galaxy text-sm tracking-[0.25em] text-white/70">
          MISSION HISTORY
        </p>
        <h1 className="font-galaxy mt-2 text-3xl font-semibold tracking-widest text-white sm:text-4xl">
          Experience
        </h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Roles, teams, and projects I’ve worked on — logged like missions ✦
        </p>

        <div className="mt-10 space-y-6">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* Optional logo */}
          {exp.logoUrl ? (
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <img
                src={exp.logoUrl}
                alt={`${exp.company} logo`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-black/20" />
          )}

          <div>
            <h2 className="font-galaxy text-xl font-semibold tracking-wide text-white">
              {exp.title}
            </h2>
            <p className="mt-1 text-white/80">
              <span className="font-medium text-white">{exp.company}</span>
              <span className="text-white/50">
                {" "}
                • {exp.dates}
                {exp.location ? ` • ${exp.location}` : ""}
              </span>
            </p>
          </div>
        </div>

        {/* Cute “badge” */}
        <div className="self-start rounded-2xl border border-white/10 bg-black/25 px-4 py-2 text-xs font-medium text-white/80">
          ✦ Logged
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-white/80">
        {exp.description.map((line, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
