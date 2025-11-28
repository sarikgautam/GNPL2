"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function TeamsSection() {

  const [teams, setTeams] = useState<any[]>([])

  useEffect(() => {
    fetchTeams()
  }, [])

  const fetchTeams = async () => {
    const { data } = await supabase
      .from("teams")
      .select("*")
      .order("id")

    if (data) setTeams(data)
  }

  return (
    <section className="py-20 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          GNPL Season 2 Teams
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teams.map((team) => (

            <div
              key={team.id}
              className="group bg-[#0f0f0f] border border-[#501f3a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >

              <div
                className="flex items-center justify-center p-6"
                style={{ backgroundColor: team.primary_color }}
              >
                <img
                  src={team.logo}
                  alt={team.name}
                  className="h-24 object-contain"
                />
              </div>

              <div className="p-6 space-y-3 text-center">

                <h3 className="text-xl font-bold">
                  {team.name}
                </h3>

                <p className="text-sm text-gray-400">
                  Captain: {team.captain}
                </p>

                <p className="text-sm text-gray-400">
                  Owners: {team.owners}
                </p>

                <p className="text-sm text-gray-400">
                  EST: {team.estd}
                </p>

                <Link
                  href={`/teams/${team.slug}`}
                  className="inline-block mt-4 px-5 py-2 rounded-full border border-[#cb2d6f] text-[#cb2d6f] group-hover:bg-[#cb2d6f] group-hover:text-white transition"
                >
                  View Squad
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
