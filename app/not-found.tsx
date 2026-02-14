import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-white" style={{ backgroundColor: "rgb(138, 43, 226)" }}>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/events">
              <Search className="mr-2 h-4 w-4" />
              Browse Events
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-primary hover:underline">
              About Us
            </Link>
            <Link href="/events/2026" className="text-primary hover:underline">
              Innovate QA 2026
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us
            </Link>
            <Link href="/volunteer" className="text-primary hover:underline">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
