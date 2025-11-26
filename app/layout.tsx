import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gold Coast Nepalese Premier League",
  description:
    "Official website of the Gold Coast Nepalese Premier League (GNPL) – fixtures, results, teams, players, stats and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-600 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-600 blur-3xl" />
        </div>

        {/* Page Wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col">

          {/* ================= NAVBAR ================= */}
          <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

              {/* Logo / Title */}
              <a href="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-purple-600 font-extrabold text-black shadow-lg">
                  GN
                </div>

                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-400">
                    Gold Coast
                  </div>
                  <div className="text-sm font-bold sm:text-base">
                    Nepalese Premier League
                  </div>
                </div>
              </a>

              {/* Desktop Menu */}
              <div className="hidden items-center gap-7 text-sm font-medium sm:flex">

                <a
                  href="/"
                  className="transition hover:text-emerald-400"
                >
                  Home
                </a>

                <a
                  href="/teams"
                  className="transition hover:text-emerald-400"
                >
                  Teams
                </a>


                <a
                  href="/fixtures"
                  className="transition hover:text-emerald-400"
                >
                  Fixtures
                </a>
                <a href="/sponsors" className="transition hover:text-emerald-400">
                  Sponsors
                </a>
                <a href="/gallery" className="transition hover:text-emerald-400">
                  Gallery
                </a>
                <a href="/seasons" className="transition hover:text-emerald-400">
                  Seasons
                </a>

                <a href="/contact" className="transition hover:text-emerald-400">
                  Contact
                </a>


                <a href="/about" className="transition hover:text-emerald-400">
                  About
                </a>



                {/* Admin Button */}
                <a
                  href="/admin"
                  className="ml-2 rounded-full border border-emerald-500/60 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
                >
                  Admin
                </a>
              </div>

            </nav>
          </header>

          {/* ================= MAIN CONTENT ================= */}
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10">
            {children}
          </main>

          {/* ================= FOOTER ================= */}
          <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Gold Coast Nepalese Premier League
            </p>
            <p className="mt-1">
              Built with ❤️ for the Nepali cricket community in Australia
            </p>
          </footer>

        </div>
      </body>
    </html>
  )
}
