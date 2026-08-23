const Skills = () => {


  return (

    <section id="resume" className="px-6 pb-24 pt-0">
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
