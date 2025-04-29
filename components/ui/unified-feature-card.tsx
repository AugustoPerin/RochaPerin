"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface UnifiedFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
}

export function UnifiedFeatureCard({ icon: Icon, title, description, features, delay = 0 }: UnifiedFeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="p-8">
        <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
          <Icon className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
