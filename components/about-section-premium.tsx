const highlights = [
  "Full-stack engineering",
  "Digital product design",
  "Human-centered systems",
  "Built for real-world impact",
]

export function AboutSection() {
  return (
    <section id="about" className="reveal-section border-y border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.28em] text-white/50">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Thoughtful by design.</h2>
        </div>

        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-white/75 md:text-2xl md:leading-relaxed">
            I am a full-stack engineer and digital designer focused on building products that feel clear, useful, and
            deeply intentional. I blend engineering depth, design craft, and product strategy to ship systems people
            trust and teams can scale.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="reveal-stagger rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
