import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // 1. Fetch GitHub Repos (gadingss)
        const githubRes = await fetch('https://api.github.com/users/gadingss', { 
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        const githubData = await githubRes.json();
        
        // Since getting total commits across all repos requires authenticated GraphQL, 
        // we'll use a fun multiplier based on public repos as a placeholder, 
        // or just a static high number if the API fails.
        const repos = githubData.public_repos || 30;
        const commits = (repos * 142) + 1205; // Fun mock formula

        // 2. Fetch WakaTime Stats
        // Using basic auth with the API key from environment variables
        const wakatimeKey = process.env.WAKATIME_API_KEY || '';
        const wakaRes = await fetch('https://wakatime.com/api/v1/users/current/stats/all_time', {
            headers: {
                Authorization: `Basic ${Buffer.from(wakatimeKey).toString('base64')}`
            },
            next: { revalidate: 3600 }
        });
        
        let codingHours = 4520; // Fallback
        if (wakaRes.ok) {
            const wakaData = await wakaRes.json();
            if (wakaData?.data?.total_seconds) {
                codingHours = Math.floor(wakaData.data.total_seconds / 3600);
            }
        }

        return NextResponse.json({
            projects: repos,
            commits: commits,
            codingHours: codingHours,
            coffee: 1337,     // Fun static stat
            cigarettes: 404   // Fun static stat
        });
    } catch (error) {
        console.error("Error fetching stats:", error);
        // Fallback data if anything fails
        return NextResponse.json({
            projects: 30,
            commits: 4850,
            codingHours: 4520,
            coffee: 1337,
            cigarettes: 404
        });
    }
}
