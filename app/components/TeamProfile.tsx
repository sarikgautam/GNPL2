"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import TeamPlayers from "./TeamPlayers"

interface Props {
  slug: string
}

export default function TeamProfile({ slug }: Props) {

  const [team, setTeam] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTeam = async () => {
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("slug", slug)
        .single()

      if (!error && data) {
        setTeam(data)
      }

      setLoading(false)
    }

    loadTeam()
  }, [slug])

  if (loading) {
    return <p className="text-slate-400">Loading team...</p>
  }

  if (!team) {
    return <p className="text-red-400">Team not found</p>
  }

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <section className="space-y-4">

        <div className="flex items-center gap-6">
          {team.logo_url && (
            <img
              src={team.logo_url}
              alt={team.name}
              className="h-24 w-24 object-contain"
            />
          )}

          <h1 className="text-4xl font-bold text-emerald-400">
            {team.name}
          </h1>
        </div>

        <p className="max-w-3xl text-slate-300">
          {team.description}
        </p>

      </section>

      {/* TEAM INFO */}
      <div className="grid gap-6 md:grid-cols-3">

        <InfoCard label="Owner" value={team.owner} />
        <InfoCard label="Captain" value={team.captain} />
        <InfoCard label="Established" value={team.established} />
        <InfoCard label="Home Ground" value={team.home_ground} />
        <InfoCard label="Most Runs" value={team.most_runs} />
        <InfoCard label="Most Wickets" value={team.most_wickets} />

      </div>

      {/* PLAYERS */}
      <section className="space-y-6">

        <h2 className="text-2xl font-bold text-white">
          Squad Players
        </h2>

        <TeamPlayers teamName={team.name} />

      </section>

    </div>
  )
}

function InfoCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-bold text-white">
        {value || "TBD"}
      </p>
    </div>
  )
}
