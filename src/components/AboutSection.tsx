import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Globe, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const stats = [
  { icon: Zap, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '3+', label: 'Years Experience' },
  { icon: Globe, value: '20+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards & Certifications' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden dot-pattern"
    >
      {/* Background Image + Soft Overlay (DOES NOT BLOCK DOTS) */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About{' '}
            <span className="text-gradient">Technology</span> &{' '}
            <span className="text-gradient">Design</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building the bridge between elegant code and exceptional user
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden border border-primary/30 glass-card">
              <img
                src={profilePlaceholder}
                alt="Abhishekh Dey"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm Abhishekh Dey, a multi-disciplinary technology professional
                based in Hyderabad. Currently serving as Team Leader at Genpact,
                I blend technical expertise with creative vision to deliver
                impactful solutions.
              </p>
              <p>
                My journey spans full-stack development, UI/UX systems, and
                technical leadership — building scalable products while mentoring
                growing talent.
              </p>
              <p>
                I thrive at the intersection of technology and human experience,
                where thoughtful design meets robust engineering.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Full-Stack Architecture',
                'UI/UX Design Systems',
                'Technical Leadership',
                'Content Strategy',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <stat.icon
                    size={20}
                    className="mx-auto mb-2 text-primary"
                  />
                  <div className="text-xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
