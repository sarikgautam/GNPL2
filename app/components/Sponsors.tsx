"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Sponsors() {

  const [sponsors, setSponsors] = useState<any[]>([])

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("sponsors")
        .select("*")
        .order("tier")

      if (data) setSponsors(data)
    }

    load()
  }, [])

  if (!sponsors.length) return null

  return (
    <section className="space-y-8">

      <h2 className="text-3xl font-bold text-white">
        Our Sponsors
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

        {sponsors.map((s) => (
          <a
            key={s.id}
            href={s.website || "#"}
            target="_blank"
            className="rounded-xl border border-slate-700 bg-slate-950 p-6 flex items-center justify-center hover:scale-105 transition"
          >
            {s.logo_url ? (
              <img
                src={s.logo_url}
                alt={s.name}
                className="h-16 object-contain"
              />
            ) : (
              <span className="text-white font-bold">
                {s.name}
              </span>
            )}
          </a>
        ))}

      </div>

    </section>
  )
}
