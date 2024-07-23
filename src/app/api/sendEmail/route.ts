import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, email, contact, subject, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <div style="background-color: #66bfbf; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Hey Alisha, you have a new message!</h2>
        </div>
        <div style="padding: 20px;">
          <p><strong style="color: #333;">Full Name:</strong> ${fullName}</p>
          <p><strong style="color: #333;">Email:</strong> ${email}</p>
          <p><strong style="color: #333;">Contact:</strong> ${contact}</p>
          <p><strong style="color: #333;">Subject:</strong> ${subject}</p>
          <p><strong style="color: #333;">Description:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${description}</p>
        </div>
      </div>
    `,
  };

  const replyMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting me",
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <div style="background-color: #66bfbf; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Thank you for reaching out!</h2>
        </div>
        <div style="padding: 20px;">
          <p>Hi ${fullName},</p>
          <p>Thank you for reaching out. I have received your message and will get back to you soon.</p>
          <p>Regards,</p>
          <p><strong>Alisha Khatri</strong></p>
        </div>
        <div style="background-color: #f5f5f5; padding: 10px; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #999;">This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(replyMailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
