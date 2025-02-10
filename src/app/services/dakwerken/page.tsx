'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { CTA } from '@/components/ui/call-to-action'
import { Badge } from '@/components/ui/badge'
import { Shield, Ruler, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: "Gecertificeerd Vakmanschap",
    description: "Onze dakwerkers zijn volledig gecertificeerd en werken volgens de laatste normen en technieken."
  },
  {
    icon: Ruler,
    title: "Maatwerk Oplossingen",
    description: "Elk dak is uniek. Wij bieden oplossingen die perfect aansluiten bij uw specifieke situatie."
  },
  {
    icon: Clock,
    title: "Duurzame Resultaten",
    description: "We gebruiken alleen hoogwaardige materialen voor een langdurig resultaat."
  }
]

const services = [
  {
    title: "Dakrenovatie",
    description: "Complete renovatie van uw dak, inclusief isolatie en dakbedekking.",
    image: "/images/services/dakwerken.jpg",
    points: [
      "Vervanging van dakpannen en dakbedekking",
      "Isolatie voor optimale energiebesparing",
      "Vernieuwing van dakgoten en regenpijpen",
      "Plaatsing van dakramen en dakkapellen"
    ]
  },
  {
    title: "Dakonderhoud",
    description: "Preventief onderhoud om problemen te voorkomen en de levensduur te verlengen.",
    image: "/images/projects/dakrenovatie panningen/Project 4 (5).jpg",
    points: [
      "Regelmatige dakinspectie",
      "Reiniging van dakgoten",
      "Kleine reparaties en onderhoud",
      "Behandeling tegen mos en algen"
    ]
  },
  {
    title: "Dakisolatie",
    description: "Optimale isolatie voor een comfortabel huis en lagere energiekosten.",
    image: "/images/projects/dakrenovatie panningen/Project 4 (6).jpg",
    points: [
      "Verschillende isolatiemethoden",
      "Energiebesparende oplossingen",
      "Vochtregulerende materialen",
      "Professionele installatie"
    ]
  }
]

export default function DakwerkenPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/dakwerken.jpg"
            alt="Dakwerken Hero"
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
            <h1 className="mt-6 text-4xl font-light text-white">Dakwerken</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Professionele dakrenovatie en onderhoud met oog voor detail en kwaliteit. 
              Wij zorgen voor een waterdicht resultaat waar u jaren plezier van heeft.
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
              Van eerste contact tot oplevering, wij hanteren een professionele en transparante aanpak.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Inspectie", description: "Grondige inspectie van uw dak" },
              { step: "2", title: "Advies", description: "Persoonlijk advies en offerte op maat" },
              { step: "3", title: "Uitvoering", description: "Vakkundige uitvoering van de werkzaamheden" },
              { step: "4", title: "Oplevering", description: "Controle en garantie op ons werk" },
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