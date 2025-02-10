'use client'

import { Home, Wrench, Hammer } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { CTA } from '@/components/ui/call-to-action'

const services = [
  {
    id: 'dakwerken',
    name: 'Dakwerken',
    description: 'Professionele dakrenovatie en dakkapellen met oog voor kwaliteit.',
    icon: Home,
    image: '/images/services/dakwerken.jpg',
    features: [
      'Dakrenovatie en reparatie',
      'Dakisolatie',
      'Dakbedekking',
      'Dakgoten en hemelwaterafvoer',
      'Dakramen en dakkapellen',
      'Preventief onderhoud'
    ],
  },
  {
    id: 'timmerwerken',
    name: 'Timmerwerken',
    description: 'Specialistisch timmerwerk voor renovatie en nieuwbouw projecten.',
    icon: Hammer,
    image: '/images/services/timmerwerken.jpg',
    features: [
      'Kozijnen plaatsing en renovatie',
      'Maatwerk meubels en kasten',
      'Deuren en ramen',
      'Houten vloeren',
      'Dakkapellen en dakramen',
      'Binnen- en buitenbetimmering'
    ],
  },
  {
    id: 'renovatie-onderhoud',
    name: 'Renovatie & Onderhoud',
    description: 'Complete renovatie en onderhoud voor woning en bedrijfspand.',
    icon: Wrench,
    image: '/images/services/renovatie.jpg',
    features: [
      'Complete woningrenovatie',
      'Badkamer en keuken renovatie',
      'Gevelrenovatie',
      'Periodiek onderhoud',
      'Kleine reparaties',
      'Vastgoed onderhoud'
    ],
  },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div>
              <Badge variant="outline" className="text-xs px-3 py-1 text-zinc-600 uppercase tracking-wider">
                Diensten
              </Badge>
            </div>
            <h1 className="mt-6 text-4xl font-light text-primary">Onze Expertise</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Van kleine reparaties tot complete renovaties, wij staan voor u klaar met vakmanschap en expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-8">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <service.icon className="w-8 h-8 stroke-1 text-white mb-4" />
                    <h3 className="text-xl font-medium text-white">{service.name}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
} 