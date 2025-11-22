// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Briefcase } from "lucide-react";

// const Experience = () => {
//   const roles = [
//     {
//       company: "Amazon Web Services",
//       role: "Software Engineering Intern",
//       period: "Summer 2025",
//       description:
//         "Worked on cloud infrastructure automation to improve reliability and deployment workflows.",
//       color: "from-primary to-accent"
//     },
//     {
//       company: "Nokia",
//       role: "Software Engineering Intern (C++/gRPC)",
//       period: "Summer 2024",
//       description:
//         "Developed hardware diagnostics tools using C++ and gRPC streaming systems.",
//       color: "from-accent to-secondary"
//     },
//     {
//       company: "NASA SEES",
//       role: "Research Intern",
//       period: "2023",
//       description:
//         "Created image filtering and ML-based classification tools for environmental data.",
//       color: "from-secondary to-primary"
//     },
//     {
//       company: "AWS Cloud Club @ UCLA",
//       role: "Technical Director",
//       period: "2024–Present",
//       description:
//         "Teach cloud concepts, build AWS-powered solutions, and run technical programs.",
//       color: "from-accent to-primary"
//     },
//     {
//       company: "BruinAI",
//       role: "AI Consultant & Events Lead",
//       period: "2024–Present",
//       description:
//         "Lead technical workshops, architect ML projects, and support AI initiatives across UCLA.",
//       color: "from-primary to-accent"
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 px-6">
//       <div className="container mx-auto max-w-6xl">
        
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
//           Experience
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {roles.map((exp, index) => (
//             <Card
//               key={index}
//               className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
//             >
//               <CardHeader>
//                 <div className={`h-2 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`} />

//                 {/* EMPHASIZED COMPANY */}
//                 <CardTitle className="text-2xl font-bold text-primary tracking-tight">
//                   {exp.company}
//                 </CardTitle>

//                 {/* Role + Period */}
//                 <CardDescription className="text-foreground/80 text-sm mt-1">
//                   {exp.role} • {exp.period}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-foreground/80 mb-4 mt-1 leading-relaxed">
//                   {exp.description}
//                 </p>

//                 <Button 
//                   size="sm" 
//                   variant="outline"
//                   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
//                 >
//                   <Briefcase className="w-4 h-4 mr-1" />
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const roles = [
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      period: "Summer 2025",
      description: "Worked on cloud infrastructure automation to improve reliability and deployment workflows.",
      details: `
      • Built Live Pipeline Template automation using CDK + Ruby  
      • Designed canary rollback monitoring  
      • Reduced deployment freshness from 120 days → < 28 days  
      • Improved pipeline reliability and observability  
      • Collaborated with SDEs across Redshift Console  `,
      skills: ["CDK", "LPT", "Ruby", "TypeScript", "CloudWatch"],
      color: "from-primary to-accent"
    },
    {
      company: "Nokia",
      role: "Software Engineering Intern",
      period: "Summer 2024",
      description:
        "Developed hardware diagnostics tools using C++ and gRPC streaming systems.",
      details: `
      • Built real-time device diagnostics  
      • Implemented gRPC bidirectional streaming  
      • Improved embedded performance  
      • Strengthened debugging & test automation  `,
      skills: ["C++", "Python", "gRPC", "Linux", "Bash scripting"],
      color: "from-accent to-secondary"
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
      • Acted as lead speaker during a virtual presentation of research poster at American Geophysical Union Fall 2022 Conference. 
      `,
      skills: ["Python", "PyTorch", "CNNs/CV", "Data cleaning"],
      color: "from-secondary to-primary"
    },
    {
      company: "AWS Cloud Club @ UCLA",
      role: "Technical Director",
      period: "2024–Present",
      description:
        "Teach cloud concepts, build AWS-powered solutions, and run technical programs.",
      color: "from-accent to-primary"
    },
    {
      company: "BruinAI",
      role: "AI Consultant & Events Lead",
      period: "2024–Present",
      description:
        "Lead technical workshops, architect ML projects, and support AI initiatives across UCLA.",
      details: `
      • Spearheaded UCLA’s first AI club’s external strategy
      • Led partnerships and high-visibility events with DeepLearning.AI, Cisco, and other industry leaders
      • Proposed AI-driven enhancements for social media startup Carrot, ensuring user-centric design and technical feasibility 
      • Collaborated with Anderson MBAs at startup Nortera, using Agile Scrum translating complex HR compliance and EDI data into scalable, data-driven dashboards for risk detection
      `, 
      skills: ["Agile Scrum", "Python", "PyTorch", "LLMs/RAG", "Event Planning"],
      color: "from-primary to-accent"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-secondary bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {roles.map((exp, index) => (
          <div key={index} className="relative">
            
            {/* === COLLAPSED CARD === */}
            {expanded !== index && (
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`h-2 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`} />
                  <CardTitle className="text-2xl font-bold text-primary">
                    {exp.company}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {exp.role} • {exp.period}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setExpanded(index)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    <Briefcase className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* === EXPANDED FULL SCREEN CARD === */}
            {expanded === index && (
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-6 flex justify-center overflow-y-auto"
                onClick={() => setExpanded(null)} // CLICK OUTSIDE CLOSES
              >
                <Card
                  className="bg-card border-border max-w-3xl w-full mt-10 mb-10 animate-in fade-in zoom-in duration-300"
                  onClick={(e) => e.stopPropagation()} // PREVENT CLICK INSIDE FROM CLOSING
                >
                  <CardHeader>
                    <div className={`h-2 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`} />
                    <CardTitle className="text-3xl font-bold text-primary">
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-foreground/80 text-lg mt-1">
                      {exp.role} • {exp.period}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-md mb-6">
                      {exp.details}
                    </p>

                    {/* SKILLS SECTION */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills?.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
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
