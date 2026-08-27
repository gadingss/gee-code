"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Info, MousePointer2 } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export const projects = [
    {
        title: "Minikiyo Dimsum",
        slug: "minikiyo-dimsum",
        number: "01",
        color: "#f97316", // Tailwind orange-500
        description: "A full-stack e-commerce solution with Next.js, Stripe integration, and a custom CMS dashboard.",
        description_in: "Solusi e-commerce full-stack dengan integrasi payment gateway Midtrans dan dasbor CMS kustom.",
        fullDescription: "Minikiyo Dimsum is a comprehensive e-commerce platform designed for a dimsum business. It features a seamless ordering flow, integration with payment gateways for secure transactions, and a robust admin dashboard for managing products, orders, and customer data. Built with Laravel and Tailwind CSS, it prioritizes performance and user experience.",
        fullDescription_in: "Minikiyo Dimsum adalah platform e-commerce komprehensif yang dirancang untuk bisnis dimsum. Platform ini menampilkan alur pemesanan yang mulus, integrasi dengan payment gateway untuk transaksi yang aman, dan dasbor admin yang tangguh untuk mengelola produk, pesanan, dan data pelanggan. Dibangun menggunakan Laravel dan Tailwind CSS, aplikasi ini memprioritaskan performa dan pengalaman pengguna.",
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
        number: "02",
        color: "#3b82f6", // Tailwind blue-500
        description: "An AI-powered application that helps users write better content with real-time suggestions.",
        description_in: "Aplikasi berbasis Laravel yang membantu optimasi konten dan bantuan menulis dengan saran waktu nyata.",
        fullDescription: "SIMOLI-CEKAT is a specialized application focused on content optimization and writing assistance. It provides real-time suggestions, grammar checks, and SEO analysis to help users create high-quality content efficiently. This system was developed to streamline communication and documentation processes within governmental organizations.",
        fullDescription_in: "SIMOLI-CEKAT adalah aplikasi khusus yang berfokus pada optimasi konten dan bantuan menulis. Menyediakan saran waktu nyata, pemeriksaan tata bahasa, dan analisis SEO untuk membantu pengguna membuat konten berkualitas tinggi secara efisien. Sistem ini dikembangkan untuk menyederhanakan proses komunikasi dan dokumentasi di lingkungan dinas pemerintah daerah.",
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
        number: "03",
        color: "#8b5cf6", // Tailwind violet-500
        description: "A beautiful, drag-and-drop task management tool inspired by Linear and Notion.",
        description_in: "Aplikasi manajemen tugas drag-and-drop yang indah terinspirasi oleh Linear dan Notion.",
        fullDescription: "A productivity tool that combines the simplicity of Notion with the power of Linear. It features a highly interactive drag-and-drop interface for task management, real-time collaboration, and detailed project tracking. The app uses a modern tech stack to ensure a smooth and responsive user interface.",
        fullDescription_in: "Alat produktivitas yang menggabungkan kesederhanaan Notion dengan kekuatan Linear. Menampilkan antarmuka drag-and-drop yang sangat interaktif untuk manajemen tugas, kolaborasi waktu nyata, dan pelacakan proyek yang detail. Aplikasi ini menggunakan tech stack modern untuk memastikan antarmuka pengguna yang lancar dan responsif.",
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
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const { t, lang } = useLanguage();

    // Calculate horizontal scroll: -70% usually works well for 3 cards
    // 0 is start, -66% for 3 items might be precise but adding buffer for spacing
    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex flex-col h-screen overflow-hidden">
                <div className="w-full pt-12 md:pt-16 px-6 md:px-12 flex justify-between items-start z-20 shrink-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground/20 uppercase">
                            {t.projects.title.split(' ')[0]} <br className="hidden md:block" /> {t.projects.title.split(' ').slice(1).join(' ')}
                        </h2>
                    </motion.div>

                    {/* Horizontal Scroll Progress Indicator */}
                    <div className="hidden md:flex items-center gap-4 mt-6">
                        <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground">Progress</span>
                        <div className="w-48 h-[2px] bg-muted overflow-hidden rounded-full">
                            <motion.div
                                className="h-full bg-primary"
                                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center">
                    <motion.div style={{ x }} className="flex gap-12 px-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[450px] flex-shrink-0">
                            {/* Animated Background Glow */}
                            <div
                                className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                                style={{ backgroundColor: `${project.color}15` }}
                            />

                            <Card className="relative h-full w-full overflow-hidden bg-card/40 backdrop-blur-2xl border border-white/5 rounded-[32px] flex flex-col group/card shadow-2xl transition-all duration-500 hover:border-primary/20">
                                {/* Number Indicator */}
                                <div className="absolute top-8 right-8 z-20 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-4xl font-black font-mono" style={{ color: project.color }}>
                                        {project.number}
                                    </span>
                                </div>

                                {/* Project Image Box */}
                                <div className="relative h-[45%] w-full overflow-hidden p-6 pb-0">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border border-white/5">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                    </div>
                                </div>

                                <CardHeader className="pt-6 px-8">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border-none text-muted-foreground">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="px-8 flex-grow">
                                    <CardDescription className="text-base text-muted-foreground/80 font-medium leading-relaxed line-clamp-3">
                                        {lang === "IN" ? project.description_in : project.description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter className="px-8 pb-8 flex gap-3">
                                    <Button variant="outline" size="sm" className="h-12 rounded-xl flex-1 gap-2 font-bold uppercase tracking-wider text-[10px] border-white/10 hover:bg-white/5" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                            <Github className="w-4 h-4" /> {t.projects.code}
                                        </a>
                                    </Button>
                                    <Button size="sm" className="h-12 rounded-xl flex-1 gap-2 font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-primary/20 hover:scale-[1.05] transition-transform" asChild>
                                        <Link href={`/projects/${project.slug}`}>
                                            <Info className="w-4 h-4" /> {t.projects.detail}
                                        </Link>
                                    </Button>
                                    {project.liveUrl !== "#" && (
                                        <Button variant="secondary" size="sm" className="h-12 w-12 rounded-xl flex items-center justify-center p-0 border-white/10" asChild title="Live Demo">
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="h-[450px] w-[350px] md:h-[600px] md:w-[450px] flex-shrink-0 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-center space-y-6"
                        >
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary animate-pulse">
                                <MousePointer2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest">{t.projects.more}</h3>
                            <Button variant="ghost" className="hover:text-primary font-bold group">
                                {t.projects.fullArchive}
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
                </div>
            </div>

            {/* Scroll Indicator Bottom */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">{t.projects.explore}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
}
