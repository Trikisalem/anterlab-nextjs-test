import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission (in a real app, you'd save to database)
    console.log("📧 Contact Form Submission:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("---")

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In a real application, you would:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Add to a CRM system
    // 4. Trigger automated responses

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: Math.random().toString(36).substr(2, 9), // Generate a fake ID
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
