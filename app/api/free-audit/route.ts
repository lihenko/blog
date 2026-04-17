import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, website, details, token } = await req.json();

    // ❌ якщо немає токена
    if (!token) {
      return new Response(
        JSON.stringify({ error: "Captcha token missing" }),
        { status: 400 }
      );
    }

    // 🔐 Перевірка reCAPTCHA
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
        JSON.stringify({ error: "Captcha verification failed" }),
        { status: 400 }
      );
    }

    // 📩 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      tls: {
        rejectUnauthorized: false, // ⚠️ тимчасово ок
      },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📧 Відправка email
    await transporter.sendMail({
      from: `"Free Audit" <${process.env.SMTP_USER}>`,
      to: "hello@lihenko.com.ua",
      subject: `Free Audit Request: ${website}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Website: ${website}

Details:
${details}
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("FREE AUDIT ERROR:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to process request",
      }),
      { status: 500 }
    );
  }
}