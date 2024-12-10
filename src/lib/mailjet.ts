import Mailjet from 'node-mailjet';
import { mailjetConfig } from '@/config/mailjet';

const mailjet = new Mailjet({
  apiKey: mailjetConfig.apiKey,
  apiSecret: mailjetConfig.apiSecret
});

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: mailjetConfig.fromEmail,
            Name: mailjetConfig.fromName
          },
          To: [
            {
              Email: mailjetConfig.toEmail,
              Name: mailjetConfig.toName
            }
          ],
          Subject: `New Contact Form Submission from ${data.name}`,
          TextPart: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
          `,
          HTMLPart: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<br>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
          `,
          ReplyTo: {
            Email: data.email,
            Name: data.name
          }
        }
      ]
    });

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to send email'
    };
  }
};