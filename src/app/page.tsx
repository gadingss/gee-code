"use client";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { ApiPlayground } from "@/components/ApiPlayground";
import { Contact } from "@/components/Contact";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <About />
      <ApiPlayground />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t.footer.text}
        </p>
      </footer>
    </div>
  );
}
