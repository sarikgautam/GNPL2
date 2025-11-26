"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function PublicFixtures() {

  const [fixtures, setFixtures] = useState<any[]>([])

  useEffect(() => {
    const loadFixtures = async () => {
      const { data } = await supabase
        .from("fixtures")
        .select("*")
        .order("match_date", { ascending: true })

      if (data) setFixtures(data)
    }

    loadFixtures()
  }, [])

  const getStatus = (matchTime: string) => {

    const now = new Date()
    const start = new Date(matchTime)
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000) // +2 hours

    if (now < start) return "UPCOMING"
    if (now > start && now <= end) return "LIVE"
    return "FINISHED"
  }

  const getStatusColor = (status: string) => {

    if (status === "LIVE") return "bg-red-600 text-white"
    if (status === "FINISHED") return "bg-slate-700 text-white"
    return "bg-emerald-600 text-white"

  }

  return (
    <section className="space-y-10">

      <h1 className="text-3xl font-bold text-white">
        GNPL Season 2 – Fixtures
      </h1>

      {fixtures.length === 0 && (
        <p className="text-slate-400">No fixtures announced yet</p>
      )}

      <div className="space-y-6">

        {fixtures.map((match) => {

          const status = getStatus(match.match_date)

          return (
            <div
              key={match.id}
              className="rounded-xl border border-slate-700 bg-slate-950 p-6 space-y-5"
            >

              {/* TOP BAR */}
              <div className="flex items-center justify-between">

                <span className="text-sm text-emerald-400 font-semibold">
                  {match.tournament || "GNPL S2"} • {match.stage || "Group Stage"}
                </span>

                <span className={`rounded-full px-4 py-1 text-sm font-bold ${getStatusColor(status)}`}>
                  {status}
                </span>

              </div>

              {/* TEAMS */}
              <div className="grid grid-cols-3 items-center text-center">

                <p className="text-xl font-bold text-white">
                  {match.team_a}
                </p>

                <p className="text-sm text-slate-400">VS</p>

                <p className="text-xl font-bold text-white">
                  {match.team_b}
                </p>

              </div>

              {/* INFO */}
              <div className="grid gap-3 md:grid-cols-3 text-sm text-slate-400">

                <div>
                  📅 {new Date(match.match_date).toLocaleDateString()}
                </div>

                <div>
                  ⏰ {new Date(match.match_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>

                <div>
                  📍 {match.venue}
                </div>

              </div>

            </div>
          )

        })}

      </div>

    </section>
  )
}
