
export default function RiskBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-12 sm:px-10">
      <div className="relative mx-auto max-w-[1140px]">

        {/* Top Decorative Line with Dark Blur */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#39304f] to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5b4a85] to-transparent blur-[6px]" />
        </div>

        {/* Center Text */}
        <div className="flex min-h-[88px] items-center justify-center px-4 text-center">
          <p className="font-sans text-base font-bold leading-relaxed text-[#c5bfff] sm:text-[20px]">
            Risks in a single step are amplified across a workflow.
          </p>
        </div>

        {/* Bottom Decorative Line with Dark Blur */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#39304f] to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5b4a85] to-transparent blur-[6px]" />
        </div>

      </div>
    </section>
  );
}
