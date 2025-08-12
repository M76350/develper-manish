import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md glass border-b border-border/40 animate-fade-in">
      <motion.nav className="container mx-auto flex items-center justify-between py-4" initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
        <Link to="/" aria-label="Home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md flex items-center justify-center bg-gradient-primary text-foreground font-bold shadow-neon">MY</div>
          <span className="sr-only">Manish Yadav</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="story-link hover:opacity-90">About</a>
          <a href="#skills" className="story-link hover:opacity-90">Skills</a>
          <a href="#projects" className="story-link hover:opacity-90">Projects</a>
          <a href="#dairy" className="story-link hover:opacity-90">Dairy Tech</a>
          <a href="#blog" className="story-link hover:opacity-90">Blog</a>
          <a href="#contact" className="story-link hover:opacity-90">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:block">
            <Button variant="glass" size="sm">Hire Me</Button>
          </a>
          <a href="#projects">
            <Button variant="neon" size="sm">View Projects</Button>
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
