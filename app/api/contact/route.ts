import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "facuu201202@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: `Email: ${email}\n\nMensaje:\n${message}`,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
