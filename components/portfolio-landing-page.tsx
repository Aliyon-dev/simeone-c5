"use client"

import { useEffect } from "react"

import { AboutSection } from "@/components/about-section-premium"
import { ContactSection } from "@/components/contact-section"
import { FeaturedWorkSection } from "@/components/featured-work-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { Footer } from "@/components/portfolio-footer"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { IntroMessageSection } from "./Intro-message"

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

export function PortfolioLandingPage() {
  useEffect(() => {
    const initializeReveals = async () => {
      await Promise.all([
        loadScript("https://unpkg.com/gsap@3.12.5/dist/gsap.min.js"),
        loadScript("https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js"),
      ])

      if (!window.gsap || !window.ScrollTrigger) return

      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 26,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".impact-number").forEach((numberEl) => {
        const target = Number(numberEl.dataset.value || 0)
        const value = { count: 0 }

        gsap.to(value, {
          count: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: numberEl,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            numberEl.textContent = Math.round(value.count).toString()
          },
        })
      })
    }

    initializeReveals()

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  return (
    <main className="bg-[#0B0F14] text-white">
      <Header />
      <HeroSection />
      <IntroMessageSection/>
      <FeaturedWorkSection />
      <ServicesSection />
      <AboutSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
