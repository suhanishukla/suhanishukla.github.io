const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "PostgreSQL", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-foreground/70">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-secondary rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
