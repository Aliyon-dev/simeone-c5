const stats = [
  { value: 10, suffix: "K+", label: "Users reached" },
  { value: 5, suffix: "+", label: "Products built" },
  { value: 3, suffix: "+", label: "Years creating digital experiences" },
  { value: 100, suffix: "%", label: "End-to-end product thinking" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="reveal-section px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">Impact</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="reveal-stagger rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                <span className="impact-number" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
