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
 *   const [open, setOpen] = useState(false)
 *   const nameRef = useRef<HTMLInputElement>(null)
 *   const [name, setName] = useState('')
 *   const [email, setEmail] = useState('')
 *   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
 *   const [message, setMessage] = useState('')
 *   ...
 *   // Full modal with /api/subscribe DB call removed.
 * }
 */

'use client'

import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

declare global {
  function ml(action: string, formId: string, force?: boolean): void
}

export function SubscribeModal({ label }: { label: string }) {
  const handleClick = () => {
    if (typeof ml === 'function') {
      ml('show', 'DAOAEv', true)
    }
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
