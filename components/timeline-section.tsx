'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'

const timelineEvents = [
  {
    year: '2020',
    title: 'Era Mobile First',
    description:
      'Smartphone menjadi device utama konsumen. Perubahan paradigma dari desktop ke mobile marketing dimulai.',
    achievements: [
      'Mobile traffic 65% dari total',
      'App-based advertising boom',
      'First-party data collection',
    ],
    icon: '📱',
  },
  {
    year: '2021-2022',
    title: 'Era Data & Privacy',
    description:
      'GDPR, iOS privacy changes, dan regulasi data privacy Indonesia membuat landscape berubah drastis.',
    achievements: [
      'Death of third-party cookies',
      'First-party data strategy dominan',
      'Privacy-first marketing',
    ],
    icon: '🔒',
  },
  {
    year: '2023',
    title: 'Era AI & Automation',
    description:
      'Machine learning dan AI revolutionize targeting, bidding, dan creative optimization untuk performance maksimal.',
    achievements: [
      'Predictive analytics mainstream',
      'Automated bidding strategies',
      'AI-powered creative generation',
    ],
    icon: '🤖',
  },
  {
    year: '2024-2025',
    title: 'Era Intelligent Marketing (Sekarang)',
    description:
      'Kombinasi AI, real-time data, dan human creativity menciptakan marketing experiences yang truly personalized dan contextual.',
    achievements: [
      'Hyper-personalization real-time',
      'Predictive customer behavior',
      'Autonomous campaign optimization',
      'Weather-aware dynamic content',
    ],
    icon: '✨',
    highlight: true,
  },
  {
    year: '2025+',
    title: 'Era Metaverse & Web3',
    description:
      'Advertising akan meluas ke virtual worlds, NFTs, blockchain-based attribution, dan decentralized marketing ecosystem.',
    achievements: [
      'Virtual world advertising',
      'NFT-based brand experiences',
      'Blockchain attribution tracking',
      'Decentralized data ownership',
    ],
    icon: '🌌',
  },
]

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(2) // Default expand current era

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 mb-4">
            Evolusi Digital Marketing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Perjalanan Menuju Intelligent Marketing
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Dari era mobile first hingga intelligent marketing, ikuti evolusi industri
            periklanan digital dan bagaimana admob.id berada di garis depan inovasi.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const isExpanded = expandedIndex === index
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 top-0 w-9 h-9 rounded-full border-4 border-background -translate-x-1/2 flex items-center justify-center z-10 transition-all duration-300 cursor-pointer ${
                      event.highlight
                        ? 'bg-primary scale-125 shadow-lg'
                        : 'bg-accent hover:scale-110'
                    }`}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                  >
                    <span className="text-lg">{event.icon}</span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 transition-all duration-300 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <Card
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        isExpanded ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                      } ${event.highlight ? 'bg-primary/5 border-primary/20' : ''}`}
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                    >
                      {/* Year */}
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {event.year}
                        </Badge>
                        {event.highlight && (
                          <Badge className="bg-primary text-primary-foreground">
                            Sekarang
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/60 mb-4">
                        {event.description}
                      </p>

                      {/* Achievements - always visible */}
                      <div className={`space-y-2 transition-all duration-300 overflow-hidden ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="border-t border-border pt-4">
                          <p className="text-xs font-semibold text-foreground/60 mb-3">
                            PENCAPAIAN UTAMA
                          </p>
                          {event.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 mb-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                        {isExpanded ? 'Tutup' : 'Baca lebih'}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-foreground">
            <span className="font-semibold">Kami di admob.id</span> tidak hanya
            mengikuti tren, tetapi{' '}
            <span className="text-primary font-bold">menciptakan masa depan</span>{' '}
            dari periklanan digital di Indonesia.
          </p>
        </div>
      </div>
    </section>
  )
}
