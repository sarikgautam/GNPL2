import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "countdown.json")

export async function POST(req: Request) {
  try {
    const body = await req.json()

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2))

    return NextResponse.json({ message: "Countdown updated successfully" })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update countdown" },
      { status: 500 }
    )
  }
}
