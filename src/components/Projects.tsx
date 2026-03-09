"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Info } from "lucide-react";

export const projects = [
    {
        title: "Minikiyo Dimsum",
        slug: "minikiyo-dimsum",
        description: "A full-stack e-commerce solution with Next.js, Stripe integration, and a custom CMS dashboard.",
        fullDescription: "Minikiyo Dimsum is a comprehensive e-commerce platform designed for a dimsum business. It features a seamless ordering flow, integration with payment gateways for secure transactions, and a robust admin dashboard for managing products, orders, and customer data. Built with Laravel and Tailwind CSS, it prioritizes performance and user experience.",
        image: "/projects/minikiyo/minikiyo.png",
        screenshots: [
            "/projects/minikiyo/minikiyo.png",
            "/projects/minikiyo/1.png",
            "/projects/minikiyo/2.png",
            "/projects/minikiyo/3.png",
            "/projects/minikiyo/4.png"
        ],
        tags: ["Laravel", "Blade", "Tailwind CSS", "Payment Gateway"],
        liveUrl: "https://kelompok4.karyabersama.online/",
        githubUrl: "#",
        techStack: ["Laravel", "MySQL", "Tailwind CSS", "Midtrans"]
    },
    {
        title: "SIMOLI-CEKAT",
        slug: "simoli-cekat",
        description: "An AI-powered application that helps users write better content with real-time suggestions.",
        fullDescription: "SIMOLI-CEKAT is a specialized application focused on content optimization and writing assistance. It provides real-time suggestions, grammar checks, and SEO analysis to help users create high-quality content efficiently. This system was developed to streamline communication and documentation processes within governmental organizations.",
        image: "/projects/simoli-cekat.png",
        screenshots: [
            "/projects/simoli-cekat.png",
            "https://images.unsplash.com/photo-1454165833767-027ffea9e51b?q=80&w=800",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
        ],
        tags: ["Laravel", "Blade", "Tailwind CSS"],
        liveUrl: "https://simolicekat.kedirikab.go.id/",
        githubUrl: "#",
        techStack: ["Laravel", "PostgreSQL", "Tailwind CSS", "Redis"]
    },
    {
        title: "Task Management App",
        slug: "task-management-app",
        description: "A beautiful, drag-and-drop task management tool inspired by Linear and Notion.",
        fullDescription: "A productivity tool that combines the simplicity of Notion with the power of Linear. It features a highly interactive drag-and-drop interface for task management, real-time collaboration, and detailed project tracking. The app uses a modern tech stack to ensure a smooth and responsive user interface.",
        image: "https://images.unsplash.com/photo-1611224923853-807d2c385f09?q=80&w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1611224923853-807d2c385f09?q=80&w=800",
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800"
        ],
        tags: ["Vue", "Tailwind CSS", "Supabase", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        techStack: ["Vue.js", "Supabase", "Tailwind CSS", "Framer Motion"]
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-muted/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A selection of my recent work that showcases my technical skills and problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="group relative h-full rounded-xl bg-gradient-to-b from-border/50 to-border/10 p-[1px] transition-all duration-500 hover:from-primary/50 hover:to-blue-500/50 hover:shadow-2xl hover:shadow-primary/20">
                                <Card className="h-full flex flex-col overflow-hidden bg-card/90 backdrop-blur-xl border-none rounded-[11px]">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <CardDescription className="text-sm pt-2 line-clamp-3">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="font-medium">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="gap-3 pt-4 border-t border-border/50 flex-wrap">
                                        <Button variant="outline" size="sm" className="flex-1 gap-2 min-w-[100px]" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                        </Button>
                                        <Button variant="secondary" size="sm" className="flex-1 gap-2 min-w-[100px]" asChild>
                                            <Link href={`/projects/${project.slug}`}>
                                                <Info className="w-4 h-4" /> Detail
                                            </Link>
                                        </Button>
                                        {project.liveUrl !== "#" && (
                                            <Button size="sm" className="flex-1 gap-2 min-w-[100px]" asChild>
                                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                    <ExternalLink className="w-4 h-4" /> Live
                                                </a>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button variant="ghost" size="lg" className="rounded-full group">
                        View All Projects
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
