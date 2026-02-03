'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = '6281234567890'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background shadow-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              admob.id
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Hubungi Kami
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pt-2">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
