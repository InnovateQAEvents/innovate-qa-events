import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"

const silverSponsors = [
  { name: "PlusQA", logo: `${BASE_PATH}/plusqa-logo-tech-company.jpg` },
  { name: "AccelQ", logo: `${BASE_PATH}/accelq-logo-tech-company.jpg` },
]

const bronzeSponsors = [
  { name: "ContextQA", logo: `${BASE_PATH}/contextqa-logo-tech.jpg` },
  { name: "Loadmill", logo: `${BASE_PATH}/loadmill-logo-tech.jpg` },
  { name: "QA Mentor", logo: `${BASE_PATH}/qa-mentor-logo-tech.jpg` },
  { name: "FlintLab", logo: `${BASE_PATH}/flintlab-logo-tech.jpg` },
]

const partners = [
  { name: "LambdaTest", logo: `${BASE_PATH}/lambdatest-logo.png` },
  { name: "iCEDQ", logo: `${BASE_PATH}/icedq-logo.jpg` },
  { name: "Manning", logo: `${BASE_PATH}/manning-publications-logo.jpg` },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Sponsors & Partners</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Thank you to our amazing sponsors and partners who make this event possible.
          </p>
        </div>

        <div className="space-y-12">
          {/* Silver Sponsors */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {silverSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={320}
                    height={128}
                    className="h-32 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Bronze Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {bronzeSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={240}
                    height={96}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in sponsoring or partnering with us?</p>
          <Button variant="outline" asChild>
            <Link href="mailto:sponsors@innovateqaevents.com">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
