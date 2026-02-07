import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    if (req.method === 'POST') {
        try {
            const {
                firstName,
                lastName,
                email,
                telephone,
                message,
            } = await req.json();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `New Message from ${firstName} ${lastName}`,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telephone:</strong> ${telephone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            };

            await transporter.sendMail(mailOptions);

            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }
}
