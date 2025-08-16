import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Marquee } from "@/components/magicui/marquee";
import { Wrench, Car, Palette, Settings, Shield, Replace } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-secondary py-16 dark:bg-transparent" id='layanan'>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative z-10 mb-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-white text-4xl font-semibold lg:text-5xl">Layanan Kami</h2>
                    <p className="text-white">Berikut adalah layanan unggulan RR Restorasi untuk interior mobil Anda.</p>
                </div>
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit">
                                <div className="relative z-10 space-y-2 text-start">
                                    <div className="flex items-center gap-2">
                                        <Shield className="size-5 text-secondary" />
                                        <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Recondition Mobil</h2>
                                    </div>
                                    <p className="text-muted-foreground text-[14px] text-justify">Layanan recondition mobil untuk mengembalikan kondisi komponen dan bagian kendaraan Anda agar berfungsi optimal, baik dari segi mesin, interior, maupun fitur lainnya, tanpa perlu penggantian total.</p>
                                </div>
                                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                                    <Marquee pauseOnHover className="[--duration:20s]">
                                        {[
                                            "/services/reicon-before.jpg",
                                            "/services/reicon-after.jpg",
                                            "/services/reicon-before-2.jpg",
                                            "/services/reicon-after-2.jpg"
                                        ].map((src, idx) => (
                                            <Image
                                                key={src}
                                                src={src}
                                                alt=""
                                                width={800}
                                                height={400}
                                                className="w-48 h-auto rounded-lg border"
                                            />
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="">
                                <div className="relative z-10 space-y-2 text-start">
                                    <div className="flex items-center gap-2">
                                        <Palette className="size-5 text-secondary" />
                                        <h2 className="text-lg font-medium transition">Repaint Interior</h2>
                                    </div>
                                    <p className="text-muted-foreground text-[14px] text-justify">Layanan repaint interior untuk memberikan tampilan baru pada kendaraan Anda. Menggunakan bahan berkualitas tinggi dan teknik pengecatan presisi untuk hasil akhir yang halus, merata, dan tahan lama.</p>
                                </div>
                                 <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                                    <Marquee pauseOnHover className="[--duration:40s]">
                                        {[
                                            "/services/repaint-before.jpg",
                                            "/services/repaint-after.jpg",
                                            "/services/repaint-before-2.jpg",
                                            "/services/repaint-after-2.jpg",
                                        ].map((src, idx) => (
                                            <Image
                                                key={src}
                                                src={src}
                                                alt=""
                                                width={800}
                                                height={400}
                                                className="w-48 h-auto rounded-lg border"
                                            />
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="">
                                <div className="relative z-10 space-y-2 text-start">
                                    <div className="flex items-center gap-2">
                                        <Settings className="size-5 text-secondary" />
                                        <h2 className="text-lg font-medium transition">Repair Interior Mobil</h2>
                                    </div>
                                    <p className="text-muted-foreground text-[14px] text-justify">Spesialis repair interior mobil mulai dari perbaikan kerusakan kecil hingga perbaikan struktural yang kompleks. Tim ahli kami siap mengembalikan fungsi dan bentuk interior kendaraan Anda seperti semula.</p>
                                </div>
                                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                                    <Marquee pauseOnHover className="[--duration:40s]">
                                        {[
                                            "/services/repair-before.jpg",
                                            "/services/repair-after.jpg",
                                            "/services/repair-before-2.jpg",
                                            "/services/repair-after-2.jpg",
                                            "/services/repair-before-3.jpg",
                                            "/services/repair-after-3.jpg",
                                            "/services/repair-before-4.jpg",
                                            "/services/repair-after-4.jpg"
                                        ].map((src, idx) => (
                                            <Image
                                                key={src}
                                                src={src}
                                                alt=""
                                                width={800}
                                                height={400}
                                                className="w-48 h-auto rounded-lg border"
                                            />
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid ">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Replace className="size-5 text-secondary" />
                                            <h2 className="text-lg font-medium transition">Replace Panel Mobil</h2>
                                        </div>
                                        
                                        <p className="text-muted-foreground text-[14px] text-justify ">Layanan replace panel mobil untuk penggantian suku cadang yang sudah tidak layak pakai dengan komponen baru berkualitas, memastikan kendaraan Anda kembali aman dan prima.</p>
                                    </div>
                                </div>
                                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                                    <Marquee pauseOnHover className="[--duration:40s]">
                                        {[
                                            "/services/replace-before.jpg",
                                            "/services/replace-after.jpg",
                                            "/services/replace-before-2.jpg",
                                            "/services/replace-after-2.jpg",
                                        ].map((src, idx) => (
                                            <Image
                                                key={src}
                                                src={src}
                                                alt=""
                                                width={800}
                                                height={400}
                                                className="w-48 h-auto rounded-lg border"
                                            />
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Car className="size-5 text-secondary" />
                                            <h2 className="text-lg font-medium transition">Retrim Jok Mobil</h2>
                                        </div>
                                        <p className="text-muted-foreground text-[14px] text-justify">Spesialis retrim jok mobil untuk menghidupkan kembali interior kendaraan. Layanan retrim kami mencakup perbaikan jok, karpet, dashboard, dan panel agar terlihat segar dan mewah.</p>
                                    </div>
                                </div>
                                 <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
                                    <Marquee pauseOnHover className="[--duration:40s]">
                                        {[
                                            "/services/retrim-before.jpg",
                                            "/services/retrim-after.jpg",
                                            "/services/retrim-before-2.jpg",
                                            "/services/retrim-after-2.jpg",
                                            "/services/retrim-before-3.jpg",
                                            "/services/retrim-after-3.jpg",
                                        ].map((src, idx) => (
                                            <Image
                                                key={src}
                                                src={src}
                                                alt=""
                                                width={800}
                                                height={400}
                                                className="w-48 h-auto rounded-lg border"
                                            />
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
