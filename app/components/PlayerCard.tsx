interface PlayerCardProps {
  name: string
  role: string
  team: string
}

export default function PlayerCard({ name, role, team }: PlayerCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-emerald-400 transition">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-emerald-400">{role}</p>
      <p className="text-xs text-slate-500">{team}</p>
    </div>
  )
}
