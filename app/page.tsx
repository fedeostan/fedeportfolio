"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  const router = useRouter()
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited")
    setIsFirstTime(hasVisited !== "true")
    setIsLoading(false)
  }, [])

  const handleFirstTimeResponse = (firstTime: boolean) => {
    localStorage.setItem("hasVisited", "true")
    setIsFirstTime(firstTime)
    router.push("/intent")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 pt-20 md:p-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-md"
        >
          <h1 className="mb-8 text-4xl font-light tracking-tight md:text-5xl">Federico Ostan Bazan</h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="mb-12 text-xl font-light text-muted-foreground">UX/Product Designer</h2>

            <div className="mb-8 space-y-6">
              <p className="text-2xl font-light">First time here?</p>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleFirstTimeResponse(true)}
                  className="px-8 py-6 text-lg border-2 transition-all hover:scale-105"
                >
                  Yes
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleFirstTimeResponse(false)}
                  className="px-8 py-6 text-lg border-2 transition-all hover:scale-105"
                >
                  No
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
