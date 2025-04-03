"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxHeroProps {
  children: React.ReactNode
}

export function ParallaxHero({ children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={ref} className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] rounded-full bg-blue-600/5 blur-3xl"></div>
      </motion.div>

      <motion.div style={{ y: y2, opacity }} className="container px-4 md:px-6 z-10 relative">
        {children}
      </motion.div>
    </div>
  )
}

