import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"

export const metadata: Metadata = {
  title: "Gold Coast Nepalese Premier League | GNPL",
  description: "Official website of Gold Coast Nepalese Premier League (GNPL)",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">

        {/* GNPL HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER (temporary simple version) */}
        <footer className="bg-black border-t border-[#501f3a] text-center py-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Gold Coast Nepalese Premier League. All rights reserved.
        </footer>

      </body>
    </html>
  )
}
