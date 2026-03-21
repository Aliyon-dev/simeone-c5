import Link from "next/link"

export function IntroMessageSection() {
  return (
    <section className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">
        {/* Left rail */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div>
            <div className="mb-10 text-3xl leading-none">🕊️</div>
            <p className="max-w-[140px] text-2xl leading-[1.35] tracking-tight text-white md:text-3xl">
              Let&apos;s build something that lasts
            </p>
          </div>
        </div>

        {/* Main copy */}
        <div className="md:col-span-7">
          <h2 className="max-w-4xl text-3xl font-medium leading-[1.15] tracking-tight text-white md:text-5xl">
            AI has changed the way we build. Great digital products are no longer
            defined by features, but by values people connect with.
          </h2>

          <p className="mt-12 max-w-4xl text-base leading-[1.6] text-white/72 md:text-2xl md:leading-[1.55]">
            Appy helps startups build digital products that stand out in a
            saturated tech landscape by grounding them end-to-end in strategy,
            storytelling, and evolving human values — creating tech that
            doesn’t just optimise for efficiency, but makes people genuinely
            happier.
          </p>

          <div className="mt-16">
            <Link
              href="#work"
              className="inline-flex items-center border-b border-white/70 pb-2 text-lg text-white transition hover:border-white hover:text-white/80"
            >
              How we do it
            </Link>
          </div>
        </div>

        {/* Right counter */}
        <div className="md:col-span-2 flex items-start justify-start md:justify-end">
          <p className="text-2xl tracking-tight text-white/85 md:text-3xl">1 — 5</p>
        </div>
      </div>
    </section>
  )
}