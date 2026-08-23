import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                      transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://lily-power-22d.notion.site/Suhani-s-Blog-2138ee31aa6b80f1ba38c05c15c4db5f', '_blank')}
          >
            Read my Blog!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
