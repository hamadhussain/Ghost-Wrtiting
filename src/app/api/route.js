import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { from, message } = body;

  if (!from || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,        // Sender (your Gmail)
      to: process.env.GMAIL_USER,          // Receiver (you)
      subject: `New message from ${from}`, // 🧑 Customer's email as subject
      text: `📧 From: ${from}\n\n💬 Message:\n${message}`, // Full content
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
