import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Parse the form data from the request
    const { name, email, message } = await request.json();

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // lewnetmuthomi@gmail.com
        pass: process.env.EMAIL_PASS, // App Password: xjvp xayz kfpf qful
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender: lewnetmuthomi@gmail.com
      to: process.env.EMAIL_TO, // Recipient: mwirigilewis005@gmail.com
      replyTo: email, // Reply-to: User's email from the form
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message
        : "Failed to send email";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}