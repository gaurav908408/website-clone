import {
  Atom,
  Cloud,
  Code2,
  Database,
  Flame,
  Globe,
  Hexagon,
  Layers,
  Network,
  Terminal,
  Zap,
  Bot,
  Sparkles,
  GitBranch,
  Cpu,
  Server,
  Package,
  Box,
  Workflow,
  BrainCircuit,
  Blocks,
  Braces,
} from "lucide-react";

type Item =
  | { type: "text"; label: string }
  | { type: "icon"; Icon: React.ElementType; label: string };

/* ── Row 1: SDKs ── */
const row1: Item[] = [
  { type: "text", label: "JS" },
  { type: "icon", Icon: Atom,       label: "Astro" },
  { type: "icon", Icon: Bot,        label: "Express" },
  { type: "icon", Icon: Sparkles,   label: "Claude" },
  { type: "icon", Icon: Braces,     label: "Remix" },
  { type: "icon", Icon: GitBranch,  label: "React Router" },
  { type: "icon", Icon: Flame,      label: "Hono" },
  { type: "icon", Icon: Package,    label: "Bun" },
  { type: "icon", Icon: Globe,      label: "Next.js" },
  { type: "icon", Icon: Hexagon,    label: "NestJS" },
  { type: "icon", Icon: Layers,     label: "Nuxt" },
  { type: "icon", Icon: Network,    label: "Fastify" },
  { type: "icon", Icon: Blocks,     label: "SvelteKit" },
  { type: "text", label: "Python" },
  { type: "icon", Icon: Zap,        label: "FastAPI" },
  { type: "icon", Icon: Terminal,   label: "Flask" },
  { type: "text", label: "Go" },
  { type: "text", label: "=GO" },
];

/* ── Row 2: AI Frameworks ── */
const row2: Item[] = [
  { type: "text", label: "AI" },
  { type: "icon", Icon: Sparkles,   label: "Claude Agent SDK" },
  { type: "icon", Icon: Cloud,      label: "Cloudflare" },
  { type: "icon", Icon: Flame,      label: "Genkit" },
  { type: "icon", Icon: Hexagon,    label: "CrewAI" },
  { type: "icon", Icon: Globe,      label: "Google ADK" },
  { type: "icon", Icon: GitBranch,  label: "LangGraph" },
  { type: "icon", Icon: Workflow,   label: "LangChain" },
  { type: "icon", Icon: Layers,     label: "Mastra" },
  { type: "icon", Icon: Box,        label: "Cursor" },
  { type: "icon", Icon: BrainCircuit, label: "OpenAI Agents" },
  { type: "icon", Icon: Blocks,     label: "Strands" },
  { type: "icon", Icon: Database,   label: "TanStack AI" },
  { type: "text", label: "AI" },
  { type: "icon", Icon: Cpu,        label: "Microsoft Agent" },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Item[];
  reverse?: boolean;
}) {
  return (
    <div className="mx-auto w-full overflow-hidden px-4 sm:px-8">
      <div className="mx-auto flex w-max max-w-full items-center justify-center gap-[14px] sm:gap-[16px]">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex h-[24px] shrink-0 items-center text-white/30 transition-colors duration-200 hover:text-white/55 cursor-default"
            title={item.label}
          >
            {item.type === "icon" ? (
              <item.Icon size={18} strokeWidth={1.35} />
            ) : (
              <span
                className={`font-semibold leading-none whitespace-nowrap ${
                  item.label === "=GO"
                    ? "font-mono text-[16px] tracking-tighter"
                    : item.label === "Python"
                    ? "font-serif italic text-[15px]"
                    : "font-mono text-[16px]"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SDKSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#101014] px-0 pt-1 pb-[34px]">

      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />

      {/* Left & Right fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#101014] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#101014] to-transparent" />

      {/* Title */}
      <p className="mb-[18px] text-center text-[14px] font-medium tracking-[0.01em] text-white/25 sm:text-[16px]">
        Native SDKs and AI agent framework integrations
      </p>

      {/* SDK row */}
      <div className="mb-[10px]">
        <MarqueeRow items={row1} />
      </div>

      {/* Row 2 → scrolls right */}
      <MarqueeRow items={row2} reverse />

    </section>
  );
}
