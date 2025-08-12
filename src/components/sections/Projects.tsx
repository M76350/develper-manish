import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "Web", "Mobile", "Full-Stack", "IoT"] as const;

type Filter = typeof filters[number];

const Projects = () => {
  const [active, setActive] = useState<Filter>("All");
  const navigate = useNavigate();

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter(p => p.type === active)),
    [active]
  );

  return (
    <motion.section id="projects" className="container mx-auto mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Projects</h2>
          <p className="text-muted-foreground mt-2">Outcome-focused case studies with real metrics.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <Button key={f} variant={active === f ? "neon" : "glass"} size="sm" onClick={() => setActive(f)}>
              {f}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {filtered.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
          >
            <Card className="overflow-hidden group glass hover-scale">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  {p.title}
                  <span className="text-xs px-2 py-1 rounded-md bg-secondary/60 border border-border/30">{p.type}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={p.thumbnail} alt={`${p.title} preview`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-3 text-sm list-disc list-inside text-muted-foreground/90">
                  {p.outcomes.map((o, i) => (<li key={i}>{o}</li>))}
                </ul>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <Button variant="neon" size="sm" onClick={() => navigate(`/projects/${p.slug}`)}>Case Study</Button>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer"><Button variant="glass" size="sm">Live</Button></a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><Button variant="outline" size="sm">GitHub</Button></a>}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
