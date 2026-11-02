type RiskCardProps = {
  title: string;
  description: string;
  highlightedText?: string;
  children: React.ReactNode;
};

function RiskCard({
  title,
  description,
  highlightedText,
  children,
}: RiskCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1000px]">
      <div className="relative min-h-[260px] overflow-hidden rounded-[10px] border border-white/[0.025] bg-[#09090b] px-7 py-10 sm:px-10 md:px-12 lg:px-[72px]">
        {/* Card Texture */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.025),transparent_55%)]" />

        {/* Card Content */}
        <div className="relative mx-auto grid min-h-[180px] max-w-[850px] grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(250px,0.8fr)] md:gap-6">
          {/* Left Content */}
          <div className="max-w-[620px]">
            <h4 className="font-sans text-[22px] font-medium leading-tight tracking-[-0.035em] text-white sm:text-[24px]">
              {title}
            </h4>

            <p className="mt-4 font-sans text-[15px] leading-[1.65] text-[#85808f] sm:text-[16px]">
              {description}
            </p>

            {highlightedText && (
              <p className="font-sans text-[15px] leading-[1.65] text-[#c5bfce] sm:text-[16px]">
                {highlightedText}
              </p>
            )}
          </div>

          {/* Right Diagram */}
          <div className="relative mx-auto h-[200px] w-full max-w-[280px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnauthorizedToolDiagram() {
  return (
    <>
      {/* Dark Vertical Block */}
      <div className="absolute left-[5%] top-1/2 h-[200px] w-[9px] -translate-y-1/2 rounded-full bg-[#030303]" />

      {/* Tool Call Arrow + Dots */}
      <div className="absolute left-[30%] top-1/2 flex -translate-y-1/2 items-center gap-3">
        <span className="text-[34px] font-light leading-none text-white">
          ›
        </span>

        <div className="flex items-center gap-2">
          <span className="h-[7px] w-[7px] rounded-full bg-white" />
          <span className="h-[7px] w-[7px] rounded-full bg-white" />
          <span className="h-[7px] w-[7px] rounded-full bg-white" />
        </div>
      </div>

      {/* Glowing Action Boundary */}
      <div className="absolute left-[56%] top-1/2 h-[160px] w-[3px] -translate-y-1/2 bg-white shadow-[0_0_7px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.35)]" />

      {/* Branch Lines */}
      <div className="absolute left-[57%] top-[30%] h-[2px] w-[17%] origin-left rotate-[-42deg] bg-gradient-to-r from-[#5a3535] to-[#ff6a5f]" />

      <div className="absolute left-[57%] top-1/2 h-[2px] w-[17%] bg-gradient-to-r from-[#454545] to-[#d8d8d8]" />

      <div className="absolute left-[57%] top-[70%] h-[2px] w-[17%] origin-left rotate-[42deg] bg-gradient-to-r from-[#5a3535] to-[#ff6a5f]" />

      {/* Top Red Node */}
      <div className="absolute left-[82%] top-[10%] flex h-[18px] w-[18px] items-center justify-center rounded-full border-[3px] border-[#ff6a5f] bg-black shadow-[0_0_12px_rgba(255,106,95,0.55)]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#ff6a5f]" />
      </div>

      {/* Middle White Node */}
      <div className="absolute left-[87%] top-1/2 flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-black shadow-[0_0_12px_rgba(255,255,255,0.6)]">
        <span className="h-[6px] w-[6px] rounded-full bg-white" />
      </div>

      {/* Bottom Red Node */}
      <div className="absolute left-[82%] top-[82%] flex h-[18px] w-[18px] items-center justify-center rounded-full border-[3px] border-[#ff6a5f] bg-black shadow-[0_0_12px_rgba(255,106,95,0.55)]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#ff6a5f]" />
      </div>
    </>
  );
}

