/*
 * OLD DB-BASED SUBSCRIBE MODAL (commented out — replaced by MailerLite)
 *
 * 'use client'
 *
 * import { Mail, X } from 'lucide-react'
 * import { Button } from '@/components/ui/button'
 * import { Input } from '@/components/ui/input'
 * import { Label } from '@/components/ui/label'
 * import { useState, useEffect, useRef } from 'react'
 *
 * export function SubscribeModal({ label }: { label: string }) {
 *   ... Full modal with /api/subscribe DB call removed.
 * }
 */

/*
 * MailerLite popup approach (commented out — button now scrolls to #newsletter section instead)
 *
 * export function SubscribeModal({ label }: { label: string }) {
 *   const handleClick = () => {
 *     const ml = (window as any).ml
 *     if (typeof ml === 'function') {
 *       ml('show', 'DAOAEv', true)
 *     }
 *   }
 *   ...
 * }
 */

'use client'

import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SubscribeModal({ label }: { label: string }) {
  const handleClick = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button
      size="lg"
      variant="outline"
      className="text-base px-8 bg-transparent"
      onClick={handleClick}
    >
      <Mail className="mr-2 h-4 w-4" />
      {label}
    </Button>
  )
}
