import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NetworkBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
