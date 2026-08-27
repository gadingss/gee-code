import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: "success",
        data: {
            frontend: [
                { name: "React", level: "Advanced", years: 2 },
                { name: "Next.js", level: "Advanced", years: 2 },
                { name: "TypeScript", level: "Advanced", years: 2 },
                { name: "Tailwind CSS", level: "Advanced", years: 2 },
                { name: "Framer Motion", level: "Intermediate", years: 1 }
            ],
            backend: [
                { name: "Laravel", level: "Advanced", years: 2 },
                { name: "Node.js", level: "Intermediate", years: 1 },
                { name: "REST APIs", level: "Advanced", years: 2 },
                { name: "GraphQL", level: "Beginner", years: 1 }
            ],
            tools: [
                { name: "Git", level: "Advanced", years: 2 },
                { name: "Docker", level: "Intermediate", years: 1 },
                { name: "PostgreSQL", level: "Advanced", years: 2 },
                { name: "MySQL", level: "Advanced", years: 2 }
            ]
        },
        total_skills: 13,
        timestamp: new Date().toISOString()
    });
}
