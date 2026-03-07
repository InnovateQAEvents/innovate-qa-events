'use client'

import { Mail, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState, useEffect } from 'react'

export function SubscribeModal({ label }: { label: string }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'hero' }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setName('')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const handleClose = () => {
    setOpen(false)
    setStatus('idle')
    setMessage('')
  }

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

      <div
        className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} items-center justify-center`}
        role="dialog"
        aria-modal="true"
        aria-label="Subscribe for Updates"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

        {/* Panel */}
        <div className="relative bg-background rounded-lg border shadow-lg p-6 max-w-md w-full mx-4 z-10">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-6">
            <h2 className="text-lg font-semibold">Subscribe for Updates</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Stay informed about speakers, sessions, and early-bird ticket releases.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-4">
              <p className="text-green-600 font-medium">{message}</p>
              <Button className="mt-4" variant="outline" onClick={handleClose}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="sub-name">Name</Label>
                <Input
                  id="sub-name"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="sub-email">Email</Label>
                <Input
                  id="sub-email"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {status === 'error' && (
                <p className="text-sm text-red-500">{message}</p>
              )}
              <Button
                type="submit"
                className="w-full text-white"
                style={{ backgroundColor: 'rgb(138, 43, 226)' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
