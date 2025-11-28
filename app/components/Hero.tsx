"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-black">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero.jpg"
        alt="GNPL Cricket Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        onError={(e: any) => {
          e.target.style.display = "none"
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#501f3a]/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
          <span className="block text-white">GOLD COAST</span>
          <span className="block text-[#cb2d6f]">
            NEPALESE PREMIER LEAGUE
          </span>
          <span className="block text-white text-3xl md:text-5xl mt-2">
            SEASON 2
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Bigger • Bolder • Better
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">

          <Link
            href="/fixtures"
            className="px-8 py-3 rounded-full bg-[#14a098] text-black font-bold hover:scale-105 transition"
          >
            View Fixtures
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border-2 border-[#cb2d6f] text-white font-semibold hover:bg-[#cb2d6f] transition"
          >
            Join GNPL 2025
          </Link>

        </div>

        <p className="pt-6 text-sm text-gray-400">
          First match begins soon • Gold Coast, Australia
        </p>

      </div>

    </section>
  )
}
