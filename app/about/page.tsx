export default function AboutPage() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          About GNPL
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Gold Coast Nepalese Premier League
        </h1>

        <p className="max-w-3xl text-slate-300">
          The Gold Coast Nepalese Premier League (GNPL) is a community-driven
          cricket league created to unite, inspire and grow the Nepalese
          community on the Gold Coast through sport, teamwork and shared
          passion for cricket.
        </p>
      </section>

      {/* STORY */}
      <section className="grid gap-10 md:grid-cols-2">

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-emerald-400">
            Our Story
          </h2>

          <p className="text-slate-300">
            Cricket in the Nepalese community on the Gold Coast began with just
            five passionate individuals playing wherever they could find space.
            Over time, that small group grew into a strong and dedicated
            community of more than 100 cricket enthusiasts.
          </p>

          <p className="text-slate-300">
            This growth led to the formation of the first-ever{" "}
            <span className="text-emerald-400 font-semibold">
              Gold Coast Nepalese Premier League
            </span>
            , where 60+ professional-level players registered and competed in
            Season 1.
          </p>

          <p className="text-slate-300">
            GNPL was built not just to play cricket, but to create a platform
            where people could connect, socialize, develop new friendships, and
            strengthen the Nepalese network on the Gold Coast.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-emerald-400">
            Why GNPL Was Created
          </h3>

          <ul className="list-disc space-y-2 pl-4 text-slate-300">
            <li>To improve the standard of cricket on the Gold Coast</li>
            <li>To grow and support the Nepalese community</li>
            <li>To provide a space to socialize outside of busy work schedules</li>
            <li>To strengthen professional and personal connections</li>
            <li>To inspire the next generation of players</li>
          </ul>
        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="grid gap-8 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
          <h2 className="text-lg font-semibold text-emerald-400 mb-2">
            Our Mission
          </h2>

          <p className="text-slate-300">
            To promote cricket and strengthen the Nepalese community on the
            Gold Coast by creating a consistent, positive, and inclusive
            platform for players, supporters, and sponsors to connect.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
          <h2 className="text-lg font-semibold text-emerald-400 mb-2">
            Our Vision
          </h2>

          <p className="text-slate-300">
            To become the most recognised community-based cricket league on the
            Gold Coast and a model for other multicultural sporting events
            across Australia.
          </p>
        </div>

      </section>

      {/* FUTURE */}
      <section className="rounded-2xl border border-emerald-500/40 bg-slate-950 p-6 shadow-lg shadow-emerald-500/10 space-y-3">

        <h2 className="text-lg font-semibold text-emerald-400">
          GNPL – The Future
        </h2>

        <p className="text-slate-200">
          The Gold Coast Nepalese Premier League has committed to running{" "}
          <span className="font-semibold text-emerald-300">
            every single year
          </span>{" "}
          with improved structure, larger audiences, and more opportunities for
          players and sponsors.
        </p>

        <p className="text-slate-300">
          Along with GNPL, other tournaments organised by the Gold Coast
          Gorkhas Cricket Club will continue, including:
        </p>

        <ul className="list-disc space-y-1 pl-4 text-slate-300">
          <li>Dashain Cup</li>
          <li>New Year Cup</li>
          <li>Community & Friendly Matches</li>
        </ul>

      </section>

      {/* SPONSORS */}
      <section className="space-y-4">

        <h2 className="text-xl font-semibold text-emerald-400">
          Our Prime Sponsors
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
            <p className="font-semibold text-white">
              Multi Dynamic
            </p>
            <p className="text-sm text-slate-400">
              Prime Sponsor supporting community cricket development
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
            <p className="font-semibold text-white">
              Success Education
            </p>
            <p className="text-sm text-slate-400">
              Prime Sponsor supporting young talent and community programs
            </p>
          </div>

        </div>

        <p className="text-xs text-slate-500">
          Interested in sponsoring GNPL? We welcome all community partners.
        </p>

      </section>

    </div>
  )
}
