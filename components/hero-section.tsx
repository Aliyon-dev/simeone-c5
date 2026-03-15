"use client"

import { useEffect, useRef } from "react"

import { FloatingCard } from "@/components/floating-card"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

const cards = [
  {
    title: "Editorial Landing",
    tag: "Case Study",
    className: "left-[4%] top-[14%] -rotate-6 hidden sm:block",
    size: "w-44",
  },
  {
    title: "Motion System",
    tag: "Design",
    className: "right-[9%] top-[12%] rotate-6",
    size: "w-48",
  },
  {
    title: "Brand Narrative",
    tag: "Strategy",
    className: "left-[12%] bottom-[18%] rotate-[7deg] hidden md:block",
    size: "w-52",
  },
  {
    title: "Fintech Product",
    tag: "Interface",
    className: "right-[8%] bottom-[16%] -rotate-[8deg]",
    size: "w-44",
  },
  {
    title: "Immersive Campaign",
    tag: "Creative",
    className: "left-[24%] top-[6%] rotate-[4deg] hidden lg:block",
    size: "w-40",
  },
  {
    title: "AI Dashboard",
    tag: "Prototype",
    className: "right-[22%] bottom-[6%] rotate-[5deg] hidden lg:block",
    size: "w-48",
  },
]

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src='${src}']`)

    if (existing) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const initializeMotion = async () => {
      await Promise.all([
        loadScript("https://unpkg.com/gsap@3.12.5/dist/gsap.min.js"),
        loadScript("https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js"),
      ])

      if (!sectionRef.current || !window.gsap || !window.ScrollTrigger) return

      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)


      if (textRef.current) {
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 35,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        })
      }

      gsap.utils.toArray<HTMLElement>(".floating-card").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -16 : -12,
          duration: 3.2 + index * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })

        gsap.to(card, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }

    initializeMotion()

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.16),transparent_42%),radial-gradient(circle_at_70%_65%,rgba(139,92,246,0.12),transparent_40%)]" />

      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center">
        <p className="w-full max-w-4xl text-left text-xs font-medium uppercase tracking-[0.25em] text-white/65 md:text-sm">
          I build
        </p>
        <h1 className="mt-2 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-9xl">
          HUMAN CENTERED
        </h1>
        <p className="mt-3 w-full max-w-4xl text-right text-2xl font-light lowercase tracking-tight text-white/80 sm:text-3xl md:text-4xl">
          tech
        </p>
      </div>

      {cards.map((card, index) => (
        <FloatingCard
          key={card.title}
          title={card.title}
          tag={card.tag}
          className={`floating-card ${card.size} ${card.className} ${index > 2 ? "hidden sm:block" : ""}`}
        />
      ))}
    </section>
  )
}
