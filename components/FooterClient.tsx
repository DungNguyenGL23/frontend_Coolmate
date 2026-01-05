'use client'

import { useEffect, useState } from 'react'
import Footer from './Footer'

/**
 * Client Component wrapper for Footer Server Component
 * This allows Footer (async Server Component) to be used in Client Components
 */
export default function FooterClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render Footer only on client side to avoid hydration issues
  if (!mounted) {
    return <footer className="bg-black text-white mt-20 min-h-[200px]" />
  }

  return <Footer />
}

