'use client'

import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { MailerLiteEmbed } from '@/components/mailerlite-embed'
import { useState } from 'react'

export function SubscribeModal({ label }: { label: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="text-base px-8 bg-transparent"
        onClick={() => setOpen(true)}
      >
        <Mail className="mr-2 h-4 w-4" />
        {label}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe for Updates</DialogTitle>
            <DialogDescription>
              Stay informed about speakers, sessions, and early-bird ticket releases.
            </DialogDescription>
          </DialogHeader>
          <MailerLiteEmbed />
        </DialogContent>
      </Dialog>
    </>
  )
}