function DataExfiltrationDiagram() {
  return (
    <>
      {/* Left Dark Boundary */}
      <div className="absolute left-[5%] top-1/2 h-[160px] w-[9px] -translate-y-1/2 rounded-full bg-[#030303]" />

      {/* Red Boundaries */}
      <div className="absolute left-[56%] top-1/2 h-[160px] w-[3px] -translate-y-1/2 bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.9),0_0_22px_rgba(255,106,95,0.4)]" />

      <div className="absolute left-[84%] top-1/2 h-[160px] w-[3px] -translate-y-1/2 bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.9),0_0_22px_rgba(255,106,95,0.4)]" />

      {/* Data Diamonds */}
      <div className="absolute left-[62%] top-[18%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />
      <div className="absolute left-[76%] top-[18%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />

      <div className="absolute left-[67%] top-[31%] h-4 w-4 rotate-45 rounded-[4px] border border-[#85808f]" />
      <div className="absolute left-[72%] top-[38%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />

      <div className="absolute left-[62%] top-[48%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />
      <div className="absolute left-[76%] top-[48%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />

      <div className="absolute left-[67%] top-[63%] h-4 w-4 rotate-45 rounded-[4px] border border-[#85808f]" />
      <div className="absolute left-[72%] top-[70%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />

      <div className="absolute left-[62%] top-[78%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />
      <div className="absolute left-[76%] top-[78%] h-5 w-5 rotate-45 rounded-[4px] border border-[#85808f]" />

      {/* Red Data Particles */}
      <div className="absolute left-[48%] top-[48%] h-3 w-3 rotate-45 rounded-[3px] bg-[#ff6a5f]/20 shadow-[0_0_10px_rgba(255,106,95,0.6)]" />
      <div className="absolute left-[91%] top-[48%] h-3 w-3 rotate-45 rounded-[3px] bg-[#ff6a5f]/20 shadow-[0_0_10px_rgba(255,106,95,0.6)]" />
    </>
  );
}

function CostExplosionDiagram() {
  return (
    <>
      {/* Baseline */}
      <div className="absolute left-[15%] top-[80%] h-[2px] w-[45%] bg-[#85808f]" />

      {/* Vertical Cost Boundary */}
      <div className="absolute left-[55%] top-[12%] h-[80%] w-[3px] bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.9),0_0_20px_rgba(255,106,95,0.4)]" />

      {/* White Growth Lines */}
      <div className="absolute left-[25%] top-[80%] h-[2px] w-[28%] origin-left rotate-[-55deg] bg-[#d8d8d8]" />

      <div className="absolute left-[25%] top-[80%] h-[2px] w-[38%] origin-left rotate-[-35deg] bg-[#d8d8d8]" />

      <div className="absolute left-[25%] top-[80%] h-[2px] w-[30%] bg-[#d8d8d8]" />

      {/* Red Explosion Lines */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="absolute left-[56%] h-[2px] w-[28%] origin-left bg-gradient-to-r from-[#ff6a5f] to-[#7b302b]"
          style={{ top: `${18 + index * 8}%` }}
        />
      ))}
    </>
  );
}

function SequenceDriftDiagram() {
  return (
    <>
      {/* Top Red Boundary */}
      <div className="absolute left-[18%] top-[25%] h-[3px] w-[58%] bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.9),0_0_20px_rgba(255,106,95,0.4)]" />

      {/* Bottom White Boundary */}
      <div className="absolute left-[18%] top-[72%] h-[3px] w-[58%] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.3)]" />

      {/* Drift Lines */}
      <div className="absolute left-[55%] top-[8%] h-[2px] w-[18%] bg-[#ff6a5f]/70" />
      <div className="absolute left-[50%] top-[15%] h-[2px] w-[18%] bg-[#ff6a5f]/70" />
      <div className="absolute left-[42%] top-[22%] h-[2px] w-[18%] bg-[#ff6a5f]/70" />

      <div className="absolute left-[38%] top-[34%] h-[2px] w-[15%] bg-[#ff6a5f]/70" />
      <div className="absolute left-[32%] top-[42%] h-[2px] w-[15%] bg-[#ff6a5f]/70" />
      <div className="absolute left-[25%] top-[50%] h-[2px] w-[15%] bg-[#ff6a5f]/70" />

      <div className="absolute left-[20%] top-[58%] h-[2px] w-[12%] bg-[#85808f]" />
      <div className="absolute left-[22%] top-[65%] h-[2px] w-[10%] bg-[#85808f]" />
    </>
  );
}

