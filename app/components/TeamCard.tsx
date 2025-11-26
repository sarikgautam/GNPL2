interface TeamCardProps {
  name: string
  captain: string
  color: string
  players: number
}

export default function TeamCard({ name, captain, color, players }: TeamCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-700 bg-slate-950 p-5 shadow-xl transition-all hover:-translate-y-1 hover:shadow-emerald-500/30">
      <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${color}`} />

      <h2 className="mt-4 text-xl font-bold">{name}</h2>
      <p className="mt-1 text-slate-400">Captain: {captain}</p>

      <div className="mt-3 flex justify-between text-sm text-slate-300">
        <span>Players</span>
        <span className="font-semibold text-emerald-400">{players}</span>
      </div>

      <button className="mt-4 w-full rounded-full border border-emerald-500 py-2 text-sm text-emerald-400 transition hover:bg-emerald-500 hover:text-black">
        View Squad
      </button>
    </div>
  )
}
