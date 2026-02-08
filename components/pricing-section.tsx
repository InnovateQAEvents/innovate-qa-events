import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Users, User, Sparkles } from "lucide-react"
import Link from "next/link"

const pricing = {
  individual: {
    earlyBird: {
      deadline: "2026-02-15T00:00:00",
      "1day": 349,
      "2day": 499
    },
    standard: {
      "1day": 499,
      "2day": 799
    }
  },
  group: {
    earlyBird: {
      deadline: "2026-02-15T00:00:00",
      "1day": 315,
      "2day": 449
    },
    standard: {
      "1day": 449,
      "2day": 719
    }
  },
  features: {
    "1day": [
      "Full Day 1 conference access",
      "All keynotes and talks",
      "Breakfast, lunch & refreshments",
      "Networking events",
      "Conference swag bag",
      "Digital resource library"
    ],
    "2day": [
      "Full 2-day conference access",
      "All workshop sessions",
      "All keynotes and talks",
      "Breakfast, lunch & refreshments both days",
      "Networking events",
      "Conference swag bag",
      "Digital resource library",
      "Workshop materials"
    ]
  }
}

const isEarlyBird = () => {
  const deadline = new Date(pricing.individual.earlyBird.deadline)
  const now = new Date()
  return now < deadline
}

export function PricingSection() {
  const earlyBirdActive = isEarlyBird()
  
  return (
    <section id="register" className="py-20 md:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-purple-100">
            Choose the ticket that fits your needs. Group discounts available for 3+ attendees.
          </p>
          {earlyBirdActive && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span>Early Bird pricing available until February 15, 2026 at 12 AM</span>
              <Sparkles className="h-4 w-4" />
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Group Pricing */}
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-purple-200 shadow-xl">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex justify-center mb-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-purple-900">GROUP</CardTitle>
              <p className="text-sm text-purple-600 mt-2">3+ attendees from same organization</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-purple-700 mb-2">1-day</div>
                  <div className="text-3xl font-bold text-purple-900">
                    ${earlyBirdActive ? pricing.group.earlyBird["1day"] : pricing.group.standard["1day"]}
                  </div>
                </div>
                <div className="border-2 border-purple-200 rounded-lg p-4 text-center bg-purple-50">
                  <div className="text-sm font-semibold text-purple-700 mb-2">2-day</div>
                  <div className="text-3xl font-bold text-purple-900">
                    ${earlyBirdActive ? pricing.group.earlyBird["2day"] : pricing.group.standard["2day"]}
                  </div>
                </div>
              </div>
              
              {earlyBirdActive && (
                <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-semibold text-purple-700 mb-2">
                    Early Bird (before 02/15 at 12 AM)
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xs text-purple-600">1-day</div>
                      <div className="text-xl font-bold text-purple-900">${pricing.group.earlyBird["1day"]}</div>
                    </div>
                    <div>
                      <div className="text-xs text-purple-600">2-day</div>
                      <div className="text-xl font-bold text-purple-900">${pricing.group.earlyBird["2day"]}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg" asChild>
                <Link href="https://luma.com/scw9b88h">
                  Register Group
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Individual Pricing */}
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-indigo-200 shadow-xl">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex justify-center mb-3">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <User className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-indigo-900">INDIVIDUAL</CardTitle>
              <p className="text-sm text-indigo-600 mt-2">Single attendee registration</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-indigo-200 rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-indigo-700 mb-2">1-day</div>
                  <div className="text-3xl font-bold text-indigo-900">
                    ${earlyBirdActive ? pricing.individual.earlyBird["1day"] : pricing.individual.standard["1day"]}
                  </div>
                </div>
                <div className="border-2 border-indigo-200 rounded-lg p-4 text-center bg-indigo-50">
                  <div className="text-sm font-semibold text-indigo-700 mb-2">2-day</div>
                  <div className="text-3xl font-bold text-indigo-900">
                    ${earlyBirdActive ? pricing.individual.earlyBird["2day"] : pricing.individual.standard["2day"]}
                  </div>
                </div>
              </div>
              
              {earlyBirdActive && (
                <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-sm font-semibold text-indigo-700 mb-2">
                    Early Bird (before 02/15 at 12 AM)
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xs text-indigo-600">1-day</div>
                      <div className="text-xl font-bold text-indigo-900">${pricing.individual.earlyBird["1day"]}</div>
                    </div>
                    <div>
                      <div className="text-xs text-indigo-600">2-day</div>
                      <div className="text-xl font-bold text-indigo-900">${pricing.individual.earlyBird["2day"]}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" size="lg" asChild>
                <Link href="https://luma.com/scw9b88h">
                  Register Individual
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-purple-900">1-Day Pass Includes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pricing.features["1day"].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-indigo-200">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-indigo-900">2-Day Pass Includes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pricing.features["2day"].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
