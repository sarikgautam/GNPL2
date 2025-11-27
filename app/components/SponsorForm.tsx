"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function SponsorForm({ close }: { close: () => void }) {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase
      .from("sponsor_requests")
      .insert([{ name, phone, email, message }])

    if (!error) {
      setStatus("✅ Thank you, we will contact you soon!")
      setName("")
      setPhone("")
      setEmail("")
      setMessage("")
    } else {
      console.error(error)
      setStatus("❌ Something went wrong. Please try again.")
    }
  }

  return (

    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-xl w-full max-w-md text-black space-y-4">

        <h2 className="text-2xl font-bold text-center">
          Become A Sponsor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Business / Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />

          <textarea
            placeholder="Tell us about your business"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <button
            type="submit"
            className="bg-emerald-500 w-full text-white font-bold py-2 rounded"
          >
            Submit
          </button>

        </form>

        {status && <p className="text-center text-sm">{status}</p>}

        <button
          onClick={close}
          className="text-center text-md text-gray-600 underline w-full mt-2"
        >
          Close
        </button>

      </div>

    </div>
  )
}
