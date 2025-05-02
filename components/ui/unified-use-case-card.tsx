"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface UnifiedUseCaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function UnifiedUseCaseCard({ icon: Icon, title, description, delay = 0 }: UnifiedUseCaseCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md text-center transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
