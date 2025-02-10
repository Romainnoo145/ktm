import { MoveRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center bg-white rounded-xl p-8 lg:p-16 gap-8 items-center border border-primary/10 shadow-sm">
          <div>
            <Badge variant="outline" className="text-xs px-3 py-1 text-zinc-600 uppercase tracking-wider">
              Start uw project
            </Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl tracking-tight max-w-2xl font-light text-primary">
              Klaar om uw ruimte te transformeren?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-zinc-600 max-w-2xl mx-auto font-light">
              Van kleine renovaties tot complete verbouwingen, wij staan klaar om uw wensen te realiseren. 
              Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact-us"
              className="rounded-lg bg-gray-900 px-8 py-4 text-sm text-white hover:bg-gray-900/90 transition-all duration-300 inline-flex items-center gap-2 group shadow-sm"
            >
              Plan een Gesprek 
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/project"
              className="rounded-lg border border-gray-900/20 bg-transparent px-8 py-4 text-sm text-gray-900 hover:bg-gray-900/5 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Bekijk Portfolio 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA }; 