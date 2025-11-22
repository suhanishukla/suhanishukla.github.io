const Skills = () => {


  return (

    <section id="resume" className="py-24 px-6">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-secondary bg-clip-text text-transparent">
        My Resume
      </h2>

      {/* PDF VIEWER BOX */}
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-xl 
                      p-4 h-[80vh]">
        <iframe
          src="/suhani-shukla-resume.pdf"
          title="Suhani Shukla Resume"
          className="w-full h-full rounded-lg"
        />
      </div>
    </section>

  );
};

export default Skills;
