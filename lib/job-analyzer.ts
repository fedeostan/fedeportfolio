// Simulated AI job description analyzer

type AnalysisResult = {
  skills: string[]
  caseStudies: any[]
}

export function analyzeJobDescription(jobDescription: string): AnalysisResult {
  // This is a simplified simulation of what an AI would do
  // In a real implementation, this would use NLP or a real AI model

  const lowercaseDesc = jobDescription.toLowerCase()

  // Extract skills based on keywords in the job description
  const skills: string[] = []

  if (lowercaseDesc.includes("ux") || lowercaseDesc.includes("user experience")) {
    skills.push("UX Design")
  }

  if (lowercaseDesc.includes("ui") || lowercaseDesc.includes("user interface")) {
    skills.push("UI Design")
  }

  if (lowercaseDesc.includes("research") || lowercaseDesc.includes("user research")) {
    skills.push("UX Research")
  }

  if (lowercaseDesc.includes("product") || lowercaseDesc.includes("product design")) {
    skills.push("Product Design")
  }

  if (lowercaseDesc.includes("crypto") || lowercaseDesc.includes("blockchain")) {
    skills.push("Crypto/Blockchain")
  }

  if (lowercaseDesc.includes("fintech") || lowercaseDesc.includes("financial")) {
    skills.push("Fintech")
  }

  if (lowercaseDesc.includes("figma") || lowercaseDesc.includes("design tools")) {
    skills.push("Figma")
  }

  if (lowercaseDesc.includes("prototype") || lowercaseDesc.includes("prototyping")) {
    skills.push("Prototyping")
  }

  // Add some default skills if none were matched
  if (skills.length === 0) {
    skills.push("UX Design", "Product Design", "UX Research", "Design Systems")
  }

  // Match case studies based on keywords
  const caseStudies = []

  if (lowercaseDesc.includes("crypto") || lowercaseDesc.includes("blockchain") || lowercaseDesc.includes("wallet")) {
    caseStudies.push({
      title: "RockWallet Redesign",
      description:
        "Redesigned the self-custody crypto wallet to improve usability for mainstream users while maintaining security.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Crypto", "Fintech", "UX Design"],
    })
  }

  if (lowercaseDesc.includes("fintech") || lowercaseDesc.includes("financial") || lowercaseDesc.includes("payment")) {
    caseStudies.push({
      title: "Payment Flow Optimization",
      description:
        "Increased conversion by 24% by simplifying the payment flow and reducing cognitive load during transactions.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Fintech", "Conversion", "UX Design"],
    })
  }

  if (
    lowercaseDesc.includes("research") ||
    lowercaseDesc.includes("user research") ||
    lowercaseDesc.includes("usability")
  ) {
    caseStudies.push({
      title: "User Research Framework",
      description:
        "Developed a scalable user research framework that balanced qualitative insights with quantitative data.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["UX Research", "Methodology", "User Testing"],
    })
  }

  if (lowercaseDesc.includes("design system") || lowercaseDesc.includes("component library")) {
    caseStudies.push({
      title: "Design System Implementation",
      description: "Created a comprehensive design system that improved design consistency and development efficiency.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Design Systems", "Component Library", "Collaboration"],
    })
  }

  // Add default case studies if none were matched
  if (caseStudies.length === 0) {
    caseStudies.push({
      title: "RockWallet Redesign",
      description:
        "Redesigned the self-custody crypto wallet to improve usability for mainstream users while maintaining security.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Crypto", "Fintech", "UX Design"],
    })

    caseStudies.push({
      title: "Design System Implementation",
      description: "Created a comprehensive design system that improved design consistency and development efficiency.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Design Systems", "Component Library", "Collaboration"],
    })
  }

  return {
    skills,
    caseStudies,
  }
}
