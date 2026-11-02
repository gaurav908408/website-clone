
export default function OtherControlsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-10">

      {/* Background Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[15%] top-[15%] h-1 w-1 rounded-full bg-white/10" />
        <div className="absolute left-[25%] top-[35%] h-2 w-2 rounded-full bg-white/[0.04]" />
        <div className="absolute left-[38%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
        <div className="absolute left-[55%] top-[40%] h-1 w-1 rounded-full bg-white/10" />
        <div className="absolute left-[70%] top-[18%] h-2 w-2 rounded-full bg-white/[0.05]" />
        <div className="absolute left-[82%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/[0.08]" />

        <div className="absolute left-[10%] top-[65%] h-1 w-1 rounded-full bg-white/[0.06]" />
        <div className="absolute left-[30%] top-[80%] h-2 w-2 rounded-full bg-white/[0.04]" />
        <div className="absolute left-[48%] top-[70%] h-1 w-1 rounded-full bg-white/[0.08]" />
        <div className="absolute left-[65%] top-[85%] h-1.5 w-1.5 rounded-full bg-white/[0.05]" />
        <div className="absolute left-[90%] top-[65%] h-1 w-1 rounded-full bg-white/10" />

      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1140px] flex-col items-center text-center">

        {/* Heading */}
        <h3 className="font-sans text-[clamp(24px,2.4vw,32px)] font-semibold leading-tight tracking-[-0.035em] text-white">
          WHAT YOUR{" "}
          <span className="italic">OTHER</span>{" "}
          CONTROLS MISS
        </h3>

        {/* Description */}
        <div className="mt-8 space-y-1 font-sans text-[14px] leading-[1.6] text-[#85808f] sm:text-[15px]">

          <p>
            A prompt scanner sees tokens.
          </p>

          <p>
            A gateway sees a packet.
          </p>

          <p>
            A dashboard sees yesterday.
          </p>

          <p className="text-[#b8b2c3]">
            The action that actually makes the call is the new boundary.
          </p>

        </div>

      </div>

    </section>
  );
}
