import {
  Bot,
  CalendarDays,
  CircleUserRound,
  Code2,
  Gamepad2,
  Mail,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const getStarted = ["Arcjet Guards", "Arcjet Plugin", "Arcjet Skills", "MCP Server", "CLI"];

const protections = [
  "Abuse protection",
  "Budget control",
  "Data loss prevention",
  "Prompt injection detection",
];

const buildingBlocks = [
  "Prompt injection", "Content moderation", "Bot protection", "Rate limiting",
  "Shield WAF", "Email validation", "Signup form protection", "Sensitive information",
  "Filters",
];

const learn = [
  "Learning center", "AI agent security", "Agentic identity", "Shadow AI",
  "How-tos", "API security", "Bot protection", "Rate limiting", "Runtime security",
  "Comparisons", "Blog",
];

const company = ["About", "Work with us", "Trust", "Support", "Terms", "Privacy"];

const sdks = [
  "Astro", "Deno", "Express", "Fastify", "Next.js", "NestJS",
  "React Router", "Nuxt", "Bun", "SvelteKit", "Hono", "Flask",
  "Node.js", "FastAPI", "Remix",
];

const frameworks = [
  "Claude Agent SDK", "Google ADK", "Claude Managed Agents", "LangChain",
  "Cloudflare Think", "LangGraph", "CrewAI", "Mastra",
  "Genkit", "Microsoft Agent Framework", "OpenAI Agents", "Sains Agents",
  "Vercel AI SDK", "Vercel Eve",
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="border-b border-white/[0.07] px-6 sm:px-10 lg:px-[8%]">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center text-[28px] font-light">
              <Plus size={25} strokeWidth={1.2} />
              <span className="ml-1 text-[25px]">Aj</span>
            </span>
            <span className="hidden text-[14px] text-[#777b86] sm:inline">
              Built with <span className="text-[#aeb5c5]">⌘</span> in the USA <span className="mx-1">•</span> Canada <span className="mx-1">•</span> Italy
            </span>
          </div>
          <div className="flex items-center gap-6 text-[#7e8390]">
            <span className="text-[14px]">GitHub</span>
            <Gamepad2 size={18} />
            <span className="text-[14px]">in</span>
            <span className="text-[14px]">𝕏</span>
            <span className="text-[14px]">▶</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-[8%]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1fr_1.05fr_1.15fr_1fr_0.75fr]">
          <FooterColumn title="Get started" items={getStarted} />
          <FooterColumn title="AI app protection" items={protections} icons />
          <FooterColumn title="Building blocks" items={buildingBlocks} icons extraNew={["Prompt injection", "Content moderation"]} />
          <FooterColumn title="Learn" items={learn} />
          <FooterColumn title="Company" items={company} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/[0.05] pt-10 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <h3 className="mb-6 text-[16px] font-semibold">SDKs</h3>
            <div className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-3">
              {sdks.map((item) => (
                <a key={item} href="#" className="py-1 text-[12px] text-[#777b86] transition-colors hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-[16px] font-semibold">AI Agent Frameworks</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-3">
              {frameworks.map((item) => (
                <a key={item} href="#" className="py-1 text-[12px] text-[#777b86] transition-colors hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  icons = false,
  extraNew = [],
}: {
  title: string;
  items: string[];
  icons?: boolean;
  extraNew?: string[];
}) {
  return (
    <div>
      <h3 className="mb-5 flex items-center gap-2 text-[14px] font-semibold">
        {title === "AI app protection" && <Sparkles size={19} />}
        {title}
      </h3>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="flex items-center gap-2 text-[12px] text-[#777b86] transition-colors hover:text-white">
              {icons && <BuildingIcon index={items.indexOf(item)} />}
              <span>{item}</span>
              {extraNew.includes(item) && (
                <span className="text-[9px] font-semibold text-[#9d93b2]">NEW</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuildingIcon({ index }: { index: number }) {
  const icons = [ShieldCheck, Bot, Code2, Mail, CircleUserRound, CalendarDays, Bot, ShieldCheck, Plus];
  const Icon = icons[index % icons.length];
  return <Icon size={15} strokeWidth={1.5} />;
}
