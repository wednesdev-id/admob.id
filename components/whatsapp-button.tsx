'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '6281234567890'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat dengan kami di WhatsApp"
    >
      <div className="absolute inset-0 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg group-hover:blur-xl" />
      <div className="relative w-16 h-16 bg-primary hover:bg-primary/90 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-8 h-8 text-primary-foreground" />
      </div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full animate-pulse" />
    </a>
  )
}
