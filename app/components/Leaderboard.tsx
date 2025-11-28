"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Player = {
  name: string
  team: string
  runs: number
  matches: number
  impact: number
}

export default function Leaderboard() {
  const [topRuns, setTopRuns] = useState<Player[]>([])
  const [mvp, setMvp] = useState<Player[]>([])

  useEffect(() => {
    loadPlayerStats()
  }, [])

  const loadPlayerStats = async () => {

    const { data: fixtures } = await supabase
      .from("fixtures")
      .select("*")
      .eq("stage", "group")
      .eq("status", "completed")

    if (!fixtures) return

    const players: Record<string, Player> = {}

    fixtures.forEach((f) => {
      const t1 = f.team1
      const t2 = f.team2

      // Team1 impact
      if (!players[t1]) {
        players[t1] = { name: t1, team: t1, runs: 0, matches: 0, impact: 0 }
      }

      if (!players[t2]) {
        players[t2] = { name: t2, team: t2, runs: 0, matches: 0, impact: 0 }
      }

      players[t1].runs += f.team1_runs || 0
      players[t1].matches += 1

      players[t2].runs += f.team2_runs || 0
      players[t2].matches += 1

      // Winner bonus
      if (f.team1_runs > f.team2_runs) {
        players[t1].impact += 10
      } else if (f.team2_runs > f.team1_runs) {
        players[t2].impact += 10
      }

      // Player of match
      if (f.player_of_match) {
        if (!players[f.player_of_match]) {
          players[f.player_of_match] = {
            name: f.player_of_match,
            team: "GNPL",
            runs: 0,
            matches: 1,
            impact: 25,
          }
        } else {
          players[f.player_of_match].impact += 25
        }
      }
    })

    const arr = Object.values(players)

    const sortedRuns = [...arr].sort((a, b) => b.runs - a.runs).slice(0, 6)
    const sortedImpact = [...arr].sort((a, b) => b.impact - a.impact).slice(0, 6)

    setTopRuns(sortedRuns)
    setMvp(sortedImpact)
  }

  if (!topRuns.length) return null

  return (
    <section className="dark py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          GNPL Leaderboard
        </h2>

        {/* TOP RUN SCORERS */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-[#f5b700]">
            🏏 Top Run Scorers
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {topRuns.map((p, i) => (
              <PlayerCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>

        {/* MVP */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#cb2d6f]">
            🏆 MVP Board
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {mvp.map((p, i) => (
              <PlayerCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function PlayerCard({ p, index }: any) {
  return (
    <div className="bg-black border border-[#501f3a] p-6 rounded-xl space-y-2">

      <p className="text-xs text-gray-400">
        Rank #{index + 1}
      </p>

      <p className="text-lg font-bold text-[#f5b700]">
        {p.name}
      </p>

      <p className="text-sm text-gray-400">
        {p.team}
      </p>

      <p className="text-sm">
        Runs: <span className="font-bold text-white">{p.runs}</span>
      </p>

      <p className="text-sm">
        Matches: <span className="font-bold text-white">{p.matches}</span>
      </p>

      <p className="text-sm">
        Impact: <span className="font-bold text-white">{p.impact}</span>
      </p>

    </div>
  )
}
