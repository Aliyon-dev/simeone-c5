"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

interface AboutSectionProps {
  title?: string
  paragraphs?: string[]
  profileImage?: string
  profileImageAlt?: string
}

export function AboutSection({
  title = "About",
  paragraphs = [
    "I'm a UX designer with 6+ years of experience creating digital products that people love to use. My approach combines user research, strategic thinking, and visual design to solve complex problems.",
    "When I'm not designing, you can find me exploring new coffee shops, hiking local trails, or experimenting with new design tools and techniques.",
  ],
  profileImage = "/placeholder.svg?height=600&width=500",
  profileImageAlt = "UX Designer Profile",
}: AboutSectionProps) {
  const socialLinks = [
    { platform: "email", icon: <Mail className="w-6 h-6" />, url: "mailto:hello@designer.com" },
    { platform: "linkedin", icon: <Linkedin className="w-6 h-6" />, url: "#" },
    { platform: "twitter", icon: <Twitter className="w-6 h-6" />, url: "#" },
  ]

  return (
    <section id="about" className="px-8 py-32 md:px-16 lg:px-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 uppercase tracking-tighter leading-none">
            {title}
          </h2>
          <div className="w-32 h-2 bg-blue-500 border-2 border-black mb-12"></div>

          <div className="space-y-8 text-xl md:text-2xl text-black leading-relaxed font-medium">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.platform}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  className="bg-white text-black border-4 border-black w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:pl-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="border-8 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{
              rotate: -2,
              scale: 1.02,
              shadow: "16px_16px_0px_0px_rgba(0,0,0,1)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={profileImage || "/placeholder.svg"}
              alt={profileImageAlt}
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
