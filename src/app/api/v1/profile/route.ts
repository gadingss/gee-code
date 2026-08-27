import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: "success",
        data: {
            name: "Gading Seto Satrio",
            role: "Fullstack Developer",
            location: "Indonesia",
            experience: "2+ years",
            available_for_hire: true,
            bio: "Passionate fullstack developer specializing in React, Next.js, and Laravel. I build modern, scalable web applications with great user experiences.",
            links: {
                github: "https://github.com/gadingss",
                linkedin: "https://linkedin.com/in/gading-seto-satrio-7b94752a7",
                instagram: "https://instagram.com/gadiingss_"
            }
        },
        timestamp: new Date().toISOString()
    });
}
