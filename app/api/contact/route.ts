import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    // ❌ без captcha не пускаємо
    if (!token) {
      return new Response(
        JSON.stringify({ error: "Captcha missing" }),
        { status: 400 }
      );
    }

    // 🔐 перевірка captcha
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captcha = await verifyRes.json();

    if (!captcha.success) {
      return new Response(
        JSON.stringify({ error: "Captcha failed" }),
        { status: 400 }
      );
    }

    // 📩 SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "hello@lihenko.com.ua",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500 }
    );
  }
}