import { Users, Lightbulb, MessageSquare, BookOpen, Rss, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MailerLiteEmbed } from "@/components/mailerlite-embed"

export const metadata = {
  title: "Quality Leadership Community | Innovate QA",
  description:
    "Join the Quality Leadership Community — a space for QA leaders, engineers, and innovators to connect, learn, and shape the future of quality engineering.",
}

const benefits = [
  {
    icon: Users,
    title: "Peer Network",
    description:
      "Connect with QA leaders, SDETs, and quality engineers from top companies who share your passion for excellence.",
  },
  {
    icon: Lightbulb,
    title: "Insights & Trends",
    description:
      "Stay ahead with curated content on AI in testing, automation strategies, and emerging quality engineering practices.",
  },
  {
    icon: MessageSquare,
    title: "Real Conversations",
    description:
      "Engage in honest, practitioner-first discussions — no fluff, no sales pitches. Just people solving real problems.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description:
      "Access session recaps, speaker insights, and practical guides from Innovate QA events and community contributors.",
  },
  {
    icon: Rss,
    title: "Event Updates",
    description:
      "Be the first to know about upcoming conferences, meetups, workshops, and community events in your area.",
  },
  {
    icon: Star,
    title: "Recognition",
    description:
      "Celebrate excellence through our community awards program that spotlights impactful contributors and innovators.",
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/abstract-purple-tech-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Free to Join
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Quality Leadership Community
            </h1>
            <p className="text-xl text-purple-200 leading-relaxed">
              A community built for QA professionals, engineering leaders, and quality innovators who believe that
              testing is a craft — and that great software starts with great quality practices.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Quality engineering is evolving fast. AI is reshaping how we test, automation is becoming table stakes,
              and the bar for reliability keeps rising. Keeping up requires more than reading blog posts — it requires a
              community of practitioners who are living it every day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Quality Leadership Community is a place to share what&apos;s working, ask the hard questions, and
              grow alongside peers who take quality as seriously as you do. Whether you&apos;re leading a team,
              building frameworks, or just starting out — there&apos;s a seat at the table for you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You&apos;ll Get</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
            <p className="text-purple-200 text-lg mb-10">
              Subscribe to stay connected — get event updates, community highlights, and quality engineering insights
              delivered to your inbox.
            </p>
            <MailerLiteEmbed />
          </div>
        </div>
      </section>
    </div>
  )
}
