import sgMail from '@sendgrid/mail';
import { emailConfig } from '../config/email.config';
import type { EmailData, EmailResponse } from '../types/email.types';

sgMail.setApiKey(emailConfig.sendgridApiKey);

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    const msg = {
      to: emailConfig.toEmail,
      from: emailConfig.fromEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<br>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };

    await sgMail.send(msg);
    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email'
    };
  }
};