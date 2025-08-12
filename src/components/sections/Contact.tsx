import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3).optional(),
  message: z.string().min(10, "Tell me a bit more"),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot
    await new Promise(r => setTimeout(r, 500));
    toast({ title: "Thanks!", description: "Your message has been sent (demo)." });
    reset();
  };

  return (
    <section id="contact" className="container mx-auto mt-24">
      <h2 className="text-3xl md:text-4xl font-semibold">Contact & Hire Me</h2>
      <p className="text-muted-foreground mt-2">Tell me about your project. I usually reply within 24 hours.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid md:grid-cols-2 gap-6 glass p-6 rounded-xl">
        <div>
          <label className="text-sm">Name</label>
          <Input {...register("name")} placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <Input type="email" {...register("email")} placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm">Subject</label>
          <Input {...register("subject")} placeholder="Project brief (optional)" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm">Message</label>
          <Textarea {...register("message")} placeholder="What are we building? Goals, timeline, budget range." rows={6} aria-invalid={!!errors.message} />
          {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
        </div>
        {/* Honeypot */}
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
        <div className="md:col-span-2 flex justify-end">
          <Button type="submit" variant="neon" size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
        </div>
      </form>
      <div className="mt-6 text-sm">
        <a href="https://calendly.com/" className="underline">Book a call</a> · <a href="mailto:hello@example.com" className="underline">Email</a>
      </div>
    </section>
  );
};

export default Contact;
