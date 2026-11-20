import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, honeypot } = req.body ?? {};

  // Silent bot drop
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false, // STARTTLS for port 587 (Office 365)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const submittedAt = new Date().toLocaleString('en-CA', {
    timeZone: 'America/Toronto',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Inquiry – AIMS Healthcare College</title>
</head>
<body style="margin:0;padding:0;background-color:#eef2f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#eef2f7;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
          style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.10);">

          <!-- ── Header ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#003366 0%,#005baa 100%);padding:40px 48px;text-align:center;">
              <p style="margin:0 0 6px;color:rgba(255,255,255,0.65);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">AIMS Healthcare College</p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;line-height:1.2;">New Contact Inquiry</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Submitted via the website contact form</p>
            </td>
          </tr>

          <!-- ── Alert Banner ── -->
          <tr>
            <td style="background:#e8f4fd;padding:14px 48px;border-bottom:1px solid #c8e1f5;">
              <p style="margin:0;font-size:13px;color:#1a5a8a;font-weight:600;">
                📬 &nbsp;Action required — please respond to this inquiry within 1–2 business days.
              </p>
            </td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="padding:40px 48px;">

              <!-- Sender Info -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:28px;">
                <tr>
                  <td width="50%" style="padding-right:8px;vertical-align:top;">
                    <div style="background:#f4f7fb;border-radius:10px;padding:18px 20px;border-left:4px solid #005baa;">
                      <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#8899aa;">Full Name</p>
                      <p style="margin:6px 0 0;font-size:16px;font-weight:700;color:#0d1f3c;">${name}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;vertical-align:top;">
                    <div style="background:#f4f7fb;border-radius:10px;padding:18px 20px;border-left:4px solid #005baa;">
                      <p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#8899aa;">Email Address</p>
                      <p style="margin:6px 0 0;font-size:14px;font-weight:600;color:#005baa;word-break:break-word;">
                        <a href="mailto:${email}" style="color:#005baa;text-decoration:none;">${email}</a>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="background:#f4f7fb;border-radius:10px;padding:22px 24px;border-left:4px solid #00a878;margin-bottom:32px;">
                <p style="margin:0 0 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#8899aa;">Message</p>
                <p style="margin:0;font-size:15px;color:#2c3e50;line-height:1.75;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re%3A%20Your%20Inquiry%20–%20AIMS%20Healthcare%20College"
                      style="display:inline-block;background:#005baa;color:#ffffff;text-decoration:none;
                             padding:15px 40px;border-radius:10px;font-size:14px;font-weight:700;
                             letter-spacing:0.3px;box-shadow:0 4px 12px rgba(0,91,170,0.3);">
                      ✉️ &nbsp; Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#f4f7fb;padding:24px 48px;border-top:1px solid #e0e8f0;text-align:center;">
              <p style="margin:0;font-size:11px;color:#aab;line-height:1.6;">
                Received: ${submittedAt} (Eastern Time)<br/>
                This message was automatically generated from the AIMS Healthcare College website.<br/>
                Do not reply to this notification — use the button above to respond directly.
              </p>
              <p style="margin:12px 0 0;font-size:11px;color:#ccd;">
                © ${new Date().getFullYear()} AIMS Healthcare College &nbsp;·&nbsp; Ontario, Canada
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    await transporter.sendMail({
      from: `"AIMS Healthcare College Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `📩 Contact Inquiry from ${name}`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] SMTP error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again or call us at (905) 525-5111.' });
  }
}
