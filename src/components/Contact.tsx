"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-muted/30 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.contact.title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">{t.contact.email}</h3>
                                <p className="text-muted-foreground mt-1">gadingsatrio468@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">{t.contact.phone}</h3>
                                <p className="text-muted-foreground mt-1">+62 857 3650 8439</p>
                                <p className="text-sm text-muted-foreground mt-1">{t.contact.phoneHours}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">{t.contact.location}</h3>
                                <p className="text-muted-foreground mt-1">{t.contact.locationDesc}</p>
                                <p className="text-sm text-muted-foreground mt-1">{t.contact.locationAvailability}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="space-y-6 bg-card p-8 rounded-2xl border border-border/50 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">{t.contact.formName}</label>
                                    <Input id="name" placeholder="John Doe" className="bg-muted/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">{t.contact.formEmail}</label>
                                    <Input id="email" type="email" placeholder="john@gmail.com" className="bg-muted/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">{t.contact.formSubject}</label>
                                <Input id="subject" placeholder="Project Inquiry" className="bg-muted/50" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">{t.contact.formMessage}</label>
                                <Textarea
                                    id="message"
                                    placeholder={t.contact.formMessagePlaceholder}
                                    rows={5}
                                    className="bg-muted/50 resize-none"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                {t.contact.formSend}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
