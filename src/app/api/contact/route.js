import nodemailer from "nodemailer";

export async function POST(req)  {
    const { name, number, message } = await req.json()
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    try {
        await transporter.sendMail({
            from: "polinaf821@gmail.com",
            to: "polinaf821@gmail.com",
            subject: `Contact form submission from ${name}`,
            html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${number}</p><br>
        <h1><strong>Message: </strong> ${message}</h1><br>
      `
        });
    } catch (error) {
        return new Response("Hello, Next.js!");
    }
    return new Response("Hello, Next.js!");
}
