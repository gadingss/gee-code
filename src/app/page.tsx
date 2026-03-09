import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <Projects />
      <About />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Software Developer Portfolio. Built with Next.js, Tailwind & Framer Motion.
        </p>
      </footer>
    </div>
  );
}
