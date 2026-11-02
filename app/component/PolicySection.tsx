export default function PolicySection() {
  const codeLines = [
    { number: "1", code: "const deleteLimit = fixedWindow({", type: "normal" },
    { number: "2", code: '  mode: "DRY_RUN",', type: "remove" },
    { number: "3", code: "  maxRequests: 20,", type: "remove" },
    { number: "4", code: '  mode: "LIVE",', type: "add" },
    { number: "5", code: "  maxRequests: 5,", type: "add" },
    { number: "6", code: "  windowSeconds: 3600,", type: "normal" },
    { number: "7", code: "});", type: "normal" },
    { number: "8", code: "", type: "normal" },
    { number: "9", code: "const decision = await arcjet.guard({", type: "normal" },
    { number: "10", code: '  label: "agent.delete",', type: "normal" },
    { number: "11", code: "  rules: [deleteLimit({ key: user.id })],", type: "normal" },
    { number: "12", code: "});", type: "normal" },
  ];

  const features = [
    "20 native SDKs & framework integrations",
    "Version controlled and diffable",
    "Unit testable with helpers for captured actions",
    "Dry run mode before anything blocks",
  ];

  const remoteFeatures = [
    "Change policy in real time, no code deploy",
    "Consistent across every service and workflow",
    "Model the blast radius before you turn it on",
    "Every decision recorded, audit ready",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-14 sm:px-8 md:py-16">
      {/* Heading and Description */}
      <div className="mx-auto max-w-[700px]">
        <p className="font-mono text-[11px] tracking-wide text-[#85808f] sm:text-[13px]">
          04 - POLICY
        </p>

        <h2 className="mt-6 font-sans text-[clamp(24px,3vw,36px)] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
          Two routes to policy. Use both.
        </h2>

        <p className="mt-5 max-w-[650px] font-sans text-[14px] leading-[1.6] text-[#b8b2c3] sm:text-[16px]">
          Engineers want rules in the repo, reviewed and tested like
          everything else. Security teams need to change policy without
          waiting for a release. Arcjet splits the policy from the inputs
          so both are true at once.
        </p>
      </div>

      {/* Smaller Policy Cards */}
      <div className="mx-auto mt-12 grid w-full max-w-[900px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Rules in Code */}
        <div className="overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#151519]">
          <div className="px-6 py-6">
            <p className="font-mono text-[10px] tracking-wide text-[#a7a0b0] sm:text-[11px]">
              I — <span className="text-[#ff8b45]">OWNED BY ENGINEERING</span>
            </p>

            <h3 className="mt-5 font-sans text-[18px] font-semibold tracking-[-0.035em] text-white sm:text-[21px]">
              RULES IN CODE
            </h3>

            <p className="mt-6 font-sans text-[13px] leading-[1.6] text-[#b8b2c3] sm:text-[14px]">
              Rules live next to the handler they protect. They go through
              review, they are covered by tests, and they ship on your normal
              release path.
            </p>

            <ul className="mt-8 space-y-3 font-sans text-[12px] text-[#b8b2c3] sm:text-[14px]">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#43d18b]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Editor */}
          <div className="border-t border-white/[0.04] bg-[#0b0b0d] px-4 py-5">
            <div className="overflow-hidden rounded-[10px] border border-white/[0.04] bg-black">
              <div className="border-b border-white/[0.08] px-4 py-3">
                <span className="font-mono text-[10px] text-[#85808f] sm:text-[11px]">
                  agent/delete.ts
                </span>
              </div>

              <div className="overflow-x-auto py-2 font-mono text-[10px] sm:text-[11px]">
                {codeLines.map((line) => (
                  <div
                    key={line.number}
                    className={`flex min-w-[350px] ${
                      line.type === "remove"
                        ? "bg-[#350707]"
                        : line.type === "add"
                          ? "bg-[#002613]"
                          : ""
                    }`}
                  >
                    <span className="w-9 shrink-0 px-2 text-right text-[#686474]">
                      {line.number}
                    </span>

                    {line.type === "remove" && (
                      <span className="mr-2 text-[#ff6b6b]">-</span>
                    )}

                    {line.type === "add" && (
                      <span className="mr-2 text-[#43d18b]">+</span>
                    )}

                    <span className="whitespace-pre text-[#c5c2d0]">
                      {line.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Remote Policies */}
        <div className="overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#151519]">
          <div className="px-6 py-6">
            <p className="font-mono text-[10px] tracking-wide text-[#a7a0b0] sm:text-[11px]">
              II — <span className="text-[#e66be8]">OWNED BY SECURITY</span>
            </p>

            <h3 className="mt-5 font-sans text-[18px] font-semibold tracking-[-0.035em] text-white sm:text-[21px]">
              REMOTE POLICIES
            </h3>

            <p className="mt-6 font-sans text-[13px] leading-[1.6] text-[#b8b2c3] sm:text-[14px]">
              Policy is managed in the cloud and takes effect immediately.
              Engineering supplies the inputs and handles the result. Nobody
              has to open a pull request to tighten a rule.
            </p>

            <ul className="mt-8 space-y-3 font-sans text-[12px] text-[#b8b2c3] sm:text-[14px]">
              {remoteFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#43d18b]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Remote Policy Visual */}
          <div className="border-t border-white/[0.04] bg-[#0b0b0d] px-4 py-5">
            <div className="rounded-[10px] border border-white/[0.04] bg-[#101012] p-4">
              {/* Policy Status */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d75be3] shadow-[0_0_10px_rgba(215,91,227,0.8)]" />
                  <span className="font-mono text-[10px] text-[#d75be3]">
                    POLICY
                  </span>
                </div>

                <div className="flex min-w-0 items-center justify-between gap-2 rounded-full border border-[#8d3a91] px-3 py-1.5">
                  <span className="truncate font-mono text-[9px] text-[#e66be8] sm:text-[10px]">
                    coding-agent.destructive-command
                  </span>
                  <span className="font-mono text-[9px] text-[#e66be8]">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Command Result */}
              <div className="mt-6 rounded-[9px] bg-[#19171d] p-3">
                <div className="rounded-[7px] bg-[#28242e] px-3 py-2 font-mono text-[10px] text-[#c5c0d0] sm:text-[11px]">
                  <span className="mr-2 text-[#9a8ca9]">›</span>
                  tidy up the build artifacts
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#43d18b]" />
                  <span className="font-mono text-[10px] font-semibold text-[#b8b2c3]">
                    Bash
                  </span>
                  <span className="font-mono text-[9px] text-[#85808f]">
                    rm -rf ./build
                  </span>
                </div>

                <p className="ml-5 mt-2 font-mono text-[9px] text-[#77717f]">
                  OUT&nbsp;&nbsp; Removed 412 files
                </p>

                {/* Denied Command */}
                <div className="mt-4 rounded-[7px] bg-[#300d13] px-3 py-3 shadow-[0_0_20px_rgba(255,40,60,0.12)]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#43d18b]" />
                    <span className="font-mono text-[10px] font-semibold text-[#b8b2c3]">
                      Bash
                    </span>
                    <span className="font-mono text-[9px] text-[#85808f]">
                      rm -rf ./src/auth
                    </span>
                  </div>

                  <p className="ml-5 mt-2 font-mono text-[9px] leading-relaxed text-[#a79aa5]">
                    OUT&nbsp;&nbsp; Denied by Arcjet · coding-agent-destructive-command
                  </p>
                </div>

                <div className="mt-3 border-t border-white/[0.05] pt-2">
                  <span className="font-sans text-[9px] text-[#66616e]">
                    Model: Totoro 1.302
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}