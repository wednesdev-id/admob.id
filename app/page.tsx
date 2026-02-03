'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import StatsSection from '@/components/stats-section'
import ServicesSection from '@/components/services-section'
import InnovationSection from '@/components/innovation-section'
import TimelineSection from '@/components/timeline-section'
import CaseStudiesSection from '@/components/case-studies-section'
import TestimonialsSection from '@/components/testimonials-section'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { WeatherProvider } from '@/components/weather-provider'

function PageContent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <InnovationSection />
      <TimelineSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default function Page() {
  return (
    <WeatherProvider>
      <PageContent />
    </WeatherProvider>
  )
}
