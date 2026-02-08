import siteConfig from "@/data/site-config.json"

interface OrganizationLDProps {
  name?: string
  url?: string
  logo?: string
}

export function OrganizationLD({
  name = siteConfig.title,
  url = siteConfig.siteUrl,
  logo = `${siteConfig.siteUrl}${siteConfig.siteLogo}`,
}: OrganizationLDProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs: [
      siteConfig.socials?.x?.url,
      siteConfig.socials?.linkedin?.url,
      siteConfig.socials?.youtube?.url,
      siteConfig.socials?.instagram?.url,
      siteConfig.socials?.tiktok?.url,
    ].filter(Boolean),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export { OrganizationLD as OrganizationJsonLd }

interface EventLDProps {
  name: string
  description: string
  startDate: string
  endDate: string
  location: {
    name: string
    address: string
    city: string
    state: string
    country: string
  }
  image?: string
  url?: string
  offers?: {
    price: number
    priceCurrency: string
    availability: string
    validFrom: string
  }[]
  performers?: {
    name: string
    url?: string
  }[]
}

export function EventLD({
  name,
  description,
  startDate,
  endDate,
  location,
  image = `${siteConfig.siteUrl}/og-image.png`,
  url = siteConfig.siteUrl,
  offers,
  performers,
}: EventLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressRegion: location.state,
        addressCountry: location.country,
      },
    },
    image,
    url,
    organizer: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    ...(offers && {
      offers: offers.map((offer) => ({
        "@type": "Offer",
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        availability: offer.availability,
        validFrom: offer.validFrom,
        url,
      })),
    }),
    ...(performers && {
      performer: performers.map((performer) => ({
        "@type": "Person",
        name: performer.name,
        ...(performer.url && { url: performer.url }),
      })),
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

interface BreadcrumbLDProps {
  items: {
    name: string
    url: string
  }[]
}

export function BreadcrumbLD({ items }: BreadcrumbLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export { BreadcrumbLD as BreadcrumbJsonLd }

interface WebPageLDProps {
  title: string
  description: string
  url: string
}

export function WebPageLD({ title, description, url }: WebPageLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.siteUrl}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
