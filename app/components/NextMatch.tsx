"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function NextMatch() {

  const [match, setMatch] = useState<any>(null)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    fetchNextMatch()
    const interval = setInterval(fetchNextMatch, 60000) // update every 1 min
    return () => clearInterval(interval)
  }, [])

  const fetchNextMatch = async () => {
    const now = new Date().getTime()

    const { data } = await supabase
      .from("fixtures")
      .select("*")
      .order("start_time", { ascending: true })

    if (!data) return

    const validMatch = data.find((m) => {
      if (!m.start_time) return false

      const start = new Date(m.start_time).getTime()
      const end = start + 2 * 60 * 60 * 1000 // +2 hours

      return now < end && m.stage === "group"
    })

    if (!validMatch) {
      setMatch(null)
      return
    }

    const start = new Date(validMatch.start_time).getTime()
    const nowTime = new Date().getTime()

    setIsLive(nowTime >= start)
    setMatch(validMatch)
  }

  if (!match) return null

  const logo1 = getTeamLogo(match.team1)
  const logo2 = getTeamLogo(match.team2)

  return (
    <section className="bg-[#0f0f0f] py-16 border-t border-[#501f3a] border-b">

      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        <p className="text-[#cb2d6f] font-bold text-lg">
          {isLive ? "🔴 LIVE MATCH" : "🏏 NEXT MATCH"}
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">

          <TeamBlock name={match.team1} logo={logo1} />

          <span className="text-2xl font-bold text-[#f5b700]">
            VS
          </span>

          <TeamBlock name={match.team2} logo={logo2} />

        </div>

        <p className="text-gray-300">
          {new Date(match.start_time).toLocaleString()}
        </p>

        <p className="text-sm text-gray-500">
          {match.match_overs} Overs Match • {match.stage.toUpperCase()} STAGE
        </p>

      </div>

    </section>
  )
}

function TeamBlock({ name, logo }: any) {
  return (
    <div className="flex flex-col items-center gap-2">

      <img
        src={logo}
        alt={name}
        className="h-24 object-contain"
        onError={(e: any) => {
          e.target.src = "/image/gnpl.jpg"
        }}
      />

      <p className="font-semibold text-white text-center">
        {name}
      </p>

    </div>
  )
}

function getTeamLogo(name: string) {
  const team = name.toLowerCase()

  if (team.includes("himalayan")) return "/image/himalayan-heat.jpg"
  if (team.includes("yeti")) return "/image/yeti-strikers.jpg"
  if (team.includes("gorkha")) return "/image/gorkha-thunders.jpg"
  if (team.includes("gold") || team.includes("super")) return "/image/super-kings.jpg"

  return "/image/gnpl.jpg"
}
