"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    category: "Zitfuse",
    title:
      "A visual profile for students showcasing their social impact beyond grades and exams",
    metric: "10K+",
    metricLabel: "Users",
    image: "/zitfuse-hero.png",
  },
  {
    category: "Grocer",
    title:
      "A dispatch platform designed to reduce delivery friction and improve operational trust",
    metric: "18K+",
    metricLabel: "Monthly Deliveries",
    image: "/Grocer.jpg",
  },
  {
    category: "Sankapo",
    title:
      "An intelligent farming system connecting growers, telemetry, and planning in one flow",
    metric: "32%",
    metricLabel: "Faster Planning",
    image: "/sankapo.jpg",
  },
]

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      const scrollable = sectionHeight - viewportHeight
      const progressed = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999)

      const nextIndex = Math.floor(progressed * projects.length)
      setActiveIndex(nextIndex)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const activeProject = projects[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0B0F14] text-white"
      style={{ height: `${projects.length * 140}vh` }}
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="grid h-full grid-cols-1 border-y border-white/10 md:grid-cols-12">

          {/* LEFT SIDE */}
          <div
            key={activeIndex}
            className="flex flex-col justify-between px-6 py-10 transition-all duration-500 md:col-span-7 md:px-10 md:py-14"
          >
            <div>

              {/* Section Title */}
              <p className="text-xs uppercase tracking-[0.32em] text-white/40">
                Featured Work
              </p>

              {/* Project Category */}
              <p className="mt-6 text-xl text-white/75 md:text-[1.8rem]">
                {activeProject.category}
              </p>

              {/* Project Title */}
              <h2
                key={activeProject.title}
                className="mt-6 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight transition-all duration-500 md:text-[4rem]"
              >
                {activeProject.title}
              </h2>
            </div>

            {/* Metric */}
            <div className="border-t border-white/10 pt-8 md:pt-10">
              <div className="font-mono text-5xl tracking-tight md:text-[5rem]">
                {activeProject.metric}
              </div>
              <p className="mt-3 text-xl text-white/85 md:text-2xl">
                {activeProject.metricLabel}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden border-l border-white/10 md:col-span-5 md:block">
            <div className="absolute inset-0 overflow-hidden">
              {projects.map((project, index) => (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    index === activeIndex
                      ? "opacity-100 scale-100"
                      : "pointer-events-none opacity-0 scale-[1.04]"
                  }`}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="absolute right-6 top-8 text-white/60 md:right-10">
          <span className="text-lg">{activeIndex + 1}</span>
          <span className="mx-2 opacity-40">—</span>
          <span className="opacity-40">{projects.length}</span>
        </div>
      </div>
    </section>
  )
}