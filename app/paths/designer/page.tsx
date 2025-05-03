"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Lightbulb, Palette, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export default function DesignerPath() {
  const [activeTab, setActiveTab] = useState("philosophy")

  return (
    <>
      <SiteHeader showBackButton />
      <main className="min-h-screen p-6 pt-20 md:p-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="mb-6 text-3xl font-light md:text-4xl">For Designers</h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Explore my design philosophy, work-in-progress, and thoughts on building products that form habits and
            create emotional resonance.
          </p>

          <Tabs defaultValue="philosophy" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="philosophy" className="py-3">
                Philosophy
              </TabsTrigger>
              <TabsTrigger value="process" className="py-3">
                Process
              </TabsTrigger>
              <TabsTrigger value="experiments" className="py-3">
                Experiments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="philosophy" className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="p-6 border rounded-lg bg-primary/5">
                    <Lightbulb className="w-8 h-8 mb-4 text-primary/70" />
                    <h3 className="mb-3 text-xl font-medium">Habit-Forming Design</h3>
                    <p className="text-muted-foreground">
                      I believe the most impactful products become part of users' daily routines. By understanding
                      behavioral psychology and creating meaningful triggers, we can design experiences that naturally
                      integrate into people's lives.
                    </p>
                  </div>

                  <div className="p-6 border rounded-lg bg-primary/5">
                    <Users className="w-8 h-8 mb-4 text-primary/70" />
                    <h3 className="mb-3 text-xl font-medium">User-Centered Approach</h3>
                    <p className="text-muted-foreground">
                      Every design decision should start with deep empathy for the user. My background in UX research
                      has taught me that listening to users and observing their behavior reveals insights that data
                      alone cannot provide.
                    </p>
                  </div>

                  <div className="p-6 border rounded-lg bg-primary/5">
                    <Palette className="w-8 h-8 mb-4 text-primary/70" />
                    <h3 className="mb-3 text-xl font-medium">Minimalist Aesthetics</h3>
                    <p className="text-muted-foreground">
                      I'm drawn to minimalist design that removes unnecessary elements and focuses on what truly
                      matters. This approach creates calm, intuitive experiences that respect users' attention and
                      cognitive load.
                    </p>
                  </div>

                  <div className="p-6 border rounded-lg bg-primary/5">
                    <ExternalLink className="w-8 h-8 mb-4 text-primary/70" />
                    <h3 className="mb-3 text-xl font-medium">Systems Thinking</h3>
                    <p className="text-muted-foreground">
                      Great products are coherent systems where each part relates meaningfully to the whole. I approach
                      design challenges by understanding the entire ecosystem and creating solutions that work
                      harmoniously within it.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="p-6 mb-8 border rounded-lg bg-primary/5">
                  <h3 className="mb-4 text-xl font-medium">My Design Process</h3>
                  <div className="relative h-[300px] mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=800"
                      alt="Design process diagram"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    My process combines rigorous research with creative exploration. I start by deeply understanding the
                    problem space through user research, competitive analysis, and stakeholder interviews. This
                    foundation informs ideation, where I explore multiple solutions before refining the most promising
                    directions. Throughout development, I maintain a feedback loop with users to ensure the solution
                    truly meets their needs.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="p-5 border rounded-lg">
                    <h4 className="mb-2 text-lg font-medium">Research</h4>
                    <ul className="pl-5 space-y-2 text-sm list-disc text-muted-foreground">
                      <li>User interviews</li>
                      <li>Competitive analysis</li>
                      <li>Behavioral observation</li>
                      <li>Data analysis</li>
                      <li>Stakeholder alignment</li>
                    </ul>
                  </div>

                  <div className="p-5 border rounded-lg">
                    <h4 className="mb-2 text-lg font-medium">Design</h4>
                    <ul className="pl-5 space-y-2 text-sm list-disc text-muted-foreground">
                      <li>User flows</li>
                      <li>Wireframing</li>
                      <li>Prototyping</li>
                      <li>Visual design</li>
                      <li>Design systems</li>
                    </ul>
                  </div>

                  <div className="p-5 border rounded-lg">
                    <h4 className="mb-2 text-lg font-medium">Validation</h4>
                    <ul className="pl-5 space-y-2 text-sm list-disc text-muted-foreground">
                      <li>Usability testing</li>
                      <li>A/B testing</li>
                      <li>Analytics review</li>
                      <li>Stakeholder feedback</li>
                      <li>Iterative refinement</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="experiments" className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden border rounded-lg">
                    <div className="p-4 border-b bg-primary/5">
                      <h3 className="text-lg font-medium">Crypto Wallet Redesign</h3>
                      <p className="text-sm text-muted-foreground">Work in progress</p>
                    </div>
                    <div className="relative h-[200px]">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Crypto wallet redesign"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Exploring new interaction patterns for self-custody crypto wallets to make them more accessible
                        to mainstream users.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden border rounded-lg">
                    <div className="p-4 border-b bg-primary/5">
                      <h3 className="text-lg font-medium">Habit Formation Study</h3>
                      <p className="text-sm text-muted-foreground">Research project</p>
                    </div>
                    <div className="relative h-[200px]">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Habit formation study"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Ongoing research into how digital products can create meaningful habits that improve users'
                        lives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 mt-8 border rounded-lg bg-primary/5">
                  <h3 className="mb-4 text-xl font-medium">Let's Collaborate</h3>
                  <p className="mb-6 text-muted-foreground">
                    I'm always open to connecting with fellow designers for collaboration, feedback, or just to exchange
                    ideas.
                  </p>
                  <Button>Get in touch</Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </>
  )
}
