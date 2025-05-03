"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import CaseStudyCard from "@/components/case-study-card"
import { analyzeProject } from "@/lib/project-analyzer"
import { SiteHeader } from "@/components/site-header"

export default function ProjectPath() {
  const [projectDescription, setProjectDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [matchedProjects, setMatchedProjects] = useState<any[]>([])
  const [designApproach, setDesignApproach] = useState<string[]>([])
  const [hasAnalyzed, setHasAnalyzed] = useState(false)

  const handleAnalyze = async () => {
    if (!projectDescription.trim()) return

    setIsAnalyzing(true)

    // Simulate AI analysis with a delay
    setTimeout(() => {
      const { projects, approach } = analyzeProject(projectDescription)
      setMatchedProjects(projects)
      setDesignApproach(approach)
      setHasAnalyzed(true)
      setIsAnalyzing(false)
    }, 1500)
  }

  return (
    <>
      <SiteHeader showBackButton />
      <main className="min-h-screen p-6 pt-20 md:p-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="mb-6 text-3xl font-light md:text-4xl">For Project Owners</h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Tell me about your project or what you need help with, and I'll show you how I can contribute.
          </p>

          <div className="mb-8">
            <Textarea
              placeholder="Describe your project or challenge..."
              className="min-h-[200px] text-base p-4 border-2"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <div className="mt-4">
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !projectDescription.trim()}
                className="px-6 py-6 text-base"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
                    Analyzing...
                  </>
                ) : (
                  "See how I can help"
                )}
              </Button>
            </div>
          </div>

          {hasAnalyzed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4 text-2xl font-light">Similar Projects I've Worked On</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matchedProjects.map((project, index) => (
                    <CaseStudyCard key={index} caseStudy={project} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-light">My Design Approach</h2>
                <div className="space-y-4">
                  {designApproach.map((approach, index) => (
                    <div key={index} className="p-4 border rounded-md bg-primary/5">
                      {approach}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-8 border-t">
                <h2 className="mb-4 text-2xl font-light">Let's Co-Create Something</h2>
                <p className="mb-6 text-muted-foreground">
                  I'd love to discuss how we can collaborate on your project and bring your vision to life.
                </p>
                <Button className="inline-flex items-center">
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </>
  )
}
