"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Countdown() {

  const [timeLeft, setTimeLeft] = useState<any>(null)
  const [eventName, setEventName] = useState("")
  const [live, setLive] = useState(false)

  useEffect(() => {
    fetchDate()
  }, [])

  useEffect(() => {
    if (!timeLeft?.target) return

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = timeLeft.target - now

      if (distance < 0) {
        clearInterval(interval)
        setLive(true)
        return
      }

      setTimeLeft({
        target: timeLeft.target,
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft?.target])

  const fetchDate = async () => {
    const { data } = await supabase
      .from("countdown")
      .select("*")
      .limit(1)
      .single()

    if (data) {
      setEventName(data.title)
      setTimeLeft({
        target: new Date(data.event_date).getTime(),
      })
    }
  }

  if (!timeLeft) return null

  return (
    <section className="py-20 bg-[#0f0f0f] text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        {eventName}
      </h2>

      {live ? (

        <p className="text-red-500 font-bold text-4xl animate-pulse">
          🔴 LIVE NOW
        </p>

      ) : (

        <div className="flex justify-center gap-6 text-white">

          <TimeBox label="DAYS" value={timeLeft.days} />
          <TimeBox label="HOURS" value={timeLeft.hours} />
          <TimeBox label="MIN" value={timeLeft.minutes} />
          <TimeBox label="SEC" value={timeLeft.seconds} />

        </div>
      )}

      <p className="mt-6 text-gray-400">
        First match • Gold Coast, Australia
      </p>

    </section>
  )
}

function TimeBox({ label, value }: any) {
  return (
    <div className="bg-black border border-[#501f3a] px-6 py-4 rounded-lg">
      <div className="text-3xl font-bold text-[#14a098]">
        {value}
      </div>
      <div className="text-xs mt-1 text-gray-400">
        {label}
      </div>
    </div>
  )
}
