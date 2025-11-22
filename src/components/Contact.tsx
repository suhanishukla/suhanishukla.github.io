import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Subject & body encoding for mailto
    const subject = encodeURIComponent("New Portfolio Message");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
    );

    // Open Gmail or default mail app
    const mailtoURL = `mailto:suhanishukla@g.ucla.edu?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;

    toast({
      title: "Opening email…",
      description: "Your email app will open with your message pre-filled.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/suhanishukla", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/suhani-s/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:suhanishukla@g.ucla.edu", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 
                       bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* SOCIAL LINKS */}
          <div className="mt-20 ml-24">
            <h3 className="text-2xl font-semibold mb-4 text-foreground justify-center">
              Feel free to reach out!
            </h3>
            
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg 
                             flex items-center justify-center 
                             hover:border-primary hover:scale-110 
                             transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border text-foreground"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card border-border text-foreground"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border text-foreground"
            />

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 
                         text-primary-foreground transition-all 
                         duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
