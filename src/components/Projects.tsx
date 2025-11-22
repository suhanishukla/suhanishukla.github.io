import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
//       tech: ["React", "Node.js", "PostgreSQL"],
//       color: "from-primary to-accent"
//     },
//     {
//       title: "Task Management App",
//       description: "Collaborative task management tool with real-time updates and team analytics.",
//       tech: ["TypeScript", "React", "Supabase"],
//       color: "from-secondary to-primary"
//     },
//     {
//       title: "Portfolio Generator",
//       description: "AI-powered tool to create beautiful portfolio websites in minutes.",
//       tech: ["Next.js", "Tailwind", "OpenAI"],
//       color: "from-accent to-secondary"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 px-6">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
//           Featured Projects
//         </h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <Card 
//               key={index}
//               className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
//             >
//               <CardHeader>
//                 <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-4`} />
//                 <CardTitle className="text-foreground">{project.title}</CardTitle>
//                 <CardDescription className="text-foreground/70">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-2">
//                   <Button 
//                     size="sm" 
//                     variant="outline"
//                     className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                   >
//                     <ExternalLink className="w-4 h-4 mr-1" />
//                     Demo
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="outline"
//                     className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
//                   >
//                     <Github className="w-4 h-4 mr-1" />
//                     Code
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Briefcase } from "lucide-react";

const Experience = () => {
  const roles = [
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      period: "Summer 2025",
      description:
        "Worked on cloud infrastructure automation, CI/CD pipelines, and backend tooling to improve reliability and deployment workflows."
    },
    {
      company: "Nokia",
      role: "Software Engineering Intern (C++/gRPC)",
      period: "Summer 2024",
      description:
        "Developed hardware diagnostics tools using C++ and gRPC streaming systems."
    },
    {
      company: "NASA SEES",
      role: "Research Intern",
      period: "2023",
      description:
        "Created image filtering and ML-based classification tools for environmental data."
    },
    {
      company: "BruinAI",
      role: "AI Consultant & Events Lead",
      period: "2024–Present",
      description:
        "Lead technical workshops, architect ML projects, and support AI initiatives across UCLA."
    },
    {
      company: "AWS Cloud Club @ UCLA",
      role: "Technical Director",
      period: "2024–Present",
      description:
        "Teach cloud concepts, build AWS-powered solutions, and run technical programs."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <p className="text-gray-400 mt-2">
          A look at the work and roles that shaped me.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-[#0f172a]/60 p-6 rounded-xl border border-gray-700/40"
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-indigo-400" size={22} />
              <h3 className="text-xl font-semibold text-white">
                {role.role} — <span className="text-indigo-300">{role.company}</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-2">{role.period}</p>
            <p className="text-gray-300">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

