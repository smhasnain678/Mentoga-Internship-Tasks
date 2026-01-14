import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  {
    id: 1,
    title: "Solara Brand Identity",
    category: "Branding",
    description: "Complete visual identity for a sustainable lifestyle brand including logo, guidelines, and print collateral.",
    image: project1,
  },
  {
    id: 2,
    title: "Lumière Cosmetics",
    category: "Packaging Design",
    description: "Luxury packaging design for a premium skincare line, featuring elegant minimalist aesthetics.",
    image: project2,
  },
  {
    id: 3,
    title: "Artisan Coffee Co.",
    category: "Web Design",
    description: "Modern e-commerce website design for a specialty coffee roaster with focus on user experience.",
    image: project3,
  },
  {
    id: 4,
    title: "The Modern Chronicle",
    category: "Editorial Design",
    description: "Book cover and interior layout design for a contemporary fiction publication.",
    image: project4,
  },
  {
    id: 5,
    title: "Mindful App",
    category: "UI/UX Design",
    description: "Mobile app interface design for a wellness and meditation application.",
    image: project5,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft transition-all duration-500 group-hover:shadow-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="font-body text-xs uppercase tracking-wider text-primary-foreground/80 mb-2">
            {project.category}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
            {project.title}
          </h3>
          <p className="font-body text-sm text-primary-foreground/80 mb-4 line-clamp-2">
            {project.description}
          </p>
          <button className="inline-flex items-center gap-2 text-primary-foreground font-body text-sm font-medium hover:gap-3 transition-all">
            View Project <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my recent work spanning brand identity,
            packaging, web design, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
