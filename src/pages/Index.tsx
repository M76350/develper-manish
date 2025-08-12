import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import DairyTech from "@/components/sections/DairyTech";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        {/* About & Skills sections can be expanded next iterations */}
        <Projects />
        <DairyTech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
