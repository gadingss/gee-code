"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/components/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Globe, Code2, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button onClick={() => router.push("/")}>Back to Home</Button>
            </div>
        );
    }

    const nextSlide = () => {
        if (project.screenshots) {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % project.screenshots!.length);
        }
    };

    const prevSlide = () => {
        if (project.screenshots) {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + project.screenshots!.length) % project.screenshots!.length);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        })
    };

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                {/* Back Button & Title Header */}
                <div className="mb-12 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => router.push("/#projects")}
                            className="rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Project Detail</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Main Gallery Area */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Carousel Slider */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="relative group">
                                <div className="relative aspect-[16/10] md:aspect-video rounded-[40px] overflow-hidden bg-card border border-border/50 shadow-2xl shadow-primary/5">
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.div
                                            key={currentIndex}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={1}
                                            onDragEnd={(e, { offset, velocity }) => {
                                                const swipe = offset.x;
                                                if (swipe < -100) {
                                                    nextSlide();
                                                } else if (swipe > 100) {
                                                    prevSlide();
                                                }
                                            }}
                                            className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-12 cursor-grab active:cursor-grabbing"
                                        >
                                            {/* Blurred Ambient Background */}
                                            <img
                                                src={project.screenshots[currentIndex]}
                                                className="absolute inset-0 w-full h-full object-cover blur-[80px] opacity-20 scale-110 pointer-events-none"
                                                alt=""
                                            />

                                            {/* Main Image */}
                                            <img
                                                src={project.screenshots[currentIndex]}
                                                alt={`${project.title} screenshot ${currentIndex + 1}`}
                                                className="relative max-w-full max-h-full object-contain z-10 shadow-2xl rounded-2xl md:rounded-3xl border border-white/5 pointer-events-none select-none"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Overlay - Visible Always on Hover, subtle otherwise */}
                                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none">
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="pointer-events-auto rounded-full bg-background/40 backdrop-blur-3xl border border-white/10 hover:bg-primary hover:text-white w-14 h-14 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 shadow-2xl"
                                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                        >
                                            <ChevronLeft className="w-8 h-8" />
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="pointer-events-auto rounded-full bg-background/40 backdrop-blur-3xl border border-white/10 hover:bg-primary hover:text-white w-14 h-14 transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 shadow-2xl"
                                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                        >
                                            <ChevronRight className="w-8 h-8" />
                                        </Button>
                                    </div>

                                    {/* Pagination Controll Overlay */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-background/60 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-2xl transition-all group-hover:scale-105">
                                        <div className="flex gap-2">
                                            {project.screenshots.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                                                    className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? "w-8 bg-primary" : "w-1.5 bg-white/30 hover:bg-white/60"
                                                        }`}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <div className="w-[1px] h-4 bg-white/20" />
                                        <span className="text-[10px] font-black tracking-[0.2em] text-white/90">
                                            {currentIndex + 1} / {project.screenshots.length}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 text-center text-xs text-muted-foreground font-medium uppercase tracking-widest opacity-50">
                                    Hint: Drag the image or use arrows to navigate
                                </div>
                            </div>
                        )}

                        {/* Full Description */}
                        <div className="space-y-6 max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight">About the Project</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                {project.fullDescription}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Info */}
                    <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                        {/* Action Card */}
                        <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-[32px] p-8 space-y-8 shadow-xl">
                            <div className="space-y-4">
                                {project.liveUrl !== "#" && (
                                    <Button size="lg" className="w-full rounded-2xl h-16 text-lg font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                            <Globe className="w-6 h-6" /> Live Preview
                                        </a>
                                    </Button>
                                )}
                                <Button variant="outline" size="lg" className="w-full rounded-2xl h-16 text-lg font-bold gap-3 border-2 hover:bg-muted/50 transition-all" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        <Github className="w-6 h-6" /> Source Code
                                    </a>
                                </Button>
                            </div>

                            <div className="h-px bg-border/50" />

                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">My Role</div>
                                        <div className="font-bold">Full Stack Developer</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Status</div>
                                        <div className="font-bold">Production Ready</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-[32px] p-8 space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground/90">
                                <Layers className="w-5 h-5 text-primary" /> Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack?.map(tech => (
                                    <div key={tech} className="bg-muted px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-border/50 text-foreground/70">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
