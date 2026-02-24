import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"
import homeData from "@/data/home.json"

type Sponsor = { name: string; logo: string; width: number; height: number; url?: string }

function SponsorBadge({ sponsor, className }: { sponsor: Sponsor; className: string }) {
  const inner = (
    <Image
      src={`${BASE_PATH}/${sponsor.logo}`}
      alt={sponsor.name}
      width={sponsor.width}
      height={sponsor.height}
      className="w-auto object-contain"
    />
  )

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name}`}
        className={`${className} cursor-pointer`}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export function SponsorsSection() {
  const { sponsors } = homeData

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
          {/* Gold Sponsors */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sponsors.gold.map((sponsor) => (
                <SponsorBadge
                  key={sponsor.name}
                  sponsor={sponsor}
                  className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors h-32 flex items-center"
                />
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sponsors.silver.map((sponsor) => (
                <SponsorBadge
                  key={sponsor.name}
                  sponsor={sponsor}
                  className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors h-32 flex items-center"
                />
              ))}
            </div>
          </div>

          {/* Bronze Sponsors */}
          {sponsors.bronze.length > 0 && (
            <div>
              <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                Bronze Sponsors
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {sponsors.bronze.map((sponsor) => (
                  <SponsorBadge
                    key={sponsor.name}
                    sponsor={sponsor}
                    className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors h-24 flex items-center"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Partners */}
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {sponsors.partners.map((partner) => (
                <SponsorBadge
                  key={partner.name}
                  sponsor={partner}
                  className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-colors opacity-80 hover:opacity-100 h-20 flex items-center"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in sponsoring or partnering with us?</p>
          <Button variant="outline" asChild>
            <Link href={`mailto:${sponsors.contactEmail}`}>Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
