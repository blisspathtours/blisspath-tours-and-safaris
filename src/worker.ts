export interface Env {
  ASSETS: { fetch: typeof fetch };
  RESEND_API_KEY?: string;
  INQUIRY_RECIPIENT_EMAIL?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle Form Submissions: /api/inquiry
    if (url.pathname === '/api/inquiry' && request.method === 'POST') {
      try {
        const data = await request.json() as Record<string, any>;
        const recipient = env.INQUIRY_RECIPIENT_EMAIL || 'blisspathtourssafaris@gmail.com';
        const apiKey = env.RESEND_API_KEY;

        const subject = `🦁 New Safari Inquiry: ${data.name || 'Traveler'} - ${data.safari || data.destination || data.type || 'Custom Trip'}`;

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
            <div style="background: #094423; color: white; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Safari Booking Inquiry</h1>
              <p style="margin: 6px 0 0 0; color: #FFAE19; font-size: 14px;">Bliss Path Tours & Safaris</p>
            </div>
            
            <div style="padding: 24px; background: #ffffff; color: #1f2937;">
              <h2 style="font-size: 18px; border-bottom: 2px solid #FFAE19; padding-bottom: 8px; margin-top: 0;">Traveler Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.name || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email || 'Not provided'}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td><td><a href="tel:${data.phone}">${data.phone || 'Not provided'}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Type / Category:</td><td>${data.type || 'Custom Safari'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Destination / Tour:</td><td>${data.destination || data.safari || data.package || 'General Inquiry'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Travel Timing:</td><td>${data.dates || data.month || 'Flexible'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Party Size:</td><td>${data.partySize || data.travelers || '2 Adults'}</td></tr>
              </table>

              ${data.message || data.notes ? `
                <h3 style="font-size: 16px; margin-bottom: 8px;">Special Requests / Notes:</h3>
                <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border-left: 4px solid #0F6B38; font-size: 14px; line-height: 1.6;">
                  ${data.message || data.notes}
                </div>
              ` : ''}

              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/${(data.phone || '').replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px; margin-right: 8px;">
                  Reply via WhatsApp
                </a>
                <a href="mailto:${data.email}" style="display: inline-block; background: #0F6B38; color: white; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px;">
                  Reply via Email
                </a>
              </div>
            </div>

            <div style="background: #f3f4f6; color: #6b7280; padding: 16px; text-align: center; font-size: 12px;">
              © ${new Date().getFullYear()} Bliss Path Tours & Safaris • Sent from https://blisspathtours.com
            </div>
          </div>
        `;

        // 1. Try sending via Resend with configured API key
        if (apiKey) {
          // Attempt 1: from inquiries@blisspathtours.com (verified custom domain)
          let resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'Bliss Path Inquiries <inquiries@blisspathtours.com>',
              to: [recipient],
              reply_to: data.email || undefined,
              subject,
              html: htmlContent
            })
          });

          // Attempt 2: If custom domain is pending verification, fallback to onboarding@resend.dev
          if (!resendRes.ok) {
            resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: 'Bliss Path Safaris <onboarding@resend.dev>',
                to: [recipient],
                reply_to: data.email || undefined,
                subject,
                html: htmlContent
              })
            });
          }

          if (resendRes.ok) {
            const resendData = await resendRes.json() as Record<string, any>;
            return new Response(JSON.stringify({ success: true, provider: 'resend', id: resendData.id }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }
        }

        // 2. Fallback forwarding via Web3Forms (Zero-config direct inbox delivery)
        const fallbackRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: 'c9f0294e-d636-47a3-8ce0-5c62df508b5e',
            subject,
            from_name: 'Bliss Path Safari Website',
            to_email: recipient,
            ...data
          })
        });

        return new Response(JSON.stringify({ success: true, provider: 'forwarded' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Pass through to Astro static assets
    return env.ASSETS.fetch(request);
  }
};
