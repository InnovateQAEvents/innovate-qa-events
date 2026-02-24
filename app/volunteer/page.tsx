import type React from "react"
import type { Metadata } from "next"
import { Mic, Presentation, Users, Handshake, Camera, ClipboardCheck, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generateSEO } from "@/components/seo"
import { WebPageLD, BreadcrumbLD } from "@/components/json-ld"
import volunteerData from "@/data/volunteer-roles.json"

export const metadata: Metadata = generateSEO({
  title: "Volunteer & Speak",
  description:
    "Join the Innovate QA community as a speaker, workshop instructor, or volunteer. Share your expertise and help make our conference a success.",
  canonical: "/volunteer",
  keywords: ["volunteer", "speaker", "call for papers", "CFP", "QA conference", "workshop"],
})

const iconMap: Record<string, React.ElementType> = {
  mic: Mic,
  presentation: Presentation,
  users: Users,
  handshake: Handshake,
  camera: Camera,
  "clipboard-check": ClipboardCheck,
}

export default function VolunteerPage() {
  return (
    <>
      <WebPageLD
        title="Volunteer & Speak at Innovate QA"
        description="Join the Innovate QA community as a speaker, workshop instructor, or volunteer."
        url="/volunteer"
      />
      <BreadcrumbLD
        items={[
          { name: "Home", url: "/" },
          { name: "Volunteer & Speak", url: "/volunteer" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Join the Innovate QA Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Share your expertise, learn from others, and help make Innovate QA 2026 an unforgettable experience.
              Whether you want to speak, teach, or volunteer, there's a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://docs.google.com/forms/d/1nN0zlBcTuLlk-9dmWSmYh_hEyaR8s3VLz2OcQ6BbLys/edit" target="_blank" rel="noopener noreferrer">
                  Apply to Speak at Innovate QA 2026
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4Ui67V4ER9s1dSSMJfKi3M-m-RSUuJD6ibDNq12oyv1Yt5w/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Apply to Speak at Innovate QA Meetup
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ways to Get Involved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the opportunity that best matches your skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerData.roles.map((role) => {
              const Icon = iconMap[role.icon] || Users
              return (
                <Card key={role.id} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                    </div>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {role.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {role.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Apply to Volunteer</h2>
            <p className="text-muted-foreground mb-8">
              Ready to help make Innovate QA 2026 a success? Fill out our volunteer application form and our team will
              be in touch within 5-7 business days.
            </p>
            <Button size="lg" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePnlv53HpUgpFugNPx6hWUcXfQeMzjr_lj0L8rYaZ4HOkW2g/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Volunteer
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">When is the deadline to apply?</h3>
                <p className="text-muted-foreground">
                  For speakers and workshop instructors, the CFP closes on March 15, 2026. Volunteer applications are
                  accepted on a rolling basis until May 1, 2026.
                </p>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">Do you cover travel expenses for speakers?</h3>
                <p className="text-muted-foreground">
                  We provide complimentary conference registration for all accepted speakers.
                </p>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">Can I submit multiple talk proposals?</h3>
                <p className="text-muted-foreground">
                  Yes! You can submit up to 3 different proposals. Please submit a separate application for each talk.
                </p>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">What's the time commitment for volunteers?</h3>
                <p className="text-muted-foreground">
                  Volunteers for the day off are typically needed for 4-6 hours on conference day, plus a brief orientation session the
                  evening before. Specific shifts will be coordinated once you're accepted. Volunteers helping with planning require 1-2 hours per week.
                </p>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-foreground mb-2">
                  I have no speaking experience. Can I still apply?
                </h3>
                <p className="text-muted-foreground">
                  We welcome first-time speakers and can provide mentorship to help you prepare. Great content matters
                  more than experience - if you have valuable insights to share, we want to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
