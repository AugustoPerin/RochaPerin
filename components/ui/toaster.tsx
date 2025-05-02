"use client"

import * as React from "react"
import { Toaster } from "react-hot-toast"

type UIToasterProps = {}

const UIToaster = React.forwardRef<React.ElementRef<typeof Toaster>, UIToasterProps>(({}, ref) => {
  return (
    <Toaster
      ref={ref}
      position="top-right"
      toastOptions={{
        className: "bg-white border border-gray-200 shadow-sm rounded-md",
        duration: 3000,
        success: {
          style: {
            background: "#4ade80",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#f43f5e",
            color: "#fff",
          },
        },
      }}
    />
  )
})
UIToaster.displayName = "UIToaster"

export default UIToaster
