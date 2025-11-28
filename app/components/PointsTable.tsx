"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function PointsTable() {

  const [table, setTable] = useState<any[]>([])

  useEffect(() => { fetchTable() }, [])

  const fetchTable = async () => {
    const { data } = await supabase
      .from("points_table")
      .select("*")
      .order("points", { ascending: false })

    if (data) setTable(data)
  }

  if (!table.length) return null

  return (
    <section className="py-20 bg-[#0f0f0f]">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          GNPL Points Table
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border border-[#501f3a]">

            <thead>
              <tr className="bg-black">
                <th className="p-3">#</th>
                <th>Team</th>
                <th>M</th>
                <th>W</th>
                <th>L</th>
                <th>NRR</th>
                <th>Pts</th>
              </tr>
            </thead>

            <tbody>
              {table.map((team, index) => (
                <tr
                  key={team.id}
                  className={
                    index === 0
                      ? "bg-[#f5b700] text-black font-bold"
                      : "bg-black border-t border-[#501f3a]"
                  }
                >

                  <td className="p-3">{index + 1}</td>
                  <td>{team.team_name}</td>
                  <td>{team.matches}</td>
                  <td>{team.won}</td>
                  <td>{team.lost}</td>
                  <td>{team.nrr}</td>
                  <td>{team.points}</td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  )
}
