"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export function CTASection({ title, description, ctaText, ctaLink }: CTASectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">{description}</p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full shadow-lg">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
