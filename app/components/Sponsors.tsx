"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import SponsorForm from "./SponsorForm"


export default function Sponsors() {

  const [sponsors, setSponsors] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const loadSponsors = async () => {
      const { data } = await supabase
        .from("sponsors")
        .select("*")

      if (data) setSponsors(data)
    }

    loadSponsors()
  }, [])

  const prime = sponsors.filter(s => s.tier === "Prime")
  const others = sponsors.filter(s => s.tier !== "Prime")

  if (!sponsors.length) return null

  return (
    <section className="space-y-16 text-white">

      <h2 className="text-4xl font-extrabold text-center">
        Our Sponsors
      </h2>

      {/* PRIME SPONSORS */}
      {prime.length > 0 && (
        <div className="space-y-6">

          <h3 className="text-center text-2xl font-bold text-yellow-400">
            🌟 Prime Sponsor
          </h3>

          <div className="flex justify-center gap-8 flex-wrap">

            {prime.map((s) => (
              <a
                key={s.id}
                href={s.website || "#"}
                target="_blank"
                className="bg-white p-6 rounded-2xl border-4 border-yellow-500 shadow-2xl transform hover:scale-110 transition duration-300"
              >
                {s.logo_url ? (
                  <img
                    src={s.logo_url}
                    alt={s.name}
                    className="h-28 object-contain animate-pulse"
                  />
                ) : (
                  <span className="text-black text-xl font-bold">
                    {s.name}
                  </span>
                )}
              </a>
            ))}

          </div>
        </div>
      )}

      {/* OTHER SPONSORS */}
      {others.length > 0 && (
        <div className="space-y-6">

          <h3 className="text-center text-xl font-semibold">
            Supporting Sponsors
          </h3>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">

            {others.map((s) => (
              <a
                key={s.id}
                href={s.website || "#"}
                target="_blank"
                className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex items-center justify-center hover:scale-105 transition"
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
        </div>
      )}

      {/* CALL TO ACTION */}
      <div className="text-center pt-10">
        <button
          onClick={() => setShowForm(true)}
          className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full font-bold text-black text-lg shadow-xl"
        >
          Become a Sponsor
        </button>
      </div>


      {/* FORM MODAL */}
      {showForm && <SponsorForm close={() => setShowForm(false)} />}

    </section>
  )
}
