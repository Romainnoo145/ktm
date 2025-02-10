'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.images[0]);
    }
  }, [id]);

  if (!project) {
    return (
      <MainLayout showBreadcrumb={false}>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-light text-primary">Project niet gevonden</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout showBreadcrumb={false}>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Back button */}
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar projecten
          </Link>

          {/* Project header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h1 className="text-4xl font-light text-primary mb-4">{project.title}</h1>
              <p className="text-lg text-zinc-600 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </div>
            </div>

            {project.features && (
              <div className="bg-primary/5 p-8">
                <h2 className="text-lg font-medium text-primary mb-4">Projectdetails</h2>
                <ul className="grid gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image gallery */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Hoofdafbeelding */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm md:col-span-2">
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1280px) 800px, (min-width: 768px) 600px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-4 gap-3 md:col-span-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all ${
                      activeImage === image 
                        ? 'ring-2 ring-secondary scale-[0.98]' 
                        : 'hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Afbeelding ${index + 1}`}
                      fill
                      sizes="(min-width: 1280px) 200px, (min-width: 768px) 150px, 100px"
                      quality={80}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 