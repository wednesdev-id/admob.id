'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Bagaimana cara kerja platform admob.id?',
    answer:
      'Platform admob.id menghubungkan bisnis Anda dengan jutaan pengguna aplikasi mobile di Indonesia. Anda dapat membuat kampanye iklan, mengatur targeting, dan memantau performa real-time melalui dashboard kami yang intuitif.',
  },
  {
    question: 'Berapa budget minimum untuk memulai kampanye?',
    answer:
      'Budget minimum untuk memulai kampanye adalah Rp 100.000. Anda dapat meningkatkan budget kapan saja sesuai kebutuhan dan hasil yang ingin dicapai.',
  },
  {
    question: 'Apakah ada biaya setup atau komisi?',
    answer:
      'Tidak ada biaya setup. Kami hanya mengambil komisi dari setiap iklan yang ditampilkan atau diklik. Model pricing kami transparan tanpa hidden cost.',
  },
  {
    question: 'Bagaimana jika kampanye saya tidak memberikan hasil?',
    answer:
      'Tim support kami siap membantu mengoptimalkan kampanye Anda. Kami akan menganalisis data, memberikan rekomendasi, dan membantu adjustment targeting untuk hasil yang lebih baik.',
  },
  {
    question: 'Berapa lama untuk melihat hasil dari kampanye?',
    answer:
      'Hasil awal biasanya terlihat dalam 7-14 hari pertama. Namun, optimisasi berkelanjutan diperlukan untuk mencapai ROI maksimal dalam 30-60 hari pertama.',
  },
  {
    question: 'Apakah saya bisa pause kampanye kapan saja?',
    answer:
      'Ya, Anda dapat pause, resume, atau stop kampanye kapan saja. Tidak ada kontrak jangka panjang yang mengikat. Anda memiliki kontrol penuh atas kampanye Anda.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between bg-background hover:bg-secondary/50 transition-colors"
      >
        <span className="text-left font-semibold text-foreground text-balance">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 sm:px-8 sm:py-6 bg-secondary/30 border-t border-border animate-in fade-in">
          <p className="text-foreground/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-foreground">Pertanyaan Umum</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-foreground/70">
            Tidak menemukan jawaban yang Anda cari? Hubungi tim support kami melalui WhatsApp.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
          <p className="text-foreground mb-4">Masih ada pertanyaan?</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Hubungi tim support kami</h3>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
          >
            Chat di WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
