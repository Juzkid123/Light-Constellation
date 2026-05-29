import { NextResponse } from "next/server"

const GOOGLE_SHEETS_SCRIPT_URL =
  process.env.GOOGLE_SHEETS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycby6W2uW7hsF5qCZPkXEZahZP1W9l1dsHa_6stl4PB1D5_He9P53wXrfcLrrx3oDP18Xig/exec"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const payload = {
      name: data.name || "",
      country: data.country || "",
      email: data.email || "",
      contact: data.contact || data.phone || "",
      phone: data.phone || data.contact || "",
      source: data.source || "join-page",
      timestamp: new Date().toISOString(),
    }

    if (!payload.name || !payload.email || !payload.contact) {
      return NextResponse.json({ error: "Name, email, and contact are required." }, { status: 400 })
    }

    const sheetsResponse = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })

    const responseText = await sheetsResponse.text()

    if (!sheetsResponse.ok) {
      return NextResponse.json(
        {
          error: "Google Sheets rejected the submission.",
          details: responseText,
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Could not submit the form.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
