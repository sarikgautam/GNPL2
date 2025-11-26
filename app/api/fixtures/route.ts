import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "fixtures.json")

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : []

    data.push(body)

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    return NextResponse.json({ message: "Fixture added successfully" })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save fixture" },
      { status: 500 }
    )
  }
}
