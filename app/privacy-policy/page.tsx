import Link from "next/link"
import { FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateSEO } from "@/components/seo"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import privacyData from "@/data/pages/privacy-policy.json"

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Learn how Innovate QA Events collects, uses, and protects your personal information.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://innovateqaevents.com" },
          { name: "Privacy Policy", url: "https://innovateqaevents.com/privacy-policy" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(138, 43, 226, 0.3)" }}
            >
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{privacyData.title}</h1>
            <p className="text-purple-200">
              Last Updated:{" "}
              {new Date(privacyData.lastUpdated).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{privacyData.introduction}</p>

              {privacyData.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4" style={{ color: "rgb(75, 0, 130)" }}>
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{section.content}</p>
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span
                            className="h-2 w-2 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: "rgb(138, 43, 226)" }}
                          />
                          <div>
                            {item.subtitle && <span className="font-semibold text-foreground">{item.subtitle}: </span>}
                            <span className="text-muted-foreground">{item.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div
                className="mt-12 p-6 rounded-lg border-2"
                style={{ borderColor: "rgb(138, 43, 226)", backgroundColor: "rgba(138, 43, 226, 0.05)" }}
              >
                <h3 className="font-semibold text-foreground mb-2">Questions About This Policy?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our privacy practices, please don't hesitate to contact us.
                </p>
                <Button style={{ backgroundColor: "rgb(138, 43, 226)" }} className="text-white" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
