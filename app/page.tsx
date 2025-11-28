import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import NextMatch from "./components/NextMatch"
import TeamsSection from "./components/TeamsSection"
import AutoPointsTable from "./components/AutoPointsTable"
import Sponsors from "./components/Sponsors"
import Leaderboard from "./components/Leaderboard"

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <Hero />

      {/* DARK SECTIONS */}
      <section className="dark">
        <Countdown />
      </section>

      <section className="dark">
        <NextMatch />
      </section>

      {/* LIGHT SECTION */}
      <section className="bg-white text-black py-16">
        <TeamsSection />
      </section>

      {/* DARK POINTS TABLE */}
      <section className="dark">
        <AutoPointsTable />
      </section>
      <section className="dark">
        <Leaderboard />
      </section>


      {/* LIGHT SPONSORS */}
      <section className="bg-white text-black py-16">
        <Sponsors />
      </section>

    </main>
  )
}
