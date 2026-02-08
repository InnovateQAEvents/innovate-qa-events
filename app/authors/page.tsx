import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuthorCard } from "@/components/Author-Card"
import authors from "@/data/authors.json"
import type { Metadata } from "next"
import { generateSEO } from "@/components/seo"

export const metadata: Metadata = generateSEO({
  title: "Community Authors - Innovate QA",
  description: "At Innovate QA, we believe writing a book is one of the most impactful ways to share insights and lead by example. Explore our community of published authors who give back through the written word.",

})

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              📚 Community Voices, Published Power
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground text-pretty">
              At Innovate QA, we believe writing a book is one of the most impactful ways to share insights and lead by example. 
              That's why we proudly spotlight <span className="text-primary font-semibold">#community</span> authors who give back through the written word.
            </p>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
