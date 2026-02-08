import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"
import { OrganizationLD } from "@/components/json-ld"
import { generateSEO } from "@/components/seo"
import siteConfig from "@/data/site-config.json"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...generateSEO(),
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  icons: siteConfig.icons,
  manifest: siteConfig.manifest || "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor || "#4b0082",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationLD />
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
