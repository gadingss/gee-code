"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/components/Projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Info, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectsPage() {
    const { t, lang } = useLanguage();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
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
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
                {/* Header */}
                <div className="mb-16">
                    <Button variant="ghost" size="sm" className="mb-8 gap-2 text-muted-foreground hover:text-foreground -ml-2" asChild>
                        <Link href="/#projects">
                            <ArrowLeft className="w-4 h-4" />
                            {lang === "IN" ? "Kembali" : "Back"}
                        </Link>
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 block">
                            // All Works
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase mb-4">
                            {lang === "IN" ? "Semua Proyek" : "All Projects"}
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                            {t.projects.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent mt-10 origin-left"
                    />
                </div>

                {/* Projects Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <span className="text-3xl font-black font-mono text-primary">
                        {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                        {lang === "IN" ? "Proyek Ditemukan" : "Projects Found"}
                    </span>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.slug}
                            variants={cardVariants}
                            className="group relative"
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

                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden p-4 pb-0">
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
                                    <CardTitle className="text-xl font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="px-6 flex-grow">
                                    <CardDescription className="text-sm text-muted-foreground/80 font-medium leading-relaxed line-clamp-3">
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
                </motion.div>
            </div>
        </div>
    );
}
