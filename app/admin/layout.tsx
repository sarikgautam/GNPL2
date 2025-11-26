import type { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

      {/* Top Bar */}
      <header className="border-b border-slate-300 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-lg font-bold text-emerald-600">
            GNPL Admin Panel
          </h1>

          <nav className="flex gap-6 text-sm font-medium">
            <a href="/admin" className="hover:text-emerald-600">
              Dashboard
            </a>
            <a href="/admin/players" className="hover:text-emerald-600">
              Players
            </a>
            <a href="/admin/fixtures" className="hover:text-emerald-600">
              Fixtures
            </a>
            <a href="/admin/countdown" className="hover:text-emerald-600">
              Countdown
            </a>
            <a href="/" className="hover:text-emerald-600">
              View Site
            </a>
            <a href="/admin/teams" className="hover:text-emerald-600">
  Teams
</a>
<a href="/sponsors">Sponsors</a>


          </nav>

        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </main>

    </div>
  )
}
