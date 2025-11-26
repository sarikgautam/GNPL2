"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

const teams = [
  "Himalayan Heat",
  "GoldCoast Super Kings",
  "Yeti Strikers",
  "Gorkha Thunders",
]

export default function AdminFixturesPage() {

  const [teamA, setTeamA] = useState(teams[0])
  const [teamB, setTeamB] = useState(teams[1])
  const [date, setDate] = useState("")
  const [venue, setVenue] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async () => {

    if (teamA === teamB) {
      setStatus("❌ Teams must be different")
      return
    }

    if (!date || !venue) {
      setStatus("❌ Date & Venue required")
      return
    }

    const { error } = await supabase.from("fixtures").insert([
      {
        team_a: teamA,
        team_b: teamB,
        match_date: date,
        venue: venue,
        tournament: "GNPL S2",
        stage: "Group Stage"
      }
    ])

    if (!error) {
      setStatus("✅ Fixture saved")
      setVenue("")
      setDate("")
    } else {
      setStatus("❌ Error saving")
      console.log(error)
    }
  }

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold text-emerald-600">
        Add Match Fixture (Admin)
      </h1>

      <div className="space-y-4 bg-white border border-slate-300 p-6 rounded-xl max-w-xl">

        <div>
          <label>Team A</label>
          <select
            value={teamA}
            onChange={(e) => setTeamA(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {teams.map((team) => (
              <option key={team}>{team}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Team B</label>
          <select
            value={teamB}
            onChange={(e) => setTeamB(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {teams.map((team) => (
              <option key={team}>{team}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Venue</label>
          <input
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Gold Coast Oval"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-emerald-500 text-white font-bold py-2 rounded w-full"
        >
          Save Fixture
        </button>

        {status && <p className="text-green-600">{status}</p>}
      </div>
    </div>
  )
}
