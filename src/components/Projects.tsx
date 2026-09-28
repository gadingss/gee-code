"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Info, ArrowRight, Layers } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const projects = [
    {
        title: "Minikiyo Dimsum",
        slug: "minikiyo-dimsum",
        number: "01",
        color: "#f97316", // Tailwind orange-500
        description: "A full-stack e-commerce platform with Midtrans payment gateway integration and a robust admin dashboard for dimsum business management.",
        description_in: "Platform e-commerce full-stack dengan integrasi payment gateway Midtrans dan dasbor admin yang tangguh untuk manajemen bisnis dimsum.",
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
        description: "A comprehensive system for documenting and analyzing fish disease test results and water quality parameters with real-time reporting.",
        description_in: "Sistem komprehensif untuk mendokumentasikan dan menganalisis hasil uji penyakit ikan serta parameter kualitas air dengan pelaporan waktu nyata.",
        fullDescription: "SIMOLI-CEKAT is a specialized fish disease and water quality testing system designed for aquaculture monitoring. It enables users to record disease test results, water quality parameters, and maintain detailed laboratory reports. The system provides real-time data analysis, historical tracking, and comprehensive documentation for fish farming operations, ensuring quality control and disease prevention.",
        fullDescription_in: "SIMOLI-CEKAT adalah sistem khusus untuk pengujian penyakit ikan dan kualitas air yang dirancang untuk pemantauan akuakultur. Sistem ini memungkinkan pengguna mencatat hasil uji penyakit, parameter kualitas air, dan memelihara laporan laboratorium terperinci. Sistem ini menyediakan analisis data waktu nyata, pelacakan riwayat, dan dokumentasi komprehensif untuk operasi peternakan ikan, memastikan kontrol kualitas dan pencegahan penyakit.",
        image: "/projects/simoli-cekat/simoli-cekat.png",
        screenshots: [
            "/projects/simoli-cekat/simoli-cekat.png",
            "/projects/simoli-cekat/1.png",
            "/projects/simoli-cekat/2.png"
        ],
        tags: ["Laravel", "MySQL", "Tailwind CSS", "Reporting"],
        liveUrl: "https://simolicekat.kedirikab.go.id/",
        githubUrl: "#",
        techStack: ["Laravel", "MySQL", "Tailwind CSS"]
    },
    {
        title: "LBB Number One",
        slug: "lbb-number-one",
        number: "03",
        color: "#10b981", // Tailwind emerald-500
        description: "A private tutoring management system for scheduling, student tracking, and tutor coordination.",
        description_in: "Sistem manajemen bimbingan les privat untuk penjadwalan, pelacakan siswa, dan koordinasi tutor.",
        fullDescription: "LBB Number One is a comprehensive management system designed for private tutoring businesses. It streamlines scheduling between tutors and students, tracks student progress and attendance, manages tutor assignments, and provides detailed reporting for business owners. The platform ensures efficient coordination of tutoring sessions and helps maintain high-quality educational services.",
        fullDescription_in: "LBB Number One adalah sistem manajemen komprehensif yang dirancang untuk bisnis bimbingan les privat. Sistem ini menyederhanakan penjadwalan antara tutor dan siswa, melacak kemajuan dan kehadiran siswa, mengelola penugasan tutor, serta menyediakan laporan terperinci untuk pemilik usaha. Platform ini memastikan koordinasi sesi les yang efisien dan membantu menjaga layanan pendidikan yang berkualitas tinggi.",
        image: "/projects/lbb-number-one/lbb-number-one.png",
        screenshots: [
            "/projects/lbb-number-one/lbb-number-one.png",
            "/projects/lbb-number-one/1.png",
            "/projects/lbb-number-one/2.png"
        ],
        tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
        liveUrl: "#",
        githubUrl: "#",
        techStack: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap"]
    },
    {
        title: "NEXORA",
        slug: "nexora",
        number: "04",
        color: "#06b6d4",
        description: "A Web3 & on-chain analytics platform featuring a dark financial terminal UI for tracking crypto markets, wallet activities, smart money, and real-time paper trading.",
        description_in: "Platform Web3 & on-chain analytics dengan tampilan financial terminal untuk memantau market crypto, aktivitas wallet, smart money, dan paper trading real-time.",
        fullDescription: "NEXORA is a comprehensive Web3 and on-chain analytics platform built with a high-performance financial terminal interface. It empowers traders and crypto enthusiasts to monitor live cryptocurrency markets, track whale and smart money wallet movements, inspect on-chain transactions via Etherscan & EVM RPCs, and practice trading strategies using a real-time paper trading engine. Designed with dark financial aesthetic inspired by professional Bloomberg-style terminals.",
        fullDescription_in: "NEXORA adalah platform Web3 & on-chain analytics komprehensif dengan antarmuka financial terminal berperforma tinggi. Platform ini membantu trader dan antusias crypto memantau pergerakan pasar secara live, melacak aktivitas wallet paus & smart money, memeriksa transaksi on-chain via Etherscan & EVM RPC, serta melakukan simulasi paper trading berbasis data market real-time.",
        image: "/projects/nexora/nexora.png",
        screenshots: [
            "/projects/nexora/nexora.png",
            "/projects/nexora/1.png",
            "/projects/nexora/2.png"
        ],
        tags: ["Next.js", "Web3", "Tailwind CSS", "Wagmi"],
        liveUrl: "https://nexora.geedev.tech",
        githubUrl: "https://github.com/gadingss/nexora.git",
        techStack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Wagmi",
            "Viem",
            "Etherscan API",
            "CoinGecko API",
            "Recharts",
            "TanStack Query"
        ]
    }
];

