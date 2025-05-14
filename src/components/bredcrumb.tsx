import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  category: string
  subcategory: string
}

export function Breadcrumb({ category, subcategory }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-gray-600">
      <Link href="/" className="flex items-center gap-1 text-[#4a8d7a]">
        <Home className="h-4 w-4" />
        Home
      </Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <Link href="/" className="text-[#4a8d7a]">
        Categories of Dua
      </Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span>{category}</span>
    </nav>
  )
}
