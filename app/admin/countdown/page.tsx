"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminCountdown() {

  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchDate()
  }, [])

  const fetchDate = async () => {
    const { data } = await supabase
      .from("countdown")
      .select("*")
      .limit(1)
      .single()

    if (data) {
      setDate(data.event_date.slice(0, 16))
    }
  }

  const updateDate = async () => {
    const { error } = await supabase
      .from("countdown")
      .update({ event_date: date })
      .eq("id", 1)

    if (!error) setMessage("✅ Countdown updated successfully!")
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">

      <h1 className="text-2xl font-bold text-[#cb2d6f]">
        Update Countdown
      </h1>

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded text-black"
      />

      <button
        onClick={updateDate}
        className="bg-[#14a098] text-black font-bold px-6 py-2 rounded"
      >
        Save
      </button>

      {message && <p className="text-green-500">{message}</p>}

    </div>
  )
}
