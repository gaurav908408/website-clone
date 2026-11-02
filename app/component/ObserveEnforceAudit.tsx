
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TabId = "observe" | "enforce" | "audit";

type DataRow = [string, string, string, string?];

type TabContent = {
  title: string;
  number: string;
  description: string;
  footer: string;
  color: string;
  border: string;
  activeBg: string;
  rows: DataRow[];
};

const tabData: Record<TabId, TabContent> = {
  observe: {
    title: "OBSERVE",
    number: "I",
    description:
      "Every action an agent takes is captured inside your application and grouped into the run it belongs to. Not sampled traffic, and not a dashboard that catches up tomorrow.",
    footer:
      "Sees: user, session, route, actor, tool label, typed arguments, prior steps",
    color: "text-white",
    border: "border-white/20",
    activeBg: "bg-[#17171b]",
    rows: [
      ["14:32", "claude v2.x", "support.reply.send"],
      ["14:32", "claude v2.x", "billing.refund.issue"],
      ["14:32", "chatgpt v1.x", "orders.history.read"],
      ["14:31", "claude v2.x", "crm.customer.lookup"],
      ["14:31", "gemini v3.x", "support.ticket.read"],
    ],
  },

  enforce: {
    title: "ENFORCE",
    number: "II",
    description:
      "Each action is checked for what it actually is, and a decision comes back before it executes. Your code acts on that decision, so this is the part that changes what happens.",
    footer:
      "Checks: prompt injection, sensitive info, bot signals, action policy, run history.",
    color: "text-[#ff766c]",
    border: "border-[#ff766c]/40",
    activeBg: "bg-[#17171b]",
    rows: [
      ["14:32", "claude v2.x", "support.reply.send", "ALLOW"],
      ["14:32", "claude v2.x", "billing.refund.issue", "DENY"],
      ["14:32", "chatgpt v1.x", "orders.history.read", "ALLOW"],
      ["14:31", "claude v2.x", "crm.customer.lookup", "ALLOW"],
      ["14:31", "gemini v3.x", "support.ticket.read", "ALLOW"],
    ],
  },

  audit: {
    title: "AUDIT",
    number: "III",
    description:
      "Every decision and the context behind it is kept as evidence, while sensitive checks run in process so the data never leaves your environment.",
    footer:
      "Keeps: decisions, policy version, actor, inputs, run history",
    color: "text-[#d36add]",
    border: "border-[#d36add]/40",
    activeBg: "bg-[#17171b]",
    rows: [
      ["14:32", "claude v2.x", "support.reply.send", "ALLOW"],
      ["14:32", "claude v2.x", "billing.refund.issue", "DENY"],
      ["14:32", "chatgpt v1.x", "orders.history.read", "ALLOW"],
      ["14:31", "claude v2.x", "crm.customer.lookup", "ALLOW"],
      ["14:31", "gemini v3.x", "support.ticket.read", "ALLOW"],
    ],
  },
};

export default function ObserveEnforceAudit() {
  const [activeTab, setActiveTab] = useState<TabId>("observe");

  const activeData = tabData[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-16 sm:px-8 lg:py-24">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_65%)]" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT: Animated data panel */}
        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-[16px] border ${activeData.border} bg-black/70 p-5 sm:p-7`}
            >
              {/* Data rows */}
              <div className="relative space-y-3">
                {activeData.rows.map((row, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className={`grid grid-cols-[65px_minmax(90px,0.8fr)_minmax(0,1.5fr)_auto] items-center gap-3 rounded-full border px-3 py-2 font-mono text-[11px] sm:gap-4 sm:px-5 sm:text-[13px] ${
                      activeTab === "enforce" && row[3] === "DENY"
                        ? "border-[#ff766c]/40 text-[#ff766c]"
                        : activeTab === "audit"
                          ? "border-[#d36add]/30 text-[#d36add]"
                          : "border-white/20 text-[#aaa5b3]"
                    }`}
                  >
                    <span>{row[0]}</span>

                    <span className="truncate font-semibold">
                      {row[1]}
                    </span>

                    <span className="truncate">{row[2]}</span>

                    {row[3] && (
                      <span
                        className={
                          row[3] === "DENY"
                            ? "text-[#ff766c]"
                            : "text-[#aaa5b3]"
                        }
                      >
                        {row[3]}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Observe, Enforce, Audit buttons */}
        <div className="flex flex-col gap-4">
          {(Object.keys(tabData) as TabId[]).map((tab) => {
            const item = tabData[tab];
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={isActive}
                className={`w-full rounded-[18px] border px-6 py-5 text-left transition-all duration-300 sm:px-10 ${
                  isActive
                    ? `${item.activeBg} border-white/[0.04]`
                    : "border-transparent bg-[#09090b] hover:bg-[#111114]"
                }`}
              >
                {/* Button heading */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-sans text-[20px] font-semibold tracking-[-0.03em] sm:text-[24px] ${
                      isActive ? item.color : `${item.color} opacity-45`
                    }`}
                  >
                    {item.title}
                  </span>

                  <span className="font-mono text-[18px] text-[#77717f] sm:text-[20px]">
                    {item.number}
                  </span>
                </div>

                {/* Show details only for active button */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`${tab}-details`}
                      initial={{ opacity: 0, height: 0, y: 15 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8">
                        <p className="font-sans text-[14px] leading-[1.7] text-[#b4afbd] sm:text-[16px]">
                          {item.description}
                        </p>

                        <div className="mt-8 border-t border-white/10 pt-4">
                          <p className="font-mono text-[11px] leading-[1.7] text-[#85808f] sm:text-[12px]">
                            {item.footer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
