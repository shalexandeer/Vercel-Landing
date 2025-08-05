import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Play, Plus, Signature, Sparkles, Target, Wrench, Car, Palette, Settings, Shield } from 'lucide-react'
import Image from 'next/image'

const services = [
    {
        title: "Reicon/Repair Tombol",
        description: "Perbaikan tombol interior mobil, solusi tombol lengket atau kusam.",
        color: "text-blue-600",
        image: "/services/reicon-tombol.jpeg",
        icon: Wrench
    },
    {
        title: "Repair Plafon Mobil",
        image: "/services/reicon-tombol.jpeg",
        description: "Menangani plafon mobil turun, ganti kain plafon, hasil rapi seperti baru.",
        color: "text-green-600",
        icon: Car
    },
    {
        title: "Recolour Handle dan Jok kulit",
        description: "Mengembalikan warna dan tekstur handle serta jok mobil kesayangan Anda.",
        image: "/services/reicon-tombol.jpeg",
        color: "text-purple-600",
        icon: Palette
    },
    {
        title: "Repair Panel Interior",
        description: "Perbaikan dan pengecatan ulang panel-panel interior agar tampak premium lagi.",
        image: "/services/reicon-tombol.jpeg",
        color: "text-orange-600",
        icon: Settings
    },
    {
        title: "Konsultasi gratis & Garansi pengerjaan",
        description: "Konsultasikan kebutuhan Anda, garansi hasil memuaskan.",
        image: "/services/reicon-tombol.jpeg",
        color: "text-red-600",
        icon: Shield
    }
]

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">Layanan Kami</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">
                            Kami menghadirkan solusi perbaikan interior mobil yang profesional dan terpercaya. Mulai dari perbaikan tombol, plafon, hingga pengecatan ulang panel interior, semua dikerjakan dengan detail dan hasil rapi seperti baru. Konsultasikan kebutuhan Anda dan rasakan layanan terbaik dengan garansi pengerjaan.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Top row - 3 columns */}
                        {services.slice(0, 3).map((service, index) => (
                            <div key={index} className="lg:col-span-1">
                                <Card
                                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 h-96 relative overflow-hidden"
                                >
                                    {/* Absolute background image using next/image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 320px"
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            className="pointer-events-none"
                                            priority={service.image === "/services/reicon-tombol.jpeg"}
                                        />
                                        <div className="absolute inset-0 bg-background/20" />
                                    </div>
                                    <div className="relative z-10 h-full flex flex-col justify-end">
                                        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg p-4 shadow-lg">
                                            <h3 className="text-white text-lg font-semibold break-words leading-tight drop-shadow-lg">{service.title}</h3>
                                            <p className="text-white/90 text-balance break-words leading-relaxed mt-3 drop-shadow-lg">{service.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                        
                        {/* Bottom row - 2 columns */}
                        {services.slice(3, 5).map((service, index) => (
                            <div key={index + 3} className="lg:col-span-1.5">
                                <Card
                                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 h-96 relative overflow-hidden"
                                >
                                    {/* Absolute background image using next/image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 320px"
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            className="pointer-events-none"
                                            priority={service.image === "/services/reicon-tombol.jpeg"}
                                        />
                                        <div className="absolute inset-0 bg-background/20" />
                                    </div>
                                    <div className="relative z-10 h-full flex flex-col justify-end">
                                        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg p-4 shadow-lg">
                                            <h3 className="text-white text-lg font-semibold break-words leading-tight drop-shadow-lg">{service.title}</h3>
                                            <p className="text-white/90 text-balance break-words leading-relaxed mt-3 drop-shadow-lg">{service.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
