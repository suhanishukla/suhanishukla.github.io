import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import heroBg from "@/assets/hero-bg.jpg";

const CursorReveal = () => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = revealRef.current;
    if (!reveal) return;

    const showReveal = (event: PointerEvent) => {
      reveal.style.setProperty("--cursor-x", `${event.clientX}px`);
      reveal.style.setProperty("--cursor-y", `${event.clientY}px`);
      reveal.style.opacity = "0.24";
    };
    const hideReveal = () => {
      reveal.style.opacity = "0";
    };

    window.addEventListener("pointermove", showReveal);
    document.documentElement.addEventListener("pointerleave", hideReveal);

    return () => {
      window.removeEventListener("pointermove", showReveal);
      document.documentElement.removeEventListener("pointerleave", hideReveal);
    };
  }, []);

  return <div ref={revealRef} className="cursor-reveal" style={{ backgroundImage: `url(${heroBg})` }} />;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorReveal />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="relative z-10 py-8 text-center border-t border-border">
        <p className="text-foreground/60">
          © 2025 Suhani Shukla. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
