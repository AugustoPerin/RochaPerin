"use client"

import { motion } from "framer-motion"

interface UnifiedStepCardProps {
  number: number
  title: string
  description: string
  delay?: number
}

export function UnifiedStepCard({ number, title, description, delay = 0 }: UnifiedStepCardProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <span className="text-blue-700 text-2xl font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
