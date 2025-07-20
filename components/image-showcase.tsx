"use client"

import { motion } from "framer-motion"

interface ImageShowcaseProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  layout?: "single" | "grid" | "side-by-side"
}

export function ImageShowcase({ images, layout = "single" }: ImageShowcaseProps) {
  const layoutClasses = {
    single: "grid grid-cols-1 gap-8",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
    "side-by-side": "grid grid-cols-1 lg:grid-cols-2 gap-8",
  }

  return (
    <div className={layoutClasses[layout]}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="border-6 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto" />
          {image.caption && (
            <div className="p-4 bg-yellow-300 border-t-4 border-black">
              <p className="font-black text-black uppercase tracking-wide text-sm">{image.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
