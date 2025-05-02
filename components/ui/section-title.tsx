"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionTitle({ title, subtitle, center = false, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}>{title}</h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${light ? "text-blue-100" : "text-gray-600"} max-w-3xl ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
