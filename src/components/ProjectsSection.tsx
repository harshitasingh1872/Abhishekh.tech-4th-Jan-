import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectCategories = ['All', 'Web Apps', 'UI/UX', 'Tools', 'Content'];

const projects = [
  {
    title: 'CloudSync Dashboard',
    category: 'Web Apps',
    description: 'Enterprise-grade cloud monitoring platform with real-time analytics, automated alerts, and team collaboration features. Handles 500K+ daily active users.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    outcome: 'Reduced system downtime by 45% through predictive alerting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'FinTrack Pro',
    category: 'Web Apps',
    description: 'Personal finance management application with budget tracking, investment portfolio analysis, and AI-powered spending insights.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'TailwindCSS', 'Chart.js'],
    outcome: 'Used by 10K+ users for financial planning',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DesignFlow UI Kit',
    category: 'UI/UX',
    description: 'Comprehensive design system with 200+ reusable components, accessibility-first approach, and seamless Figma-to-code workflow.',
    techStack: ['Figma', 'React', 'Storybook', 'TailwindCSS', 'Radix UI'],
    outcome: 'Adopted by 3 enterprise teams for consistent UI development',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DevOps Automation Suite',
    category: 'Tools',
    description: 'Custom CI/CD pipeline toolkit with automated testing, deployment orchestration, and infrastructure-as-code templates.',
    techStack: ['Python', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    outcome: 'Reduced deployment time from 2 hours to 15 minutes',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'TechWrite Hub',
    category: 'Content',
    description: 'Knowledge management platform for technical documentation with version control, collaborative editing, and API reference generation.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Markdown', 'Algolia'],
    outcome: 'Streamlined documentation for 50+ API endpoints',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Starter',
    category: 'Web Apps',
    description: 'Production-ready e-commerce template with Stripe integration, inventory management, and multi-vendor support.',
    techStack: ['React', 'Express', 'Stripe', 'PostgreSQL', 'AWS S3'],
    outcome: 'Template downloaded 2K+ times on GitHub',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 code-grid opacity-20" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of solutions spanning web development, design systems, and automation tools
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-mono text-primary border border-primary/30">
                  {project.category}
                </span>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="View Live"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Outcome */}
                <p className="text-xs text-primary font-medium">
                  📈 {project.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#" className="group">
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
