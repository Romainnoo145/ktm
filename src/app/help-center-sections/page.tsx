'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp, MessageSquare, FileText, HelpCircle } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import ContentLayout from '@/components/layout/ContentLayout'

const sideNavItems = [
  { name: 'FAQs', href: '/help-center-sections#faqs' },
  { name: 'Knowledge Base', href: '/help-center-sections#knowledge-base' },
  { name: 'Support Tickets', href: '/help-center-sections#support' },
]

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer comprehensive architectural and interior design services, including residential and commercial architecture, interior design, space planning, and sustainable design solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope and complexity. A typical residential project might take 6-12 months, while larger commercial projects can take 12-24 months or more.',
  },
  {
    question: 'What is your design process?',
    answer:
      'Our design process includes initial consultation, concept development, detailed design, documentation, and construction supervision. We work closely with clients at each stage.',
  },
  {
    question: 'Do you work on international projects?',
    answer:
      'Yes, we have experience working on international projects and have offices in multiple countries to serve our global clients.',
  },
]

const articles = [
  {
    id: 1,
    title: 'Getting Started Guide',
    category: 'Basics',
    description: 'Learn about our design process and what to expect.',
  },
  {
    id: 2,
    title: 'Project Timeline Overview',
    category: 'Process',
    description: 'Detailed breakdown of project phases and durations.',
  },
  {
    id: 3,
    title: 'Sustainable Design Practices',
    category: 'Design',
    description: 'Our approach to environmentally conscious architecture.',
  },
]

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <MainLayout>
      <ContentLayout sideNavItems={sideNavItems} title="Help Center">
        {/* Search Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            How can we help?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Search our knowledge base or browse frequently asked questions
          </p>
          <div className="mt-8">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2B63D9] sm:text-sm sm:leading-6"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8">
              <MessageSquare className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Contact Support</h3>
              <p className="mt-2 text-gray-600">Get in touch with our support team for assistance.</p>
              <button className="mt-4 text-sm font-semibold text-[#2B63D9]">Open Support Ticket</button>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <FileText className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Documentation</h3>
              <p className="mt-2 text-gray-600">Browse our comprehensive documentation.</p>
              <button className="mt-4 text-sm font-semibold text-[#2B63D9]">View Docs</button>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <HelpCircle className="h-8 w-8 text-[#2B63D9]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">FAQs</h3>
              <p className="mt-2 text-gray-600">Find answers to common questions.</p>
              <button className="mt-4 text-sm font-semibold text-[#2B63D9]">View FAQs</button>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section id="faqs" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <dt>
                    <button
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openFaqs.includes(index) ? (
                          <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openFaqs.includes(index) && (
                    <dd className="mt-4 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section id="knowledge-base" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Knowledge Base</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 sm:pt-48 lg:pt-32"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div>{article.category}</div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <button className="text-left">
                    <span className="absolute inset-0" />
                    {article.title}
                  </button>
                </h3>
                <p className="mt-2 text-sm text-gray-300">{article.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Support Ticket Section */}
        <section id="support" className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Support Tickets</h2>
          <div className="mt-8">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Create a Support Ticket</h3>
              <p className="mt-2 text-gray-600">
                Need help with something specific? Create a support ticket and our team will assist you.
              </p>
              <button className="mt-6 rounded-md bg-[#2B63D9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B63D9]">
                Create Ticket
              </button>
            </div>
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  )
} 