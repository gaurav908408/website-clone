import {
  ChevronDown,
  Shield,
  Bot,
  Gauge,
  UserRound,
  Mail,
  Eye,
  Sparkles,
  ShieldCheck,
  CirclePlus,
  Hexagon,
  CircleDashed,
  Code2,
  Database,
  Cloud,
  Layers,
  Terminal,
  BookOpen,
  GitCompare,
  Headphones,
  Lock,
  FileText,
  Atom,
  Zap,
  Network,
} from "lucide-react";

// Product dropdown data
const productLinks = [
  {
    title: "Shield WAF",
    icon: Shield,
    color: "text-purple-400",
  },
  {
    title: "Bot protection",
    icon: Bot,
    color: "text-orange-400",
  },
  {
    title: "Rate limiting",
    icon: Gauge,
    color: "text-red-400",
  },
  {
    title: "Signup form protection",
    icon: UserRound,
    color: "text-sky-400",
  },
  {
    title: "Email validation",
    icon: Mail,
    color: "text-teal-400",
  },
  {
    title: "Sensitive information",
    icon: Eye,
    color: "text-yellow-400",
  },
  {
    title: "Prompt injection",
    icon: Sparkles,
    color: "text-orange-400",
    badge: "NEW",
  },
  {
    title: "Content moderation",
    icon: ShieldCheck,
    color: "text-cyan-400",
    badge: "NEW",
  },
  {
    title: "Filters",
    icon: CirclePlus,
    color: "text-pink-400",
  },
];

const agentLinks = [
  "Arcjet Guards",
  "Arcjet Plugin",
  "Arcjet Skills",
  "MCP Server",
  "CLI",
];

const protectionLinks = [
  "Abuse protection",
  "Budget control",
  "Data loss prevention",
  "Prompt injection detection",
];

const sdkLinks = [
  ["Astro", "Express", "Next.js", "React Router", "Bun", "Hono", "Node.js", "Remix"],
  ["Deno", "Fastify", "NestJS", "Nuxt", "SvelteKit", "Flask", "FastAPI"],
];

const frameworkLinks = [
  ["Claude Agent SDK", "Claude Managed Agents", "Cloudflare Think", "CrewAI", "Genkit", "Google ADK", "LangChain", "LangGraph"],
  ["Mastra", "Microsoft Agent Framework", "OpenAI Agents", "Strands Agents", "TanStack AI", "Vercel AI SDK", "Vercel Eve"],
];

const resourceLinks = [
  "About",
  "Learning center",
  "Comparisons",
  "MCP Server",
  "CLI",
  "Support",
  "Trust",
  "Terms",
];

const sdkIcons = [
  Atom,
  Code2,
  Network,
  Layers,
  Zap,
  Cloud,
  Database,
  Terminal,
];

// Reusable dropdown link
function DropdownItem({
  title,
  icon: Icon,
  color = "text-white",
  badge,
}: {
  title: string;
  icon?: React.ElementType;
  color?: string;
  badge?: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 rounded-md px-1 py-1 text-[13px] font-medium text-white/90 transition-colors hover:bg-white/5"
    >
      {Icon && (
        <Icon
          size={13}
          strokeWidth={1.8}
          className={color}
        />
      )}

      <span>{title}</span>

      {badge && (
        <span className="rounded-full bg-white px-1 py-0.5 text-[8px] font-bold text-black">
          {badge}
        </span>
      )}
    </a>
  );
}

// Product Mega Menu
function ProductDropdown() {
  return (
    <div className="absolute left-0 top-full z-50 hidden w-[580px] pt-3 group-hover:block group-focus-within:block">
      <div className="grid grid-cols-3 gap-5 rounded-xl border border-white/10 bg-[#29272e] p-4 shadow-2xl">

        {/* Building Blocks */}
        <div>
          <h3 className="mb-2 text-[10px] font-semibold tracking-wider text-white/50">
            BUILDING BLOCKS
          </h3>

          <div className="space-y-0.5">
            {productLinks.map((item) => (
              <DropdownItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                color={item.color}
                badge={item.badge}
              />
            ))}
          </div>
        </div>

        {/* For Agents */}
        <div>
          <h3 className="mb-2 text-[10px] font-semibold tracking-wider text-white/50">
            FOR AGENTS
          </h3>

          <div className="space-y-0.5">
            {agentLinks.map((item) => (
              <DropdownItem
                key={item}
                title={item}
                icon={Sparkles}
              />
            ))}
          </div>
        </div>

        {/* Protections */}
        <div>
          <h3 className="mb-2 text-[10px] font-semibold tracking-wider text-white/50">
            PROTECTIONS
          </h3>

          <div className="space-y-0.5">
            {protectionLinks.map((item) => (
              <DropdownItem
                key={item}
                title={item}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Integrations Mega Menu
function IntegrationsDropdown() {
  return (
    <div className="absolute left-0 top-full z-50 hidden w-[720px] pt-3 group-hover:block group-focus-within:block">
      <div className="grid grid-cols-4 gap-5 rounded-xl border border-white/10 bg-[#29272e] p-4 shadow-2xl">

        {/* SDKs */}
        <div className="col-span-2">
          <h3 className="mb-2 text-[10px] font-semibold tracking-wider text-white/50">
            SDKS
          </h3>

          <div className="grid grid-cols-2 gap-x-3">
            {sdkLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-0.5">
                {column.map((item, index) => {
                  const Icon =
                    sdkIcons[index % sdkIcons.length];

                  return (
                    <DropdownItem
                      key={item}
                      title={item}
                      icon={Icon}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* AI Agent Frameworks */}
        <div className="col-span-2">
          <h3 className="mb-2 text-[10px] font-semibold tracking-wider text-white/50">
            AI AGENT FRAMEWORKS
          </h3>

          <div className="grid grid-cols-2 gap-x-3">
            {frameworkLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-0.5">
                {column.map((item) => (
                  <DropdownItem
                    key={item}
                    title={item}
                    icon={Sparkles}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Resources Dropdown
function ResourcesDropdown() {
  return (
    <div className="absolute left-0 top-full z-50 hidden w-[160px] pt-3 group-hover:block group-focus-within:block">
      <div className="rounded-xl border border-white/10 bg-[#29272e] p-3 shadow-2xl">

        <div className="space-y-0.5">
          {resourceLinks.map((item) => (
            <DropdownItem
              key={item}
              title={item}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// Main Navbar Links
export default function NavbarLinks() {
  return (
    <nav className="flex items-center gap-8">

      {/* Product */}
      <div className="relative group">
        <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition-colors hover:text-white/70">
          Product

          <ChevronDown
            size={17}
            className="transition-transform duration-200 group-hover:rotate-180"
          />
        </button>

        <ProductDropdown />
      </div>

      {/* Integrations */}
      <div className="relative group">
        <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition-colors hover:text-white/70">
          Integrations

          <ChevronDown
            size={17}
            className="transition-transform duration-200 group-hover:rotate-180"
          />
        </button>

        <IntegrationsDropdown />
      </div>

      {/* Resources */}
      <div className="relative group">
        <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition-colors hover:text-white/70">
          Resources

          <ChevronDown
            size={17}
            className="transition-transform duration-200 group-hover:rotate-180"
          />
        </button>

        <ResourcesDropdown />
      </div>

      {/* Pricing */}
      <a
        href="#pricing"
        className="text-[17px] font-semibold text-white transition-colors hover:text-white/70"
      >
        Pricing
      </a>

    </nav>
  );
}