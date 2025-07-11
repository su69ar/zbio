import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const data = await request.json()

  const { name, email, phone, guests, checkIn, checkOut, message } = data
  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    requireTLS: true,
  })

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Inquiry Graha Ayoe - ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Guests: ${guests}
      Check-in Date: ${checkIn}
      Check-out Date: ${checkOut}
      Message: ${message}
    `,
  }

  try {
    // Send the email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
