import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Atau SMTP lain
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"ZBIO Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Email tujuan
      subject: `New Message from ${name}`,
      html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({ message: 'Failed to send message.' })
  }
}
