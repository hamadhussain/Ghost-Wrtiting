import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, number, message } = body

    // Validate required fields
    if (!name || !email || !number || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Construct email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `📨 New Contact Form Submission from ${name}`,
      text: `
You have received a new message from your contact form:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${number}

💬 Message:
${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: '✅ Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('❌ Email send error:', error)
    return new Response(JSON.stringify({ error: '❌ Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
