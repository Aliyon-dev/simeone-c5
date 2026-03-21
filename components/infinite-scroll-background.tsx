"use client"

import { useEffect, useMemo, useRef, useState } from "react"

declare global {
  interface Window {
    gsap: any
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

type ProjectImage = {
  id: number
  title: string
  image: string
}

type ColumnCard = ProjectImage & {
  gapClass: string
}

const projectImages: ProjectImage[] = [
  { id: 1, title: "Project One", image: "/Fynt.jpg" },
  { id: 2, title: "Project Two", image: "/zitfuse-hero.png" },
  { id: 3, title: "Project Three", image: "/Grocer.jpg" },
  { id: 4, title: "Project Four", image: "/sankapo.jpg" },
  { id: 5, title: "Project Five", image: "/smart-cast.jpg" },
  { id: 6, title: "Project Six", image: "/zitfuse-1.png" },
]

const gapPattern = ["mb-8", "mb-16", "mb-24", "mb-10", "mb-20", "mb-32"]

function ProjectCard({ title, image, gapClass }: ColumnCard) {
  return (
    <div className={`relative w-full ${gapClass}`}>
      <div className="relative aspect-square w-full overflow-hidden bg-white/5">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  )
}

function InfiniteScrollColumn({
  cards,
  speed,
  topOffsetClass,
  innerWidthClass,
}: {
  cards: ColumnCard[]
  speed: number
  topOffsetClass: string
  innerWidthClass: string
}) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true
    let tween: any = null
    let resizeObserver: ResizeObserver | null = null

    const init = async () => {
      await loadScript("https://unpkg.com/gsap@3.12.5/dist/gsap.min.js")

      if (!mounted || !trackRef.current || !window.gsap) return

      const gsap = window.gsap
      const track = trackRef.current
      const firstSet = track.querySelector("[data-set='first']") as HTMLDivElement | null

      if (!firstSet) return

      const setupAnimation = () => {
        const setHeight = firstSet.offsetHeight
        if (!setHeight) return

        if (tween) tween.kill()

        gsap.set(track, { y: 0 })

        tween = gsap.to(track, {
          y: -setHeight,
          duration: speed,
          ease: "none",
          repeat: -1,
        })
      }

      setupAnimation()

      resizeObserver = new ResizeObserver(() => {
        setupAnimation()
      })

      resizeObserver.observe(firstSet)
    }

    init()

    return () => {
      mounted = false
      if (tween) tween.kill()
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [cards, speed])

  return (
    <div className={`relative h-full overflow-hidden ${topOffsetClass}`}>
      <div className={`mx-auto ${innerWidthClass}`}>
        <div ref={trackRef} className="flex flex-col will-change-transform">
          <div data-set="first" className="flex flex-col">
            {cards.map((card, index) => (
              <ProjectCard
                key={`first-${card.id}-${index}`}
                title={card.title}
                image={card.image}
                gapClass={card.gapClass}
                id={card.id}
              />
            ))}
          </div>

          <div aria-hidden="true" className="flex flex-col">
            {cards.map((card, index) => (
              <ProjectCard
                key={`second-${card.id}-${index}`}
                title={card.title}
                image={card.image}
                gapClass={card.gapClass}
                id={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface InfiniteScrollBackgroundProps {
  columnCount?: number
}

export function InfiniteScrollBackground({
  columnCount = 3,
}: InfiniteScrollBackgroundProps) {
  const [mounted, setMounted] = useState(false)
  const [responsiveColumns, setResponsiveColumns] = useState(columnCount)

  useEffect(() => {
    setMounted(true)

    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 768) {
        setResponsiveColumns(1)
      } else if (width < 1024) {
        setResponsiveColumns(2)
      } else {
        setResponsiveColumns(columnCount)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)

    return () => {
      window.removeEventListener("resize", updateColumns)
    }
  }, [columnCount])

  const columns = useMemo(() => {
    return Array.from({ length: responsiveColumns }, (_, index) => {
      const rotated = [...projectImages.slice(index), ...projectImages.slice(0, index)]

      const randomizedCards: ColumnCard[] = rotated.map((item, itemIndex) => ({
        ...item,
        gapClass: gapPattern[(itemIndex + index) % gapPattern.length],
      }))

const topOffsets = ["pt-4", "pt-24", "pt-10"]
const innerWidths = ["w-[62%]", "w-[74%]", "w-[66%]"]

      return {
        index,
        speed: 26 + index * 5,
        cards: randomizedCards,
        topOffsetClass: topOffsets[index % topOffsets.length],
        innerWidthClass: innerWidths[index % innerWidths.length],
      }
    })
  }, [responsiveColumns])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 grid px-6 md:px-10"
        style={{
          gridTemplateColumns: `repeat(${responsiveColumns}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((column) => (
          <div key={column.index} className="relative h-[130vh] overflow-hidden">
            <InfiniteScrollColumn
              cards={column.cards}
              speed={column.speed}
              topOffsetClass={column.topOffsetClass}
              innerWidthClass={column.innerWidthClass}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,20,0.78),rgba(11,15,20,0.38),rgba(11,15,20,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(11,15,20,0.72)_100%)]" />
    </div>
  )
}