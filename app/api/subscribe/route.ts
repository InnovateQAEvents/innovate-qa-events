import { NextRequest, NextResponse } from 'next/server'
import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'subscribers.sqlite')

function getDb() {
  const db = new Database(dbPath)
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT,
      email      TEXT NOT NULL UNIQUE,
      source     TEXT DEFAULT 'website',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
  return db
}

export async function POST(req: NextRequest) {
  try {
    const { name = '', email = '', source = 'website' } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    const db = getDb()

    const existing = db.prepare('SELECT id FROM subscribers WHERE email = ?').get(email)
    if (existing) {
      db.close()
      return NextResponse.json({ success: true, message: 'You are already subscribed!' })
    }

    db.prepare('INSERT INTO subscribers (name, email, source) VALUES (?, ?, ?)').run(name, email, source)
    db.close()

    return NextResponse.json({ success: true, message: 'Thank you for subscribing!' })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Could not save subscription. Please try again.' },
      { status: 500 }
    )
  }
}
