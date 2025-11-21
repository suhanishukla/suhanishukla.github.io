import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Engineering",
      description: "Backend engineering, AWS infrastructure, and reliable systems."
    },
    {
      icon: Palette,
      title: "AI + Systems",
      description: "Integrating intelligent components into real-world systems."
    },
    {
      icon: Rocket,
      title: "Learning",
      description: "Building projects to push my skills and learn new tools."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm studying CS and Entrepreneurship at UCLA. I'm interested in cloud and systems engineering, AI, and love blending
            creativity with analytical problem-solving. Some of my hobbies include reading, classical music, and film reviewing.
          </p>
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
