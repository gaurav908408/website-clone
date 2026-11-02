
import { Check } from "lucide-react";

const actions = [
  {
    label: "ACTION 1",
    title: "Read inbound support email",
    description: " – from a known address with a new cc email",
    type: "allow",
  },
  {
    label: "ACTION 2",
    title: "Query the customer database",
    description: " – returns names, emails, bank account...",
    type: "allow",
  },
  {
    label: "ACTION 3",
    title: "Send a reply",
    description:
      " – to the address in the original message, and the new one cc'd",
    type: "deny",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="w-full overflow-hidden bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <header className="mx-auto max-w-[824px]">

          {/* Section Label */}
          <p className="font-mono text-[16px] leading-6 tracking-[0.02em] text-[#85808f] sm:text-[18px]">
            01 <span className="mx-2">–</span> THE PROBLEM
          </p>

          {/* Heading */}
          <h2 className="mt-10 font-sans text-[clamp(30px,3.2vw,48px)] leading-[1.12] tracking-[-0.035em]">

            <span className="block font-semibold text-[#b8b2c3]">
              IDENTITY TELLS YOU WHO IS ASKING.
            </span>

            <span className="mt-2 block font-bold text-white">
              It cannot tell you what happens next.
            </span>

          </h2>

          {/* Description */}
          <p className="mt-9 text-[18px] leading-[1.5] text-[#b8b2c3] sm:text-[20px]">
            How do I stop an AI agent from taking an unsafe or unauthorized
            action?
            <br />
            You can't just ask this at the door, it has to be answered at every
            step.
          </p>

        </header>

        {/* ================= ACTION FLOW ================= */}

        <div className="relative mx-auto mt-[120px] max-w-[1400px]">

          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-[64px] hidden h-px bg-[#29272d] lg:block" />

          {/* Cards Grid */}
          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Action Cards */}
            {actions.map((action) => (
              <div key={action.label} className="relative min-w-0">

                {/* Card */}
                <article
                  className={`relative z-10 h-[128px] rounded-xl border p-6 ${
                    action.type === "deny"
                      ? "border-transparent bg-[#2b100e]"
                      : "border-white/[0.04] bg-[#161519]"
                  }`}
                >

                  {/* Label */}
                  <p className="font-mono text-[13px] leading-5 text-[#85808f]">
                    {action.label}
                  </p>

                  {/* Text */}
                  <p className="mt-3 text-[15px] leading-[1.55] text-[#85808f]">
                    <strong className="font-semibold text-white">
                      {action.title}
                    </strong>
                    {action.description}
                  </p>

                </article>

                {/* Decision */}
                {action.type === "allow" ? (
                  <div className="mx-auto mt-4 flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-[#002719] px-6 font-mono text-[14px] text-[#7ccbb6]">

                    <Check size={16} strokeWidth={1.7} />

                    <span className="italic">Allow</span>

                  </div>
                ) : (
                  <div className="mx-auto mt-4 flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-[#351510] px-6 font-mono text-[13px] whitespace-nowrap">

                    <span className="font-semibold text-[#ff514b]">
                      DENY
                    </span>

                    <span className="text-[#85808f]">or</span>

                    <span className="font-semibold text-[#c09bc8]">
                      HOLD
                    </span>

                    <span className="text-[#85808f]">
                      for review
                    </span>

                  </div>
                )}

              </div>
            ))}

            {/* ================= RESULT CARD ================= */}

            <div className="relative min-w-0">

              <article className="relative z-10 h-[128px] rounded-xl border border-[#ff514b] bg-[#2b100e] p-6">

                <p className="font-mono text-[13px] leading-5 text-[#ff514b]">
                  RESULT
                </p>

                <p className="mt-3 text-[15px] font-semibold leading-[1.55] text-white">
                  Unexpected personal <em>data</em> is emailed
                </p>

              </article>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="mx-auto mt-7 hidden max-w-[1400px] lg:grid lg:grid-cols-[3fr_1fr] lg:gap-5">

          {/* Arcjet Sequence */}
          <div className="relative">

            <svg
              viewBox="0 0 1045 28"
              preserveAspectRatio="none"
              className="h-7 w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 1 H1000 Q1045 1 1045 28"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
            </svg>

            <p className="mt-5 text-center font-mono text-[13px] text-[#85808f]">
              Arcjet applies security policies across the sequence
            </p>

          </div>

          {/* Without Arcjet */}
          <div className="relative">

            <svg
              viewBox="0 0 340 28"
              preserveAspectRatio="none"
              className="h-7 w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 1 H300 Q340 1 340 28"
                stroke="rgba(255,81,75,0.4)"
                strokeWidth="1"
              />
            </svg>

            <p className="mt-5 text-center font-mono text-[13px] text-[#ff514b]">
              without Arcjet
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
