'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "Hoe wij werken",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary font-poppins">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: 1,
                  scale: index === currentFeature ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                    index === currentFeature
                      ? "bg-secondary border-secondary text-white"
                      : "bg-white border-secondary text-secondary",
                  )}
                >
                  <span className="text-lg font-semibold font-montserrat">
                    {index + 1}
                  </span>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary font-poppins">
                    {feature.title || feature.step}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 font-lora">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className={cn(
              "relative rounded-xl overflow-hidden shadow-lg",
              imageHeight
            )}>
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title || feature.step}
                          className="w-full h-full object-cover"
                          fill
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 