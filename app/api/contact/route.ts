import { NextResponse } from "next/server"
import { CONTACT_EMAIL } from "@/lib/contact"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  eventType: string
  date?: string
  message: string
}

export async function POST(request: Request) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, email, phone, eventType, date, message } = body

  if (!name?.trim() || !email?.trim() || !eventType?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone: phone || "Not provided",
      eventType,
      date: date || "Not provided",
      message,
      _subject: `Website enquiry: ${eventType}`,
      _template: "table",
      _captcha: "false",
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
