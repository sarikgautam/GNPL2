export default function SeasonsPage() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          GNPL History
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Past Seasons & Winners
        </h1>

        <p className="max-w-3xl text-slate-300">
          A journey through the history of the Gold Coast Nepalese Premier
          League – celebrating the players, teams and unforgettable moments
          from every edition.
        </p>
      </section>

      {/* SEASON 1 */}
      <section className="rounded-2xl border border-slate-700 bg-slate-950 p-6 space-y-4">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-emerald-400">
            Season 1 – Inaugural Edition
          </h2>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            Completed
          </span>
        </div>

        <p className="text-slate-300">
          The very first Gold Coast Nepalese Premier League brought together 60+
          registered players and laid the foundation of a strong cricket culture
          in the Nepalese community.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">Champion</p>
            <p className="font-semibold text-white">
              To be updated / TBD
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">Runner-Up</p>
            <p className="font-semibold text-white">
              To be updated / TBD
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">Total Teams</p>
            <p className="font-semibold text-white">
              4 Teams
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">Players</p>
            <p className="font-semibold text-white">
              60+ Players
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">Prime Sponsors</p>
            <p className="font-semibold text-white">
              Multi Dynamic, Success Education
            </p>
          </div>

        </div>

      </section>

      {/* SEASON 2 */}
      <section className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 space-y-4">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-lg font-semibold text-emerald-400">
            Season 2 – Upcoming
          </h2>

          <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
            Coming Soon
          </span>

        </div>

        <p className="text-slate-300">
          Season 2 of the Gold Coast Nepalese Premier League is currently in
          planning and preparation. With bigger goals, stronger partnerships
          and increased participation, this season promises to be even more
          exciting than the first.
        </p>

        <ul className="list-disc space-y-1 pl-4 text-slate-300">
          <li>More organised structure</li>
          <li>Improved facilities and scheduling</li>
          <li>Greater community reach</li>
          <li>Stronger sponsorship support</li>
        </ul>

      </section>

    </div>
  )
}
