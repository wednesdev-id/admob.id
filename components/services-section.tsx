'use client'

import { Zap, Target, BarChart3, Bell, Eye, TrendingUp, Smartphone } from 'lucide-react'
import { Card } from '@/components/ui/card'

const SERVICES = [
  {
    title: 'Mobile Advertising Campaign',
    description: 'Kelola kampanye iklan mobile Anda dengan platform yang intuitif dan powerful. Optimalkan budget iklan dengan targeting presisi.',
    icon: Smartphone,
  },
  {
    title: 'In-App Ads & Programmatic',
    description:
      'Tampilkan iklan Anda di aplikasi mobile populer dengan teknologi programmatic advertising otomatis yang terukur.',
    icon: Zap,
  },
  {
    title: 'Video Advertising & Rich Media',
    description: 'Buat kampanye video yang menarik dengan format iklan kaya media untuk engagement maksimal.',
    icon: BarChart3,
  },
  {
    title: 'Location Based Advertising',
    description: 'Targetkan audiens berdasarkan lokasi geografis real-time. Jangkau pelanggan potensial di area spesifik.',
    icon: Target,
  },
  {
    title: 'Push Notification Marketing',
    description: 'Kirim notifikasi push yang dipersonalisasi untuk meningkatkan user engagement dan retention rate.',
    icon: Bell,
  },
  {
    title: 'Data Targeting & Retargeting',
    description: 'Gunakan data insights mendalam untuk menargetkan dan retarget audiens dengan akurasi tinggi.',
    icon: Eye,
  },
  {
    title: 'Performance Analytics',
    description: 'Dashboard analytics real-time yang menampilkan metrics penting: impressions, clicks, conversions, dan ROI.',
    icon: TrendingUp,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-foreground">Layanan Kami</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Solusi Periklanan Mobile Lengkap
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Dari perencanaan hingga eksekusi, kami sediakan semua tools yang Anda butuhkan untuk sukses dalam digital
            advertising.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 p-8 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500 rounded-full mt-6" />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
