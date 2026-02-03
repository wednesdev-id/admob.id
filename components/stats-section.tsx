'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { label: 'Klien Aktif', value: 500, suffix: '+' },
  { label: 'Kampanye Sukses', value: 2500, suffix: '+' },
  { label: 'Total Impressions', value: 5, suffix: 'M+' },
  { label: 'Rata-rata ROI', value: 340, suffix: '%' },
]

function CountUpAnimation({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 20)

        return () => clearInterval(timer)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-foreground">Pencapaian Kami</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Hasil Nyata dari Solusi Kami
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ribuan bisnis Indonesia telah mempercayai admob.id untuk mengembangkan jangkauan dan meningkatkan konversi
            mereka.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <CountUpAnimation target={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/70 mt-3 font-medium text-balance">{stat.label}</p>
              <div className="h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
