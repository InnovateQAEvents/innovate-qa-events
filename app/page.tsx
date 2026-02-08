import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { VenueSection } from "@/components/venue-section"
import { PricingSection } from "@/components/pricing-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { EventLD } from "@/components/json-ld"

export default function Home() {
  return (
    <>
      <EventLD
        name="Innovate QA 2026"
        description="Join industry leaders and pioneers at Innovate QA Conference 2026 in Seattle. Share insights, best practices, and cutting-edge tools for quality engineering excellence."
        startDate="2026-06-04T08:00:00-07:00"
        endDate="2026-06-05T18:00:00-07:00"
        location={{
          name: "Hilton Garden Inn Seattle Downtown",
          address: "1821 Boren Ave",
          city: "Seattle",
          state: "WA",
          country: "US",
        }}
        offers={[
          {
            price: 299,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2025-12-01",
          },
        ]}
      />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <UpcomingEvents />
      <SpeakersSection />
      {/* <ScheduleSection /> */}
      <VenueSection />
      <PricingSection />
      {/* <SponsorsSection /> */}
      <NewsletterSection />
    </>
  )
}
