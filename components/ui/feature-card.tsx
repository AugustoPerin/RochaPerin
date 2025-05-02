"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="text-green-500 mr-2 flex-shrink-0 mt-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
