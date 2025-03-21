'use client';

import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group relative">
              <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-6 h-full transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_var(--color-accent-primary)/30]">
                <div className="h-48 bg-gradient-to-br from-[var(--color-accent-primary)]/10 to-[var(--color-accent-secondary)]/10 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="font-bold text-2xl mb-3 gradient-text">Proyecto {project}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6 line-clamp-3">
                  Descripción breve del proyecto y tecnologías utilizadas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript'].map((tech) => (
                    <span key={tech} className="bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] text-sm px-4 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 