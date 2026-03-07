import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import contactData from "@/data/pages/contact.json"
import siteConfig from "@/data/site-config.json"

// Custom X/Twitter icon since lucide doesn't have the new X logo
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="absolute inset-0 bg-[url('/abstract-purple-tech-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {contactData.title}
            </h1>
            <p className="text-xl text-purple-200">{contactData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">{contactData.description}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                  >
                    <Mail className="h-5 w-5" style={{ color: "rgb(138, 43, 226)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${contactData.contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                  >
                    <Phone className="h-5 w-5" style={{ color: "rgb(138, 43, 226)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href={`tel:${contactData.contactInfo.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData.contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: "rgb(138, 43, 226)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <address className="text-muted-foreground not-italic">
                      {contactData.contactInfo.address.street}
                      <br />
                      {contactData.contactInfo.address.city}, {contactData.contactInfo.address.state}{" "}
                      {contactData.contactInfo.address.zip}
                      <br />
                      {contactData.contactInfo.address.country}
                    </address>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {siteConfig.socials.instagram.url && (
                    <a
                      href={siteConfig.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {siteConfig.socials.linkedin.url && (
                    <a
                      href={siteConfig.socials.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {siteConfig.socials.tiktok.url && (
                    <a
                      href={siteConfig.socials.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </a>
                  )}
                  {siteConfig.socials.x.url && (
                    <a
                      href={siteConfig.socials.x.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label="X (Twitter)"
                    >
                      <XIcon className="h-5 w-5" />
                    </a>
                  )}
                  {siteConfig.socials.youtube.url && (
                    <a
                      href={siteConfig.socials.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {contactData.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

   
    </>
  )
}
