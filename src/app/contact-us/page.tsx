'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/timmerwerken/Project 2 (8).jpg"
            alt="Contact Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-xs px-3 py-1 text-white/80 uppercase tracking-wider border-white/20">
              Contact
            </Badge>
            <h1 className="mt-6 text-4xl font-light text-white">Neem Contact Op</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Heeft u een vraag of wilt u een offerte aanvragen? Neem contact met ons op en we helpen u graag verder.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light text-primary mb-8">Contact Informatie</h2>
              <dl className="space-y-8">
                <div className="flex gap-x-6">
                  <dt>
                    <Phone className="h-6 w-6 text-gray-900" />
                  </dt>
                  <dd>
                    <p className="text-sm font-medium text-primary">Telefoon</p>
                    <p className="mt-1">
                      <a href="tel:+31773030029" className="text-base text-zinc-600 hover:text-gray-900">
                        +31 (0)77 303 00 29
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex gap-x-6">
                  <dt>
                    <Mail className="h-6 w-6 text-gray-900" />
                  </dt>
                  <dd>
                    <p className="text-sm font-medium text-primary">E-mail</p>
                    <p className="mt-1">
                      <a href="mailto:info@ktm.nl" className="text-base text-zinc-600 hover:text-gray-900">
                        info@ktm.nl
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex gap-x-6">
                  <dt>
                    <MapPin className="h-6 w-6 text-gray-900" />
                  </dt>
                  <dd>
                    <p className="text-sm font-medium text-primary">Adres</p>
                    <p className="mt-1 text-base text-zinc-600">
                      Lange Heide 9<br />
                      5993 PB Maasbree
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white border border-zinc-200/60 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="street" className="block text-sm font-medium text-primary">
                      Straatnaam
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="houseNumber" className="block text-sm font-medium text-primary">
                      Huisnummer
                    </label>
                    <input
                      type="text"
                      id="houseNumber"
                      name="houseNumber"
                      value={formData.houseNumber}
                      onChange={handleChange}
                      className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full border-0 border-b border-zinc-200 py-3 focus:border-gray-900 focus:ring-0 sm:text-sm text-gray-900"
                    required
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white hover:bg-gray-900/90 transition-colors rounded-xl shadow-sm"
                  >
                    Verstuur Bericht
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 