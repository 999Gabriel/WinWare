import { NextResponse } from 'next/server';
import { saveContactMessage } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Processing contact form submission:', {
      name,
      email,
      subject: subject || 'Contact from Website',
    });

    // Save the message to Firebase Firestore
    const result = await saveContactMessage({
      name,
      email,
      subject: subject || 'Contact from Website',
      message,
      timestamp: new Date().toISOString(),
    });

    if (!result.success) {
      throw new Error('Failed to save message to database');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been saved',
        details: 'The website owner will be notified of your message.',
        id: result.id,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);

    // Provide more detailed error information
    return NextResponse.json(
      { 
        error: 'Failed to process your message',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
