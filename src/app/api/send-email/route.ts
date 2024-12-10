import { NextResponse } from 'next/server';
import { mailjetConfig } from '@/config/mailjet';
import { sendEmail } from '@/lib/mailjet';

export async function POST(request: Request) {
  try {
    if (!mailjetConfig.apiKey || !mailjetConfig.apiSecret) {
      return NextResponse.json(
        { success: false, message: 'Mailjet API credentials are not configured' },
        { status: 500 }
      );
    }

    const data = await request.json();
    const result = await sendEmail(data);
    
    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}