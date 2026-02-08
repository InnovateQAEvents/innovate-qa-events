import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Plane, Building, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BASE_PATH } from "@/lib/constants"

export function VenueSection() {
  return (
    <section id="venue" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Venue</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Join us at The Westin Bellevue in downtown Bellevue, Washington.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-video rounded-xl overflow-hidden bg-muted relative">
            <Image
              src={`${BASE_PATH}/westin-bellevue.webp`}
              alt="The Westin Bellevue"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Card className="bg-card border-border/50 mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">The Westin Bellevue</h3>
                    <p className="text-muted-foreground">
                      600 Bellevue Way NE
                      <br />
                      Bellevue, Washington 98004
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Downtown Bellevue, accessible from I-405 and I-90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span>15 minutes from SeaTac Airport</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Parking available on-site</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button asChild>
                <Link href="https://maps.google.com/?q=600+Bellevue+Way+NE+Bellevue+WA+98004" target="_blank">
                  <Map className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
