export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">
        GNPL Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <a
          href="/admin/players"
          className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
        >
          <h2 className="font-bold text-slate-800">
            Manage Players
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Add, update and assign players to teams
          </p>
        </a>

        <a
          href="/admin/fixtures"
          className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
        >
          <h2 className="font-bold text-slate-800">
            Manage Fixtures
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Create & edit upcoming matches
          </p>
        </a>

        <a
          href="/admin/countdown"
          className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
        >
          <h2 className="font-bold text-slate-800">
            Manage Countdown
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Control homepage timer
          </p>
        </a>

      </div>
    </div>
  )
}
