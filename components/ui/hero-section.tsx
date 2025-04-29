"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaveDivider } from "@/components/ui/wave-divider"

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ title, description, ctaText, ctaLink, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8 text-blue-100">{description}</p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full shadow-lg">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
      <WaveDivider />
    </section>
  )
}
