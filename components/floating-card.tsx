"use client"

import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

type FloatingCardProps = {
  title: string
  tag: string
  className?: string
  style?: CSSProperties
}

export function FloatingCard({ title, tag, className, style }: FloatingCardProps) {
  return (
    <article
      className={cn(
        "absolute w-40 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
        className,
      )}
      style={style}
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/65">{tag}</p>
      <h3 className="mt-2 text-sm font-semibold text-white/90">{title}</h3>
    </article>
  )
}
