'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '6281234567890' // Replace with your actual number
    const message = 'Halo! Saya tertarik dengan layanan RR Restorasi. Bisa konsultasi lebih lanjut?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#039DEB] text-white shadow-lg transition-all duration-300 hover:bg-[#F5130E] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#F5130E]/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#039DEB] animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 hidden group-hover:block">
          <div className="relative">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Chat dengan kami
              <div className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
} 