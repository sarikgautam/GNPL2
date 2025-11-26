import players from "@/data/players.json"

export default function GoldCoastSuperKingsPage() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
          GNPL Team
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl text-white">
          GoldCoast Super Kings 👑
        </h1>

        <p className="max-w-3xl text-slate-300">
          A powerful and disciplined team in GNPL, known for their strong batting
          depth and calm leadership under pressure.
        </p>
      </section>

      {/* TEAM INFO */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs text-slate-400">Team Name</p>
          <p className="font-semibold text-white">GoldCoast Super Kings</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs text-slate-400">Established</p>
          <p className="font-semibold text-white">Season 1</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs text-slate-400">Location</p>
          <p className="font-semibold text-white">Gold Coast</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs text-slate-400">Status</p>
          <p className="font-semibold text-yellow-400">Active</p>
        </div>
      </section>

      {/* PLAYERS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-yellow-400">
          Team Players
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {players
            .filter((p) => p.team === "GoldCoast Super Kings")
            .map((player) => (
              <div
                key={player.name}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4"
              >
                <p className="text-white font-semibold">
                  {player.name}
                </p>
                <p className="text-xs text-slate-400">
                  {player.role}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* BACK */}
      <div>
        <a
          href="/teams"
          className="inline-block rounded-full border border-slate-700 px-6 py-2 text-sm text-slate-300 transition hover:border-yellow-400 hover:text-yellow-400"
        >
          ← Back to all teams
        </a>
      </div>

    </div>
  )
}
