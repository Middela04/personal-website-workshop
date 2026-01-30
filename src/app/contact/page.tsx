export default function Contact() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070717] to-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[28%] top-[42%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[44%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[63%] top-[35%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[78%] top-[16%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[85%] top-[58%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[18%] top-[70%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[52%] top-[78%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      {/* Soft nebula blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-[-8rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mb-6">
            <p className="font-galaxy text-sm tracking-[0.25em] text-white/70">
              TRANSMISSION OPEN
            </p>
            <h1 className="font-galaxy mt-2 text-3xl font-semibold tracking-widest text-white sm:text-4xl">
              Contact Me
            </h1>
            <p className="mt-2 text-white/70">
              Send a message from your planet — I’ll respond as soon as I’m back in orbit.
            </p>
          </div>

          {/* Your info cards */}
          <div className="space-y-3">
            <InfoRow label="Email" value="nethramiddela127@gmail.com" />
            <InfoRow label="LinkedIn" value="linkedin.com/in/nethramiddela" />
            <InfoRow label="GitHub" value="github.com/Middela07" />
            <InfoRow label="Location" value="Austin, TX" />
          </div>

          {/* Optional message button (just links to email) */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:youremail@domain.com"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/15 active:scale-[0.99]"
            >
              Email me
              <span className="ml-2">✦</span>
            </a>

            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10 active:scale-[0.99]"
            >
              Connect on LinkedIn
              <span className="ml-2">☄︎</span>
            </a>
          </div>

          <p className="mt-6 text-center text-xs text-white/50">
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <span className="text-sm text-white/70">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
