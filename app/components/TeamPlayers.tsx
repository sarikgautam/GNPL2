"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

interface Props {
  teamName: string
}

export default function TeamPlayers({ teamName }: Props) {

  const [players, setPlayers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const loadPlayers = async () => {

      const { data, error } = await supabase
        .from("players")
        .select("*")
        .eq("team", teamName)
        .order("created_at", { ascending: true })

      if (!error && data) {
        setPlayers(data)
      }

      setLoading(false)
    }

    loadPlayers()

  }, [teamName])

  if (loading) {
    return <p className="text-slate-400">Loading players...</p>
  }

  if (players.length === 0) {
    return <p className="text-slate-400">No players added yet.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

      {players.map((player) => (
        <div
          key={player.id}
          className="rounded-xl border border-slate-700 bg-slate-950 p-5"
        >
          <h3 className="font-bold text-white">
            {player.name}
          </h3>

          <p className="text-sm text-slate-400">
            {player.team}
          </p>

          {player.role && (
            <p className="text-sm text-emerald-400 mt-1">
              {player.role}
            </p>
          )}
        </div>
      ))}

    </div>
  )
}
