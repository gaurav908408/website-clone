export default function CustomerSection() {
  return (
    <section className="relative flex min-h-[310px] w-full flex-col items-center justify-center overflow-hidden bg-[#101014] px-6 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_4px)]" />

      <p className="mb-7 text-center font-mono text-[13px] tracking-[0.12em] text-[#aaa4ff] sm:text-[15px]">
        SECURING PRODUCTION WORKFLOWS AT
      </p>

      <div className="relative z-10 flex w-full max-w-[930px] flex-col items-center justify-center gap-6 text-white/60 sm:flex-row sm:gap-12">
        <div className="flex min-w-[200px] items-center justify-center whitespace-nowrap text-[34px] font-black leading-none tracking-[-0.06em] text-white sm:text-[42px]">
          <span className="mr-2 text-[42px] font-light leading-none text-white sm:text-[50px]">▽</span>
          <span>CREEM</span>
        </div>

        <div className="flex min-w-[250px] items-center justify-center whitespace-nowrap">
          <div className="mr-[-9px] flex h-[58px] w-[58px] items-center justify-center rounded-full border-[2px] border-white bg-white/10 text-[38px] font-black italic leading-none tracking-[-0.12em] text-white sm:h-[66px] sm:w-[66px] sm:text-[44px]">
            JD
          </div>
          <span className="text-[34px] font-black leading-none tracking-[-0.08em] text-white sm:text-[42px]">
            Group
          </span>
        </div>

        <div className="min-w-[200px] text-center text-[34px] font-black leading-none tracking-[-0.07em] text-white sm:text-[42px]">
          checkr
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-[13px] tracking-[0.12em] text-[#aaa4ff] sm:text-[16px]">
        WORKS WITH CLAUDE CODE, CODEX, COPILOT, CURSOR AND MANY OTHERS
      </p>
    </section>
  );
}
