'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeConfig } from '@/config/theme.config'
import { getTheme } from '@/config/theme.config'

interface ThemeContextType {
  theme: ThemeConfig
  updateTheme: (updates: Partial<ThemeConfig>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(getTheme())

  useEffect(() => {
    // Load theme from localStorage hoặc API
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme))
      } catch (e) {
        console.error('Failed to parse saved theme', e)
      }
    }
  }, [])

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = { ...theme, ...updates }
    setTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
    
    // Update CSS variables
    if (updates.colors) {
      const root = document.documentElement
      Object.entries(updates.colors).forEach(([key, value]) => {
        if (typeof value === 'string') {
          root.style.setProperty(`--color-${key}`, value)
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([subKey, subValue]) => {
            root.style.setProperty(`--color-${key}-${subKey}`, subValue as string)
          })
        }
      })
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme } as ThemeContextType}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

