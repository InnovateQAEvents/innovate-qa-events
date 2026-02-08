import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Award,
  Briefcase,
  Code,
  Shield,
  Lightbulb,
  BarChart3,
  Rocket,
  Ticket,
  Mic,
  Gavel
} from "lucide-react";

export const metadata = {
  title: "Battle of AI Test Tools | Innovate QA Events",
  description: "Experience the best AI test tools hands-on—and see how they fit into your testing strategy. A live, in-person event with real-world testing challenges.",
};

export default function BattleOfAITestToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Battle of AI Test Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Experience the best AI test tools hands-on—and see how they fit into your testing strategy
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white hover:bg-purple-50">
                <Link href="https://luma.com/scw9b88h" target="_blank" className="text-purple-900">
                  <Ticket className="mr-2 h-5 w-5" />
                  Buy Tickets
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-purple-900 hover:bg-white/10">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecFflRGENXO-1zghK8_8EMd_mlZsTfj2L7eIMpSewdBGq32g/viewform?usp=publish-editor" target="_blank" className="text-purple-900">
                  <Mic className="mr-2 h-5 w-5" />
                  Apply to Speak
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-purple-900 hover:bg-white/10">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSckWVZhq_5_rTwK7Pv081gpkC_VQOPnhv3-zU9kBZ3NWsfzmA/viewform?usp=publish-editor" target="_blank" className="text-purple-900">
                  <Gavel className="mr-2 h-5 w-5" />
                  Apply To Judge
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
            <p className="text-xl leading-relaxed">
              The Battle of AI Test Tools is a live, in-person event hosted by Innovate QA, designed to move beyond demos, slides, and marketing claims—and show how AI testing tools actually perform in real-world conditions.
            </p>
          </div>

          <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold mt-2">This is not a traditional conference.</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                At the core of the event is a live testing battle, where teams use AI-powered testing tools against real products, real workflows, and real constraints. Attendees get a hands-on, front-row view into how these tools behave when the stakes, complexity, and time pressure are real.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Alongside the battle, the event offers parallel tracks for presentations and networking, allowing attendees to shape their own experience:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-base">Participate directly in the testing competition</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Mic className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-base">Attend curated 30-minute talks about future of QA with AI</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-base">Network with peers, leaders, and hands-on engineers</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-6">
                Live leaderboard updates, judge commentary, and team insights connect everything together—so even if you're not competing, you're continuously learning from what's happening in the battle.
              </p>
            </CardContent>
          </Card>

          {/* What Makes This Different */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">What Makes This Event Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Real tools. Real testing. Real constraints.</h3>
                      <p>Experience AI testing tools in authentic scenarios, not controlled demos.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Transparent comparison with clear judging criteria</h3>
                      <p>See how tools perform with objective evaluation and live results.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg flex-shrink-0">
                      <Code className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Practitioner-first learning, not sales pitches</h3>
                      <p>Learn from engineers who use these tools daily in production.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Focused on clarity and outcomes—not hype</h3>
                      <p>Get evidence-based insights to make informed decisions about AI testing.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-lg mt-8 font-medium">
              The Battle of AI Test Tools is built for leaders and practitioners who want to make smarter, more confident decisions about AI in testing—based on evidence, not promises.
            </p>
          </div>

          {/* What Engineers Will Gain */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Code className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              What Engineers Will Gain
            </h2>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <p className="text-lg font-semibold mb-6 flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  Built expertise and exposure that helps future-proof your QA career as AI becomes part of modern testing practices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-blue-900/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Hands-on exposure to AI test tools in real scenarios, not curated demos or scripted examples.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-blue-900/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Practical insight into how AI fits into day-to-day testing workflows, including where it helps and where it breaks down.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-blue-900/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>A clearer understanding of trade-offs around speed, signal quality, flakiness, and maintenance.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-blue-900/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Concrete ideas you can apply immediately to improve test coverage, feedback loops, and reliability.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-blue-900/30 rounded-lg md:col-span-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Peer learning from other engineers and SDETs actively testing and evaluating AI tools.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What Quality Leaders Will Gain */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              What Quality Leaders Will Gain
            </h2>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-purple-900/30 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Clear evidence to support or challenge AI adoption decisions before investing budget and organizational trust.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>A realistic view of how AI changes roles, ownership, and quality processes across teams.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-purple-900/30 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Guidance on where AI delivers real value—and where it introduces risk in modern SDLCs.</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white dark:bg-purple-900/30 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Better framing for executive conversations around ROI, trust, scalability, and governance.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Who Should Attend */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Award className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              Who Should Attend
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">QA Leaders</h3>
                  <p className="text-sm text-muted-foreground">QA Managers and Quality Engineering Leaders</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Engineering Leaders</h3>
                  <p className="text-sm text-muted-foreground">Engineering Managers, Directors, and VPs</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">QA Engineers</h3>
                  <p className="text-sm text-muted-foreground">QA and Test Automation Engineers</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">SDETs</h3>
                  <p className="text-sm text-muted-foreground">SDETs and Senior Engineers</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 dark:border-indigo-800 md:col-span-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Testing Enthusiasts</h3>
                  <p className="text-sm text-muted-foreground">Anyone evaluating or adopting AI-driven testing and quality practices</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Rocket className="h-12 w-12" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Battle?</h2>
            <p className="text-xl mb-8">
              Don't miss this unique opportunity to experience AI testing tools in action.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white hover:bg-purple-50">
                <Link href="https://luma.com/scw9b88h" target="_blank" rel="noopener noreferrer" className="text-purple-900">
                  <Ticket className="mr-2 h-5 w-5" />
                  Register Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white hover:bg-white/10">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecFflRGENXO-1zghK8_8EMd_mlZsTfj2L7eIMpSewdBGq32g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="text-purple-900">
                  <Mic className="mr-2 h-5 w-5" />
                  Apply to Speak
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white hover:bg-white/10">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSckWVZhq_5_rTwK7Pv081gpkC_VQOPnhv3-zU9kBZ3NWsfzmA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="text-purple-900">
                  <Gavel className="mr-2 h-5 w-5" />
                  Apply to Judge
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
