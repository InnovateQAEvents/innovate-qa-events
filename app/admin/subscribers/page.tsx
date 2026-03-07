import Database from 'better-sqlite3'
import path from 'path'

interface Subscriber {
  id: number
  name: string
  email: string
  source: string
  created_at: string
}

function getSubscribers(): Subscriber[] {
  try {
    const db = new Database(path.join(process.cwd(), 'data', 'subscribers.sqlite'), { readonly: true })
    const rows = db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all() as Subscriber[]
    db.close()
    return rows
  } catch {
    return []
  }
}

export default function SubscribersPage() {
  const subscribers = getSubscribers()

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Subscribers</h1>
          <p className="text-muted-foreground mt-1">{subscribers.length} total</p>
        </div>
      </div>

      {subscribers.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">No subscribers yet.</div>
      ) : (
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subscribers.map((s) => (
                <tr key={s.id} className="bg-background hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{s.id}</td>
                  <td className="px-4 py-3 font-medium">{s.name || '—'}</td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${s.email}`} className="text-primary hover:underline">
                      {s.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                      {s.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(s.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
