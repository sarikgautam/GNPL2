export default function ContactPage() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          Contact GNPL
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Contact & Registration
        </h1>

        <p className="max-w-3xl text-slate-300">
          Whether you would like to play, sponsor, volunteer, or collaborate
          with the Gold Coast Nepalese Premier League, we would love to hear
          from you.
        </p>
      </section>

      {/* FORM + INFO */}
      <section className="grid gap-8 md:grid-cols-2">

        {/* FORM */}
        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 space-y-4">

          <h2 className="text-lg font-semibold text-emerald-400">
            Send us a message
          </h2>

          <form className="space-y-4">

            <div>
              <label className="text-xs text-slate-400">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400">Reason for Contact</label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              >
                <option>Player registration</option>
                <option>Sponsorship</option>
                <option>Volunteer</option>
                <option>Media & collaboration</option>
                <option>General enquiry</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-400">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-emerald-500 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
            >
              Submit Message
            </button>

          </form>

        </div>

        {/* CONTACT INFO */}
        <div className="space-y-5 rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <h2 className="text-lg font-semibold text-emerald-400">
            GNPL Contact Information
          </h2>

          <div className="space-y-3 text-sm text-slate-300">
            <p><span className="text-slate-400">Location:</span> Gold Coast, Queensland</p>
            <p><span className="text-slate-400">Organisation:</span> Gold Coast Nepalese Premier League</p>
            <p><span className="text-slate-400">Managed by:</span> Gold Coast Gorkhas Cricket Club</p>
            <p><span className="text-slate-400">Email:</span> info@gnpl.com.au (example)</p>
            <p><span className="text-slate-400">Facebook / Instagram:</span> Coming soon</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-4 text-xs text-slate-400">
            This form will soon be connected to a live system that will store
            registrations and enquiries securely in the GNPL database.
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 space-y-3 shadow-lg">

        <h2 className="text-lg font-semibold text-emerald-400">
          Want to Join GNPL Season 2?
        </h2>

        <p className="text-slate-300">
          Player registrations for Season 2 will open soon. If you’re
          interested, send us a message today and we’ll notify you first.
        </p>

      </section>

    </div>
  )
}
