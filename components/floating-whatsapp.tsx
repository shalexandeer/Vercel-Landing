'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from './ui/dialog'
import { branches } from './branches'
import { DialogDescription } from '@radix-ui/react-dialog'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = (phone: string) => {
    const phoneNumber = phone.replace(/[^0-9]/g, '')
    const message = 'Halo! Saya tertarik dengan layanan RR Restorasi. Bisa konsultasi lebih lanjut?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full  text-white shadow-lg transition-all duration-300 bg-[#F5130E] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#F5130E]/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton>
          <DialogHeader>
            <DialogTitle>Pilih Cabang untuk WhatsApp</DialogTitle>
            <DialogDescription>Cabang RR Restorasi</DialogDescription>
          </DialogHeader>
          <ul className="space-y-4 mt-4">
            {branches.map((branch) => (
              <li key={branch.id} className="flex items-center justify-between gap-4 border rounded p-3">
                <div>
                  <div className="font-semibold">{branch.name}</div>
                  <div className="text-xs text-muted-foreground">{branch.address}</div>
                </div>
                <button
                  onClick={() => handleWhatsAppClick(branch.phone)}
                  className="ml-2 p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors text-white"
                  title="Hubungi via WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.451-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.643a11.93 11.93 0 005.826 1.489h.005c6.615 0 11.988-5.373 11.993-11.987a11.86 11.86 0 00-3.497-8.386z"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  )
} 