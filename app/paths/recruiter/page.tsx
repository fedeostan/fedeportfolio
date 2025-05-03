"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Download, Mail, Edit2, ChevronDown } from "lucide-react"
import CaseStudyCard from "@/components/case-study-card"
import { analyzeJobDescription } from "@/lib/job-analyzer"
import { SiteHeader } from "@/components/site-header"

export default function RecruiterPath() {
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [matchedSkills, setMatchedSkills] = useState<string[]>([])
  const [matchedCaseStudies, setMatchedCaseStudies] = useState<any[]>([])
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [isEditingDescription, setIsEditingDescription] = useState(true)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return

    setIsAnalyzing(true)

    // Simulate AI analysis with a delay
    setTimeout(() => {
      const { skills, caseStudies } = analyzeJobDescription(jobDescription)
      setMatchedSkills(skills)
      setMatchedCaseStudies(caseStudies)
      setHasAnalyzed(true)
      setIsAnalyzing(false)
      setIsEditingDescription(false)

      // Scroll to results after a short delay to allow for rendering
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }, 1500)
  }

  const getDescriptionPreview = () => {
    if (!jobDescription) return ""
    const words = jobDescription.split(" ")
    const preview = words.slice(0, 15).join(" ")
    return words.length > 15 ? `${preview}...` : preview
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
          <h1 className="mb-6 text-3xl font-light md:text-4xl">For Recruiters</h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Paste your job description below, and I'll highlight my most relevant experience and case studies.
          </p>

          <div className="mb-8">
            {hasAnalyzed && !isEditingDescription ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-4 border rounded-md bg-background/50 mb-4"
              >
                <div className="flex justify-between items-start">
                  <div className="pr-4">
                    <h3 className="text-sm font-medium mb-1">Job Description</h3>
                    <p className="text-sm text-muted-foreground">{getDescriptionPreview()}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsEditingDescription(true)} className="mt-0">
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={hasAnalyzed ? { opacity: 0, height: 0 } : { opacity: 1 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Textarea
                  placeholder="Paste job description here..."
                  className="min-h-[200px] text-base p-4 border-2"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <div className="mt-4">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !jobDescription.trim()}
                    className="px-6 py-6 text-base"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
                        Analyzing...
                      </>
                    ) : (
                      "Match to my experience"
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {hasAnalyzed && !isEditingDescription && (
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground flex items-center"
                  onClick={() => {
                    if (resultsRef.current) {
                      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  View results below
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {hasAnalyzed && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4 text-2xl font-light">Matched Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {matchedSkills.map((skill, index) => (
                    <div key={index} className="px-3 py-1 text-sm rounded-full bg-primary/10">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-light">Relevant Case Studies</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matchedCaseStudies.map((study, index) => (
                    <CaseStudyCard key={index} caseStudy={study} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-8 border-t">
                <h2 className="mb-4 text-2xl font-light">Get My Resume</h2>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="inline-flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="inline-flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </>
  )
}
