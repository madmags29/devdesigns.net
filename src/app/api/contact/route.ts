import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Log the submission (in a real app, you'd use Resend, SendGrid, or Nodemailer here)
        console.log('New Contact Form Submission:');
        console.log('Recipient: hello@devdesigns.net');
        console.log('From:', name, `<${email}>`);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Simulate a successful email send to hello@devdesigns.net
        // In a production environment, you would integrate a mailer service here.

        return NextResponse.json(
            { message: 'Your message has been received! We will get back to you soon.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
