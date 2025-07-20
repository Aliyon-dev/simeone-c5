"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface FooterProps {
  designerName?: string
  year?: number
  links?: Array<{
    label: string
    href: string
  }>
}

export function Footer({
  designerName = "Alex Morgan",
  year = new Date().getFullYear(),
  links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "mailto:hello@alexmorgan.design" },
  ],
}: FooterProps) {
  return (
    <motion.footer
      className="px-8 py-16 md:px-16 lg:px-24 bg-black border-t-8 border-black"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <p className="text-white font-black text-lg uppercase tracking-wider">
            © {year} {designerName}. All rights reserved.
          </p>
        </motion.div>
        <div className="flex items-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.href}
                className="text-white font-black text-lg uppercase tracking-wider hover:text-yellow-300 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
