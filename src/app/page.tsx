'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons'
import Feature from '@/components/ui/feature-section-with-bento-grid'
import { Timeline } from '@/components/ui/timeline'
import { CTA } from '@/components/ui/call-to-action'
import { projects } from '@/data/projects'

const timelineData = [
  {
    step: 1,
    title: "Eerste Contact",
    content: "We bespreken uw wensen en ideeën tijdens een vrijblijvend gesprek. Hierbij geven we direct een eerste indicatie van de mogelijkheden.",
  },
  {
    step: 2,
    title: "Plan van Aanpak",
    content: "We stellen een gedetailleerd plan op, inclusief tijdlijn en kostenraming. Zo weet u precies waar u aan toe bent.",
  },
  {
    step: 3,
    title: "Uitvoering",
    content: "Ons vakkundige team gaat aan de slag met uw project. We houden u tijdens het hele proces op de hoogte van de voortgang.",
  },
  {
    step: 4,
    title: "Oplevering",
    content: "Na zorgvuldige controle leveren we het project op. We zorgen ervoor dat alles perfect in orde is volgens uw wensen.",
  },
];

// We nemen de eerste 3 projecten voor de featured sectie
const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <MainLayout showBreadcrumb={false}>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="relative bg-white">
        <Feature />
      </div>

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Featured Projects */}
      <section className="relative py-32 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wider">Portfolio</h2>
              <h3 className="text-3xl font-light text-zinc-900">Recent Werk</h3>
            </div>
            <Link 
              href="/project" 
              className="group flex items-center gap-2 text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              Bekijk alle projecten <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-2">{project.location}</p>
                  <h4 className="text-white text-xl font-light">{project.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
}
