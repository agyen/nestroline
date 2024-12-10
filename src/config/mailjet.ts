export const mailjetConfig = {
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || '',
  fromEmail: 'noreply@nestroline.com',
  fromName: 'Nestroline',
  toEmail: 'work@nestroline.com',
  toName: 'Nestroline Team'
};