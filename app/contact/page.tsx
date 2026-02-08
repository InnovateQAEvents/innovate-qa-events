"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import contactData from "@/data/pages/contact.json"

const socialIcons: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  Youtube: <Youtube className="h-5 w-5" />,
  MessageCircle: <MessageCircle className="h-5 w-5" />,
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="absolute inset-0 bg-[url('/abstract-purple-connection-pattern.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {contactData.title}
            </h1>
            <p className="text-xl text-purple-200">{contactData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "rgba(138, 43, 226, 0.1)" }}
                    >
                      <Send className="h-8 w-8" style={{ color: "rgb(138, 43, 226)" }} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactData.inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full text-white"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
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
                  {contactData.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "rgb(138, 43, 226)" }}
                      aria-label={social.platform}
                    >
                      {socialIcons[social.icon]}
                    </a>
                  ))}
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

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: "rgb(75, 0, 130)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Our events are held at various locations in the Dallas-Fort Worth area. Contact us for specific venue
            information.
          </p>
          <Button size="lg" className="text-white" style={{ backgroundColor: "rgb(138, 43, 226)" }} asChild>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${contactData.contactInfo.address.street}, ${contactData.contactInfo.address.city}, ${contactData.contactInfo.address.state}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
