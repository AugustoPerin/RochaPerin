"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
