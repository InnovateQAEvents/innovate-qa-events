import siteConfig from "@/data/site-config.json"

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article" | "event"
  noIndex?: boolean
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function generateSEO({
  title,
  description = siteConfig.description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  keywords,
  author = siteConfig.author,
  publishedTime,
  modifiedTime,
}: SEOProps = {}) {
  const pageTitle = title || siteConfig.title
  const pageDescription = description || siteConfig.description
  const ogImageUrl = ogImage || siteConfig.openGraph?.image || siteConfig.socialBanner
  const fullCanonical = canonical || siteConfig.openGraph?.url || siteConfig.siteUrl

  return {
    title: pageTitle,
    description: pageDescription,
    authors: [{ name: author }],
    creator: author,
    publisher: siteConfig.title,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: siteConfig.openGraph?.title || pageTitle,
      description: siteConfig.openGraph?.description || pageDescription,
      url: siteConfig.openGraph?.url || fullCanonical,
      siteName: siteConfig.openGraph?.siteName || siteConfig.title,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.twitterMeta?.imageAlt || pageTitle,
        },
      ],
      locale: siteConfig.openGraph?.locale || siteConfig.locale || "en_US",
      type: siteConfig.openGraph?.type || ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: siteConfig.twitterMeta?.card || "summary_large_image",
      title: siteConfig.twitterMeta?.title || pageTitle,
      description: siteConfig.twitterMeta?.description || pageDescription,
      images: [siteConfig.twitterMeta?.image || ogImageUrl],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterMeta?.site || siteConfig.twitterSite || siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  }
}
