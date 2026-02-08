import type React from "react"
import Link from "next/link"
import { Mic, Accessibility, GraduationCap, Shield, Heart, BookOpen, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { generateSEO } from "@/components/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import diversityData from "@/data/pages/diversity-inclusion.json"

export const metadata = generateSEO({
  title: "Diversity & Inclusion",
  description:
    "At Innovate QA, we believe innovation thrives when diverse voices are heard and valued. Learn about our commitment to diversity and inclusion.",
  path: "/diversity-inclusion",
})

const pillarIcons: Record<string, React.ReactNode> = {
  Mic: <Mic className="h-8 w-8" />,
  Accessibility: <Accessibility className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  HandHeart: <Heart className="h-8 w-8" />,
  BookOpen: <BookOpen className="h-8 w-8" />,
}

export default function DiversityInclusionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://innovateqaevents.com" },
          { name: "Diversity & Inclusion", url: "https://innovateqaevents.com/diversity-inclusion" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="absolute inset-0 bg-[url('/diverse-people-technology-abstract.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="h-8 w-8 text-purple-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {diversityData.title}
            </h1>
            <p className="text-xl text-purple-200 mb-8">{diversityData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Hero Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">{diversityData.heroStatement}</p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16" style={{ backgroundColor: "rgba(138, 43, 226, 0.05)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 overflow-hidden" style={{ borderColor: "rgb(138, 43, 226)" }}>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ color: "rgb(75, 0, 130)" }}>
                  {diversityData.commitment.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{diversityData.commitment.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our D&I Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {diversityData.pillars.map((pillar, index) => (
              <Card
                key={index}
                className="bg-card border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                  >
                    <span style={{ color: "rgb(138, 43, 226)" }}>{pillarIcons[pillar.icon]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {diversityData.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{initiative.title}</h3>
                <p className="text-purple-200">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">{diversityData.codeOfConduct.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{diversityData.codeOfConduct.summary}</p>
            <Button style={{ backgroundColor: "rgb(138, 43, 226)" }} className="text-white" asChild>
              <Link href={diversityData.codeOfConduct.link}>
                Read Full Code of Conduct <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20" style={{ backgroundColor: "rgba(138, 43, 226, 0.05)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-8" style={{ color: "rgb(75, 0, 130)" }}>
              {diversityData.closingStatement}
            </p>
            <p className="text-lg mb-6">Team, Innovate QA</p>
            <div className="flex flex-wrap justify-center gap-3">
              {diversityData.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: "rgb(138, 43, 226)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join Our Inclusive Community</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Be part of a community that values every voice and celebrates diversity in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: "rgb(138, 43, 226)" }} asChild>
              <Link href="/volunteer">Get Involved</Link>
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
