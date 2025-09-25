import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RR Restorasi - Jasa Restorasi Mobil & Perbaikan Interior Terpercaya di Surabaya",
  description: "RR Restorasi Surabaya - Spesialis restorasi mobil, perbaikan interior, recondition, repair, retrim jok, repaint interior, dan replace panel. Layanan berkualitas dengan garansi hasil memuaskan. Hubungi kami sekarang!",
  keywords: [
    "restorasi mobil",
    "bengkel restorasi",
    "perbaikan interior mobil", 
    "jasa restorasi mobil",
    "restorasi interior",
    "recondition mobil",
    "repair interior mobil",
    "retrim jok mobil",
    "repaint interior",
    "replace panel mobil",
    "perbaikan plafon mobil",
    "ganti kain plafon mobil",
    "repair tombol interior mobil",
    "recolour jok kulit mobil",
    "restorasi dashboard mobil",
    "bengkel mobil surabaya",
    "jasa perbaikan mobil",
    "restorasi mobil surabaya",
    "interior mobil surabaya",
    "perbaikan mobil surabaya"
  ],
  authors: [{ name: "RR Restorasi" }],
  creator: "RR Restorasi",
  publisher: "RR Restorasi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rrrestorasi.co.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RR Restorasi - Jasa Restorasi Mobil & Perbaikan Interior Terpercaya di Surabaya",
    description: "RR Restorasi Surabaya - Spesialis restorasi mobil, perbaikan interior, recondition, repair, retrim jok, repaint interior, dan replace panel. Layanan berkualitas dengan garansi hasil memuaskan.",
    url: 'https://rrrestorasi.co.id',
    siteName: 'RR Restorasi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RR Restorasi - Jasa Restorasi Mobil Surabaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RR Restorasi - Jasa Restorasi Mobil & Perbaikan Interior Terpercaya di Surabaya',
    description: 'RR Restorasi Surabaya - Spesialis restorasi mobil, perbaikan interior, recondition, repair, retrim jok, repaint interior, dan replace panel.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RR Restorasi",
              "description": "Spesialis restorasi mobil, perbaikan interior, recondition, repair, retrim jok, repaint interior, dan replace panel di Surabaya",
              "url": "https://rrrestorasi.co.id",
              "telephone": "+62-822-4552-7366",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rungkut Alang-Alang 189",
                "addressLocality": "Surabaya",
                "addressRegion": "Jawa Timur",
                "postalCode": "60293",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.2575,
                "longitude": 112.7521
              },
              "openingHours": "Mo-Sa 08:00-17:00",
              "priceRange": "$$",
              "serviceType": [
                "Restorasi Mobil",
                "Perbaikan Interior Mobil",
                "Recondition Mobil",
                "Repair Interior Mobil",
                "Retrim Jok Mobil",
                "Repaint Interior",
                "Replace Panel Mobil"
              ],
              "sameAs": [
                "https://instagram.com/rrrestorasi",
                "https://youtube.com/@rrrestorasi",
                "https://tiktok.com/@rrrestorasi"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
