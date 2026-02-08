"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  image: string
  linkedin?: string
}

interface SpeakerCardProps {
  speaker: Speaker
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <Link href={`/speakers/${speaker.id}`}>
      <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors flex flex-col h-full cursor-pointer py-0 pb-6">
        <div className="aspect-[3/4] overflow-hidden bg-muted -m-px relative">
          <Image
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="pt-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{speaker.name}</h3>
          <p className="text-sm text-primary font-medium">{speaker.title}</p>
          <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
          <div className="flex gap-2 mt-auto">
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
