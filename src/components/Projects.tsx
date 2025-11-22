import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const roles = [
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      period: "Summer 2025",
      description:
        "Worked on cloud infrastructure automation, CI/CD pipelines, and backend tooling to improve reliability and deployment workflows.",
      color: "from-primary to-accent"
    },
    {
      company: "Nokia",
      role: "Software Engineering Intern (C++/gRPC)",
      period: "Summer 2024",
      description:
        "Developed hardware diagnostics tools using C++ and gRPC streaming systems.",
      color: "from-accent to-secondary"
    },
    {
      company: "NASA SEES",
      role: "Research Intern",
      period: "2023",
      description:
        "Created image filtering and ML-based classification tools for environmental data.",
      color: "from-secondary to-primary"
    },
    {
      company: "BruinAI",
      role: "AI Consultant & Events Lead",
      period: "2024–Present",
      description:
        "Lead technical workshops, architect ML projects, and support AI initiatives across UCLA.",
      color: "from-primary to-accent"
    },
    {
      company: "AWS Cloud Club @ UCLA",
      role: "Technical Director",
      period: "2024–Present",
      description:
        "Teach cloud concepts, build AWS-powered solutions, and run technical programs.",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`} />

                {/* EMPHASIZED COMPANY */}
                <CardTitle className="text-2xl font-bold text-primary tracking-tight">
                  {exp.company}
                </CardTitle>

                {/* Role + Period */}
                <CardDescription className="text-foreground/80 text-sm mt-1">
                  {exp.role} • {exp.period}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-foreground/80 mb-4 mt-1 leading-relaxed">
                  {exp.description}
                </p>

                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                >
                  <Briefcase className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
