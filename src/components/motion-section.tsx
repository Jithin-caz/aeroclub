"use client"

import type React from "react"
import { motion } from "framer-motion"

interface MotionSectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  delay?: number
}

export function MotionSection({ id, className, children, delay = 0 }: MotionSectionProps) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    </section>
  )
}

