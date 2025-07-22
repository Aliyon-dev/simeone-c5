"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

interface HeroProps {
  greeting?: string
  description?: string[]
  currentCompany?: string
  previousCompanies?: string[]
}

export function Hero({
  greeting = "Hi,",
  description = [
    "I'm a UX designer passionate about creating meaningful digital experiences that solve real problems and delight users.",
  ],
  currentCompany = "Illusion Labs",
  previousCompanies = ["Dufuna Tech", "ZitFuse"],
}: HeroProps) {
  /* ---------- helpers ---------- */
  const scrollTo = (id: string, fallbackMailto = false) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else if (fallbackMailto) {
      window.location.href =
        "mailto:aliyon@example.com?subject=Let’s work together&body=Hi Aliyon, I'd love to discuss a potential project with you."
    }
  }

  /* ---------- render ---------- */
  return (
    <header className="relative overflow-hidden bg-white">
      {/* Decorative blob is hidden on mobile to avoid overlap */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-red-100 md:block" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-8 md:flex-row md:gap-20 md:py-32 lg:px-16">
        {/* ---------- TEXT ---------- */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl md:text-left lg:text-6xl">
            Aliyon Tembo{" "}
            <span className="block sm:inline">
              <span className="relative z-10">Product&nbsp;Designer</span>
              <span className="absolute -inset-1 rotate-2 bg-yellow-300"></span>
            </span>
          </h1>

          <p className="mt-6 text-center text-lg leading-relaxed text-gray-700 sm:text-xl md:text-left md:pr-8">
            I craft engaging, user-centred digital experiences that solve real problems and drive business impact.
          </p>

          {/* ---------- CTA BUTTONS ---------- */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <button
              onClick={() => scrollTo("work")}
              className="flex w-full items-center justify-center gap-2 rounded border-2 border-black bg-black px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              View My Work <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("contact", true)}
              className="flex w-full items-center justify-center gap-2 rounded border-2 border-black bg-white px-6 py-3 font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            >
              Work With Me <Mail size={18} />
            </button>
          </div>
        </motion.div>

        {/* ---------- IMAGE / MOCKUP ---------- */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Preview of featured design work"
            className="mx-auto w-full max-w-md rounded-lg border-4 border-black object-cover shadow-lg md:max-w-none"
          />
        </motion.div>
      </div>
    </header>
  )
}

/* Optional: allow default import too */
export default Hero
