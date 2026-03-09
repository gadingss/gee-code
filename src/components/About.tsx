"use client";

import { motion } from "framer-motion";

const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Node.js", "Tailwind CSS", "Framer Motion", "PostgreSQL",
    "Git", "Docker", "REST APIs", "GraphQL"
];

export function About() {
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About Me</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-foreground font-medium">Hype</span> and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes —
                                turns out hacking together HTML & CSS taught me a lot about CSS positioning!
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of building software for an advertising agency,
                                a start-up, and a huge corporation. My main focus these days is building accessible,
                                inclusive products and digital experiences for a variety of clients.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Here are a few technologies I've been working with recently:</h3>
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
                        <div className="relative group">
                            {/* Backglow layer */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                            {/* Image container */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-border/50">
                                {/* Fallback pattern since we don't have an image */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 bg-primary/20 rounded-full blur-3xl absolute"></div>
                                    <span className="text-primary/50 text-2xl font-bold tracking-widest rotate-[-45deg] z-10">CREATIVE DEV</span>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Accent border frame */}
                            <div className="absolute top-6 left-6 -bottom-6 -right-6 border-2 border-primary rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
