import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Architecting Scalable Microservices: Lessons from Production',
    excerpt: 'A deep dive into building resilient distributed systems that handle millions of requests. From service discovery to fault tolerance patterns that actually work.',
    category: 'Architecture',
    date: 'Dec 15, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    title: 'The Art of Component Design: Building Reusable UI Systems',
    excerpt: 'How to create design systems that scale across teams. Atomic design principles, token-based theming, and maintaining consistency at scale.',
    category: 'UI/UX',
    date: 'Dec 8, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop',
  },
  {
    title: 'Leading Engineering Teams: From Developer to Tech Lead',
    excerpt: 'The transition from individual contributor to team leader. Mentoring strategies, code review best practices, and fostering a culture of excellence.',
    category: 'Leadership',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
  {
    title: 'AI-Powered Development: Integrating LLMs into Your Workflow',
    excerpt: 'Practical strategies for leveraging AI assistants in development. From code generation to documentation automation and intelligent debugging.',
    category: 'AI & Development',
    date: 'Nov 20, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on development, design, leadership, and the evolving tech landscape
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-sm text-xs font-mono text-white border border-secondary/30">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-gradient transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#" className="group">
              View All Articles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
