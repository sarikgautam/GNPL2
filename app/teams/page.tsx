import teamData from "@/data/teams.json"

export default function TeamsPage() {

  const teams = Object.keys(teamData).map((name) => ({
    name,
    ...teamData[name as keyof typeof teamData],
  }))

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <section className="space-y-4 text-center">

        <img
          src="/images/gnpl.jpg"
          alt="GNPL Logo"
          className="mx-auto h-24"
        />

        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          GNPL Teams
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Teams Competing In GNPL
        </h1>

        <p className="mx-auto max-w-3xl text-slate-300">
          These are the four official teams competing in the Gold Coast
          Nepalese Premier League. Each team represents strength, unity and
          passion for cricket in our community.
        </p>

      </section>

      {/* TEAM GRID */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {teams.map((team:any) => (
          <a
            key={team.name}
            href={`/teams/${team.name.toLowerCase().replaceAll(" ", "-")}`}
            className={`group rounded-2xl border ${team.border} bg-slate-950 p-6 text-center transition hover:shadow-lg`}
          >

            {/* LOGO */}
            <div className="flex h-28 items-center justify-center">
              <img
                src={team.logo.replace(".png", ".jpg")}
                alt={team.name}
                className="h-20 object-contain transition group-hover:scale-105"
              />
            </div>

            {/* TEAM NAME */}
            <h3 className={`mt-4 font-bold ${team.text}`}>
              {team.name}
            </h3>

            <span className={`mt-2 inline-block text-xs ${team.text}`}>
              View Team →
            </span>

          </a>
        ))}

      </section>

    </div>
  )
}