export function Projects() {
    const { t, lang } = useLanguage();

    const featuredProjects = projects.slice(0, 3);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="projects" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2 block">
                        // Featured Works
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
                        {t.projects.title}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Button
                        variant="ghost"
                        className="group font-bold text-sm hover:text-primary gap-2"
                        asChild
                    >
                        <Link href="/projects">
                            {t.projects.fullArchive}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className="relative -mx-6 px-6 md:-mx-12 md:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
                >
                    {/* 3 Featured Project Cards */}
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.slug}
                            variants={cardVariants}
                            className="group relative w-[310px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-start"
                        >
                            {/* Glow */}
                            <div
                                className="absolute -inset-2 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                                style={{ backgroundColor: `${project.color}20` }}
                            />

                            <Card className="relative h-full overflow-hidden bg-card/60 backdrop-blur-xl border border-border/50 rounded-[28px] flex flex-col shadow-xl transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-1.5">
                                {/* Number Badge */}
                                <div className="absolute top-5 right-5 z-20 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-2xl font-black font-mono" style={{ color: project.color }}>
                                        {project.number}
                                    </span>
                                </div>

                                {/* Image Box */}
                                <div className="relative h-48 md:h-52 w-full overflow-hidden p-4 pb-0">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-md border border-white/5">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                                    </div>
                                </div>

                                <CardHeader className="pt-5 px-6">
                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 border-none text-muted-foreground"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="px-6 flex-grow">
                                    <CardDescription className="text-xs md:text-sm text-muted-foreground/80 font-medium leading-relaxed line-clamp-3">
                                        {lang === "IN" ? project.description_in : project.description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter className="px-6 pb-6 pt-2 flex gap-2">
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-10 rounded-xl flex-1 gap-1.5 font-bold uppercase tracking-wider text-[10px] border-white/10 hover:bg-white/5"
                                            asChild
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                                <Github className="w-3.5 h-3.5" /> {t.projects.code}
                                            </a>
                                        </Button>
                                    )}
                                    <Button
                                        size="sm"
                                        className="h-10 rounded-xl flex-1 gap-1.5 font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                                        asChild
                                    >
                                        <Link href={`/projects/${project.slug}`}>
                                            <Info className="w-3.5 h-3.5" /> {t.projects.detail}
                                        </Link>
                                    </Button>
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="h-10 w-10 rounded-xl flex items-center justify-center p-0 border-white/10"
                                            asChild
                                            title="Live Demo"
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}

                    {/* 4th Card: View All / Selengkapnya */}
                    <motion.div
                        variants={cardVariants}
                        className="group relative w-[260px] sm:w-[300px] flex-shrink-0 snap-start flex items-stretch"
                    >
                        <div className="absolute -inset-2 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/20 pointer-events-none" />

                        <Link
                            href="/projects"
                            className="relative w-full overflow-hidden bg-card/40 hover:bg-card/70 backdrop-blur-xl border border-dashed border-border/80 hover:border-primary/50 rounded-[28px] p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 group-hover:-translate-y-1.5 shadow-xl"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                                <Layers className="w-8 h-8" />
                            </div>

                            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
                                +{projects.length - featuredProjects.length} {lang === "IN" ? "Lainnya" : "More"}
                            </span>

                            <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                                {lang === "IN" ? "Lihat Semua Proyek" : "View All Projects"}
                            </h3>

                            <p className="text-xs text-muted-foreground/80 mb-6 max-w-[200px]">
                                {lang === "IN"
                                    ? "Jelajahi seluruh koleksi dan arsip proyek yang pernah saya buat."
                                    : "Explore complete collection and archive of all projects built."}
                            </p>

                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform">
                                <span>{lang === "IN" ? "Buka Halaman" : "Open Archive"}</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
