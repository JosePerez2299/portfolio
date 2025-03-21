import Image from 'next/image';
import HeroSection from '@/features/hero/components/HeroSection';
import SkillsSection from '@/features/skills/components/SkillsSection';
import AboutSection from '@/features/about/components/AboutSection';
import ProjectsSection from '@/features/projects/components/ProjectsSection';
import ContactSection from '@/features/contact/components/ContactSection';

export default function Home() {
  return (
    <div className="main-content">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
