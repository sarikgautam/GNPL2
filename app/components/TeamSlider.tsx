"use client"

import { useState, useEffect } from "react"
import teamData from "@/data/teams.json"

export default function TeamSlider() {

  const teams = Object.keys(teamData).map((name) => ({
    name,
    ...teamData[name as keyof typeof teamData],
    slug: name.toLowerCase().replaceAll(" ", "-"),
    logo: teamData[name as keyof typeof teamData].logo.replace(
      ".png",
      ".jpg"
    ),
  }))

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teams.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [teams.length])

  const next = () => {
    setCurrent((current + 1) % teams.length)
  }

  const prev = () => {
    setCurrent((current - 1 + teams.length) % teams.length)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg">

      {/* TITLE */}
      <h2 className="mb-6 text-center text-2xl font-bold text-emerald-400">
        Teams Competing In GNPL
      </h2>

      {/* SLIDER */}
      <div className="relative h-80">

        {teams.map((team: any, index: number) => (
          <div
            key={team.name}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >

            {/* LOGO */}
            <img
              src={team.logo}
              alt={team.name}
              className="h-36 object-contain"
            />

            {/* NAME */}
            <h3 className={`mt-6 text-2xl font-bold ${team.text}`}>
              {team.name}
            </h3>

            {/* BUTTON */}
            <a
              href={`/teams/${team.slug}`}
              className={`mt-4 rounded-full border ${team.border} px-8 py-2 text-sm font-semibold ${team.text} transition hover:scale-105`}
            >
              View Team
            </a>

          </div>
        ))}

      </div>

      {/* CONTROLS */}
      <div className="mt-6 flex justify-center gap-6">

        <button
          onClick={prev}
          className="rounded-full border border-slate-700 px-6 py-2 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
        >
          ◀ Prev
        </button>

        <button
          onClick={next}
          className="rounded-full border border-slate-700 px-6 py-2 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
        >
          Next ▶
        </button>

      </div>

    </div>
  )
}