function UnmanagedAgentsDiagram() {
  return (
    <>
      {/* Agent Dots */}
      <div className="absolute left-[42%] top-[18%] flex gap-2">
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>

      <div className="absolute left-[63%] top-[18%] flex gap-2">
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>

      <div className="absolute left-[42%] top-[40%] flex gap-2">
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>

      <div className="absolute left-[63%] top-[40%] flex gap-2">
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>

      <div className="absolute left-[63%] top-[62%] flex gap-2">
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
        <span className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>

      {/* Red Agent Dots */}
      <div className="absolute left-[24%] top-[28%] flex gap-1">
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
      </div>

      <div className="absolute left-[28%] top-[50%] flex gap-1">
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
      </div>

      <div className="absolute left-[36%] top-[72%] flex gap-1">
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.8)]" />
      </div>

      {/* Diagonal Red Boundary */}
      <div className="absolute left-[22%] top-[15%] h-[3px] w-[78%] origin-left rotate-[45deg] bg-[#ff6a5f] shadow-[0_0_8px_rgba(255,106,95,0.9),0_0_20px_rgba(255,106,95,0.4)]" />
    </>
  );
}

export default function UnauthorizedToolCalls() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-3 sm:px-8">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.035),transparent_65%)]" />

        {/* Background Particles */}
        <div className="absolute left-[8%] top-[20%] h-1 w-1 rounded-full bg-white/10" />
        <div className="absolute left-[14%] top-[65%] h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
        <div className="absolute left-[22%] top-[35%] h-1 w-1 rounded-full bg-white/[0.08]" />
        <div className="absolute right-[12%] top-[25%] h-1 w-1 rounded-full bg-white/10" />
        <div className="absolute right-[8%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
      </div>

      {/* All Risk Cards */}
      <div className="relative mx-auto flex max-w-[1000px] flex-col gap-3">
        {/* 1. Unauthorized Tool Calls */}
        <RiskCard
          title="UNAUTHORIZED TOOL CALLS"
          description="The request looks clean. Then the workflow issues a refund, opens a file share, or hits an internal API that was never in scope for this user."
          highlightedText="Arcjet enforces at the action boundary, inputs and outputs."
        >
          <UnauthorizedToolDiagram />
        </RiskCard>

        {/* 2. Data Exfiltration */}
        <RiskCard
          title="DATA EXFILTRATION"
          description="Sensitive data, including PII, slips out through prompts, tool outputs and third party calls. It rarely looks like theft at the moment it happens."
          highlightedText="Check inputs to stop leaking PII into the LLM context, and outputs before they're sent out."
        >
          <DataExfiltrationDiagram />
        </RiskCard>

        {/* 3. Cost Explosion */}
        <RiskCard
          title="COST EXPLOSION"
          description="A runaway loop can burn a month of token budget in an afternoon. Without enforcement in the path, the first anyone hears about it is the invoice."
          highlightedText="Arcjet holds the quota in the loop itself."
        >
          <CostExplosionDiagram />
        </RiskCard>

        {/* 4. Sequence Drift */}
        <RiskCard
          title="SEQUENCE DRIFT"
          description="An agent that started a session reading records ends it writing to production. No single step crossed a line. Arcjet is judging the shape of each run over time, so the drift itself is the thing that trips the rule."
        >
          <SequenceDriftDiagram />
        </RiskCard>

        {/* 5. Unmanaged Coding Agents */}
        <RiskCard
          title="UNMANAGED CODING AGENTS"
          description="Developers run Claude Code, Cursor and Copilot with access to source code, secrets and production credentials, and security has no inventory of which agents are running or what they connect to."
          highlightedText="Arcjet discovers every agent across developer endpoints and applies one policy to all of them."
        >
          <UnmanagedAgentsDiagram />
        </RiskCard>
      </div>
    </section>
  );
}