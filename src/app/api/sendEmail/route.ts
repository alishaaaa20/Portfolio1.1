import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();
    const { email, subject, message } = reqBody;

    // Sending email to your personal email
    const data = await resend.emails.send({
      from: "alishakhatri8888@gmail.com",
      to: "alisha.191502@ncit.edu.np",
      subject: subject,
      html: `<p>${message}</p>`,
    });

    // Sending a confirmation email to the sender
    await resend.emails.send({
      from: "alishakhatri8888@gmail.com",
      to: email,
      subject: "Reply to your message",
      html: `<h1>Hello friend,</h1>
      <p>I have got your message and will be connected to you soon</p>
      <h2>Have a good day!!!</h2>`,
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: (err as Error).message }, { status: 500 });
  }
}
