import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Mail, FileText, Users, Trophy, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"
import { generateSEO } from "@/components/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEO({
  title: "Become a Sponsor - Innovate QA 2026",
  description: "Partner with Innovate QA 2026 and connect with 500+ QA professionals, engineering leaders, and innovators. Multiple sponsorship packages available.",
  keywords: ["QA conference sponsorship", "software testing sponsor", "tech event sponsorship", "quality engineering"],
})

const sponsorshipTiers = [
  {
    name: "Gold Sponsor",
    price: "$10,000",
    color: "primary",
    icon: Trophy,
    featured: true,
    benefits: [
      "Premier logo placement on website and materials",
      "10 complimentary conference passes",
      "Dedicated booth space (10x10 ft)",
      "Speaking opportunity (30-minute session)",
      "Logo on all attendee badges",
      "Featured in opening and closing keynotes",
      "Social media promotion (20+ posts)",
      "Email blast to attendee list",
      "Recognition in all press releases",
      "Logo in conference swag bag",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$5,000",
    color: "muted",
    icon: Sparkles,
    featured: false,
    benefits: [
      "Logo placement on website and materials",
      "5 complimentary conference passes",
      "Booth space (6x6 ft)",
      "Lightning talk opportunity (15 minutes)",
      "Social media promotion (10+ posts)",
      "Logo on event signage",
      "Recognition in conference program",
      "Attendee list access (post-event)",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "$2,500",
    color: "accent",
    icon: TrendingUp,
    featured: false,
    benefits: [
      "Logo on website sponsor page",
      "2 complimentary conference passes",
      "Table space in sponsor area",
      "Social media mention",
      "Logo in conference program",
      "Recognition during event",
    ],
  },
]

const customOpportunities = [
  {
    icon: Users,
    title: "Workshop Sponsor",
    description: "Sponsor a hands-on workshop and engage directly with participants learning new skills.",
  },
  {
    icon: FileText,
    title: "Swag Bag Sponsor",
    description: "Include your branded items in attendee swag bags and make a lasting impression.",
  },
  {
    icon: Mail,
    title: "Networking Reception",
    description: "Host an evening networking event and create meaningful connections with attendees.",
  },
]

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-primary/10 border-b border-border py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sponsor <span className="text-primary drop-shadow-[0_0_15px_rgba(75,0,130,0.5)]">Innovate QA 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with 500+ QA professionals, engineering leaders, and innovators shaping the future of software quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#packages">View Packages</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sponsor Innovate QA?</h2>
            <p className="text-lg text-muted-foreground">
              Position your brand at the forefront of quality engineering innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Targeted Audience</h3>
                <p className="text-muted-foreground">
                  Reach decision-makers, SDETs, QA engineers, and engineering leaders from top tech companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Multi-channel exposure through website, social media, email campaigns, and on-site branding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thought Leadership</h3>
                <p className="text-muted-foreground">
                  Showcase your expertise through speaking opportunities and direct engagement with attendees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section id="packages" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Packages</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your goals and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorshipTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`${tier.featured ? 'border-primary border-2 shadow-lg' : 'border-border'} relative overflow-hidden`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-12 w-12 rounded-lg bg-${tier.color}/10 flex items-center justify-center`}>
                      <tier.icon className={`h-6 w-6 text-${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-3xl font-bold text-primary">{tier.price}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.featured ? 'default' : 'outline'} asChild>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Sponsorship Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              Create a unique sponsorship package tailored to your specific goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {customOpportunities.map((opportunity) => (
              <Card key={opportunity.title}>
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Sponsor?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can create the perfect sponsorship package for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:sponsors@innovateqaevents.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Form
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Email: <a href="mailto:sponsors@innovateqaevents.com" className="text-primary hover:underline">sponsors@innovateqaevents.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
