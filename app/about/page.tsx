import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Users, Award, Heart, ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { generateSEO } from "@/components/seo"
import { OrganizationJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import aboutData from "@/data/pages/about.json"

export const metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about Innovate QA - our mission, vision, story, and the team behind the leading QA conference and community.",
  path: "/about",
})

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  Award: <Award className="h-8 w-8" />,
  Heart: <Heart className="h-8 w-8" />,
}

export default function AboutPage() {
  return (
    <>
      <OrganizationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://innovateqaevents.com" },
          { name: "About", url: "https://innovateqaevents.com/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="absolute inset-0 bg-[url('/abstract-purple-tech-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {aboutData.title}
            </h1>
            <p className="text-xl text-purple-200">{aboutData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="p-8">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgb(138, 43, 226)" }}
                >
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{aboutData.mission.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{aboutData.mission.description}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="p-8">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgb(138, 43, 226)" }}
                >
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{aboutData.vision.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{aboutData.vision.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">{aboutData.story.title}</h2>
            <p className="text-lg text-purple-200 leading-relaxed text-center">{aboutData.story.content}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "rgb(138, 43, 226)" }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Highlights Gallery */}
      <section className="py-20" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Experience Innovate QA</h2>
          <p className="text-purple-200 text-center mb-12 max-w-2xl mx-auto">
            Our events are designed to inspire, surprise, and deeply engage—creating a space where quality leaders can connect, learn, and grow together.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl group">
              <Image
                src="https://img1.wsimg.com/isteam/ip/bb935004-06a8-408b-b5e5-10ba769a2415/InnovateQA_Seattle_240822_039.jpg"
                alt="Innovate QA Conference Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl group">
              <Image
                src="https://img1.wsimg.com/isteam/ip/bb935004-06a8-408b-b5e5-10ba769a2415/InnovateQA_Seattle_240822_035.jpg"
                alt="Innovate QA Networking"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl group">
              <Image
                src="https://img1.wsimg.com/isteam/ip/bb935004-06a8-408b-b5e5-10ba769a2415/InnovateQA_Seattle_240822_068.jpg"
                alt="Innovate QA Community"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutData.values.map((value, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                  >
                    <span style={{ color: "rgb(138, 43, 226)" }}>{iconMap[value.icon]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Meet Our Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The passionate individuals behind Innovate QA who work tirelessly to create exceptional experiences for our
            community.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutData.team.map((member, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm mb-2" style={{ color: "rgb(138, 43, 226)" }}>
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                  {member.linkedin && (
                    <div className="mt-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Be part of the movement that's shaping the future of quality engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: "rgb(138, 43, 226)" }} asChild>
              <Link href="/volunteer">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
