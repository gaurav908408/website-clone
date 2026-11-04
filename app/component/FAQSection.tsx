"use client";

const faqs = [
  {
    question: "How do I add runtime security to AI agents in production?",
    answer:
      "Arcjet adds runtime policy enforcement to AI agents so unsafe actions can be evaluated before they execute.",
  },
  {
    question: "How do I stop AI agents from taking unsafe or unauthorized actions?",
    answer:
      "Put the check at the action boundary rather than in the prompt. Arcjet scopes each tool call by identity, role, route and typed input, and refuses the call before it executes. Because decisions in a run share a correlation ID, a policy on a later action can also read what happened earlier in that run and refuse on that basis.",
  },
  {
    question: "How is this different from an AI control plane or an MCP gateway?",
    answer:
      "Position and rollout. A control plane or gateway is adopted by the organization and sits outside your applications, which means the decision is made without the arguments about to be passed to the tool. Arcjet is a package you add to the code that takes the action, so the decision has the user, the input and the run history, and one engineer can ship the first one the same day.\n\nThey are not mutually exclusive. Plenty of teams run a gateway for discovery and routing and use Arcjet for the enforcement that has to happen inside the app.",
  },
  {
    question: "How do I prevent prompt injection in production LLM applications?",
    answer:
      "Detect hostile instructions in both user input and tool output before either reaches the model, then decide in code what to do. Arcjet runs a specialist detection model ahead of the provider call, adding around 100ms, and returns a decision you can act on. Start in dry run mode to see what would have been blocked without changing behavior.",
  },
  {
    question: "How do I enforce token and spend budgets on AI agents?",
    answer:
      "Use a token bucket keyed on the characteristics you care about, usually user and organization, and pass the estimated cost of the call as the requested amount. A guard rate limit shares one bucket across every call in a run, so a runaway loop hits the ceiling instead of resetting the count at each endpoint.",
  },
  {
    question: "Do security teams have to change code to change a rule?",
    answer:
      "No. Rules can live in code, managed by engineering through review and tests, or in remote policies managed by the security team in the Console and applied in real time. Most teams use both: engineering owns the integration points, security owns the thresholds.",
  },
  {
    question: "How do I prove what an agent did?",
    answer:
      "Every decision is kept with the context that produced it, including the policy version, the actor, the inputs and the run it belonged to, so a security review or an audit gets evidence rather than a reconstruction. Sensitive checks run in your process, so the raw data never leaves your environment even though the record of what happened does. Keep that evidence in Arcjet cloud, in a single tenant or private VPC deployment, or in storage you manage yourself.",
  },
  {
    question: "Securing AI agents VS securing coding agents?",
    answer:
      "The AI agents you build run in your production applications, so Arcjet protects them from inside your code against prompt injection, data leaks and unauthorized tool calls. Coding agents like Claude Code, Cursor and Copilot run on developer machines with access to source code and credentials, so Arcjet finds every one and enforces policy through its hooks. The same Rego policies and audit trail cover both.",
  },
  {
    question: "Is Arcjet a platform or a developer tool?",
    answer:
      "Both. Security teams use Arcjet to discover agents, set policy and audit decisions across the company. Engineering teams use the same platform through SDKs and coding agent hooks, so the policies security sets are enforced where agents actually act.",
  },
  {
    question: "How does Arcjet find shadow AI?",
    answer:
      "The Arcjet endpoint agent for macOS and Windows reports the AI tools each person connects to, ties every connection to an identity, and can block tools your company has not approved. It deploys through MDM, including Jamf.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/[0.06] bg-black text-white">

      <div className="relative mx-auto min-h-[300px] w-full max-w-[900px] px-6 pb-16 pt-20 sm:px-10 lg:px-0">
        <p className="font-mono text-[12px] leading-none tracking-[0.08em] text-[#777381] sm:text-[14px]">
          07&nbsp;&nbsp;&nbsp;&nbsp;FAQ
        </p>

        <h2 className="mt-12 text-center text-[clamp(34px,3.25vw,52px)] font-bold leading-[1.05] tracking-[-0.045em] text-white sm:mt-14">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-14 w-full max-w-[656px] border-t border-white/[0.08]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/[0.08]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-[18px] text-[13.5px] font-semibold text-[#ddd9e5] marker:hidden sm:text-[15px]">
                {faq.question}
                <span className="ml-4 text-[22px] font-light text-[#777381] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[700px] whitespace-pre-line pb-6 text-[14px] leading-7 text-[#aaa5b3] sm:text-[15px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
