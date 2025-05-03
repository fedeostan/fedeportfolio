// Simulated AI project analyzer

type ProjectAnalysisResult = {
  projects: any[]
  approach: string[]
}

export function analyzeProject(projectDescription: string): ProjectAnalysisResult {
  // This is a simplified simulation of what an AI would do
  // In a real implementation, this would use NLP or a real AI model

  const lowercaseDesc = projectDescription.toLowerCase()

  // Match projects based on keywords
  const projects = []

  if (lowercaseDesc.includes("crypto") || lowercaseDesc.includes("blockchain") || lowercaseDesc.includes("wallet")) {
    projects.push({
      title: "RockWallet Crypto App",
      description:
        "Designed a user-friendly crypto wallet that balances security with accessibility for mainstream users.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Crypto", "Fintech", "Mobile App"],
    })
  }

  if (lowercaseDesc.includes("fintech") || lowercaseDesc.includes("financial") || lowercaseDesc.includes("payment")) {
    projects.push({
      title: "Financial Dashboard",
      description:
        "Created an intuitive dashboard for tracking investments and financial activities across multiple accounts.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Fintech", "Dashboard", "Data Visualization"],
    })
  }

  if (
    lowercaseDesc.includes("mobile") ||
    lowercaseDesc.includes("app") ||
    lowercaseDesc.includes("ios") ||
    lowercaseDesc.includes("android")
  ) {
    projects.push({
      title: "Habit-Forming Mobile App",
      description:
        "Designed a mobile application that helps users build positive daily habits through behavioral psychology principles.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Mobile", "Habit Formation", "UX Design"],
    })
  }

  if (lowercaseDesc.includes("web") || lowercaseDesc.includes("website") || lowercaseDesc.includes("responsive")) {
    projects.push({
      title: "Responsive Web Platform",
      description:
        "Built a responsive web platform that delivers a consistent experience across all devices and screen sizes.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Web", "Responsive", "Cross-platform"],
    })
  }

  // Add default projects if none were matched
  if (projects.length === 0) {
    projects.push({
      title: "RockWallet Crypto App",
      description:
        "Designed a user-friendly crypto wallet that balances security with accessibility for mainstream users.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Crypto", "Fintech", "Mobile App"],
    })

    projects.push({
      title: "Habit-Forming Mobile App",
      description:
        "Designed a mobile application that helps users build positive daily habits through behavioral psychology principles.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Mobile", "Habit Formation", "UX Design"],
    })
  }

  // Generate design approach based on project description
  const approach = []

  approach.push(
    "I start by deeply understanding your users and their needs through research and empathy-building exercises.",
  )

  if (
    lowercaseDesc.includes("complex") ||
    lowercaseDesc.includes("complicated") ||
    lowercaseDesc.includes("difficult")
  ) {
    approach.push(
      "For complex projects, I focus on simplifying the experience by breaking down complicated flows into manageable, intuitive steps.",
    )
  }

  if (lowercaseDesc.includes("user") || lowercaseDesc.includes("customer") || lowercaseDesc.includes("client")) {
    approach.push(
      "I prioritize user-centered design methods, including user interviews, usability testing, and iterative prototyping based on feedback.",
    )
  }

  if (lowercaseDesc.includes("brand") || lowercaseDesc.includes("identity") || lowercaseDesc.includes("visual")) {
    approach.push(
      "I create cohesive visual systems that strengthen your brand identity while ensuring the interface remains intuitive and accessible.",
    )
  }

  // Add a default approach if none were matched
  if (approach.length === 1) {
    approach.push(
      "I create minimalist, intuitive interfaces that focus on what matters most to your users.",
      "My design process emphasizes collaboration, with regular check-ins and iterations based on feedback and testing.",
    )
  }

  return {
    projects,
    approach,
  }
}
