"use client"

import * as React from "react"
import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="relative border-t bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[4fr,2fr,2fr,2fr] lg:gap-12">
          <div className="relative">
            <Link href="/" className="text-3xl font-bold tracking-tight">KTM</Link>
          </div>
          <div className="lg:pl-8">
            <h3 className="mb-4 text-lg font-semibold">Menu</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-300 transition-colors hover:text-white">
                Home
              </Link>
              <Link href="/services" className="block text-gray-300 transition-colors hover:text-white">
                Diensten
              </Link>
              <Link href="/project" className="block text-gray-300 transition-colors hover:text-white">
                Projecten
              </Link>
              <Link href="/contact-us" className="block text-gray-300 transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div className="lg:pl-8">
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-gray-300">
              <p>Pottenbakkersoven 22</p>
              <p>5993 DZ Maasbree</p>
              <p>
                <a href="tel:+31773030029" className="hover:text-white">
                  +31 (0)77 303 00 29
                </a>
              </p>
              <p>
                <a href="mailto:info@ktm.nl" className="hover:text-white">
                  info@ktm.nl
                </a>
              </p>
              <p>KVK: 95623922</p>
            </address>
          </div>
          <div className="lg:pl-8">
            <h3 className="mb-4 text-lg font-semibold">Volg Ons</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Volg ons op Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Volg ons op Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} KTM B.V. Alle rechten voorbehouden.</p>
            <div className="hidden md:block">•</div>
            <p>Website door <a href="https://www.marcore.nl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Marcore</a></p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 transition-colors hover:text-white">
              Algemene Voorwaarden
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer } 