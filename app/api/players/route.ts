import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "players.json")

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Read existing players
    const fileData = fs.readFileSync(filePath, "utf-8")
    const players = JSON.parse(fileData)

    // Add new player
    players.push(body)

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(players, null, 2))

    return NextResponse.json({ message: "Player added successfully" })

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add player" },
      { status: 500 }
    )
  }
}
