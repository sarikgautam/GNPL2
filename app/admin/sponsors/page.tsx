"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminSponsorsPage() {

  const [sponsors, setSponsors] = useState<any[]>([])
  const [name, setName] = useState("")
  const [logo, setLogo] = useState("")
  const [website, setWebsite] = useState("")
  const [tier, setTier] = useState("Gold")
  const [status, setStatus] = useState("")

  const loadSponsors = async () => {
    const { data } = await supabase
      .from("sponsors")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) setSponsors(data)
  }

  useEffect(() => {
    loadSponsors()
  }, [])

  const handleAddSponsor = async () => {

    if (!name) {
      setStatus("❌ Sponsor name is required")
      return
    }

    const { error } = await supabase
      .from("sponsors")
      .insert([{ name, logo_url: logo, website, tier }])

    if (!error) {
      setStatus("✅ Sponsor added")
      setName("")
      setLogo("")
      setWebsite("")
      setTier("Gold")
      loadSponsors()
    } else {
      setStatus("❌ Error adding sponsor")
      console.error(error)
    }
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete sponsor?")
    if (!confirmDelete) return

    const { error } = await supabase
      .from("sponsors")
      .delete()
      .eq("id", id)

    if (!error) {
      loadSponsors()
    }
  }

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-slate-900">
        Manage Sponsors
      </h1>

      {/* ADD FORM */}
      <div className="space-y-4 rounded-xl border border-slate-300 bg-white p-6 max-w-xl">

        <Input label="Sponsor Name" value={name} onChange={setName} />
        <Input label="Logo URL (.jpg)" value={logo} onChange={setLogo} />
        <Input label="Website URL" value={website} onChange={setWebsite} />

        <div>
          <label className="text-sm font-medium">Tier</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="mt-1 w-full rounded border border-slate-400 p-2 text-sm"
          >
            <option>Prime</option>
            <option>Gold</option>
            <option>Silver</option>
            <option>Bronze</option>
          </select>
        </div>

        <button
          onClick={handleAddSponsor}
          className="rounded bg-emerald-600 py-2 font-bold text-white w-full"
        >
          Add Sponsor
        </button>

        {status && <p className="text-sm text-emerald-600">{status}</p>}

      </div>

      {/* LIST */}
      <div className="space-y-4">

        <h2 className="text-xl font-bold text-slate-800">
          Existing Sponsors
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {sponsors.map((s) => (
            <div
              key={s.id}
              className="border border-slate-300 bg-white p-4 rounded-lg space-y-2"
            >
              {s.logo_url && (
                <img
                  src={s.logo_url}
                  className="h-16 object-contain"
                />
              )}

              <h3 className="font-bold">{s.name}</h3>
              <p className="text-sm text-gray-500">{s.tier}</p>

              {s.website && (
                <a
                  href={s.website}
                  className="text-sm text-blue-500 underline"
                  target="_blank"
                >
                  Visit Site
                </a>
              )}

              <button
                onClick={() => handleDelete(s.id)}
                className="text-xs text-red-500 font-semibold"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

function Input({ label, value, onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded border border-slate-400 p-2 text-sm"
      />
    </div>
  )
}
