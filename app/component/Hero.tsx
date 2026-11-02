
export default function Hero() {
  return (
    <section className="relative flex min-h-[410px] w-full items-center justify-center overflow-hidden bg-[#101014] px-6 pt-0 pb-16">

      {/* Background Texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_4px)]"
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,85,140,0.12)_0%,transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">

        {/* Subtitle */}
        <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-white">
          RUNTIME SECURITY FOR AI AGENTS
        </p>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">

          Put the{" "}

          <span className="font-serif italic text-[#aaa4ff]">
            decision
          </span>

          {" "}where the{" "}

          <span className="font-serif italic">
            action
          </span>

          {" "}is

        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[13px] font-medium italic leading-relaxed text-[#aaa4ff]">

          Block prompt injection, stop PII leaks, block bots, and add guardrails to

          <br className="hidden sm:block" />

          tools, APIs, and database calls.

        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-6">

          {/* Start with code */}
          <a
            href="#code"
            className="group flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors duration-200 hover:text-white"
          >
            <span className="text-white/60 group-hover:text-white/90 transition-colors duration-200">
              &lt;/&gt;
            </span>
            Start with code
          </a>

          {/* Start with a prompt — Primary */}
          <div className="group relative">
            <a
              href="#prompt"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[15px] font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span className="text-lg leading-none">✦</span>
              Start with a prompt
            </a>

            {/* Hover Tooltip */}
            <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[300px] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-xl border border-white/10 bg-[#1c1c22] p-4 shadow-2xl">
                <ol className="space-y-2 text-[13px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#aaa4ff] font-semibold">1.</span>
                    <span className="text-white/70">
                      Run:{" "}
                      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[12px] text-white">
                        npx skills add arcjet/skills
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#aaa4ff] font-semibold">2.</span>
                    <span className="text-white/70">Add Arcjet protection to my app</span>
                  </li>
                </ol>

                {/* Copy button */}
                <button
                  className="absolute right-3 top-3 rounded-md p-1.5 text-white/30 transition-colors hover:bg-white/10 hover:text-white/70"
                  title="Copy"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>

              </div>
            </div>
          </div>

          {/* Book a demo */}
          <a
            href="#demo"
            className="group flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors duration-200 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/60 group-hover:text-white/90 transition-colors duration-200"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a demo
          </a>

        </div>

      </div>
    </section>
  );
}
