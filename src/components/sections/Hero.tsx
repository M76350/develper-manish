import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "TailwindCSS",
];

const Typing = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const word = skills[index % skills.length];
    setText("");
    let i = 0;
    const type = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(type);
        setTimeout(() => setIndex((v) => v + 1), 1200);
      }
    }, 80);
    return () => clearInterval(type);
  }, [index]);

  return (
    <span aria-live="polite" className="tabular-nums">{text}<span className="opacity-70">|</span></span>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-primary" aria-hidden />
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight gradient-text"
          >
            Manish Yadav — Building reliable & delightful web & mobile experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-muted-foreground"
          >
            Curious engineer who ships production software & builds real-world impact.
            <span className="ml-2">Skills: <Typing /></span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact"><Button variant="hero" size="xl">Hire Me</Button></a>
            <a href="#projects"><Button variant="glass" size="xl">View Projects</Button></a>
            <a href="/Manish-Yadav-CV.pdf" aria-label="Download CV"><Button variant="outline" size="xl">Download CV</Button></a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <img src={heroImg} alt="Futuristic developer hero illustration with neon gradient and glass panels" className="w-full h-auto rounded-xl shadow-neon" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
