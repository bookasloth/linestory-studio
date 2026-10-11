import nodemailer from "nodemailer";
import { site } from "@/data/site";

// Sends contact-form enquiries through Hostinger SMTP.
// Env (set in Vercel): SMTP_USER, SMTP_PASS; optional SMTP_HOST, SMTP_PORT, CONTACT_TO.
export const runtime = "nodejs";

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  const form = await req.formData();
  if (clean(form.get("company"), 100)) return Response.json({ ok: true }); // honeypot

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 200);
  const location = clean(form.get("location"), 200);
  const message = clean(form.get("message"), 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return Response.json({ error: "Please fill name, a valid email and message." }, { status: 400 });

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS)
    return Response.json({ error: "Mail is not configured." }, { status: 500 });

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: `"${site.name} website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: { name, address: email },
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nLocation: ${location || "-"}\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact mail failed", err);
    return Response.json({ error: "Could not send right now." }, { status: 502 });
  }
}
