import nodemailer from "nodemailer";

const smtpPort = Number(process.env.SMTP_PORT ?? 587);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  // Port 465 is implicit TLS; 587 (and others) use STARTTLS negotiated after connecting.
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const SUBSCRIBE_TO_EMAIL =
  process.env.SUBSCRIBE_TO_EMAIL || "hello@stateofdominion.co.za";

export type SubscribeSubmission = {
  firstName: string;
  lastName?: string;
  email: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendSubscribeEmail(data: SubscribeSubmission) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

  await transporter.sendMail({
    from: `"State of Dominion Website" <${process.env.SMTP_USER}>`,
    to: SUBSCRIBE_TO_EMAIL,
    replyTo: data.email,
    subject: `New waitlist signup: ${fullName}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#0a0a0a;color:#f5f1ea;border-radius:4px">
        <h1 style="margin:0 0 20px;font-size:18px;letter-spacing:0.05em">New Waitlist Signup</h1>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#9a958c;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:100px">Name</td>
            <td style="padding:8px 0;color:#f5f1ea;font-size:14px">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#9a958c;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:100px">Email</td>
            <td style="padding:8px 0;color:#f5f1ea;font-size:14px">${escapeHtml(data.email)}</td>
          </tr>
        </table>
      </div>
    `,
  });
}
