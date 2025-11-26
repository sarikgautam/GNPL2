"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function TestSupabase() {

  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase
        .from("fixtures")
        .select("*")

      console.log("SUPABASE DATA:", data)
      console.log("SUPABASE ERROR:", error)
    }

    test()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-2xl">Check browser console (F12)</h1>
    </div>
  )
}
