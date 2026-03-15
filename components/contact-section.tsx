import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="reveal-section px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">Contact</p>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Let&apos;s build something meaningful
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-lg">
          If you&apos;re crafting a new product, evolving an existing platform, or exploring a strategic collaboration,
          I&apos;d love to hear about it.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="mailto:hello@portfolio.dev"
            className="rounded-full border border-white/30 bg-white text-sm font-medium text-[#050816] px-6 py-3 transition hover:scale-[1.02]"
          >
            hello@portfolio.dev
          </Link>
          <Link
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/85 transition hover:border-white/40 hover:text-white"
          >
            Start a project
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-white/55">
          <Link href="#">LinkedIn</Link>
          <Link href="#">GitHub</Link>
          <Link href="#">Dribbble</Link>
        </div>
      </div>
    </section>
  )
}
