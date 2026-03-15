const testimonials = [
  {
    quote:
      "He combines systems thinking with design taste in a way that turns complexity into experiences people actually enjoy using.",
    name: "Nadia Verhoeven",
    role: "Product Lead, AgriPulse",
  },
  {
    quote:
      "From architecture to interface details, every decision felt intentional. We launched faster and with far more confidence.",
    name: "David Moyo",
    role: "Founder, DashDrop",
  },
  {
    quote:
      "A rare blend of engineering depth and design clarity. The end result looked premium and performed even better.",
    name: "Mina Keller",
    role: "Head of Digital, Atlas Systems",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="reveal-section border-y border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">What people say</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="reveal-stagger rounded-3xl border border-white/20 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7"
            >
              <p className="text-base leading-relaxed text-white/80">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-white">{testimonial.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
