import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Federico Ostan Bazan | UX/Product Designer",
  description: "Head of Design at RockWallet, UX/Product Designer with a background in UX research",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="federico-theme-preference">
          <div className="min-h-screen bg-gradient-to-br from-stone-100 to-neutral-200 dark:from-zinc-900 dark:to-stone-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
