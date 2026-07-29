import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { CONTACT_EMAIL } from "@/lib/contact"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  eventType: string
  date?: string
  message: string
}

function getMailTransporter() {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })
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

  const transporter = getMailTransporter()

  if (!transporter) {
    console.error("Contact form: EMAIL_USER or EMAIL_PASS is not configured.")
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
  }

  const phoneValue = phone?.trim() || "Not provided"
  const dateValue = date?.trim() || "Not provided"

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Website enquiry: ${eventType.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phoneValue}`,
        `Event type: ${eventType.trim()}`,
        `Event date: ${dateValue}`,
        "",
        message.trim(),
      ].join("\n"),
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phoneValue}</p>
        <p><strong>Event type:</strong> ${eventType.trim()}</p>
        <p><strong>Event date:</strong> ${dateValue}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br>")}</p>
      `,
    })
  } catch (error) {
    console.error("Contact form: failed to send email.", error)
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
