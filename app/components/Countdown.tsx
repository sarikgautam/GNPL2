"use client"

import { useEffect, useState } from "react"
import countdownData from "@/data/countdown.json"

export default function Countdown() {

  const targetDate = new Date(countdownData.date).getTime()
  const title = countdownData.title

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft <= 0) {
    return (
      <div className="rounded-2xl border border-emerald-500 bg-emerald-500/10 p-8 text-center">
        <h2 className="text-2xl font-bold text-emerald-400">
          🏏 GNPL Event is Live / Started!
        </h2>
      </div>
    )
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <section className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-8 text-center space-y-6">

      <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
        Next Big Event
      </p>

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-3xl font-bold text-emerald-400">{days}</p>
          <p className="text-xs text-slate-400">Days</p>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-3xl font-bold text-emerald-400">{hours}</p>
          <p className="text-xs text-slate-400">Hours</p>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-3xl font-bold text-emerald-400">{minutes}</p>
          <p className="text-xs text-slate-400">Minutes</p>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-3xl font-bold text-emerald-400">{seconds}</p>
          <p className="text-xs text-slate-400">Seconds</p>
        </div>

      </div>

    </section>
  )
}
