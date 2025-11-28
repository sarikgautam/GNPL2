import Countdown from "./components/Countdown"
import TeamSlider from "./components/TeamSlider"
import Sponsors from "./components/Sponsors"
import Hero from "./components/Hero"
import TeamsSection from "./components/TeamsSection"
import PointsTable from "@/app/components/PointsTable"
import AutoPointsTable from "@/app/components/AutoPointsTable"
import NextMatch from "@/app/components/NextMatch"



export default function HomePage() {
  return (
    <main className="space-y-20">

      {/* HERO SECTION */}
      <section className="text-center space-y-6">

        <img
          src="/images/gnpl.jpg"
          alt="GNPL Logo"
          className="mx-auto h-36"
        />

        <h1 className="text-4xl font-bold sm:text-5xl">
          Gold Coast Nepalese
          <span className="block text-emerald-400">
            Premier League
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-slate-300">
          The official cricket league of the Nepalese community on the Gold
          Coast – uniting players, fans, and sponsors through passion,
          competition, and community spirit.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/teams"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
          >
            View Teams
          </a>

          <a
            href="/contact"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Join GNPL
          </a>
        </div>
      </section>
      {/* COUNTDOWN TIMER */}
      <Countdown />
      {/* TEAM SLIDER */}
      <section>
        <TeamSlider />
      </section>
      <section>
        <NextMatch />
      </section>
      <section>
        <AutoPointsTable />
      </section>

      {/* ABOUT GNPL SECTION */}
      <section className="grid gap-12 md:grid-cols-2 items-center">

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
            About GNPL
          </p>

          <h2 className="text-3xl font-bold">
            More Than Just Cricket
          </h2>

          <p className="text-slate-300">
            Gold Coast Nepalese Premier League started as a small group of 5
            friends playing cricket wherever possible. Today, it has grown
            into a vibrant sporting community with over 100 members and
            60+ active players in its first official season.
          </p>

          <p className="text-slate-300">
            GNPL is focused on promoting cricket, strengthening community
            bonds, and creating a positive space where people can socialise,
            network, and grow through sport.
          </p>

          <a
            href="/about"
            className="inline-block rounded-full border border-emerald-500 px-6 py-2 text-sm text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
          >
            Learn More →
          </a>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 space-y-3">
          <h3 className="font-semibold text-emerald-400">GNPL Mission</h3>

          <ul className="list-disc pl-5 text-slate-300">
            <li>Promote cricket in Gold Coast</li>
            <li>Strengthen the Nepalese community</li>
            <li>Provide networking & social platform</li>
            <li>Run tournaments every year</li>
          </ul>
        </div>

      </section>

      {/* SEASON HIGHLIGHT */}
      <section className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-8 text-center space-y-4">

        <h2 className="text-2xl font-bold text-emerald-400">
          Season 2 — Coming Soon
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300">
          Bigger matches. Stronger competition. More sponsors. Season 2 of the
          Gold Coast Nepalese Premier League is under preparation and promises
          to be more exciting than ever.
        </p>

        <a
          href="/seasons"
          className="inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
        >
          View All Seasons
        </a>
      </section>

      {/* SPONSOR SECTION */}
      <section className="text-center space-y-8">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
            Our Sponsors
          </p>

          <h2 className="text-3xl font-bold">
            Proudly Supported By
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">
            <p className="font-semibold text-white">
              Multi Dynamic
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">
            <p className="font-semibold text-white">
              Success Education
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 text-slate-400">
            Your Brand Here
          </div>

        </div>

        <a
          href="/sponsors"
          className="inline-block rounded-full border border-slate-700 px-6 py-2 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
        >
          Become a Sponsor →
        </a>

      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-4">

        <h2 className="text-2xl font-bold">
          Be Part of GNPL Season 2
        </h2>

        <p className="mx-auto max-w-2xl text-slate-300">
          Whether you’re a player, sponsor, supporter, or volunteer,
          Gold Coast Nepalese Premier League welcomes you.
        </p>

        <a
          href="/contact"
          className="inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-black transition hover:bg-emerald-400"
        >
          Contact GNPL
        </a>

      </section>

    </main>
  )
}
