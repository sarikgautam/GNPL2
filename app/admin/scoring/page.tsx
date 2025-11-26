"use client"

import { useState } from "react"

const players = [
  "Binod Gyawali",
  "Everest Sapkota",
  "Abhi KC",
  "Samir Bhattarai",
  "Sandeep Karki",
  "Ramesh Thapa",
]

export default function ScoringPage() {

  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)

  const [overs, setOvers] = useState(0)
  const [balls, setBalls] = useState(0)

  const [striker, setStriker] = useState(players[0])
  const [nonStriker, setNonStriker] = useState(players[1])
  const [bowler, setBowler] = useState(players[2])

  const [message, setMessage] = useState("")

  // ✅ Handle legal deliveries
  const legalBall = (run: number) => {
    setRuns(r => r + run)

    if (run % 2 === 1) swapStrike()

    addBall()

    setMessage(`+${run} Run`)
  }

  // ✅ Ball count
  const addBall = () => {
    if (balls === 5) {
      setOvers(o => o + 1)
      setBalls(0)
      swapStrike()
    } else {
      setBalls(b => b + 1)
    }
  }

  // ✅ Swap striker
  const swapStrike = () => {
    const temp = striker
    setStriker(nonStriker)
    setNonStriker(temp)
  }

  // ✅ Extras - not legal
  const extra = (type: string, run: number) => {
    setRuns(r => r + run)
    setMessage(type)
  }

  // ✅ Dot Ball
  const dotBall = () => {
    addBall()
    setMessage("Dot Ball")
  }

  // ✅ Undo (basic)
  const undoBall = () => {
    if (balls > 0) setBalls(b => b - 1)
    else if (overs > 0) {
      setOvers(o => o - 1)
      setBalls(5)
    }
  }

const handleOut = (type: string) => {

  const outBatsman = striker

  // Increase wicket + ball
  setWickets(w => w + 1)
  addBall()

  // Ask for new batsman
  const newBatsman = prompt(
    `${outBatsman} is OUT (${type}).\nEnter new batsman name:`
  )

  if (newBatsman) {
    setStriker(newBatsman)
    setMessage(`${outBatsman} OUT – ${type} | New batsman: ${newBatsman}`)
  } else {
    setMessage(`${outBatsman} OUT – ${type}`)
  }
}


  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold text-emerald-400">
        🏏 GNPL Professional Cricket Scoring
      </h1>

      {/* Scoreboard */}
      <div className="rounded-2xl border border-emerald-500 p-6 bg-slate-950">

        <div className="flex justify-between text-lg">
          <span>Score: <b>{runs}/{wickets}</b></span>
          <span>Overs: {overs}.{balls}</span>
        </div>

        <p className="mt-2 text-sm text-slate-300">
          🏏 {striker} & {nonStriker} | 🎯 {bowler}
        </p>

        <p className="mt-2 text-xs text-yellow-400">
          {message}
        </p>

        {/* Runs */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <button onClick={() => legalBall(1)} className="sc-btn bg-emerald-500">+1</button>
          <button onClick={() => legalBall(2)} className="sc-btn bg-cyan-500">+2</button>
          <button onClick={() => legalBall(3)} className="sc-btn bg-indigo-500">+3</button>
          <button onClick={() => legalBall(4)} className="sc-btn bg-yellow-500">+4</button>
          <button onClick={() => legalBall(6)} className="sc-btn bg-purple-500">+6</button>
          <button onClick={dotBall} className="sc-btn bg-slate-700">Dot</button>
        </div>

        {/* Extras */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <button onClick={() => extra("Wide", 1)} className="sc-btn bg-rose-600">Wide</button>
          <button onClick={() => extra("No Ball", 1)} className="sc-btn bg-orange-600">No Ball</button>
          <button onClick={() => extra("Bye", 1)} className="sc-btn bg-teal-600">Bye</button>
          <button onClick={() => extra("Leg Bye", 1)} className="sc-btn bg-teal-800">Leg Bye</button>
          <button onClick={undoBall} className="sc-btn bg-slate-500">Undo</button>
          <button onClick={swapStrike} className="sc-btn bg-slate-800 text-white">Strike</button>
        </div>

        {/* Out options */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button onClick={() => handleOut("Bowled")} className="out-btn">Bowled</button>
          <button onClick={() => handleOut("Caught")} className="out-btn">Caught</button>
          <button onClick={() => handleOut("Stumped")} className="out-btn">Stumped</button>
          <button onClick={() => handleOut("LBW")} className="out-btn">LBW</button>
          <button onClick={() => handleOut("Run Out")} className="out-btn">Run Out</button>
          <button onClick={() => handleOut("Retired")} className="out-btn">Retired</button>
        </div>

        {/* Match status */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <button className="match-btn bg-red-600">Abandon Match</button>
          <button className="match-btn bg-yellow-500">Will Abandon</button>
          <button className="match-btn bg-green-600">End Innings</button>
        </div>

      </div>

    </div>
  )
}
