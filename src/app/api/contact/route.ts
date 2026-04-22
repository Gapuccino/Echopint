import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // ─── Here you can connect to your email service ───
    // Examples:
    //
    // 1. Resend (recommended):
    //    const resend = new Resend(process.env.RESEND_API_KEY);
    //    await resend.emails.send({
    //      from: 'noreply@echopointmx.com',
    //      to: 'contacto@echopointmx.com',
    //      subject: `[Web Contact] ${subject}`,
    //      html: `<p><strong>Name:</strong> ${name}</p>
    //             <p><strong>Email:</strong> ${email}</p>
    //             <p><strong>Message:</strong> ${message}</p>`,
    //    });
    //
    // 2. Nodemailer with SMTP:
    //    const transporter = nodemailer.createTransport({ ... });
    //    await transporter.sendMail({ ... });
    //
    // For now, we log the contact and return success.
    // ──────────────────────────────────────────────────

    console.log("📩 New contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
