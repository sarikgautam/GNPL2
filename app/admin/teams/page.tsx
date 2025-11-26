"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

/* ------------------ TYPES ------------------ */
interface Team {
  id: string
  name: string
  slug?: string
  owner?: string
  captain?: string
  home_ground?: string
  most_runs?: string
  most_wickets?: string
  description?: string
  logo_url?: string
}

/* ------------------ PAGE ------------------ */
export default function AdminTeamsPage() {

  const [teams, setTeams] = useState<Team[]>([])
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState<Partial<Team>>({})

  /* LOAD TEAMS */
  const loadTeams = async () => {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .order("created_at", { ascending: true })

    if (!error && data) {
      setTeams(data as Team[])
    }
  }

  useEffect(() => {
    loadTeams()
  }, [])

  /* EDIT TEAM */
  const handleEdit = (team: Team) => {
    setEditing(team.id)
    setForm(team)
  }

  /* SAVE TEAM */
  const handleSave = async () => {
    if (!editing) return

    const { error } = await supabase
      .from("teams")
      .update({
        name: form.name,
        owner: form.owner,
        captain: form.captain,
        home_ground: form.home_ground,
        most_runs: form.most_runs,
        most_wickets: form.most_wickets,
        description: form.description,
        logo_url: form.logo_url
      })
      .eq("id", editing)

    if (!error) {
      alert("✅ Team updated successfully")
      setEditing(null)
      setForm({})
      loadTeams()
    } else {
      console.error(error)
      alert("❌ Error updating team")
    }
  }

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-slate-900">
        Manage Teams (Cloud)
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        {teams.map((team: Team) => (

          <div
            key={team.id}
            className="rounded-xl border border-slate-300 bg-white p-5 shadow"
          >

            {editing === team.id ? (

              <div className="space-y-4">

                <Input
                  label="Team Name"
                  value={form.name}
                  onChange={(e: any) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  label="Owner"
                  value={form.owner}
                  onChange={(e: any) => setForm({ ...form, owner: e.target.value })}
                />

                <Input
                  label="Captain"
                  value={form.captain}
                  onChange={(e: any) => setForm({ ...form, captain: e.target.value })}
                />

                <Input
                  label="Home Ground"
                  value={form.home_ground}
                  onChange={(e: any) => setForm({ ...form, home_ground: e.target.value })}
                />

                <Input
                  label="Most Runs"
                  value={form.most_runs}
                  onChange={(e: any) => setForm({ ...form, most_runs: e.target.value })}
                />

                <Input
                  label="Most Wickets"
                  value={form.most_wickets}
                  onChange={(e: any) => setForm({ ...form, most_wickets: e.target.value })}
                />

                <Input
                  label="Logo URL"
                  value={form.logo_url}
                  onChange={(e: any) => setForm({ ...form, logo_url: e.target.value })}
                />

                <div>
                  <label className="text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    value={form.description || ""}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="mt-1 w-full rounded border border-slate-400 p-2 text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-3">

                  <button
                    onClick={handleSave}
                    className="rounded bg-emerald-600 px-4 py-2 text-white font-semibold"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setEditing(null)
                      setForm({})
                    }}
                    className="rounded bg-gray-300 px-4 py-2 text-black"
                  >
                    Cancel
                  </button>

                </div>

              </div>

            ) : (

              <div className="space-y-3">

                <h2 className="text-xl font-bold">
                  {team.name}
                </h2>

                <p className="text-sm text-gray-600">
                  Captain: {team.captain || "TBD"}
                </p>

                <p className="text-sm text-gray-600">
                  Owner: {team.owner || "TBD"}
                </p>

                <button
                  onClick={() => handleEdit(team)}
                  className="text-sm font-semibold text-emerald-600 hover:underline pt-2"
                >
                  Edit
                </button>

              </div>

            )}

          </div>

        ))}

      </div>
    </div>
  )
}

/* ------------------ REUSABLE INPUT ------------------ */
function Input({ label, value, onChange }: {
  label: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        value={value || ""}
        onChange={onChange}
        className="mt-1 w-full rounded border border-slate-400 p-2 text-sm"
      />
    </div>
  )
}
