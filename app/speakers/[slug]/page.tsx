import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, ArrowLeft, Calendar, MapPin } from "lucide-react"
import speakers2025 from "@/data/speakers-2025.json"
import schedule2025 from "@/data/schedule-2025.json"

interface SpeakerPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function SpeakerPage({ params }: SpeakerPageProps) {
  const { slug } = await params
  // Convert slug back to potential speaker ID
  const speakerId = slug
  
  // Find speaker in the 2025 speakers data
  const speaker = speakers2025.find(s => s.id === speakerId)
  
  if (!speaker) {
    notFound()
  }

  // Find all sessions for this speaker
  const speakerSessions = schedule2025.sessions.filter(session => {
    if (session.speaker === speaker.name) return true
    if (session.sessions) {
      return session.sessions.some(s => s.speaker === speaker.name)
    }
    return false
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/#speakers">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Speakers
            </Link>
          </Button>
        </div>
      </section>

      {/* Speaker Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{speaker.name}</h1>
                  <p className="text-lg text-primary font-medium mb-1">{speaker.title}</p>
                  <p className="text-muted-foreground mb-4">{speaker.company}</p>
                  
                  {speaker.linkedin && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Bio and Sessions */}
            <div className="lg:col-span-2">
              {/* Talk/Topic */}
              {speaker.topic && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Session Topic</h2>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{speaker.topic}</h3>
                      {speaker.keynote && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          Keynote Speaker
                        </span>
                      )}
                      {speaker.workshop && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          Workshop
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Bio */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Biography</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      {speaker.bio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sessions Schedule */}
              {speakerSessions.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Sessions at Innovate QA 2025</h2>
                  <div className="space-y-4">
                    {speakerSessions.map((session, index) => {
                      // Handle nested sessions
                      if (session.sessions) {
                        const speakerSession = session.sessions.find(s => s.speaker === speaker.name)
                        if (speakerSession) {
                          return (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                      <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2">{speakerSession.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {session.time}
                                      </span>
                                      {speakerSession.track && (
                                        <span className="px-2 py-1 bg-muted rounded-md">
                                          {speakerSession.track}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <MapPin className="w-4 h-4" />
                                      <span>Innovate QA 2025 • {schedule2025.venue}, {schedule2025.date}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        }
                      } else if (session.speaker === speaker.name) {
                        return (
                          <Card key={index}>
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-primary" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      {session.time}
                                    </span>
                                    {session.track && (
                                      <span className="px-2 py-1 bg-muted rounded-md">
                                        {session.track}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    <span>Innovate QA 2025 • {schedule2025.venue}, {schedule2025.date}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return speakers2025.map((speaker) => ({
    slug: speaker.id,
  }))
}