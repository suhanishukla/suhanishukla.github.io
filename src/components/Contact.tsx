import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  return (
    <section id="contact" className="px-6 pb-20 pt-8">
      <div className="container mx-auto max-w-4xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
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
    </section>
  );
};

export default Contact;
