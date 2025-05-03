"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"

type UserIntent = "recruiter" | "project" | "designer" | "friend" | "curious" | null

export default function IntentPage() {
  const router = useRouter()
  const [selectedIntent, setSelectedIntent] = useState<UserIntent>(null)

  const handleIntentSelection = (intent: UserIntent) => {
    setSelectedIntent(intent)
    localStorage.setItem("userIntent", intent as string)

    // Redirect based on intent
    if (intent === "recruiter") {
      router.push("/paths/recruiter")
    } else if (intent === "project") {
      router.push("/paths/project")
    } else if (intent === "designer") {
      router.push("/paths/designer")
    } else if (intent === "friend" || intent === "curious") {
      router.push("/paths/curious")
    }
  }

  const intentOptions = [
    { value: "recruiter", label: "I'm a recruiter" },
    { value: "project", label: "I have a project" },
    { value: "designer", label: "I'm a designer" },
    { value: "friend", label: "I'm a friend" },
    { value: "curious", label: "Just curious" },
  ]

  return (
    <>
      <SiteHeader showBackButton backUrl="/" />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 pt-20 md:p-12 md:pt-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-md">
          <h1 className="mb-12 text-3xl font-light tracking-tight md:text-4xl">Why are you here?</h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            {intentOptions.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`w-full py-6 text-lg border-2 transition-all hover:scale-105 ${
                    selectedIntent === option.value ? "border-primary bg-primary/10" : ""
                  }`}
                  onClick={() => handleIntentSelection(option.value as UserIntent)}
                >
                  {option.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
