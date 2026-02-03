'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    company: 'PT Digital Startup Indonesia',
    role: 'Marketing Manager',
    image: '👨‍💼',
    text: 'admob.id telah meningkatkan ROI kampanye kami sebesar 340%. Platform yang sangat user-friendly dan support team yang responsif. Sangat merekomendasikan!',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    company: 'E-Commerce Terkemuka',
    role: 'Growth Lead',
    image: '👩‍💼',
    text: 'Fitur targeting berbasis lokasi sangat membantu kami menjangkau customer baru di berbagai kota. Conversion rate meningkat drastis dalam 3 bulan pertama.',
    rating: 5,
  },
  {
    name: 'Ahmad Rizki',
    company: 'Mobile Game Studio',
    role: 'Product Manager',
    image: '👨‍💻',
    text: 'Dashboard analytics-nya memberikan insights yang sangat actionable. Kami bisa optimize kampanye real-time dan melihat hasilnya langsung.',
    rating: 5,
  },
  {
    name: 'Linda Wijaya',
    company: 'Fashion Brand Online',
    role: 'Digital Manager',
    image: '👩‍🎨',
    text: 'Push notification marketing feature membantu kami meningkatkan user engagement. Customer retention rate kami naik 45% dalam sebulan.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setIsAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-foreground">Testimoni Klien</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ribuan klien puas telah merasakan manfaat platform admob.id untuk mengembangkan bisnis mereka.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {[0, 1].map((offset) => {
              const index = (current + offset) % TESTIMONIALS.length
              const testimonial = TESTIMONIALS[index]

              return (
                <Card
                  key={index}
                  className="p-8 bg-background border-border hover:border-primary/30 transition-all duration-300 opacity-100 animate-in fade-in"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border hover:bg-primary/10 hover:border-primary/30 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'bg-primary w-8' : 'bg-border w-2'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border hover:bg-primary/10 hover:border-primary/30 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
