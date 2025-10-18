import { NextRequest, NextResponse } from 'next/server';
import { saveMessage } from '../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save the message to our database
    const savedMessage = await saveMessage({ name, email, message });

    // Log the message for debugging
    console.log('New contact form submission:', savedMessage);

    // In a real implementation, you might also:
    // - Send an email notification to yourself using SendGrid, Nodemailer, or Resend
    // - Send an auto-reply to the sender
    // - Integrate with external services like Formspree, Netlify Forms, etc.

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
