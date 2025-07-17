import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    // Replace with your actual backend logic (e.g., save to database or send email)
    console.log('Form submission:', { name, email, message });
    // Example: Send to your meana.xyz API or email service
    // await fetch('https://meana.xyz/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
