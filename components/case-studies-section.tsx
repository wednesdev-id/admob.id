'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Beauty Brand',
    subtitle: 'Meningkatkan Penjualan 340% dalam 3 Bulan',
    category: 'E-Commerce',
    metrics: [
      { label: 'Sales Growth', value: '+340%' },
      { label: 'ROI', value: '8.5x' },
      { label: 'New Customers', value: '45K+' },
    ],
    description:
      'Brand kecil di Indonesia berhasil meningkatkan penjualan online mereka dengan strategi targeting berbasis AI dan dynamic creative optimization.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Tech Startup Series A',
    subtitle: 'Akuisisi 100K Pengguna dalam 60 Hari',
    category: 'SaaS',
    metrics: [
      { label: 'User Acquisition', value: '100K' },
      { label: 'CAC Reduction', value: '-45%' },
      { label: 'Conversion Rate', value: '12.5%' },
    ],
    description:
      'Startup teknologi Indonesia mencapai Series A funding dengan strategi user acquisition yang presisi dan cost-effective melalui platform kami.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Traditional Retail Chain',
    subtitle: 'Omnichannel Integration Success',
    category: 'Retail',
    metrics: [
      { label: 'Store Footfall', value: '+78%' },
      { label: 'Online Sales', value: '+567%' },
      { label: 'Customer Retention', value: '68%' },
    ],
    description:
      'Toko tradisional melakukan transformasi digital dan berhasil mengintegrasikan online-offline dengan hasil penjualan yang melampaui ekspektasi.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 4,
    title: 'F&B Restaurant Chain',
    subtitle: 'Lokalisasi Campaign dengan Hasil Maksimal',
    category: 'F&B',
    metrics: [
      { label: 'Location-based Orders', value: '250K' },
      { label: 'Repeat Orders', value: '62%' },
      { label: 'New Locations', value: '15' },
    ],
    description:
      'Restoran Indonesia menggunakan geolocation targeting untuk meningkatkan foot traffic dan penjualan dengan campaign yang hyper-localized.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'EdTech Platform',
    subtitle: 'Student Enrollment Growth 425%',
    category: 'Education',
    metrics: [
      { label: 'Enrollment', value: '+425%' },
      { label: 'Course Completion', value: '78%' },
      { label: 'Student Satisfaction', value: '4.8/5' },
    ],
    description:
      'Platform pendidikan online mencapai pertumbuhan eksponensial dengan strategi content-driven advertising dan community engagement.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'Local Services Startup',
    subtitle: 'Market Domination dalam 8 Bulan',
    category: 'Services',
    metrics: [
      { label: 'Market Share', value: '34%' },
      { label: 'Bookings/Month', value: '50K+' },
      { label: 'Service Providers', value: '2K+' },
    ],
    description:
      'Marketplace lokal Indonesia mendominasi pasar dengan strategi virality dan incentive-based growth yang dioptimalkan oleh AI kami.',
    color: 'from-red-500 to-pink-500',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
              Studi Kasus Nyata
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Kisah Sukses dari Brand Indonesia
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Ratusan brand Indonesia telah meningkatkan penjualan mereka dengan
            strategi marketing yang didukung oleh AI dan data science terdepan.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="group relative overflow-hidden p-6 h-full transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color}`}
              />

              {/* Content */}
              <div className="flex flex-col h-full">
                {/* Category Badge */}
                <Badge variant="outline" className="w-fit mb-3">
                  {study.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-3`}>
                  {study.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed mb-4 flex-1">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 py-4 border-t border-border">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <p className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </p>
                      <p className="text-xs text-foreground/60 mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Baca studi lengkap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6 text-lg">
            Apakah brand Anda berikutnya yang akan mencapai kesuksesan besar?
          </p>
          <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all hover:bg-primary/90">
            Lihat Semua Studi Kasus
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
