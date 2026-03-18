const { Resend } = require('resend');

// This function is automatically triggered by Netlify
// whenever a form submission is received.
exports.handler = async function (event) {
  try {
    const { payload } = JSON.parse(event.body);
    const { name, lastname, email, message } = payload.data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'HODLife <info@hodlife.bm>',
      to: email,
      subject: 'Thank you for contacting HODLife',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #1a1a2e;">Thank you for reaching out, ${name}!</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of what you sent us:</p>
          <blockquote style="border-left: 3px solid #ccc; padding-left: 15px; color: #555;">
            ${message}
          </blockquote>
          <br />
          <p>Best regards,<br /><strong>The HODLife Team</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">
            HODLife Insurance Company Ltd.<br />
            Canon's Court, 22 Victoria Street, Hamilton, Pembroke, HM 12, Bermuda<br />
            <a href="mailto:info@hodlife.bm" style="color: #999;">info@hodlife.bm</a>
          </p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Auto-reply sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending auto-reply:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send auto-reply' }),
    };
  }
};
