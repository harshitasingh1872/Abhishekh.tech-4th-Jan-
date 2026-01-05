import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: '🌐',
    title: 'Full Stack Website Development',
    description: 'End-to-end web application development using modern technologies. From responsive frontends to scalable backend architectures.',
    features: [
      'Custom React/Next.js applications',
      'RESTful & GraphQL API development',
      'Database design & optimization',
      'Cloud deployment & DevOps',
      'Performance optimization',
    ],
  },
  {
    icon: '🎨',
    title: 'UI/UX & Graphics Design',
    description: 'Creating intuitive interfaces and stunning visuals that elevate your brand and enhance user experience.',
    features: [
      'User interface design',
      'Design system creation',
      'Brand identity & logos',
      'Marketing graphics',
      'Figma prototyping',
    ],
  },
  {
    icon: '✍️',
    title: 'Technical Content Writing',
    description: 'Clear, engaging technical documentation and content that communicates complex concepts effectively.',
    features: [
      'API documentation',
      'Technical blog posts',
      'User guides & tutorials',
      'White papers',
      'SEO-optimized content',
    ],
  },
  {
    icon: '🎤',
    title: 'Tech Talks & Keynotes',
    description: 'Engaging presentations on technology trends, development best practices, and team leadership.',
    features: [
      'Conference keynotes',
      'Corporate workshops',
      'Team training sessions',
      'Webinar presentations',
      'Panel discussions',
    ],
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    icon: Zap,
    price: '₹12,999',
    period: 'starting from',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Single page application',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '2 revision rounds',
      '7-day delivery',
    ],
    popular: true,
  },
  {
    name: 'Professional',
    icon: Star,
    price: '₹23,999',
    period: 'starting from',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-page application',
      'Custom UI/UX design',
      'Backend API development',
      'Database integration',
      'Payment integration',
      'Unlimited revisions',
      '20-day delivery',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'tailored quote',
    description: 'For complex, large-scale solutions',
    features: [
      'Full-stack architecture',
      'Microservices design',
      'Cloud infrastructure setup',
      'CI/CD pipelines',
      'Performance optimization',
      'Security hardening',
      'Dedicated support',
      'SLA guaranteed',
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique requirements
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Rate Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Indicative <span className="text-gradient">Rate Card</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Rates are customizable based on project scope and complexity. Let's discuss your specific needs.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`relative glass-card p-8 rounded-xl ${
                tier.popular ? 'border-primary/50 glow-primary' : ''
              }`}
            >
              
              
              <div className="text-center mb-6">
                <div className={`inline-flex w-14 h-14 rounded-xl items-center justify-center mb-4 ${
                  tier.popular ? 'bg-primary/20 border border-primary/30' : 'bg-muted'
                }`}>
                  <tier.icon className={tier.popular ? 'text-primary' : 'text-muted-foreground'} size={24} />
                </div>
                <h4 className="text-xl font-bold mb-1">{tier.name}</h4>
                <p className="text-xs text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">{tier.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? 'hero' : 'heroOutline'}
                className="w-full"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * All prices are indicative and customizable based on project requirements. GST applicable.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
