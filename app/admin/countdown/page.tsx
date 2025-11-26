"use client"

import { useState } from "react"
import countdownData from "@/data/countdown.json"

export default function AdminCountdownPage() {

  const [title, setTitle] = useState(countdownData.title)
  const [date, setDate] = useState(countdownData.date)
  const [status, setStatus] = useState("")

  const handleSubmit = async () => {
    const response = await fetch("/api/countdown", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date }),
    })

    if (response.ok) {
      setStatus("✅ Countdown updated successfully")
    } else {
      setStatus("❌ Error updating countdown")
    }
  }

  return (
    <div className="max-w-xl space-y-8">

      <h1 className="text-2xl font-bold text-emerald-400">
        Edit Countdown (Admin)
      </h1>

      <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950 p-6">

        <div>
          <label className="text-xs text-slate-400">
            Countdown Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400">
            Date & Time
          </label>

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full rounded-full bg-emerald-500 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
        >
          Update Countdown
        </button>

        {status && (
          <p className="text-sm text-emerald-400">
            {status}
          </p>
        )}

      </div>

    </div>
  )
}
