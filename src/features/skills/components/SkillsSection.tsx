'use client';

import { SKILLS } from '../constants';
import { useEffect, useRef } from 'react';
import { SkillIcon } from './SkillIcon';

const SkillsSection = () => {
  const frontendSkills = SKILLS.filter(skill => skill.category === 'frontend');
  const backendSkills = SKILLS.filter(skill => skill.category === 'backend');
  const toolsSkills = SKILLS.filter(skill => skill.category === 'tools');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const url = new URL(window.location.href);
          url.hash = 'habilidades';
          window.history.replaceState({}, '', url.toString());
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#habilidades' && titleRef.current) {
        titleRef.current.focus();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash === '#habilidades' && titleRef.current) {
      titleRef.current.focus();
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-24 bg-[var(--color-bg-secondary)] scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          tabIndex={-1}
          className="text-4xl font-bold text-center mb-16 gradient-text focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-secondary)] rounded-lg"
        >
          Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div className="group bg-[var(--color-bg-primary)] p-6 rounded-xl shadow-lg hover:shadow-[0_0_15px_var(--color-accent-primary)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10">
                <svg className="w-6 h-6 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Frontend
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-2">
              {frontendSkills.map(skill => (
                <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="group bg-[var(--color-bg-primary)] p-6 rounded-xl shadow-lg hover:shadow-[0_0_15px_var(--color-accent-primary)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10">
                <svg className="w-6 h-6 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Backend
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-2">
              {backendSkills.map(skill => (
                <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="group bg-[var(--color-bg-primary)] p-6 rounded-xl shadow-lg hover:shadow-[0_0_15px_var(--color-accent-primary)] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10">
                <svg className="w-6 h-6 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Tools
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-2">
              {toolsSkills.map(skill => (
                <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
