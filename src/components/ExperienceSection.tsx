import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

import genpactLogo from '../assets/logos/genpact.svg';
import chandigarhUniversityLogo from '../assets/logos/chandigarh-university.svg';
import opjsUniversityLogo from '../assets/logos/opjs-university.svg';

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const workExperience = [
  {
    title: 'Team Leader – Domains & Hosting Operations',
    company: 'Genpact',
    location: 'Hyderabad, India',
    period: 'October 2022 – Present',
    description:
      'Leading high-performing customer support teams for a leading Domains and Hosting provider, driving operational excellence, customer experience, and KPI management through data-driven insights.',
    highlights: [
      'Lead and manage customer support specialists for Domains & Hosting products',
      'Drive CSAT, FCR, AHT, QA, SLA, and productivity metrics',
      'Build dashboards using Tableau and Amazon QuickSight',
      'Partner with clients and internal stakeholders for performance improvement',
      'Conduct audits, deep-dive analysis, and coaching interventions',
      'Mentor team members and groom future leaders',
    ],
    type: 'work' as const,
    logo: genpactLogo,
  },
];

const education = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    company: 'Computer Science & Engineering',
    location: 'Chandigarh University',
    period: '2018 – 2021',
    description:
      'Advanced coursework in computer science fundamentals, algorithms, and modern software development.',
    highlights: [
      'Founder of Cybersecurity Club (700+ members)',
      'Delivered 20+ cybersecurity sessions',
      'Member of Google Developer Group & Meta Developer Circle',
      'Strong foundation in system design and full-stack development',
    ],
    type: 'education' as const,
    logo: chandigarhUniversityLogo,
  },
  {
    title: 'Polytechnic Diploma in Computer Science',
    company: 'Computer Science & Engineering',
    location: 'OPJS University',
    period: '2014 – 2017',
    description:
      'Built a strong foundation in programming, databases, networking, and software engineering.',
    highlights: [
      'Mastered programming fundamentals and OOP concepts',
      'Hands-on experience with databases and system design',
      'Developed strong analytical and problem-solving skills',
    ],
    type: 'education' as const,
    logo: opjsUniversityLogo,
  },
];

/* -------------------------------------------------------------------------- */
/*                              TIMELINE ITEM                                 */
/* -------------------------------------------------------------------------- */

interface TimelineItemProps {
  item: typeof workExperience[number] | typeof education[number];
  index: number;
  isInView: boolean;
}

const TimelineItem = ({ item, index, isInView }: TimelineItemProps) => {
  const isWork = item.type === 'work';
  const Icon = isWork ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-16 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="timeline-line" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
        className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center
          ${isWork
            ? 'bg-primary/20 border border-primary/30'
            : 'bg-secondary/20 border border-secondary/30'
          }`}
      >
        <Icon className={isWork ? 'text-primary' : 'text-secondary'} size={20} />
      </motion.div>

      {/* Content Card */}
      <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:border-primary/30 group">
        {/* Header */}
<div className="flex items-start gap-4 mb-4">
  {/* Logo */}
  <div
    className={`h-16 w-16 rounded-xl bg-muted/30 border border-border
    flex items-center justify-center
    transition-all duration-300
    ${isWork
      ? 'group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]'
      : 'group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]'
    }`}
  >
    <img
      src={item.logo}
      alt={`${item.company} logo`}
      className="h-10 w-10 object-contain
        grayscale opacity-80
        transition-all duration-300
        group-hover:grayscale-0
        group-hover:opacity-100
        group-hover:scale-105"
    />
  </div>

  {/* Title + Meta */}
  <div className="flex-1">
    <h4 className="text-xl font-bold leading-snug">
      {item.title}
    </h4>

    <p className="text-primary font-medium">
      {item.company}
    </p>

    {/* Meta row */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Calendar size={14} />
        <span>{item.period}</span>
      </div>

      <div className="flex items-center gap-1">
        <MapPin size={14} />
        <span>{item.location}</span>
      </div>
    </div>
  </div>
</div>


        {/* Description */}
        <p className="text-muted-foreground mb-4">{item.description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span
                className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                  ${isWork ? 'bg-primary' : 'bg-secondary'}`}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            EXPERIENCE SECTION                               */
/* -------------------------------------------------------------------------- */

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div ref={ref} className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of professional growth and academic achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Briefcase className="text-primary" size={18} />
              </div>
              Work Experience
            </h3>

            {workExperience.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <GraduationCap className="text-secondary" size={18} />
              </div>
              Education
            </h3>

            {education.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;