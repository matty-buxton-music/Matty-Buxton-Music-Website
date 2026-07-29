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

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || "Not provided",
        eventType: eventType.trim(),
        date: date?.trim() || "Not provided",
        message: message.trim(),
        _subject: `Website enquiry: ${eventType.trim()}`,
        _template: "table",
        _captcha: "false",
      }),
    })

    if (!response.ok) {
      console.error("FormSubmit returned status:", response.status)
      return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 })
    }

    const data = await response.json().catch(() => null)

    if (data && data.success === "false") {
      console.error("FormSubmit response:", data.message)
      if (data.message?.includes("Activation")) {
        return NextResponse.json(
          { error: "Form is awaiting activation. Please check your inbox and click the activation link from FormSubmit." },
          { status: 503 }
        )
      }
      return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form: failed to send.", error)
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 })
  }
}
