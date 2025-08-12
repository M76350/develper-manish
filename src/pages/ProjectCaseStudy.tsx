import { useParams, Link } from "react-router-dom";
import projects from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/"><Button variant="neon" className="mt-4">Go Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-16">
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold gradient-text">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.tagline}</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <img src={project.thumbnail} alt={`${project.title} hero`} className="w-full h-auto rounded-xl glass" />
          </div>
          <div className="text-sm">
            <p><strong>Role:</strong> {project.role}</p>
            <p className="mt-2"><strong>Tech:</strong> {project.tech.join(", ")}</p>
            <ul className="mt-4 list-disc list-inside">{project.outcomes.map((o,i)=>(<li key={i}>{o}</li>))}</ul>
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Button variant="glass">Live Demo</Button></a>}
              {project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><Button variant="outline">GitHub</Button></a>}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Problem & Approach</h2>
          <p className="mt-2 text-muted-foreground">Deep dive case study content can be connected to markdown later. This template includes architecture, code highlights, and performance metrics.</p>
        </div>
      </article>
      <div className="mt-10"><Link to="/"><Button variant="neon">← Back to Projects</Button></Link></div>
    </main>
  );
};

export default ProjectCaseStudy;
