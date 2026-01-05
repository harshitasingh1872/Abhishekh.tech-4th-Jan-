import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  Linkedin,
  Instagram,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const projectTypes = [
  'Web Application',
  'UI/UX Design',
  'Technical Writing',
  'Consulting',
  'Speaking Engagement',
  'Other',
];

const budgetRanges = [
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
  "Let's Discuss",
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
    company: '', // honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.company) return; // spam trap

    setIsSubmitting(true);

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formPayload.append(key, value)
    );

    formPayload.append('_captcha', 'false');
    formPayload.append('_template', 'table');

    try {
      await fetch(
        'https://formsubmit.co/1a74d94e4e5bb60f4a127a2f731633a2',
        {
          method: 'POST',
          body: formPayload,
        }
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
        company: '',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 code-grid opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Powerful</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let’s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="mailto:heya@abhishekh.tech"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-primary/30 transition"
            >
              <Mail className="text-primary" />
              <span>heya@abhishekh.tech</span>
            </a>

            <a
              href="tel:+917976106665"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-secondary/30 transition"
            >
              <Phone className="text-secondary" />
              <span>+91 7976106665</span>
            </a>

            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <MapPin className="text-primary" />
              <span>Hyderabad, India</span>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/abhishekh-dey/',
                },
                {
                  icon: Instagram,
                  href: 'https://instagram.com/abhishekh_dey',
                },
                {
                  icon: Github,
                  href: 'https://github.com/abhishekh-dey',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="glass-card w-12 h-12 rounded-xl flex items-center justify-center hover:border-primary/30"
                >
                  <item.icon className="text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 rounded-xl text-center"
                >
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <h3 className="text-2xl font-bold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    I’ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card p-8 rounded-xl space-y-6"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="hidden"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      required
                      className="glass-select"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                    >
                      <option value="">Project Type</option>
                      {projectTypes.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>

                    <select
                      required
                      className="glass-select"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                    >
                      <option value="">Budget Range</option>
                      {budgetRanges.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <Textarea
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
