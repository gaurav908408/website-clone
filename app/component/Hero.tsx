
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
        <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-white/50">
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

      </div>
    </section>
  );
}
