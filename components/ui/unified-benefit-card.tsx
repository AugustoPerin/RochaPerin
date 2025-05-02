"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface UnifiedBenefitCardProps {
  title: string
  description: string
  delay?: number
}

export function UnifiedBenefitCard({ title, description, delay = 0 }: UnifiedBenefitCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <CheckCircle className="text-green-500 mr-2" size={20} />
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
