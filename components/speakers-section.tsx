"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import speakers2025 from "@/data/speakers-2025.json"
import { SpeakerCard } from "@/components/landing/Speaker-Card"

// Show only first 6 speakers (keynotes and featured speakers)
const featuredSpeakers = speakers2025.slice(0, 8)

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Speakers</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the future of quality engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#all-speakers">View All Speakers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
