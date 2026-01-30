export default function About() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070717] to-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute left-[14%] top-[16%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[30%] top-[38%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[46%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[62%] top-[34%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[80%] top-[18%] h-1 w-1 rounded-full bg-white/80" />
        <div className="absolute left-[86%] top-[64%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[18%] top-[74%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute left-[54%] top-[78%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      {/* Nebula blobs */}
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-[-8rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-full max-w-5xl items-center justify-center px-6 py-12">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

          {/* Photo Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-72">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/20 to-indigo-500/30 blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md">
                {/* Replace src with your photo */}
                <img
                  src="/profile.jpg"
                  alt="Nethra Middela"
                  className="h-80 w-full object-cover sm:h-96"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="flex items-center">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">

              <p className="font-galaxy text-sm tracking-[0.25em] text-white/70">
                CREW MEMBER PROFILE
              </p>

              <h1 className="font-galaxy mt-2 text-3xl font-semibold tracking-widest text-white sm:text-4xl">
                Hi, I’m Nethra ✦
              </h1>

              <p className="mt-4 leading-relaxed text-white/80">
                I’m a computer science student, researcher, and aspiring AI engineer
                who loves building thoughtful technology that makes life easier,
                healthier, and more human.
              </p>

              <p className="mt-3 leading-relaxed text-white/80">
                My interests live at the intersection of data, psychology, and design.
                Whether I’m working on machine learning models, running experiments,
                or designing MVPs, I’m always curious about how people actually
                experience technology.
              </p>

              <p className="mt-3 leading-relaxed text-white/80">
                Outside of coding, you’ll probably find me running, watching Thai
                dramas, reading late at night, or hanging out with friends —
                recharging for the next mission 🚀
              </p>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Highlight label="CS @ UT Austin" />
                <Highlight label="AI + Data" />
                <Highlight label="Research" />
                <Highlight label="Product" />
                <Highlight label="Mental Health" />
                <Highlight label="Runner" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Highlight({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-center text-xs font-medium text-white/80">
      {label}
    </div>
  );
}
