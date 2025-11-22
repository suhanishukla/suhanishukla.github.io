import { Brain, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "Engineering",
      description: "Backend engineering, AWS infrastructure, and reliable systems."
    },
    {
      icon: Brain,
      title: "AI + Systems",
      description: "Integrating intelligent components into real-world systems."
    },
    {
      icon: Rocket,
      title: "Learning",
      description: "Pushing my skills through hands-on cloud and AI projects."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm studying CS and Entrepreneurship at UCLA. I'm interested in cloud and systems engineering, AI, and love blending
            creativity with analytical problem-solving. Some of my hobbies include reading, classical music, and film reviewing.
          </p>
        </div>

        <div className="flex justify-center mt-2 mb-20">
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


        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
