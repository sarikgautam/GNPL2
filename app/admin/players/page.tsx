"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

const teams = [
  "Himalayan Heat",
  "GoldCoast Super Kings",
  "Yeti Strikers",
  "Gorkha Thunders"
]

export default function AdminPlayersPage() {

  const [players, setPlayers] = useState<any[]>([])
  const [name, setName] = useState("")
  const [team, setTeam] = useState(teams[0])
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("")

  const loadPlayers = async () => {
    const { data, error } = await supabase
      .from("players")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setPlayers(data)
    }
  }

  useEffect(() => {
    loadPlayers()
  }, [])

  const handleAddPlayer = async () => {

    if (!name || !team) {
      setStatus("❌ Name & team required")
      return
    }

    const { error } = await supabase
      .from("players")
      .insert([{ name, team, role }])

    if (!error) {
      setStatus("✅ Player added to cloud")
      setName("")
      setRole("")
      loadPlayers()
    } else {
      setStatus("❌ Error adding player")
      console.error(error)
    }
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Remove this player?")
    if (!confirmDelete) return

    const { error } = await supabase
      .from("players")
      .delete()
      .eq("id", id)

    if (!error) {
      loadPlayers()
    } else {
      alert("Error deleting")
    }
  }

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-slate-900">
        Manage Players (Cloud)
      </h1>

      {/* ADD PLAYER FORM */}
      <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm space-y-4 max-w-xl">

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Player Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-400 bg-white px-4 py-2 text-black"
            placeholder="e.g. Binod Gyawali"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Team
          </label>
          <select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-400 bg-white px-4 py-2 text-black"
          >
            {teams.map((team) => (
              <option key={team}>{team}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Role (Optional)
          </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-400 bg-white px-4 py-2 text-black"
            placeholder="e.g. Batsman / Bowler"
          />
        </div>

        <button
          onClick={handleAddPlayer}
          className="w-full rounded-full bg-emerald-500 py-3 font-bold text-black hover:bg-emerald-400"
        >
          Add Player
        </button>

        {status && (
          <p className="text-sm font-semibold text-emerald-600">
            {status}
          </p>
        )}

      </div>

      {/* PLAYER LIST */}
      <div className="space-y-4">

        <h2 className="text-xl font-bold text-slate-800">
          Saved Players
        </h2>

        {players.length === 0 && (
          <p className="text-slate-500">
            No players added yet
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <div
              key={player.id}
              className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm"
            >
              <h3 className="font-bold text-slate-800">
                {player.name}
              </h3>

              <p className="text-sm text-slate-600">
                Team: {player.team}
              </p>

              {player.role && (
                <p className="text-sm text-slate-600">
                  Role: {player.role}
                </p>
              )}

              <button
                onClick={() => handleDelete(player.id)}
                className="mt-3 text-sm font-semibold text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
