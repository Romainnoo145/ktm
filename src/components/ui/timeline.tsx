"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface TimelineEntry {
  title: string;
  content: string;
  step: number;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full bg-background py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge variant="outline" className="text-xs px-3 py-1 text-zinc-600 uppercase tracking-wider">
                Werkwijze
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl font-light text-primary">
                Hoe wij te werk gaan
              </h2>
              <p className="text-lg max-w-2xl leading-relaxed text-zinc-600 font-light">
                Van eerste contact tot oplevering, wij hanteren een heldere aanpak voor elk project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white p-6 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-medium text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 