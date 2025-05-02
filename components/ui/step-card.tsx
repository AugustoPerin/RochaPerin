"use client"

import { motion } from "framer-motion"

interface StepCardProps {
  number: number
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <motion.div className="text-center" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <span className="text-blue-700 text-2xl font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
