"use client";

import { CalendarDays, Code2, Copy, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ClosingCTA() {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(
      "Run: npx skills add arcjet/skills\nAdd Arcjet protection to my app",
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(54,67,120,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(30,38,78,0.18),transparent_48%)]" />

      <svg
        className="closing-network absolute inset-0 h-full w-full opacity-[0.36]"
        viewBox="0 0 1440 650"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#7f91c4" strokeWidth="1">
          <path d="M620 0L690 125L790 78L870 196L1020 118L1125 228L1298 154L1440 240" />
          <path d="M690 125L640 260L720 340L830 260L930 330L1040 250L1180 350L1320 300L1440 390" />
          <path d="M0 130L120 210L260 150L390 260L500 210L640 260L720 340L620 430L720 540L870 460L980 580L1120 500L1250 610" />
          <path d="M120 210L80 330L220 430L390 360L500 430L620 430L720 540L850 620L980 580" />
          <path d="M260 150L220 70L330 20" />
          <path d="M390 260L390 360M500 210L500 430M830 260L930 330M1040 250L1180 350" />
        </g>
        <g className="closing-network-dots" fill="#9aa9d8">
          {[
            [220, 70, 3], [260, 150, 4], [390, 260, 3], [500, 210, 4],
            [640, 260, 5], [690, 125, 3], [720, 340, 4], [830, 260, 3],
            [930, 330, 4], [1040, 250, 3], [1180, 350, 4], [1320, 300, 3],
            [120, 210, 3], [80, 330, 4], [220, 430, 3], [390, 360, 4],
            [500, 430, 3], [620, 430, 4], [720, 540, 3], [870, 460, 4],
            [980, 580, 5], [1120, 500, 3], [1250, 610, 4],
          ].map(([cx, cy, r], index) => (
            <circle key={index} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      </svg>

      <div className="relative mx-auto flex min-h-[650px] max-w-[920px] flex-col items-center justify-center px-6 text-center sm:px-10">
        <h2 className="max-w-[820px] text-[clamp(21px,2.1vw,31px)] font-bold leading-[1.12] tracking-[-0.045em]">
          See every <span className="italic">agent</span> in your company, and
          <br className="hidden sm:block" /> decide what each one is <span className="italic">allowed</span> to do
        </h2>

        <p className="mt-8 max-w-[650px] text-[clamp(10px,0.87vw,12px)] leading-[1.55] text-[#aeb6ce]">
          Start with one coding agent or one workflow in dry run mode, and turn on
          <br className="hidden md:block" /> enforcement once the decisions look right.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a href="#code" className="flex h-[52px] items-center gap-2 rounded-full text-[14px] font-semibold text-white transition-opacity hover:opacity-70">
            <Code2 size={21} strokeWidth={1.7} />
            Start with code
          </a>

          <div className="group relative">
            <a href="#prompt" className="flex h-[52px] items-center gap-3 rounded-full bg-white px-7 text-[14px] font-semibold text-black transition-colors hover:bg-[#e7e7ec]">
              <Sparkles size={20} fill="black" strokeWidth={1.2} />
              Start with a prompt
            </a>

            <div className="pointer-events-none absolute left-1/2 top-[calc(100%+24px)] z-20 flex h-[74px] w-[420px] -translate-x-1/2 translate-y-2 items-center justify-between rounded-lg border border-white/[0.06] bg-[#111321]/95 px-5 text-left opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="font-mono text-[13px] leading-[1.65] text-[#d7d9e2] sm:text-[14px]">
                <div><span className="mr-2 text-[#8f96aa]">1.</span>Run: npx skills add arcjet/skills</div>
                <div><span className="mr-2 text-[#8f96aa]">2.</span>Add Arcjet protection to my app</div>
              </div>
              <button
                type="button"
                onClick={copyPrompt}
                className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#8f96aa] transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Copy prompt"
              >
                <Copy size={17} />
              </button>
              {copied && (
                <span className="absolute bottom-1 right-5 text-[10px] text-[#aeb6ce]">
                  Copied
                </span>
              )}
            </div>
          </div>

          <a href="#demo" className="flex h-[52px] items-center gap-2 rounded-full text-[14px] font-semibold text-white transition-opacity hover:opacity-70">
            <CalendarDays size={21} strokeWidth={1.7} />
            Book a demo
          </a>
        </div>

      </div>
    </section>
  );
}
