'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface WeatherData {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy' | 'foggy'
  temperature: number
  location: string
  humidity: number
  windSpeed: number
}

interface WeatherContextType {
  weather: WeatherData | null
  loading: boolean
  error: string | null
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        
        // Get user location
        const locationRes = await fetch('https://ipapi.co/json/')
        const locationData = await locationRes.json()
        const { latitude, longitude, city } = locationData

        // Fetch weather data from Open-Meteo API (free, no key needed)
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=celsius`
        )
        const weatherData = await weatherRes.json()
        const current = weatherData.current

        // Map WMO weather codes to condition
        const weatherCode = current.weather_code
        let condition: WeatherData['condition'] = 'sunny'

        if (weatherCode === 0) condition = 'sunny'
        else if (weatherCode === 1 || weatherCode === 2) condition = 'cloudy'
        else if (weatherCode === 3) condition = 'cloudy'
        else if (weatherCode >= 45 && weatherCode <= 48) condition = 'foggy'
        else if (weatherCode >= 51 && weatherCode <= 67) condition = 'rainy'
        else if (weatherCode >= 71 && weatherCode <= 77) condition = 'snowy'
        else if (weatherCode >= 80 && weatherCode <= 82) condition = 'rainy'
        else if (weatherCode >= 85 && weatherCode <= 86) condition = 'snowy'
        else if (weatherCode >= 80 && weatherCode <= 99) condition = 'stormy'

        setWeather({
          condition,
          temperature: Math.round(current.temperature_2m),
          location: city,
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
        })
        setError(null)
      } catch (err) {
        console.error('[v0] Weather fetch error:', err)
        setError('Failed to fetch weather')
        // Set default sunny weather on error
        setWeather({
          condition: 'sunny',
          temperature: 25,
          location: 'Wonosobo',
          humidity: 70,
          windSpeed: 10,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return (
    <WeatherContext.Provider value={{ weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)
  if (context === undefined) {
    throw new Error('useWeather must be used within WeatherProvider')
  }
  return context
}
