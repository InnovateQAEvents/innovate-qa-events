import type React from "react"
import type { Metadata } from "next"
import { Mic, Presentation, Users, Handshake, Camera, ClipboardCheck, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
                <a href="#apply">Apply Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#roles">View Opportunities</a>
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

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Apply to Participate</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will review your application within 5-7 business days.
              </p>
            </div>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Personal Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input id="company" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input id="title" placeholder="Senior QA Engineer" />
                      </div>
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Participation Details
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role You're Interested In *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          {volunteerData.roles.map((role) => (
                            <SelectItem key={role.id} value={role.id}>
                              {role.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Speaker/Workshop Specific */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      For Speakers & Workshop Instructors
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="proposalTitle">Proposed Talk/Workshop Title</Label>
                      <Input id="proposalTitle" placeholder="e.g., Advanced API Testing with Playwright" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="abstract">Abstract / Description</Label>
                      <Textarea
                        id="abstract"
                        placeholder="Describe your talk or workshop in 200-300 words..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Speaking/Teaching Experience</Label>
                      <Textarea
                        id="experience"
                        placeholder="List any previous speaking engagements, workshops, or teaching experience..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Additional Information
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                      <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio / Website / GitHub</Label>
                      <Input id="portfolio" type="url" placeholder="https://yourwebsite.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to participate?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us why you're interested in this role..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Checkbox id="codeOfConduct" required />
                      <Label htmlFor="codeOfConduct" className="text-sm text-muted-foreground leading-relaxed">
                        I agree to abide by the Innovate QA Code of Conduct *
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox id="availability" />
                      <Label htmlFor="availability" className="text-sm text-muted-foreground leading-relaxed">
                        I confirm my availability for June 5, 2026 (and preparation dates if applicable)
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                        I'd like to receive updates about Innovate QA events and opportunities
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                  We provide complimentary conference registration and speaker dinner for all accepted speakers. Travel
                  assistance may be available for keynote speakers - please indicate in your application if you require
                  support.
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
                  Volunteers are typically needed for 4-6 hours on conference day, plus a brief orientation session the
                  evening before. Specific shifts will be coordinated once you're accepted.
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
