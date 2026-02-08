import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "SDETs & DevOps",
    description: "Automation tools, strategies, AI-enabled test generation, DevTools and CI/CD best practices.",
  },
  {
    icon: Target,
    title: "Engineering Leaders",
    description: "Quality metrics, risk mitigation, AI Quality and LLM testing, hiring strategies for QE teams.",
  },
  {
    icon: Users,
    title: "QA Engineers",
    description: "Advanced test practices, AI-augmented testing, domain-specific testing methodologies.",
  },
  {
    icon: Zap,
    title: "Software Testers",
    description: "Testing strategies, emerging trends, and hands-on workshops with industry experts.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Who Is It For?</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground text-pretty max-w-4xl mx-auto">
            We specialize in organizing events tailored specifically for test automation experts and leaders in quality.
            Connect with peers, gain practical knowledge, and drive excellence in software testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
