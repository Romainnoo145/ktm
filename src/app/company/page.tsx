'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Building, Users, ArrowUpRight } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import ContentLayout from '@/components/layout/ContentLayout'

const sideNavItems = [
  { name: 'Corporate Structure', href: '/company#structure' },
  { name: 'Financial Reports', href: '/company#financial' },
  { name: 'News & Updates', href: '/company#news' },
  { name: 'Investor Resources', href: '/company#investor' },
]

const news = [
  {
    id: 1,
    title: 'ArchDesign Wins Sustainability Award',
    date: 'March 15, 2024',
    category: 'Awards',
    description:
      'Our commitment to sustainable architecture has been recognized with a prestigious industry award.',
    image: 'https://picsum.photos/id/1067/800/600',
  },
  {
    id: 2,
    title: 'New Office Opening in Singapore',
    date: 'March 1, 2024',
    category: 'Company News',
    description:
      'Expanding our presence in Asia with a new state-of-the-art office in Singapore.',
    image: 'https://picsum.photos/id/1048/800/600',
  },
  {
    id: 3,
    title: 'Q4 2023 Financial Results',
    date: 'February 15, 2024',
    category: 'Financial',
    description:
      'Strong performance in Q4 with significant growth in key markets.',
    image: 'https://picsum.photos/id/164/800/600',
  },
]

const reports = [
  {
    title: 'Annual Report 2023',
    type: 'PDF',
    size: '5.2 MB',
    href: '#',
  },
  {
    title: 'Q4 2023 Financial Statement',
    type: 'PDF',
    size: '2.1 MB',
    href: '#',
  },
  {
    title: 'Sustainability Report 2023',
    type: 'PDF',
    size: '3.8 MB',
    href: '#',
  },
]

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState('structure')

  return (
    <MainLayout>
      <ContentLayout sideNavItems={sideNavItems} title="Company">
        {/* Corporate Structure Section */}
        <section id="structure" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Corporate Structure</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8">
              <Building className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Executive Leadership</h3>
              <p className="mt-2 text-gray-600">
                Led by experienced professionals with decades of industry expertise.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <Users className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Board of Directors</h3>
              <p className="mt-2 text-gray-600">
                Guiding our strategic direction with diverse industry perspectives.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <FileText className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Governance</h3>
              <p className="mt-2 text-gray-600">
                Committed to transparency and ethical business practices.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Reports Section */}
        <section id="financial" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Financial Reports</h2>
          <div className="mt-6">
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {reports.map((report) => (
                  <li key={report.title}>
                    <a href={report.href} className="block hover:bg-gray-50">
                      <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400" />
                            <p className="ml-2 truncate text-sm font-medium text-[#2B63D9]">
                              {report.title}
                            </p>
                          </div>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500">
                              <span>{report.type}</span>
                              <span className="mx-2">•</span>
                              <span>{report.size}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <ArrowUpRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">News & Updates</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            {news.map((item) => (
              <article key={item.id} className="relative isolate flex flex-col gap-8 lg:flex-col">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={item.date} className="text-gray-500">
                      {item.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {item.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="#">
                        <span className="absolute inset-0" />
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Investor Resources Section */}
        <section id="investor" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Investor Resources</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Investor Presentations</h3>
              <p className="mt-2 text-gray-600">
                Access our latest investor presentations and earnings calls.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#2B63D9]"
              >
                View Presentations <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Stock Information</h3>
              <p className="mt-2 text-gray-600">
                Real-time stock quotes and historical data.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#2B63D9]"
              >
                View Stock Info <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">IR Contact</h3>
              <p className="mt-2 text-gray-600">
                Get in touch with our investor relations team.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#2B63D9]"
              >
                Contact IR <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  )
} 