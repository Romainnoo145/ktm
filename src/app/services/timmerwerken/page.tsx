'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { CTA } from '@/components/ui/call-to-action'
import { Badge } from '@/components/ui/badge'
import { Hammer, Award, Sparkles, Ruler, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Award,
    title: "Ambachtelijk Vakwerk",
    description: "Onze timmerlieden combineren traditioneel vakmanschap met moderne technieken."
  },
  {
    icon: Sparkles,
    title: "Maatwerk Interieur",
    description: "Van kozijnen tot complete interieurs, wij maken het precies zoals u het wenst."
  },
  {
    icon: Ruler,
    title: "Precisie & Detail",
    description: "Elk project wordt uitgevoerd met oog voor detail en perfecte afwerking."
  }
]

const services = [
  {
    title: "Kozijnen & Ramen",
    description: "Vakkundige plaatsing en renovatie van kozijnen en ramen voor optimaal comfort.",
    image: "/images/projects/timmerwerken/Project 2 (1).jpg",
    points: [
      "Hardhouten en kunststof kozijnen",
      "Renovatie van bestaande kozijnen",
      "HR++ en triple glas plaatsing",
      "Tochtdichte afwerking"
    ]
  },
  {
    title: "Maatwerk Interieur",
    description: "Unieke interieuroplossingen die perfect passen bij uw ruimte en stijl.",
    image: "/images/projects/timmerwerken/Project 2 (8).jpg",
    points: [
      "Inbouwkasten op maat",
      "Houten vloeren en trapbekleding",
      "Wandbetimmering",
      "Maatwerk meubels"
    ]
  },
  {
    title: "Dakkapellen & Constructies",
    description: "Uitbreiding van uw leefruimte met vakkundig geplaatste dakkapellen.",
    image: "/images/projects/timmerwerken/Project 2 (11).jpg",
    points: [
      "Ontwerp en plaatsing dakkapellen",
      "Houten draagconstructies",
      "Isolatie en afwerking",
      "Duurzame materialen"
    ]
  }
]

export default function TimmerwerkenPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/timmerwerken.jpg"
            alt="Timmerwerken Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-xs px-3 py-1 text-white/80 uppercase tracking-wider border-white/20">
              Diensten
            </Badge>
            <h1 className="mt-6 text-4xl font-light text-white">Timmerwerken</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Specialistisch timmerwerk voor zowel renovatie als nieuwbouw. Van kozijnen tot complete 
              interieurs, wij creëren hoogwaardige oplossingen met oog voor detail.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start p-8 bg-zinc-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gray-900 mb-4" />
                <h3 className="text-lg font-medium text-primary mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-cols-[3fr,2fr]' : 'md:grid-cols-[2fr,3fr]'
              }`}>
                {index % 2 === 1 ? (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light text-primary">{service.title}</h2>
                      <p className="text-zinc-600">{service.description}</p>
                      <ul className="space-y-3">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-zinc-600">
                            <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact-us" 
                        className="inline-flex items-center text-gray-900 hover:text-gray-900/80 transition-colors"
                      >
                        Neem contact op
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-light text-primary">{service.title}</h2>
                      <p className="text-zinc-600">{service.description}</p>
                      <ul className="space-y-3">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-zinc-600">
                            <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact-us" 
                        className="inline-flex items-center text-gray-900 hover:text-gray-900/80 transition-colors"
                      >
                        Neem contact op
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light text-primary mb-4">Onze Werkwijze</h2>
            <p className="text-zinc-600">
              Van ontwerp tot realisatie, wij zorgen voor een vlekkeloos proces.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Ontwerp", description: "Persoonlijk gesprek en ontwerp" },
              { step: "2", title: "Plan", description: "Gedetailleerd plan en offerte" },
              { step: "3", title: "Realisatie", description: "Vakkundige uitvoering" },
              { step: "4", title: "Oplevering", description: "Controle en garantie" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-medium mb-4 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">{item.title}</h3>
                  <p className="text-zinc-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[calc(100%-24px)] h-[2px] bg-gray-900/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
} 