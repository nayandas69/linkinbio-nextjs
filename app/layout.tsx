/**
 * Link in Bio
 * Author: nayandas69
 * GitHub: https://github.com/nayandas69/linkinbio-nextjs
 * Email: nayanchandradas@hotmail.com
 * License: MIT
 * Description: Modern Link in Bio portfolio built with Next.js, featuring glassmorphism design and smooth animations.
 * 
 * IMPORTANT: Please do not remove this author credit comment.
 * You are free to use and modify this code under MIT license,
 * but please keep the author attribution intact.
 */

import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Font configurations with optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Improves loading performance
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// SEO metadata configuration
export const metadata: Metadata = {
  title: "Link in Bio | Nayan Das - Portfolio & Social Links",
  description:
    "Crafting Code & Content for a Connected World. Explore my portfolio, latest blog posts, and connect with me across social platforms.",
  keywords: ["Nayan Das", "portfolio", "web developer", "app developer", "api developer", "content creator", "social links", "blog", "programming"],
  authors: [{ name: "Nayan Das", url: "https://github.com/nayandas69" }],
  creator: "Nayan Das",
  publisher: "Nayan Das",

  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/nayandas69",
    title: "Link in Bio | Nayan Das",
    description: "Crafting Code & Content for a Connected World",
    siteName: "Nayan Das Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Nayan Das Profile",
      },
    ],
  },

  // Twitter/X Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Link in Bio | Nayan Das",
    description: "Crafting Code & Content for a Connected World",
    images: ["/images/profile.jpg"],
    creator: "@nayandas69",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search engines
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },

  // App-specific metadata
  applicationName: "Nayan Das Portfolio",
  category: "Portfolio",
}

/**
 * Root Layout Component
 *
 * @param children - Child components to be rendered within the layout
 * @returns JSX element containing the complete HTML document structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/images/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/favicon.jpg" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Viewport configuration for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//github.com" />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nayan Das",
              url: "https://github.com/nayandas69/linkinbio-nextjs.git",
              sameAs: [
                "https://github.com/nayandas69",
                "https://youtube.com/@dasnayan69",
                "https://patreon.com/NayanDas69",
                "https://discord.gg/skHyssu",
              ],
              jobTitle: "Web Developer & Content Creator",
              description: "Crafting Code & Content for a Connected World",
              image: "/images/profile.jpg",
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <main id="main-content" className="relative">
          {children}
        </main>

        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
