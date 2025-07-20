"use client"

import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import type { GalleryImage } from "@/types/portfolio"

interface ProjectGalleryProps {
  images: GalleryImage[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category).filter(Boolean)))]
  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = selectedImage
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(newIndex)
  }

  return (
    <div>
      {/* Filter Buttons */}
      {categories.length > 1 && (
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 font-black text-sm uppercase tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                filter === category ? "bg-red-500 text-white" : "bg-white text-black hover:bg-yellow-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "All Images" : category}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.src || "/placeholder.svg?height=300&width=400"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="bg-white border-4 border-black px-4 py-2 font-black text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  View Full Size
                </div>
              </div>
            </div>
            {image.caption && (
              <div className="p-4">
                <p className="font-medium text-black text-sm leading-relaxed">{image.caption}</p>
                {image.category && (
                  <span className="inline-block mt-2 bg-blue-300 text-black px-2 py-1 font-black text-xs uppercase tracking-wide border-2 border-black">
                    {image.category}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="relative max-w-6xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 bg-red-500 text-white w-12 h-12 border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 transition-colors z-10 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="bg-white border-8 border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              {filteredImages[selectedImage].caption && (
                <div className="p-6 bg-yellow-300 border-t-4 border-black">
                  <p className="font-black text-black uppercase tracking-wide text-center">
                    {filteredImages[selectedImage].caption}
                  </p>
                </div>
              )}
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-wide border-4 border-white">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
