export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { from_name, reply_to, subject, message } = data;

    // Validate data
    if (!from_name || !reply_to || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const serviceId = import.meta.env.EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY;

    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name,
        reply_to,
        subject: subject || 'No Subject',
        message,
      },
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ message: 'Email sent successfully' }),
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      console.error('EmailJS Error:', errorText);
      return new Response(
        JSON.stringify({ message: 'Failed to send email via provider' }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
};
