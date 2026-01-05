import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/abhishekh-dey' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/abhishekh-dey' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/abhishekh_dey' },
  { name: 'Email', icon: Mail, href: 'mailto:abhishekhdeyofficial@gmail.com' },
];

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/50">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="inline-block text-2xl font-bold font-display mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">Abhishekh</span>
              <span className="text-foreground"> Dey</span>
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Crafting exceptional digital experiences through code, design, and innovation. 
              Let's build the future together.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Get insights on development, design, and tech leadership delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-10 rounded-lg border border-border/50 bg-muted/50 px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Abhishekh Dey. All rights reserved. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500" /> and lots of Nicotine.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
