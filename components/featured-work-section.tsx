import Link from "next/link"

const projects = [
  {
    title: "AgriPulse Platform",
    description: "A smart farming suite that connects growers, sensors, and logistics in one adaptive workflow.",
    role: "Full-Stack + Product Design",
    metric: "32% faster crop planning",
    cta: "View Project",
    span: "md:col-span-8",
  },
  {
    title: "DashDrop Delivery",
    description: "A dispatch and delivery ecosystem optimized for real-time routing and customer trust.",
    role: "Backend Architecture",
    metric: "18K+ monthly deliveries",
    cta: "View Project",
    span: "md:col-span-4",
  },
  {
    title: "Pulse UX Case Study",
    description: "A product redesign case study focused on usability, accessibility, and conversion clarity.",
    role: "UX/UI Strategy",
    metric: "2.4x checkout completion",
    cta: "View Project",
    span: "md:col-span-5",
  },
  {
    title: "Atlas IoT Command",
    description: "An IoT dashboard for monitoring field devices with actionable alerts and rich telemetry.",
    role: "Frontend + Systems",
    metric: "99.9% event visibility",
    cta: "View Project",
    span: "md:col-span-7",
  },
]

export function FeaturedWorkSection() {
  return (
    <section id="work" className="reveal-section border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">Featured Work</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Selected builds where design systems and robust engineering move together.
        </h2>
        <p className="mt-5 max-w-2xl text-sm text-white/65 md:text-base">
          A focused collection of products built for scale, clarity, and real-world outcomes.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`reveal-stagger group ${project.span} rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06] md:p-7`}
            >
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-300/20 via-transparent to-cyan-300/20 p-1">
                <div className="aspect-[16/10] rounded-[14px] bg-[#0a0f22]" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">{project.role}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">{project.metric}</span>
                <Link href="#" className="text-sm text-white/80 transition group-hover:text-white">
                  {project.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
