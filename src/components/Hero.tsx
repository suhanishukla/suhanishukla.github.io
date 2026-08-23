import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[90rem] translate-y-12 px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:-translate-y-6 lg:text-left">
            <h1 className="mb-6 text-5xl font-bold text-primary animate-fade-in md:text-7xl lg:text-center">
              Suhani Shukla
            </h1>
            <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a
                href="https://github.com/suhanishukla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/suhani-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:suhanishukla@g.ucla.edu"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.goodreads.com/user/show/179669795-suhani-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-primary"
                aria-label="Goodreads"
              >
                <img
                  src="https://cdn.simpleicons.org/goodreads/CCFFFF"
                  alt=""
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>

          <div className="text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">About Me</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Hi, I&apos;m Suhani! I&apos;m studying CS + Entrepreneurship at UCLA. I&apos;m interested in the applied AI/ML space, with an emphasis on building systems and AI-native tools with real-user impact. Most recently, I interned at Microsoft AI and worked on small language model post-training and RL. On campus, I&apos;ve also helped build and grow several student organizations, giving me an outlet for another aspect I am very passionate about: creating meaningful opportunities and generating real value for other students. In my spare time, you can find me listening to music, reading classics, and writing about books and movies on <a href="https://lily-power-22d.notion.site/Suhani-s-Blog-2138ee31aa6b80f1ba38c05c15c4db5f" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">my blog</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
