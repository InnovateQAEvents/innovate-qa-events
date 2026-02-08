import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Video, Users, ExternalLink, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/components/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import meetupsData from "@/data/meetups.json"

export const metadata: Metadata = generateSEO({
  title: "Meetup Events",
  description: meetupsData.pageDescription,
  path: "/meetups",
})

function getEventTypeBadge(type: string) {
  switch (type) {
    case "online":
      return (
        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
          <Video className="h-3 w-3 mr-1" />
          Online
        </Badge>
      )
    case "in-person":
      return (
        <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
          <MapPin className="h-3 w-3 mr-1" />
          In-Person
        </Badge>
      )
    case "hybrid":
      return (
        <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
          <Users className="h-3 w-3 mr-1" />
          Hybrid
        </Badge>
      )
    default:
      return null
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function MeetupCard({ event, isPast = false }: { event: (typeof meetupsData.upcomingEvents)[0]; isPast?: boolean }) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${isPast ? "opacity-80" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          {getEventTypeBadge(event.type)}
          <span className="text-sm text-muted-foreground">{formatDate(event.date)}</span>
        </div>
        <CardTitle className="text-lg mt-2">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.startTime} - {event.endTime} {event.timezone}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground">Agenda</h4>
          <ul className="space-y-2">
            {event.agenda.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <span className="text-muted-foreground whitespace-nowrap font-medium">{item.time}</span>
                <div>
                  <span className="font-medium">{item.title}</span>
                  {item.speaker && (
                    <span className="text-muted-foreground">
                      {" "}
                      —{" "}
                      {item.speaker.linkedin ? (
                        <Link
                          href={item.speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {item.speaker.name}
                          <Linkedin className="h-3 w-3" />
                        </Link>
                      ) : (
                        item.speaker.name
                      )}
                    </span>
                  )}
                  {item.description && <p className="text-muted-foreground text-xs mt-1">{item.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {!isPast && event.registrationUrl && (
          <Button className="w-full mt-4" asChild>
            <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              Register Now <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default function MeetupsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://innovateqaevents.com" },
          { name: "Meetup Events", url: "https://innovateqaevents.com/meetups" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Calendar className="h-3 w-3 mr-1" />
              Community Events
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Are you ready to dive into the dynamic world of <span className="text-primary">QA</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {meetupsData.pageDescription}
            </p>
            <Image
              src={meetupsData.heroImage || "/placeholder.svg"}
              alt="Innovate QA Meetup Events"
              width={800}
              height={400}
              className="rounded-xl shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Registration & Speaking Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Registration & Speaking Opportunities</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {meetupsData.ctaButtons.applyToSpeak.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Share Your Expertise</CardTitle>
                <CardDescription>
                  Got expertise in QA, leadership, or tech? Submit your topic and inspire others!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" asChild>
                  <Link href={meetupsData.ctaButtons.applyToSpeak.href} target="_blank" rel="noopener noreferrer">
                    {meetupsData.ctaButtons.applyToSpeak.label}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Join Our Community</CardTitle>
                <CardDescription>{meetupsData.ctaButtons.joinMeetup.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" variant="outline" asChild>
                  <Link href={meetupsData.ctaButtons.joinMeetup.href} target="_blank" rel="noopener noreferrer">
                    {meetupsData.ctaButtons.joinMeetup.label}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Powering Up: Photos from Innovate QA Events</h2>
          <p className="text-center text-muted-foreground mb-10">Highlights from our past meetups and conferences</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {meetupsData.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-center text-muted-foreground mb-10">Join us at our next virtual or in-person meetup</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {meetupsData.upcomingEvents.map((event) => (
              <MeetupCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Past Events</h2>
          <p className="text-center text-muted-foreground mb-10">Explore our previous meetups and the topics covered</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {meetupsData.pastEvents.map((event) => (
              <MeetupCard key={event.id} event={event as (typeof meetupsData.upcomingEvents)[0]} isPast />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host a Meetup?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a venue or want to sponsor a meetup? We are always looking for partners to help grow the QA community.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
