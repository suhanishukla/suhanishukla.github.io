import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const roles = [
    {
      company: "Microsoft AI",
      role: "Applied AI/ML Intern",
      period: "Summer 2026",
      description: "Built and evaluated Small Language Models for Bing Generative Search.",
      details: `
      • Worked on Small Language Models (SLMs) for query fanout in Bing Generative Search, across training, evals, and serving
      • Experimented with SFT, RL, distillation, and different reward formulations to improve model quality
      • Built a Gemma-270M routing model to figure out when additional search fanout would actually help
      • Improved a key search-quality metric by 3.3%, with resulting models selected for production
      `,
      skills: ["Python", "SLMs", "Post-Training", "RL", "Model Evals", "ML Experimentation", "Model Serving"]
    },
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      period: "Summer 2025",
      description: "Automated cloud infrastructure to improve reliability and deployment workflows.",
      details: ` 
      • Built CI/CD automation of deployment pipelines using Live Pipeline Template and AWS CDK 
      • Migrated legacy LPT pipeline to CDK to modernize Infrastructure as Code scheme 
      • Designed real-time canary rollback monitoring and composite alarms for safe deployments
      • Reduced deployment freshness from 120 days to less than 28 days  
      • Authored detailed runbooks and docs for on-call engineers
      `,
      skills: ["CDK", "LPT", "Ruby", "TypeScript", "CloudWatch", "Infra as Code"]
    },
    {
      company: "Nokia",
      role: "Software Engineering Intern",
      period: "Summer 2024",
      description:
        "Developed hardware diagnostics tools using C++ and gRPC streaming systems.",
      details: `
      • Developed improvements to hardware custom CLI Diags
      • Built real-time device diagnostics  
      • Implemented gRPC bidirectional streaming in all prints and ASIC tests
      • Streamlined control flow of critical hardware tests
      • Created custom signal handler integrated with Python front-end to add proper termination with control C
      • Strengthened debugging & test automation  `,
      skills: ["C++", "Python", "gRPC", "Linux", "Bash Scripting"]
    },
    {
      company: "AWS Cloud Club @ UCLA",
      role: "Co-President",
      period: "2025–Present",
      description:
        "Teach cloud concepts, build AWS-powered solutions, and run technical programs.",
      details: <><br />
        • Co-founded UCLA&apos;s first cloud computing club, growing the team from 6 to 30+ active members<br />
        • Built project partnerships with AWS and UCLA DTS, giving members opportunities to build cloud solutions for real stakeholders<br />
        • Lead workshops on AWS, cloud infra, and AI. Organized <a href="https://www.linkedin.com/feed/update/urn:li:activity:7447401621988425729" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Architect the Cloud</a> (90+ students and 10+ industry speakers)<br />
        • Visit us at <a href="https://awsclubucla.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">awsclubucla.org</a>
      </>,
      skills: ["Workshop Creation", "S3", "Lambda", "AWS Bedrock", "Outreach"]
    },
    {
      company: "Bruin AI",
      role: "AI Consultant & Events Lead",
      period: "2023–Present",
      description:
        "Architect ML projects and support AI initiatives across UCLA.",
      details: `
      • Implement AI consulting projects for external clients, turning real business problems into production AI tools and software
      • Drove Bruin AI's largest client engagement to date, a $30K AI-native marketing and CRM platform for a UGC marketing agency
      • Built a production RAG-based HR assistant now used by 100+ employees at wealth advisory firm
      • Worked directly with clients and Anderson MBA teams to translate business needs into tech requirements, designs, and products
      • Helped shape Bruin AI's community through industry partnerships, events, and technical programming
      `, 
      skills: ["Python", "LLMs/RAG", "Full-Stack", "AI Consulting"]
    },
    {
      company: "NASA SEES",
      role: "Research Intern",
      period: "Summer 2022",
      description:
        "Created image filtering and ML-based classification tools for environmental data.",
      details: `
      • Wrote Python image filtering scripts to classify and sort mosquito larvae data
      • Co-authored research paper on the accuracy of classifying larvae images using CNNs 
      • Acted as lead speaker during a virtual presentation of research poster at American Geophysical Union Fall 2022 Conference
      `,
      skills: ["Python", "PyTorch", "CNNs/CV", "Data Cleaning"]
    },

  ];

  return (
    <section id="experience" className="px-6 pb-24 pt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {roles.map((exp, index) => (
          <div key={index} className="relative">
            
            {/* === COLLAPSED CARD === */}
            {expanded !== index && (
              <Card className="flex h-full flex-col bg-card border-border transition-all duration-300 hover:scale-105 hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {exp.company}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {exp.role} • {exp.period}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-4 flex-1 text-foreground/80">{exp.description}</p>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setExpanded(index)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            )}
            {/* === EXPANDED FULL SCREEN CARD === */}
            {expanded === index && (
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-6 flex justify-center overflow-y-auto"
                onClick={() => setExpanded(null)}
              >
                <Card
                  className="bg-card border-border max-w-3xl w-full mt-10 mb-10 animate-in fade-in zoom-in duration-300 
                            text-center p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-4xl font-bold text-primary mb-2">
                      {exp.company}
                    </CardTitle>

                    <CardDescription className="text-2xl text-foreground/80 mt-1">
                      {exp.role} • {exp.period}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col items-start px-10 pt-0">

                    {/* DESCRIPTION — SHIFTED UP & RIGHT */}
                    <div className="w-full max-w-2xl">
                      <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-xl mb-8 text-left 
                                  -mt-2 ml-4">
                        {exp.details}
                      </p>
                    </div>

                    {/* SKILLS — aligned to left under description */}
                    <div className="flex flex-wrap gap-3 mb-4 ml-4">
                      {exp.skills?.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-muted text-foreground text-md rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    </CardContent>

                </Card>
              </div>
            )}



          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
