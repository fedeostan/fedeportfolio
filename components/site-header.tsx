import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"

interface SiteHeaderProps {
  showBackButton?: boolean
  backUrl?: string
}

export function SiteHeader({ showBackButton = false, backUrl = "/intent" }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div>
        {showBackButton && (
          <Link
            href={backUrl}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
