"use client"

import { useEffect, useRef } from "react"
import { InfiniteScrollBackground } from "@/components/infinite-scroll-background"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

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
  const backgroundWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true
    let ctx: any = null

    const initializeMotion = async () => {
      try {
        await Promise.all([
          loadScript("https://unpkg.com/gsap@3.12.5/dist/gsap.min.js"),
          loadScript("https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js"),
        ])

        if (
          !mounted ||
          !sectionRef.current ||
          !textRef.current ||
          !backgroundWrapRef.current ||
          !window.gsap ||
          !window.ScrollTrigger
        ) {
          return
        }

        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
          const subtitle = textRef.current?.querySelector(".hero-subtitle")
          const headlineLines = textRef.current?.querySelectorAll(".headline-line")

          // Initial states
          gsap.set(headlineLines, { opacity: 0, y: 70 })
          gsap.set(subtitle, { opacity: 0, y: 20 })

          // Intro timeline
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

          tl.to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.7,
          }).to(
            headlineLines,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.14,
            },
            "-=0.2"
          )

          // Blur + fade background on scroll
          gsap.to(backgroundWrapRef.current, {
            filter: "blur(20px)",
            opacity: 0.28,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })

          // Slight text lift on scroll
          gsap.to(textRef.current, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
        }, sectionRef)
      } catch (error) {
        console.error("Failed to initialize hero animations:", error)
      }
    }

    initializeMotion()

    return () => {
      mounted = false
      if (ctx) ctx.revert()
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0F14] px-6 pt-24 text-white"
    >
      {/* Background */}
      <div
        ref={backgroundWrapRef}
        className="absolute inset-0 z-0 opacity-70 will-change-transform"
      >
        <InfiniteScrollBackground columnCount={3} />
        <div className="absolute inset-0 bg-[#0B0F14]/30" />
      </div>

      {/* Foreground */}
      <div
        ref={textRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center"
      >
        <div className="hero-subtitle mb-6 md:mb-8">
          <p className="text-[11px] font-light uppercase tracking-[0.32em] text-white/55 md:text-sm">
            (I Build)
          </p>
        </div>

        <div className="space-y-1 md:space-y-2">
          <h1 className="headline-line text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            HUMAN <span className="align-middle text-xl md:text-4xl lg:text-5xl">✣</span>
          </h1>

          <h2 className="headline-line text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            CENTERED
          </h2>

          <h3 className="headline-line text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            <span className="mr-2 align-middle text-2xl md:text-4xl lg:text-5xl">→</span>
            TECH
          </h3>
        </div>
      </div>
    </section>
  )
}