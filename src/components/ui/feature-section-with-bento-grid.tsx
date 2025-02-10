import { Home, Wrench, Hammer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const services = [
  {
    icon: Home,
    title: "Dakwerken",
    description: "Professionele dakrenovatie en dakkapellen\nmet oog voor kwaliteit.",
    image: '/images/services/dakwerken.jpg',
    href: "/services/dakwerken",
    size: "large"
  },
  {
    icon: Hammer,
    title: "Timmerwerken",
    description: "Specialistisch timmerwerk voor renovatie\nen nieuwbouw projecten.",
    image: '/images/services/timmerwerken.jpg',
    href: "/services/timmerwerken",
    size: "large"
  },
  {
    icon: Wrench,
    title: "Renovatie & Onderhoud",
    description: "Complete renovatie en onderhoud\nvoor woning en bedrijfspand.",
    image: '/images/services/renovatie.jpg',
    href: "/services/renovatie-onderhoud",
    size: "large"
  }
];

export default function Feature() {
  return (
    <div className="w-full bg-white py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge variant="outline" className="text-xs px-3 py-1 text-zinc-600 uppercase tracking-wider">
                Diensten
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl font-light text-primary">
                Onze Expertise
              </h2>
              <p className="text-lg max-w-2xl leading-relaxed text-zinc-600 font-light">
                Van kleine reparaties tot complete renovaties, wij staan voor u klaar met vakmanschap en expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300" />
                </div>
                
                <div className="relative flex flex-col h-full p-6 md:p-8 aspect-[16/9]">
                  <service.icon className="w-8 h-8 stroke-1 text-white mb-4" />
                  <div className="flex flex-col mt-auto">
                    <h3 className="text-xl font-medium text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm font-light mb-4 whitespace-pre-line">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm text-white font-medium">
                      Lees meer
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 