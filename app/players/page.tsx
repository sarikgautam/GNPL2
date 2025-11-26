import PlayerCard from "../components/PlayerCard"

const players = [
  { name: "Binod Gyawali", role: "Captain / All-rounder", team: "Himalayan Heat" },
  { name: "Everest Sapkota", role: "Captain / Batsman", team: "GoldCoast Super Kings" },
  { name: "Abhi KC", role: "Captain / Bowler", team: "Yeti Strikers" },
  { name: "Samir Bhattarai", role: "Captain / All-rounder", team: "Gorkha Thunders" },
]

export default function PlayersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Players</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </div>
  )
}
