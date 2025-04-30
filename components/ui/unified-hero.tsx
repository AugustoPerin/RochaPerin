"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface UnifiedHeroProps {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  imageSrc: string
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
}

export function UnifiedHero({
  title,
  description,
  ctaText = "Solicite uma demonstração",
  ctaLink = "/contato",
  imageSrc,
  imageAlt,
}: UnifiedHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 font-medium text-base rounded-full shadow-lg"
              >
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="rounded-lg shadow-xl"
              style={{
                width: imageWidth ? `${imageWidth}px` : "auto",
                height: imageHeight ? `${imageHeight}px` : "auto",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white">
          <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>
    </section>
  )
}
