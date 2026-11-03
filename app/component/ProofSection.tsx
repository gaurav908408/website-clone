
export default function ProofSection() {
  return (
    <main className="w-full bg-black text-white">
      {/* SECTION 06 — PROOF */}
      <section className="relative w-full px-4 py-16 sm:px-8">

        {/* MAIN CONTAINER */}
        <div className="mx-auto flex w-full max-w-[840px] flex-col items-start">

          {/* SECTION LABEL */}
          <p className="mb-5 font-mono text-[10px] tracking-wide text-[#85808f] sm:text-[11px]">
            06&nbsp;&nbsp;-&nbsp;&nbsp;PROOF
          </p>

          {/* HEADING */}
          <h2 className="text-left font-sans text-[clamp(20px,2.1vw,31px)] font-semibold leading-[1.2] tracking-[-0.03em]">
            <span className="block text-[#a8a0b4]">
              READY FOR YOUR STACK
            </span>

            <span className="block text-white font-bold">
              whatever and wherever you run.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[410px] text-left font-sans text-[clamp(11px,0.85vw,13px)] leading-[1.7] text-[#8a8494]">
            LLM and framework agnostic. Deploy through coding agent hooks,
            OTel, provider integration, AI framework integrations, and native
            SDKs.
          </p>

          {/* STATS CARDS GRID */}
          <div className="mt-14 grid w-full grid-cols-1 overflow-hidden rounded-[10px] border border-[#2a2733] sm:grid-cols-2 lg:grid-cols-4">

            {/* SOC 2 */}
            <div className="flex flex-col gap-2 bg-[#0c0b10] p-5">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[clamp(18px,1.7vw,25px)] font-bold tracking-tight text-[#ff7a2f]">
                  SOC
                </span>
                <span className="font-mono text-[clamp(18px,1.7vw,25px)] font-bold tracking-tight text-[#ff7a2f]">
                  2
                </span>
              </div>
              <p className="text-left text-[10px] leading-[1.6] text-[#9a95a5] sm:text-[11px]">
                Type II, unqualified opinion.<br />
                Security, availability and<br />
                confidentiality.
              </p>
            </div>

            {/* < 1ms */}
            <div className="flex flex-col gap-2 border-t border-[#2a2733] bg-[#0c0b10] p-5 sm:border-l sm:border-t-0">
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-[clamp(14px,1.3vw,20px)] font-bold tracking-tight text-[#3ecf5c]">
                  &lt;
                </span>
                <span className="font-mono text-[clamp(18px,1.7vw,25px)] font-bold tracking-tight text-white">
                  1
                </span>
                <span className="font-mono text-[clamp(13px,1.1vw,17px)] font-bold tracking-tight text-white">
                  ms
                </span>
              </div>
              <p className="text-left text-[10px] leading-[1.6] text-[#9a95a5] sm:text-[11px]">
                Local decision overhead.<br />
                20 to 30ms when the cloud API is<br className="hidden lg:inline" />
                needed.
              </p>
            </div>

            {/* 20 SDKs */}
            <div className="flex flex-col gap-2 border-t border-[#2a2733] bg-[#0c0b10] p-5 lg:border-l lg:border-t-0">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[clamp(18px,1.7vw,25px)] font-bold tracking-tight text-white">
                  20
                </span>
                <span className="font-mono text-[clamp(13px,1.1vw,17px)] font-bold tracking-tight text-white">
                  SDKs
                </span>
              </div>
              <p className="text-left text-[10px] leading-[1.6] text-[#9a95a5] sm:text-[11px]">
                Claude Code, Codex, Copilot,<br />
                Cursor, JavaScript, Python and<br />
                Go, across AI frameworks and<br />
                runtimes.
              </p>
            </div>

            {/* 600+ */}
            <div className="flex flex-col gap-2 border-t border-[#2a2733] bg-[#0c0b10] p-5 lg:border-l lg:border-t-0">
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-[clamp(18px,1.7vw,25px)] font-bold italic tracking-tight text-[#ff7a2f]">
                  600+
                </span>
              </div>
              <p className="text-left text-[10px] leading-[1.6] text-[#9a95a5] sm:text-[11px]">
                Bot types detected across 25<br />
                categories, without serving a<br />
                CAPTCHA.
              </p>
            </div>
          </div>

          {/* COMPLIANCE BADGES ROW */}
          <div className="mt-2 flex w-full flex-col items-center gap-4 rounded-[10px] border border-[#2a2733] bg-[#0c0b10] px-6 py-5 sm:flex-row sm:justify-between">

            {/* BADGES - left side */}
            <div className="flex shrink-0 items-center gap-3">

              {/* AICPA SOC badge */}
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3a3744]">
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-bold leading-tight tracking-widest text-[#9a95a5]">AICPA</span>
                  <span className="text-[8px] font-bold leading-tight tracking-wider text-white">SOC</span>
                </div>
              </div>

              {/* GDPR badge */}
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3a3744]">
                <div className="flex flex-col items-center">
                  <svg className="mb-0.5 h-2.5 w-2.5 text-[#3ecf5c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2C8 6 8 18 12 22M12 2c4 4 4 16 0 20M2 12h20" />
                  </svg>
                  <span className="text-[6px] font-bold leading-tight tracking-wider text-white">GDPR</span>
                </div>
              </div>

              {/* HIPAA badge */}
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3a3744]">
                <div className="flex flex-col items-center">
                  <svg className="mb-0.5 h-3 w-3 text-[#9a95a5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M5 6v12M19 6v12M5 12h14M8 2h8M8 22h8" />
                    <circle cx="12" cy="7" r="2" />
                    <circle cx="12" cy="17" r="2" />
                  </svg>
                  <span className="text-[6px] font-bold leading-tight tracking-wider text-white">HIPAA</span>
                </div>
              </div>
            </div>

            {/* TEXT - right side */}
            <div className="text-center sm:text-right">
              <p className="text-[10px] leading-[1.65] text-[#9a95a5] sm:text-[11px]">
                Evidence stored in Arcjet cloud, single tenant, private VPC, or your own storage.
              </p>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-white transition-colors hover:text-[#c4bdcc] sm:text-[11px]"
              >
                Full detail on the trust page
                <span className="text-[12px]">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
