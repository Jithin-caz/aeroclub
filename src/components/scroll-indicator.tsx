"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  className?: string
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
    >
      <ChevronDown className="h-8 w-8 text-gray-500" />
    </motion.div>
  )
}

