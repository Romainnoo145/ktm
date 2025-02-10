"use client"

import { ArrowRight, PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function Hero() {
  return (
    <div className="relative w-full min-h-[85vh] bg-background">
      {/* Background grain overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grain-light.png')] opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-2">
          <div className="flex gap-8 flex-col max-w-2xl">
            <div>
              <Badge variant="outline" className="text-xs px-3 py-1 text-zinc-600 uppercase tracking-wider">
                Vakmanschap sinds 2000
              </Badge>
            </div>
            <div className="flex gap-8 flex-col">
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-left font-light text-primary">
                Uw Partner voor <br className="hidden md:block" />
                <span className="font-normal">Bouwexpertise</span>
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 text-left font-light">
                Met meer dan 20 jaar ervaring zijn wij specialist in dakwerken, timmerwerk en renovaties. 
                Van kleine reparaties tot complete projecten, wij staan voor kwaliteit en betrouwbaarheid 
                in de regio Maasbree en omstreken.
              </p>
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 h-auto text-base rounded-xl shadow-sm transition-all duration-300"
              >
                <a href="tel:+31773030029">
                  Bel ons direct
                  <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gray-900 hover:bg-gray-900/90 text-white px-8 py-6 h-auto text-base rounded-xl shadow-sm transition-all duration-300"
              >
                <Link href="/contact-us">
                  Offerte aanvragen
                  <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-200">
              <div>
                <p className="text-3xl font-light text-primary">20+</p>
                <p className="text-sm text-zinc-500 mt-1">Jaar Ervaring</p>
              </div>
              <div>
                <p className="text-3xl font-light text-primary">500+</p>
                <p className="text-sm text-zinc-500 mt-1">Projecten</p>
              </div>
              <div>
                <p className="text-3xl font-light text-primary">100%</p>
                <p className="text-sm text-zinc-500 mt-1">Tevreden Klanten</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 h-[600px]">
            <div className="col-span-3 row-span-2 relative overflow-hidden rounded-xl shadow-sm">
              <Image
                src={projects[0].images[0]}
                alt={projects[0].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl shadow-sm">
              <Image
                src={projects[1].images[0]}
                alt={projects[1].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl shadow-sm">
              <Image
                src={projects[2].images[0]}
                alt={projects[2].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 