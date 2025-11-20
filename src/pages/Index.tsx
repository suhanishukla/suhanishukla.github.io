import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center border-t border-border">
        <p className="text-foreground/60">
          © 2025 Suhani Shukla. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
