'use client'

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const WHATSAPP_NUMBER = '6281234567890'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const QUICK_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">admob.id</div>
            <p className="text-foreground/70 leading-relaxed">
              Platform periklanan mobile terpercaya yang membantu bisnis Indonesia tumbuh melalui iklan yang tepat sasaran.
            </p>
            <div className="flex gap-3 pt-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Menu</h4>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Layanan</h4>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Mobile Advertising
              </a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Location Based Ads
              </a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Video Advertising
              </a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Analytics & Reporting
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+62 812-3456-7890</span>
              </a>
              <a
                href="mailto:support@admob.id"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>support@admob.id</span>
              </a>
              <div className="flex items-start gap-3 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Jakarta Selatan, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-foreground/60">
          <p>&copy; 2024 admob.id. Semua hak dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
