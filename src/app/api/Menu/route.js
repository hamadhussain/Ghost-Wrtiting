// // import nodemailer from 'nodemailer'

// // export async function POST(req) {
// //   try {
// //     const body = await req.json()
// //     const { name, email, number, budget, service } = body

// // if (!name || !email || !number  || !budget || !service) {
// //   // Log which fields are missing
// //   console.error('❌ Missing fields:', {
// //     name,
// //     email,
// //     number,
// //     budget,
// //     service,
// //   })

// //   return new Response(JSON.stringify({ error: 'Missing required fields' }), {
// //     status: 400,
// //     headers: { 'Content-Type': 'application/json' },
// //   })
// // }


// //     // Configure nodemailer transporter
// //     const transporter = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //         user: process.env.GMAIL_USER,
// //         pass: process.env.GMAIL_PASS,
// //       },
// //       tls: {
// //         rejectUnauthorized: false,
// //       },
// //     })

// //     // Construct email
// //     const mailOptions = {
// //       from: process.env.GMAIL_USER,
// //       to: process.env.GMAIL_USER, // Send to yourself
// //       subject: `📨 New Contact Form Submission from ${name}`,
// //       text: `
// // You have received a new message from your contact form:

// // 👤 Name: ${name}
// // 📧 Email: ${email}
// // 📞 Phone: ${number}

// // 💬 Message:
// // ${message}

// // 🛠️ Service Requested: ${service}
// // 💰 Budget: ${budget}
// //       `,
// //     }

// //     // Send email
// //     await transporter.sendMail(mailOptions)

// //     return new Response(JSON.stringify({ message: '✅ Email sent successfully!' }), {
// //       status: 200,
// //       headers: { 'Content-Type': 'application/json' },
// //     })
// //   } catch (error) {
// //     console.error('❌ Email send error:', error)
// //     return new Response(JSON.stringify({ error: '❌ Failed to send email' }), {
// //       status: 500,
// //       headers: { 'Content-Type': 'application/json' },
// //     })
// //   }
// // }



// import nodemailer from 'nodemailer'

// export async function POST(req) {
//   try {
//     const body = await req.json()
//     const { name, email, number, budget, service } = body

//     // Validate required fields
//     if (!name || !email || !number || !budget || !service) {
//       console.error('❌ Missing fields:', {
//         name,
//         email,
//         number,
//         budget,
//         service,
//       })

//       return new Response(JSON.stringify({ error: 'Missing required fields' }), {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' },
//       })
//     }

//     // Configure nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     })

//     // Construct email
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // Send to yourself
//       subject: `📨 New Inquiry from ${name} – Ghostwriting Website`,
//       text: `
// You have received a new inquiry from your ghostwriting website:

// 👤 Name: ${name}
// 📧 Email: ${email}
// 📞 Phone: ${number}

// 🛠️ Requested Service: ${service}
// 💰 Budget: ${budget}

// 📝 Message (Client Style):
// Hello,

// I’m interested in your "${service}" service. My current budget for this project is "${budget}". I’d appreciate it if we could connect and discuss the next steps.

// Looking forward to hearing from you soon.

// Best regards,  
// ${name}

// —
//       `,
//     }

//     // Send email
//     await transporter.sendMail(mailOptions)

//     return new Response(JSON.stringify({ message: '✅ Email sent successfully!' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   } catch (error) {
//     console.error('❌ Email send error:', error)
//     return new Response(JSON.stringify({ error: '❌ Failed to send email' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   }
// }
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, number, budget, service } = body

    // Validate required fields
    if (!name || !email || !number || !budget || !service) {
      console.error('❌ Missing fields:', {
        name,
        email,
        number,
        budget,
        service,
      })

      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Generate current date and time
    const submittedAt = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

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
      subject: `📨 New Inquiry from ${name} – Ghostwriting Website`,
      text: `
You have received a new inquiry from your ghostwriting website:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${number}

🛠️ Requested Service: ${service}
💰 Budget: ${budget}

📝 Message (Client Style):
Hello,

I’m interested in your "${service}" service. My current budget for this project is "${budget}". I’d appreciate it if we could connect and discuss the next steps.

Looking forward to hearing from you soon.

Best regards,  
${name}

📅 Submitted On: ${submittedAt}
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
