"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true
    let ctx: any = null

    const initializeMotion = async () => {
      try {
        if (!mounted || !sectionRef.current || !textRef.current || !window.gsap) {
          return
        }

        const gsap = window.gsap

        ctx = gsap.context(() => {
          const headlineLines = textRef.current?.querySelectorAll(".headline-line")
          const otherElements = textRef.current?.querySelectorAll(".fade-in-up")

          // Initial states
          gsap.set(headlineLines, { opacity: 0, y: 70 })
          gsap.set(otherElements, { opacity: 0, y: 20 })

          // Intro timeline
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

          tl.to(
            headlineLines,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.14,
            }
          ).to(
            otherElements,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
            },
            "-=0.5"
          )
        }, sectionRef)
      } catch (error) {
        console.error("Failed to initialize hero animations:", error)
      }
    }

    // Delay init to ensure GSAP is loaded if handled via external script (like in parent)
    // Or we could use the local gsap package
    import("gsap").then(({ gsap }) => {
        window.gsap = gsap;
        initializeMotion();
    });

    return () => {
      mounted = false
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="min-h-[921px] flex flex-col justify-center px-8 md:px-16 border-b-2 border-[#FFFF00] relative overflow-hidden bg-background pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-outline-variant opacity-20 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px border-t border-outline-variant opacity-20"></div>

      <div ref={textRef} className="z-10 max-w-5xl relative">
        <h2 className="fade-in-up font-headline text-xs uppercase tracking-[0.5em] text-[#FFFF00] mb-6">
          MULTI-DISCIPLINARY SYSTEMS ARCHITECT
        </h2>

        <h1 className="font-headline text-6xl md:text-9xl font-extrabold uppercase leading-[0.9] text-primary mb-8 tracking-tighter">
          <div className="headline-line overflow-hidden"><span className="inline-block">INTERFACE</span></div>
          <div className="headline-line overflow-hidden"><span className="text-[#FFFF00] inline-block">LOGIC</span></div>
          <div className="headline-line overflow-hidden"><span className="inline-block">ATMOSPHERE</span></div>
        </h1>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-end">
          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
            Synthesizing high-fidelity user experiences, scalable software architecture, and photorealistic spatial narratives into a singular cohesive workflow.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-outline-variant py-2">
              <span className="font-label text-xs uppercase opacity-60">Location</span>
              <span className="font-label text-xs uppercase">40.7128° N, 74.0060° W</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant py-2">
              <span className="font-label text-xs uppercase opacity-60">Status</span>
              <span className="font-label text-xs uppercase text-[#FFFF00]">Active_Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
