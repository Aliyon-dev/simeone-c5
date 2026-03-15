import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs uppercase tracking-[0.18em] text-white/50 md:flex-row md:items-center md:justify-between">
        <p>AY // Portfolio</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="#">GitHub</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">X</Link>
        </div>
      </div>
    </footer>
  )
}
