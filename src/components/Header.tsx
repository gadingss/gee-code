"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { useLanguage } from "@/lib/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { lang, setLang, t } = useLanguage();
  const [latency, setLatency] = React.useState(13);

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Fake API Latency Effect for backend vibe
    const interval = setInterval(() => {
      setLatency(10 + Math.floor(Math.random() * 8)); // 10ms - 17ms
    }, 2500);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Gee<span className="text-primary">Dev</span>
          </motion.div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 ml-2 border-l border-border/50 pl-6"
          >
            {/* Lang Switcher */}
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-white/5 backdrop-blur-md">
                <button
                    onClick={() => setLang("EN")}
                    className={cn(
                    "px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-wider rounded-full transition-all",
                    lang === "EN" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    EN
                </button>
                <button
                    onClick={() => setLang("IN")}
                    className={cn(
                    "px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-wider rounded-full transition-all",
                    lang === "IN" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    IN
                </button>
            </div>

            {/* Simulated API Latency */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full" title="Server Latency Status">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                API: {latency}ms
            </div>
          </motion.div>
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          {/* We can add a mobile menu sheet here easily later */}
        </div>
      </div>
    </header>
  );
}
