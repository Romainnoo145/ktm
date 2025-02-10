'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { projects } from '@/data/projects'
import { CTA } from '@/components/ui/call-to-action'

const filters = [
  {
    id: 'type',
    name: 'Type Project',
    options: ['Alle', 'Dakwerken', 'Timmerwerken', 'Renovatie & Onderhoud'],
  },
  {
    id: 'year',
    name: 'Jaar',
    options: ['Alle', '2024', '2023', '2022'],
  },
]

export default function ProjectPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'Alle',
    year: 'Alle',
  })

  const getProjectType = (project) => {
    if (project.title.toLowerCase().includes('dakrenovatie') || project.title.toLowerCase().includes('dakwerken')) {
      return 'Dakwerken';
    } else if (project.title.toLowerCase().includes('timmerwerk')) {
      return 'Timmerwerken';
    } else {
      return 'Renovatie & Onderhoud';
    }
  };

  const filteredProjects = projects.filter(project => {
    const typeMatch =
      selectedFilters.type === 'Alle' ||
      getProjectType(project) === selectedFilters.type;
    
    const yearMatch =
      selectedFilters.year === 'Alle' ||
      project.date === selectedFilters.year;

    return typeMatch && yearMatch;
  })

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterId]: value,
    }))
  }

  return (
    <MainLayout showBreadcrumb={false}>
      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-light text-primary mb-4">Onze Projecten</h2>
            <p className="text-lg text-zinc-600">
              Ontdek ons portfolio van voltooide projecten.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mt-8 mb-12">
            {filters.map((filter) => (
              <select
                key={filter.id}
                className="rounded-md border-0 py-1.5 pl-3 pr-8 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-secondary sm:text-sm"
                onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                value={selectedFilters[filter.id]}
              >
                <option value="">{filter.name}</option>
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={85}
                    priority={projects.indexOf(project) < 6}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={projects.indexOf(project) < 6 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="relative p-6">
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="mx-2">•</div>
                    <div>{project.date}</div>
                  </div>
                  
                  <h3 className="mt-3 text-xl font-medium text-primary">
                    {project.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm text-secondary group-hover:text-secondary/80 transition-colors">
                    <span>Bekijk Project</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center mt-16">
              <h3 className="text-lg font-medium text-primary">Geen projecten gevonden</h3>
              <p className="mt-2 text-zinc-600">
                Pas de filters aan om meer projecten te vinden.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </MainLayout>
  )
} 