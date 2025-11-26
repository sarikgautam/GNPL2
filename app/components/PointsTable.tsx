const pointsData = [
  { team: "Himalayan Heat", played: 4, win: 3, loss: 1, points: 6, nrr: "+1.20" },
  { team: "Yeti Strikers", played: 4, win: 2, loss: 2, points: 4, nrr: "+0.58" },
  { team: "GoldCoast Super Kings", played: 4, win: 1, loss: 3, points: 2, nrr: "-0.33" },
  { team: "Gorkha Thunders", played: 4, win: 0, loss: 4, points: 0, nrr: "-1.62" },
]

export default function PointsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950 p-4">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="border-b border-slate-700 text-emerald-400">
          <tr>
            <th className="p-3">Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {pointsData.map((team, index) => (
            <tr
              key={team.team}
              className="border-b border-slate-800 hover:bg-slate-900 transition"
            >
              <td className="p-3 font-medium">
                {index + 1}. {team.team}
              </td>
              <td>{team.played}</td>
              <td className="text-emerald-400">{team.win}</td>
              <td className="text-red-400">{team.loss}</td>
              <td>{team.nrr}</td>
              <td className="font-bold text-yellow-300">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
