import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

type CaseStudyProps = {
  caseStudy: {
    title: string
    description: string
    image: string
    tags: string[]
  }
}

export default function CaseStudyCard({ caseStudy }: CaseStudyProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={caseStudy.image || "/placeholder.svg?height=200&width=400"}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{caseStudy.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {caseStudy.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10">
                {tag}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{caseStudy.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <span className="flex items-center text-sm">
            View case study <ArrowRight className="w-3 h-3 ml-1" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
