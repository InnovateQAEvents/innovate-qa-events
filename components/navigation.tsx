"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/about", label: "About" },

  { href: "/sponsor", label: "Become a Sponsor" },
]

const pastEvents = [
  { href: "/events/2025", label: "Innovate QA 2025", year: 2025 },
  { href: "/events/2024", label: "Innovate QA 2024", year: 2024 },
]

const communityLinks = [
  { href: "/meetups", label: "Meetup Events" },
  { href: "/volunteer", label: "Volunteer / Speak" },
  { href: "/authors", label: "Community Authors" },
]


export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`${BASE_PATH}/logo.svg`}
            alt="Innovate QA Logo" 
            width={48} 
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold text-foreground">Innovate QA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Community
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {communityLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Past Events
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {pastEvents.map((event) => (
                <DropdownMenuItem key={event.year} asChild>
                  <Link href={event.href} className="w-full cursor-pointer">
                    {event.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

        
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-border pt-4 mt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Community</p>
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Past Events</p>
                {pastEvents.map((event) => (
                  <Link
                    key={event.year}
                    href={event.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {event.label}
                  </Link>
                ))}
              </div>

        

              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="outline">
                  <Link href="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
                </Button>
                <Button asChild>
                  <Link href="/signin" onClick={() => setOpen(false)}>Sign In</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
