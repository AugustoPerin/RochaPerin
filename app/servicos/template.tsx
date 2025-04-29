"use client"
import type { ReactNode } from "react"

interface ServiceTemplateProps {
  children: ReactNode
}

export default function ServiceTemplate({ children }: ServiceTemplateProps) {
  return <div className="min-h-screen">{children}</div>
}
