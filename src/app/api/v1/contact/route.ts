import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: "success",
        data: {
            email: "gadingseto@example.com",
            whatsapp: "+6285746508439",
            social: {
                github: "gadingss",
                linkedin: "gading-seto-satrio-7b94752a7",
                instagram: "gadiingss_"
            },
            availability: {
                freelance: true,
                fulltime: true,
                preferred_contact: "whatsapp",
                response_time: "< 24 hours"
            },
            timezone: "Asia/Jakarta (WIB, UTC+7)"
        },
        timestamp: new Date().toISOString()
    });
}
