
export default function PositionSection() {
  return (
    <main className="w-full bg-black text-white">
      {/* SECTION 05 — POSITION */}
      <section className="flex min-h-screen w-full items-center justify-center px-6 py-24 sm:px-10">
        <div className="mx-auto flex w-full max-w-[900px] flex-col justify-center">
          <p className="mb-7 font-mono text-[12px] tracking-wide text-[#85808f]">
            05 - POSITION
          </p>

          <h2 className="font-sans text-[clamp(24px,2.72vw,41px)] font-semibold leading-[1.15] tracking-[-0.04em]">
            <span className="block text-white">
              An import you ship this afternoon
            </span>

            <span className="mt-1 block text-[#c4bdcc]">
              NOT A CONTROL PLANE TO ROLL OUT
            </span>
          </h2>

          <p className="mt-7 max-w-[680px] font-sans text-[clamp(14px,1.19vw,18px)] leading-[1.65] text-[#b8b2c3]">
            No gateway, no proxy, no migration to get there — let your coding
            agent set it up. Arcjet runs in the code you already deploy, so your
            failure domain doesn&apos;t grow and coverage rolls out service by
            service.
          </p>

          <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-[#39304f] to-transparent" />
        </div>
      </section>

      {/* CONTEXT ACTION */}
      <section className="w-full px-6 py-20 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="mx-auto w-full max-w-[500px]">
            <h2 className="font-sans text-[clamp(20px,1.8vw,28px)] font-semibold leading-tight tracking-[-0.03em] text-white">
              CONTEXT IS THE THING YOU{" "}
              <span className="italic">LOSE</span> ON THE WAY OUT.
            </h2>

            <p className="mt-8 max-w-[480px] text-[clamp(14px,1.2vw,18px)] leading-[1.7] text-[#b8b2c3]">
              Anything in front of your application sees traffic. It does not
              see the function that moves the money, the arguments about to be
              passed to it, or the three steps that made this one risky.
            </p>

            {/* POINT 1 */}
            <div className="mt-9 flex gap-4">
              <div className="mt-1 shrink-0 font-mono text-[24px] text-[#8d83ff]">
                {"</>"}
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#c5bfce]">
                  Arcjet sees the arguments
                </h3>

                <p className="mt-2 text-[14px] leading-[1.7] text-[#85808f]">
                  A refund of $12,000 and a refund of $12 look the same from the
                  network.
                </p>
              </div>
            </div>

            {/* POINT 2 */}
            <div className="mt-6 flex gap-4">
              <div className="mt-1 shrink-0 text-[24px] text-[#8d83ff]">
                ◇
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#c5bfce]">
                  Arcjet works everywhere
                </h3>

                <p className="mt-2 text-[14px] leading-[1.7] text-[#85808f]">
                  Coding agents, queue consumers, scheduled jobs, and workflow
                  steps. They all take actions.
                </p>
              </div>
            </div>

            {/* POINT 3 */}
            <div className="mt-6 flex gap-4">
              <div className="mt-1 shrink-0 text-[24px] text-[#8d83ff]">
                ◷
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#c5bfce]">
                  Nothing new to keep alive
                </h3>

                <p className="mt-2 text-[14px] leading-[1.7] text-[#85808f]">
                  No sidecars or containers to run. Nothing to try to scale at
                  3am. Arcjet works through Coding agent hooks and SDK
                  integrations in-code.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="mx-auto flex min-h-[520px] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border border-[#302d38] px-5 py-8 sm:px-6">

            {/* DIAGRAM */}
            <div className="relative h-[320px] w-full max-w-[370px]">

              {/* OUTER RING */}
              <div className="absolute left-[28%] top-[5%] h-[250px] w-[250px] -translate-x-1/2 rounded-full border border-[#302d38]" />

              {/* MIDDLE RING */}
              <div className="absolute left-[28%] top-[17%] h-[200px] w-[200px] -translate-x-1/2 rounded-full border border-[#383442]" />

              {/* MAIN GLOWING RING */}
              <div className="absolute left-[28%] top-[29%] h-[150px] w-[150px] -translate-x-1/2 rounded-full border border-[#7770e8] shadow-[0_0_25px_8px_rgba(119,112,232,0.22),inset_0_0_25px_rgba(119,112,232,0.08)]" />

              {/* CENTER DOT */}
              <div className="absolute left-[28%] top-[29%] z-10 h-9 w-9 -translate-x-1/2 translate-y-[57px] rounded-full bg-white" />

              {/* ORBIT DOTS */}
              <div className="absolute left-[18%] top-[43%] h-2 w-2 rounded-full bg-[#33313a]" />

              <div className="absolute left-[15%] top-[48%] h-2 w-2 rounded-full bg-[#33313a]" />

              <div className="absolute left-[32%] top-[62%] h-2 w-2 rounded-full bg-[#33313a]" />

              {/* STAR */}
              <div className="absolute left-[28%] top-[76%] -translate-x-1/2 text-[40px] leading-none text-white">
                ✦
              </div>

              {/* DOTTED GUIDE LINES */}
              <div className="absolute left-[55%] top-[17%] w-[9%] border-t border-dotted border-[#393542]" />

              <div className="absolute left-[55%] top-[40%] w-[9%] border-t border-dotted border-[#393542]" />

              <div className="absolute left-[36%] top-[51%] w-[28%] border-t border-dotted border-[#393542]" />

              <div className="absolute left-[36%] top-[76%] w-[28%] border-t border-dotted border-[#7770e8]" />

              {/* LABEL 1 */}
              <div className="absolute left-[66%] top-[14%] font-mono text-[10px] leading-relaxed text-[#55515f] sm:text-[11px]">
                <p>NETWORK EDGE</p>
                <p className="italic">SEES PACKETS</p>
              </div>

              {/* LABEL 2 */}
              <div className="absolute left-[66%] top-[37%] font-mono text-[10px] leading-relaxed text-[#55515f] sm:text-[11px]">
                <p>GATEWAY</p>
                <p className="italic">ALLOW/DENY</p>
              </div>

              {/* LABEL 3 */}
              <div className="absolute left-[66%] top-[62%] -translate-y-full font-mono text-[10px] leading-relaxed text-[#55515f] sm:text-[11px]">
                <p>DASHBOARDS</p>
                <p className="italic">AFTER THE FACT</p>
              </div>

              {/* LABEL 4 */}
              <div className="absolute left-[66%] top-[76%] font-mono text-[10px] leading-relaxed text-[#8980ff] sm:text-[11px]">
                <p>ARCJET</p>
                <p className="italic">SEES THE ACTION</p>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-4 text-center font-sans text-[13px] leading-[1.7] text-[#8980ff] sm:text-[14px]">
              <p>Enforcement shipped today.</p>
              <p className="text-[#625bb4]">
                Not in a month, or in a quarter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
