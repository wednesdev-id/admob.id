'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  Sparkles,
  Zap,
  Brain,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Infinity,
} from 'lucide-react'

const innovations = [
  {
    icon: Brain,
    title: 'AI-Powered Targeting',
    description:
      'Machine learning algorithms yang mempelajari perilaku konsumen dan mengoptimalkan kampanye secara real-time untuk hasil maksimal.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Predictive Analytics',
    description:
      'Prediksi tren pasar sebelum terjadi dengan AI terdepan. Antisipasi kebutuhan pelanggan dan menang atas kompetitor.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Optimization',
    description:
      'Kampanye yang menyesuaikan diri secara instan dengan performa. Tidak ada waktu terbuang, setiap detik menghasilkan ROI.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics Dashboard',
    description:
      'Dashboard komprehensif dengan visualisasi data interaktif. Pahami setiap metrik kampanye dengan clarity maksimal.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description:
      'Segmentasi audiens dengan akurasi 99.9%. Jangkau target market yang tepat di waktu yang tepat di device yang tepat.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Rocket,
    title: 'Growth Acceleration',
    description:
      'Skalabilitas unlimited untuk kampanye Anda. Dari startup hingga enterprise, platform kami tumbuh bersama bisnis Anda.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Creative Intelligence',
    description:
      'AI menganalisis creative assets dan rekomendasi perbaikan. Tingkatkan CTR dengan insight berbasis data mendalam.',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Infinity,
    title: 'Multi-Channel Integration',
    description:
      'Kelola semua channel marketing dari satu platform. Sinkronisasi sempurna antara mobile, web, social media, dan lebih.',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

export default function InnovationSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Teknologi Terdepan
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Inovasi yang Mengubah Industri Periklanan
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Kami menggabungkan kreativitas tanpa batas dengan teknologi AI paling
            mutakhir untuk menghadirkan hasil yang luar biasa.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === index

            return (
              <Card
                key={index}
                className="group relative overflow-hidden p-6 h-full transition-all duration-300 hover:shadow-xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 ${
                    isHovered ? 'opacity-10' : ''
                  } bg-gradient-to-br ${item.gradient}`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 bg-gradient-to-br ${item.gradient}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Pelajari lebih</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">
            Siap mengubah strategi marketing Anda dengan inovasi terdepan?
          </p>
          <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all">
            Eksplor Sekarang
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
