"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

type JourneyStep = {
  question: string
  options?: string[]
  content?: string
}

export default function CuriousPath() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const journeySteps: JourneyStep[] = [
    {
      question: "What makes you stay on a website?",
      options: ["Beautiful design", "Useful content", "Engaging interactions", "Clear purpose"],
    },
    {
      question: "When was the last time you made something for yourself?",
      options: ["Recently", "A while ago", "I can't remember", "I make things all the time"],
    },
    {
      question: "What's more important in design?",
      options: ["Aesthetics", "Functionality", "Emotion", "Innovation"],
    },
    {
      content: "Thank you for sharing. Here's a bit about me...",
    },
  ]

  const handleNext = (answer?: string) => {
    setIsTransitioning(true)

    if (answer) {
      setAnswers([...answers, answer])
    }

    setTimeout(() => {
      setCurrentStep(currentStep + 1)
      setIsTransitioning(false)
    }, 500)
  }

  const currentJourney = journeySteps[currentStep]

  return (
    <>
      <SiteHeader showBackButton />
      <main className="min-h-screen p-6 pt-20 md:p-12 md:pt-24">
        <AnimatePresence mode="wait">
          {currentStep < journeySteps.length - 1 ? (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h1 className="text-3xl font-light md:text-4xl">{currentJourney.question}</h1>

              <div className="space-y-4">
                {currentJourney.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    disabled={isTransitioning}
                    onClick={() => handleNext(option)}
                    className="w-full py-6 text-lg text-left justify-start border-2 transition-all hover:scale-105"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h1 className="mb-6 text-3xl font-light md:text-4xl">Nice to meet you</h1>

              <div className="p-6 border rounded-lg bg-primary/5">
                <p className="mb-4 text-lg">
                  I'm Federico, a UX/Product Designer with a passion for creating meaningful digital experiences.
                </p>
                <p className="mb-4">
                  Currently, I'm the Head of Design at RockWallet, where I work on making crypto more accessible through
                  thoughtful design.
                </p>
                <p className="mb-4">
                  My approach combines deep user empathy, systems thinking, and a love for minimalist aesthetics. I
                  believe that the best products form positive habits and create emotional connections with users.
                </p>
                <p>
                  Based in Ericeira, Portugal, I'm building at the intersection of design, crypto, and technology, with
                  a vision to eventually run a creative design studio for digital products.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h2 className="mb-4 text-2xl font-light">Your Reflections</h2>
                <div className="space-y-4">
                  {journeySteps.slice(0, journeySteps.length - 1).map((step, index) => (
                    <div key={index} className="p-4 border rounded-md bg-primary/5">
                      <p className="mb-2 font-medium">{step.question}</p>
                      <p className="text-muted-foreground">{answers[index] || "No answer"}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="inline-flex items-center">
                  Explore my work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
