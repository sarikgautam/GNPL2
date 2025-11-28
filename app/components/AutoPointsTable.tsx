"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type TeamStats = {
  team: string
  matches: number
  won: number
  lost: number
  tied: number
  noResult: number
  runsFor: number
  ballsFaced: number
  runsAgainst: number
  ballsBowled: number
  nrr: number
  points: number
}

export default function AutoPointsTable() {

  const [table, setTable] = useState<TeamStats[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {

    // 1. Get all teams
    const { data: teams } = await supabase
      .from("teams")
      .select("name")
      .order("id")

    // 2. Get all completed GROUP fixtures
    const { data: fixtures } = await supabase
      .from("fixtures")
      .select("team1, team2, team1_runs, team2_runs, team1_overs, team2_overs, status, stage")

    if (!teams) return

    // Initialise stats per team
    const stats: Record<string, TeamStats> = {}
    teams.forEach((t) => {
      stats[t.name] = {
        team: t.name,
        matches: 0,
        won: 0,
        lost: 0,
        tied: 0,
        noResult: 0,
        runsFor: 0,
        ballsFaced: 0,
        runsAgainst: 0,
        ballsBowled: 0,
        nrr: 0,
        points: 0,
      }
    })

    if (fixtures) {
      fixtures
        .filter((f) => f.stage === "group") // only group stage
        .forEach((f) => {
          const t1 = f.team1
          const t2 = f.team2

          if (!stats[t1] || !stats[t2]) return

          const status = f.status || "upcoming"

          // Abandoned / no result -> 1 point each, no NRR
          if (status === "abandoned" || status === "no_result") {
            stats[t1].matches += 1
            stats[t2].matches += 1
            stats[t1].noResult += 1
            stats[t2].noResult += 1
            return
          }

          // We only calculate NRR & W/L for completed + tie
          if (status !== "completed" && status !== "tie") return

          const t1Runs = f.team1_runs ?? 0
          const t2Runs = f.team2_runs ?? 0
          const t1BallsFaced = oversToBalls(f.team1_overs ?? 0)
          const t2BallsFaced = oversToBalls(f.team2_overs ?? 0)

          // update runs/balls for NRR
          stats[t1].runsFor += t1Runs
          stats[t1].ballsFaced += t1BallsFaced
          stats[t1].runsAgainst += t2Runs
          stats[t1].ballsBowled += t2BallsFaced

          stats[t2].runsFor += t2Runs
          stats[t2].ballsFaced += t2BallsFaced
          stats[t2].runsAgainst += t1Runs
          stats[t2].ballsBowled += t1BallsFaced

          stats[t1].matches += 1
          stats[t2].matches += 1

          if (status === "tie") {
            stats[t1].tied += 1
            stats[t2].tied += 1
            return
          }

          // Completed & not tie -> check winner
          if (t1Runs > t2Runs) {
            stats[t1].won += 1
            stats[t2].lost += 1
          } else if (t2Runs > t1Runs) {
            stats[t2].won += 1
            stats[t1].lost += 1
          }
        })
    }

    // Calculate points + NRR
    const result: TeamStats[] = Object.values(stats).map((t) => {
      const oversFaced = t.ballsFaced > 0 ? t.ballsFaced / 6 : 0
      const oversBowled = t.ballsBowled > 0 ? t.ballsBowled / 6 : 0

      let nrr = 0
      if (oversFaced > 0 && oversBowled > 0) {
        const rateFor = t.runsFor / oversFaced
        const rateAgainst = t.runsAgainst / oversBowled
        nrr = parseFloat((rateFor - rateAgainst).toFixed(3))
      }

      const points = t.won * 2 + t.tied * 1 + t.noResult * 1

      return {
        ...t,
        nrr,
        points,
      }
    })

    // Sort by points DESC, NRR DESC
    result.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      return b.nrr - a.nrr
    })

    setTable(result)
  }

  if (!table.length) return null

  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          GNPL Points Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#501f3a] text-sm md:text-base">

            <thead>
                <tr className="bg-black text-white">
                <th className="p-3 text-left">#</th>
                <th className="text-left">Team</th>
                <th>M</th>
                <th>W</th>
                <th>L</th>
                <th>NR</th>
                <th>NRR</th>
                <th>Pts</th>
              </tr>
            </thead>

            <tbody>
              {table.map((t, index) => (
                <tr
                  key={t.team}
                  className={
                    index === 0
                      ? "bg-[#f5b700] text-black font-bold"
                      : "bg-black border-t border-[#501f3a]"
                  }
                >
                  <td className="p-3">{index + 1}</td>
                  <td>{t.team}</td>
                  <td>{t.matches}</td>
                  <td>{t.won}</td>
                  <td>{t.lost}</td>
                  <td>{t.noResult}</td>
                  <td>{t.nrr}</td>
                  <td>{t.points}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Group stage only • NRR = (Runs scored / Overs faced) – (Runs conceded / Overs bowled)
        </p>

      </div>
    </section>
  )
}

function oversToBalls(overs: number): number {
  // Overs in format 19.3 = 19 overs, 3 balls
  const whole = Math.floor(overs)
  const decimal = Math.round((overs - whole) * 10) // 0–5
  const balls = decimal
  return whole * 6 + balls
}
