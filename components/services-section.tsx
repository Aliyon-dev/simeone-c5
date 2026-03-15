import { Code2, Lightbulb, Rocket, Smartphone } from "lucide-react"

const services = [
  {
    title: "Backend Development",
    description: "Scalable APIs, clean architecture, and resilient systems built for long-term growth.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: "Interfaces that feel intentional, human, and deeply aligned with product goals.",
    icon: Lightbulb,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile products with polished interactions and reliable performance.",
    icon: Smartphone,
  },
  {
    title: "Product Strategy",
    description: "From discovery to delivery, shaping roadmap direction with product thinking.",
    icon: Rocket,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="reveal-section px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">What I Do</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="reveal-stagger rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/25 md:p-8"
              >
                <Icon className="h-5 w-5 text-cyan-200" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
