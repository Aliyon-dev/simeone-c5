"use client"

import { useEffect } from "react"

import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Disciplines } from "@/components/disciplines"
import { TechIndex } from "@/components/tech-index"
import { Collaborate } from "@/components/collaborate"
import { Footer } from "@/components/footer"
import { FloatingInfo } from "@/components/floating-info"

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
    }

    initializeReveals()

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  return (
    <>
      <Nav />
      <main className="lg:ml-64 bg-background">
        <Hero />
        <Disciplines />
        <TechIndex />
        <Collaborate />
        <Footer />
      </main>
      <FloatingInfo />
    </>
  )
}
