import NavbarLinks from "./NavbarLinks";
import {
  Sparkles,
  BookOpen,
  Rss,
  CircleUserRound,
  Plus,
  ArrowRight,
} from "lucide-react";

const rightLinks = [
  {
    title: "Docs",
    icon: BookOpen,
    href: "#docs",
  },
  {
    title: "Blog",
    icon: Rss,
    href: "#blog",
  },
  {
    title: "Sign in",
    icon: CircleUserRound,
    href: "#signin",
  },
];

export default function Navbar() {
  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#101014]">

      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_4px)]" />

      {/* Navbar Container */}
      <div className="relative mx-auto flex h-[96px] max-w-[1620px] items-center justify-between px-8">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-16">

          {/* LOGO */}
          <a
            href="/"
            className="relative flex items-center"
          >
            {/* Left Line */}
            <div className="flex items-center">
              <div className="h-px w-8 bg-white/80" />

              <Sparkles
                size={28}
                strokeWidth={1}
                fill="white"
                className="text-white"
              />
            </div>

            {/* Logo Text */}
            <span className="ml-3 text-[36px] font-medium tracking-tight text-white">
              Arcjet
            </span>

            {/* Curved Border */}
            <div className="absolute -right-7 top-1/2 h-[68px] w-8 -translate-y-1/2 rounded-r-full border-r border-white/80" />
          </a>

          {/* NAVIGATION LINKS WITH DROPDOWNS */}
          <NavbarLinks />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-7">

          {/* Docs, Blog, Sign in */}
          {rightLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                href={link.href}
                className="flex flex-col items-center gap-0.5 text-white transition-opacity duration-200 hover:opacity-70"
              >
                <Icon
                  size={19}
                  strokeWidth={1.6}
                />

                <span className="text-xs font-medium">
                  {link.title}
                </span>
              </a>
            );
          })}

          {/* Sign Up Button */}
          <a
            href="#signup"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:bg-white/80"
          >
            Sign up
          </a>

        </div>
      </div>

      {/* ✅ GREEN ANNOUNCEMENT BANNER — navbar ke neeche, right side pe */}
      <div className="relative mx-auto flex max-w-[1620px] justify-end px-8 py-2">
        <a
          href="#announcement"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-[13px] text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-green-500/40 hover:bg-black/80"
          style={{ boxShadow: "0 0 14px rgba(34,197,94,0.15)" }}
        >
          {/* Green dot pulse */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>

          {/* Plus icon */}
          <Plus size={12} strokeWidth={2.5} className="text-green-400" />

          {/* Text */}
          <span className="font-medium">
            Introducing Arcjet for Coding Agents
          </span>

          {/* Arrow */}
          <ArrowRight
            size={13}
            strokeWidth={2}
            className="text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/80"
          />
        </a>
      </div>

    </header>
  );
}