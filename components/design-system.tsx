"use client"

import { motion } from "framer-motion"

interface DesignSystemProps {
  colors: Array<{ name: string; hex: string; usage: string }>
  typography: Array<{ name: string; size: string; weight: string; usage: string }>
  components: Array<{ name: string; description: string; image: string }>
}

export function DesignSystem({ colors, typography, components }: DesignSystemProps) {
  return (
    <div className="space-y-16">
      {/* Colors */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-24 border-b-4 border-black" style={{ backgroundColor: color.hex }}></div>
              <div className="p-4">
                <h4 className="font-black text-sm uppercase tracking-wide mb-1">{color.name}</h4>
                <p className="text-xs font-bold text-gray-600 mb-2">{color.hex}</p>
                <p className="text-xs font-medium text-black">{color.usage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Typography */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Typography</h3>
        <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
          {typography.map((type, index) => (
            <motion.div
              key={index}
              className="border-b-2 border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-wide mb-2">{type.name}</h4>
                  <p className="text-sm font-medium text-gray-600">
                    {type.size} • {type.weight}
                  </p>
                  <p className="text-sm font-medium text-black mt-1">{type.usage}</p>
                </div>
                <div className="md:col-span-2">
                  <div
                    className="text-black"
                    style={{
                      fontSize: type.size,
                      fontWeight: type.weight,
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Components */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Components</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <motion.div
              key={index}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={component.image || "/placeholder.svg?height=200&width=300"}
                alt={component.name}
                className="w-full h-48 object-cover border-b-4 border-black"
              />
              <div className="p-4">
                <h4 className="font-black text-lg uppercase tracking-wide mb-2">{component.name}</h4>
                <p className="text-sm font-medium text-black">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
