"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 space-y-8 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-4">
                        <h2 className="text-primary font-medium tracking-wide flex items-center justify-center md:justify-start gap-4">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            {t.hero.greeting.toUpperCase()} GADING
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            {t.hero.role.split(" ")[0]} <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">{t.hero.role.split(" ")[1]}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 font-light mt-6">
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <motion.div
                        className="flex items-center justify-center md:justify-start gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/#projects">
                                {t.hero.viewWork}
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                            <Link href="/#contact">
                                {t.hero.contactMe}
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center md:justify-start gap-6 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link href="https://github.com/gadingss" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/gading-seto-satrio-7b94752a7" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="https://wa.me/6285746508439" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/gadiingss_" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Profile Image Area */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <div className="absolute inset-2 bg-card rounded-full border border-border flex items-center justify-center overflow-hidden z-10">
                            {/* Tempat untuk menaruh foto profil Anda */}
                            <img
                                src="/profile1.jpeg" /* Ganti ini dengan path foto Anda di folder public/ */
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback jika gambar tidak ditemukan
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback image jika gambar gagal dimuat (atau belum ada) */}
                            <div className="hidden w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-900 flex items-center justify-center">
                                <span className="text-6xl font-black text-muted/30">DEV</span>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl z-20"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <span className="font-bold text-sm">Laravel</span>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-10 -left-10 bg-card border border-border rounded-xl p-4 shadow-xl z-20"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                        >
                            <span className="font-bold text-sm">React & TS</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
