import { Shield, AlertTriangle, Mail, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { generateSEO } from "@/components/seo"
import Link from "next/link"

export const metadata = generateSEO({
  title: "Code of Conduct",
  description:
    "Innovate QA is dedicated to providing a harassment-free experience for everyone. Read our full Code of Conduct.",
  path: "/code-of-conduct",
})

const sections = [
  {
    title: "Our Pledge",
    content:
      "In the interest of fostering an open and welcoming environment, we as organizers, speakers, sponsors, and attendees pledge to make participation in Innovate QA events a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.",
  },
  {
    title: "Expected Behavior",
    items: [
      "Be respectful and considerate in all interactions — in person, online, and in all event-related communications.",
      "Use welcoming and inclusive language.",
      "Be open to differing viewpoints and experiences.",
      "Accept constructive feedback gracefully.",
      "Show empathy toward other community members.",
      "Refrain from behavior that is demeaning, discriminatory, or harassing in any form.",
    ],
  },
  {
    title: "Unacceptable Behavior",
    items: [
      "Harassment, intimidation, or discrimination in any form.",
      "Verbal, physical, or written abuse, threats, or bullying.",
      "Unwelcome sexual attention or advances.",
      "Sharing of explicit or violent material.",
      "Personal insults, particularly those using racist, sexist, or otherwise discriminatory language.",
      "Deliberate disruption of talks, workshops, or other events.",
      "Sustained disruptive behavior during presentations or discussions.",
      "Retaliation against anyone who reports a violation.",
    ],
  },
  {
    title: "Scope",
    content:
      "This Code of Conduct applies to all Innovate QA spaces — including conferences, workshops, meetups, online forums, social media channels, and any other community interactions. It applies to all participants: attendees, speakers, sponsors, volunteers, and organizers.",
  },
  {
    title: "Enforcement",
    content:
      "Violations of this Code of Conduct may result in removal from the event without refund, permanent bans from future events, and/or reporting to appropriate authorities if the behavior constitutes a legal violation. Organizers reserve the right to take any action necessary to maintain a safe and welcoming environment.",
  },
  {
    title: "Reporting",
    content:
      "If you experience or witness behavior that violates this Code of Conduct, please report it immediately to our event staff or by emailing contact@innovateqaevents.com. All reports will be handled confidentially. We are committed to a prompt and fair response to every report.",
  },
]

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="absolute inset-0 bg-[url('/abstract-purple-tech-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Code of Conduct</h1>
            <p className="text-xl text-purple-200">
              Innovate QA is dedicated to providing a harassment-free experience for everyone. We do not tolerate
              harassment of participants in any form.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8 -ml-2">
              <Link href="/diversity-inclusion">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Diversity &amp; Inclusion
              </Link>
            </Button>

            <div className="space-y-8">
              {sections.map((section) => (
                <Card key={section.title} className="border border-border/60">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: "rgb(75, 0, 130)" }}>
                      {section.title}
                    </h2>
                    {"content" in section && (
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    )}
                    {"items" in section && (
                      <ul className="space-y-2">
                        {section.items!.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: "rgb(138, 43, 226)" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact */}
            <div
              className="mt-12 rounded-xl p-8 text-center text-white"
              style={{ backgroundColor: "rgb(75, 0, 130)" }}
            >
              <AlertTriangle className="h-10 w-10 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-2xl font-bold mb-3">Report an Incident</h2>
              <p className="text-purple-200 mb-6">
                If you witness or experience behavior that violates this Code of Conduct, please reach out immediately.
                All reports are confidential.
              </p>
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50" asChild>
                <a href="mailto:contact@innovateqaevents.com?subject=Code of Conduct Report">
                  <Mail className="mr-2 h-4 w-4" />
                  contact@innovateqaevents.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
