import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { CalendarDays, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"

export function HeroSection() {
  // Event date: June 5, 2026
  const eventDate = new Date("2026-06-05T09:00:00")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-purple.png')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CalendarDays className="h-4 w-4" />
              <span>June 4-5, 2026 • Seattle, WA</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Welcome to <span className="text-primary drop-shadow-[0_0_15px_rgba(75,0,130,0.5)]">Innovate QA</span> Conference 2026
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty">
              Join industry leaders, pioneers, and visionaries sharing insights, best practices, and cutting-edge tools to
              build high-quality, safe, accessible, and reliable systems.
            </p>

            <div className="mb-12">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Event Starts In</p>
              <CountdownTimer targetDate={eventDate} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-base px-8" asChild>
                <Link href="https://www.eventbrite.com/e/innovate-qa-2026-software-quality-annual-conference-tickets-1979920880652?aff=oddtdtcreator">Buy Ticket</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc7UuSnkx7KJEubEnTokjll1-JBqX5X_-rWQfpGqVs9O9ZnAQ/viewform?pli=1">Become Speaker</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>500+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span>20+ Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Westin, Bellevue, WA</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square mt-10">
              <div className="absolute inset-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 95 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                    <filter id="embossed">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
                      <feOffset in="blur" dx="3" dy="3" result="offsetBlur"/>
                      <feFlood floodColor="rgba(0, 0, 0, 0.4)" result="offsetColor"/>
                      <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadow"/>
                      <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur2"/>
                      <feOffset in="blur2" dx="-2" dy="-2" result="offsetBlur2"/>
                      <feFlood floodColor="rgba(4, 0, 8, 0.6)" result="offsetColor2"/>
                      <feComposite in="offsetColor2" in2="offsetBlur2" operator="in" result="highlight"/>
                      <feMerge>
                        <feMergeNode in="shadow"/>
                        <feMergeNode in="highlight"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <text className="text-[20px] font-bold tracking-[0.3em]" style={{ letterSpacing: '0.3em', fill: 'white', filter: 'url(#embossed)', textShadow: '0 0 10px rgba(87, 3, 165, 0.8)' }}>
                    <textPath href="#circlePath" startOffset="25%" textAnchor="middle">INNOVATE</textPath>
                  </text>
                </svg>
              </div>
              <Image
                src={`${BASE_PATH}/logo.svg`}
                alt="Innovate QA Conference 2026"
                fill
                className="object-contain drop-shadow-2xl pt-15"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
