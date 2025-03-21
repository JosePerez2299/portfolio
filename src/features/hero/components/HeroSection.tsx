'use client';

import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative py-0 pt-16 mt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] bg-cover bg-center opacity-50 backdrop-blur-lg" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-4 mb-8">
              <p className="text-xl text-[var(--color-accent-primary)] font-medium">¡Hola! 👋 Soy</p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fadeIn">
                <TypewriterText text="José Alberto Pérez" />
              </h1>
              <p className="text-3xl font-semibold text-[var(--color-text-secondary)] animate-slideUp">
                Ingeniero en Computación
              </p>
              <p className="text-xl leading-relaxed text-[var(--color-text-secondary)] max-w-2xl animate-slideUp">
                Desarrollador Full Stack apasionado por crear soluciones innovadoras y escalables. 
                Especializado en tecnologías web modernas y arquitecturas cloud.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contacto" 
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-accent-primary)] text-black font-medium hover:bg-[var(--color-accent-primary)]/90 transition-all duration-300 transform hover:scale-105"
              >
                Contáctame
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#proyectos" 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] font-medium hover:bg-[var(--color-accent-primary)]/10 transition-all duration-300"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group z-20">
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
              </div>
              <div className="absolute inset-[2px] rounded-full shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 mix-blend-overlay" />
                <Image
                  src="/profile-photo.jpg"
                  alt="José Alberto Pérez"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute bottom-[-120px] left-[-120px] w-[calc(100%+240px)] h-64 opacity-10 z-10 rounded-2xl overflow-hidden transform rotate-[-8deg]">
              <Image
                src="/images/pattern-bg.jpg"
                alt="Decorative background"
                width={800}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 