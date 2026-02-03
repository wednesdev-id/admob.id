'use client'

import React from "react"
import { useEffect, useState } from 'react'
import { ArrowRight, Cloud, CloudRain, Sun, Wind, Droplets, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWeather } from '@/components/weather-provider'

const WHATSAPP_NUMBER = '6281234567890'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function HeroSection() {
  const { weather, loading } = useWeather()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Dynamic background based on weather
  const getBackgroundStyle = () => {
    if (!weather) return {}

    const baseStyles: Record<string, React.CSSProperties> = {
      sunny: {
        background: 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 50%, #F59E0B 100%)',
      },
      cloudy: {
        background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #9CA3AF 100%)',
      },
      rainy: {
        background: 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #4B5563 100%)',
      },
      snowy: {
        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
      },
      stormy: {
        background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)',
      },
      foggy: {
        background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)',
      },
    }

    return baseStyles[weather.condition] || baseStyles.sunny
  }

  const getWeatherMessage = () => {
    if (!weather) return ''

    const messages: Record<string, string> = {
      sunny: `${weather.location} matahari bersinar! Waktu terbaik untuk meluncurkan kampanye.`,
      cloudy: `${weather.location} cuaca berawan. Pelanggan Anda lebih banyak mencari online.`,
      rainy: `${weather.location} sedang hujan. Pengguna mobile meningkat pesat!`,
      snowy: `${weather.location} sedang bersalju. Mulai kampanye musiman Anda sekarang.`,
      stormy: `${weather.location} badai sedang berlangsung. Tampilkan iklan terkuat Anda!`,
      foggy: `${weather.location} kabut tebal. Buat brand Anda menonjol di antara kegelapan.`,
    }

    return messages[weather.condition] || messages.sunny
  }

  const getWeatherIcon = () => {
    if (!weather) return null

    const iconProps = { className: 'w-16 h-16 text-white drop-shadow-lg' }

    switch (weather.condition) {
      case 'sunny':
        return <Sun {...iconProps} />
      case 'rainy':
        return <CloudRain {...iconProps} />
      case 'cloudy':
      case 'foggy':
        return <Cloud {...iconProps} />
      default:
        return <Sun {...iconProps} />
    }
  }

  const textColor =
    weather && ['rainy', 'stormy'].includes(weather.condition)
      ? 'text-white'
      : 'text-gray-900'

  const mutedTextColor =
    weather && ['rainy', 'stormy'].includes(weather.condition)
      ? 'text-gray-200'
      : 'text-gray-700'

  const isDarkWeather = weather && ['rainy', 'stormy'].includes(weather.condition)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000"
      style={{
        ...getBackgroundStyle(),
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated rain particles for rainy weather */}
      {weather?.condition === 'rainy' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-12 bg-gradient-to-b from-blue-300 to-blue-400 opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fall ${2 + Math.random() * 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Cloud animation for cloudy/snowy weather */}
      {(weather?.condition === 'cloudy' || weather?.condition === 'snowy') && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animation: `float ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <Cloud className="w-32 h-32 text-white" />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) translateX(-20px);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(50px); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center">
        {/* Weather badge */}
        {weather && (
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md mb-8 border animate-fade-in ${
              isDarkWeather
                ? 'bg-white/20 border-white/30 text-white'
                : 'bg-black/10 border-black/20 text-gray-900'
            }`}
          >
            {getWeatherIcon()}
            <div className="text-left">
              <p className="text-sm font-semibold">
                {weather.location} · {weather.temperature}°C
              </p>
              <p className={`text-xs ${mutedTextColor}`}>
                Kelembaban {weather.humidity}% · Angin {weather.windSpeed}km/h
              </p>
            </div>
          </div>
        )}

        {/* Main headline */}
        <h1
          className={`text-5xl sm:text-7xl font-black mb-6 tracking-tight ${textColor} drop-shadow-lg animate-fade-in`}
          style={{
            lineHeight: '1.1',
            wordBreak: 'break-word',
            animationDelay: '0.1s',
          }}
        >
          Platform Periklanan Mobile{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Paling Inovatif
          </span>
        </h1>

        {/* Dynamic weather message */}
        <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium ${mutedTextColor} animate-fade-in`}
          style={{ animationDelay: '0.2s' }}>
          {getWeatherMessage()} Capai audiens Anda dengan teknologi AI dan data targeting terdepan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in"
          style={{ animationDelay: '0.3s' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              className={`w-full group text-lg px-8 py-6 ${
                isDarkWeather
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className={`text-lg px-8 py-6 ${
              isDarkWeather
                ? 'border-white/50 text-white hover:bg-white/10'
                : 'border-gray-400 text-gray-900 hover:bg-black/5'
            }`}
          >
            Jadwalkan Demo
          </Button>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.4s' }}>
          {[
            { icon: TrendingUp, label: 'ROI Rata-rata', value: '+234%' },
            { icon: Droplets, label: 'Jangkauan', value: '50M+' },
            { icon: Wind, label: 'Klien Aktif', value: '500+' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`p-4 rounded-lg backdrop-blur-md border transition-all hover:scale-105 ${
                  isDarkWeather
                    ? 'bg-white/10 border-white/20 hover:bg-white/20'
                    : 'bg-black/10 border-black/10 hover:bg-black/20'
                }`}
              >
                <Icon
                  className={`w-6 h-6 mx-auto mb-2 ${
                    isDarkWeather ? 'text-white' : 'text-gray-700'
                  }`}
                />
                <p className={`text-xs font-medium ${mutedTextColor}`}>{stat.label}</p>
                <p className={`text-xl font-bold ${textColor}`}>{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div
          className={`${
            isDarkWeather ? 'text-white' : 'text-gray-700'
          }`}
        >
          <svg
            className="w-6 h-6"
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
      </div>
    </section>
  )
}

/* Add fade-in animation */
declare global {
  namespace JSX {
    interface CSSProperties {
      '--tw-animate'?: string
    }
  }
}
