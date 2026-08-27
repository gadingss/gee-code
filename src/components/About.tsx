"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Github, FolderGit2, Clock, Coffee, Flame } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Node.js", "Tailwind CSS", "Framer Motion", "PostgreSQL",
    "Git", "Docker", "REST APIs", "GraphQL"
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(v) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [value, inView, prefix, suffix]);

    return <span ref={nodeRef} className="font-mono">{prefix}0{suffix}</span>;
}

export function About() {
    const { t } = useLanguage();
    const [stats, setStats] = useState({
        projects: 0,
        commits: 0,
        codingHours: 0,
        coffee: 0,
        cigarettes: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch stats", err);
                setLoading(false);
            });
    }, []);

    const statCards = [
        {
            label: t.about.cardProjects,
            value: stats.projects,
            icon: <FolderGit2 className="w-6 h-6 text-blue-500" />,
            color: "from-blue-500/20 to-transparent",
            border: "border-blue-500/20",
            suffix: "+"
        },
        {
            label: t.about.cardCommits,
            value: stats.commits,
            icon: <Github className="w-6 h-6 text-purple-500" />,
            color: "from-purple-500/20 to-transparent",
            border: "border-purple-500/20",
            suffix: "+"
        },
        {
            label: t.about.cardHours,
            value: stats.codingHours,
            icon: <Clock className="w-6 h-6 text-emerald-500" />,
            color: "from-emerald-500/20 to-transparent",
            border: "border-emerald-500/20",
            suffix: "h"
        },
        {
            label: t.about.cardCoffee,
            value: stats.coffee,
            secondaryValue: stats.cigarettes,
            icon: <Coffee className="w-6 h-6 text-orange-500" />,
            secondaryIcon: <Flame className="w-4 h-4 text-red-500" />,
            color: "from-orange-500/20 to-transparent",
            border: "border-orange-500/20",
            suffix: ""
        }
    ];

    return (
        <section id="about" className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t.about.title}</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                {t.about.p1_1}<span className="text-foreground font-medium">{t.about.p1_name}</span>{t.about.p1_2}
                            </p>
                            <p>
                                {t.about.p2}
                            </p>
                            <p>
                                {t.about.p3}
                            </p>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">{t.about.techTitle}</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {skills.map((skill, i) => (
                                    <motion.li
                                        key={skill}
                                        className="flex items-center text-muted-foreground"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                    >
                                        <span className="text-primary mr-2">▹</span> {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full max-w-md lg:max-w-none"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {statCards.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className={`relative overflow-hidden rounded-2xl bg-card border ${stat.border} p-6 shadow-xl backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                                    
                                    <div className="flex flex-col h-full justify-between gap-4 relative z-10">
                                        <div className="flex justify-between items-start">
                                            <div className="p-2 bg-background/50 rounded-lg backdrop-blur-md border border-border/50">
                                                {stat.icon}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="text-3xl font-black text-foreground mb-1 tracking-tight">
                                                {!loading ? (
                                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                                ) : (
                                                    <span className="animate-pulse text-muted-foreground/50">---</span>
                                                )}
                                            </div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                {stat.label}
                                            </div>
                                            
                                            {/* Sub-stat for fun card */}
                                            {stat.secondaryValue !== undefined && !loading && (
                                                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 w-fit px-2 py-1 rounded-md border border-border/30">
                                                    {stat.secondaryIcon}
                                                    <AnimatedCounter value={stat.secondaryValue} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Accent corner */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-xl pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
