'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Sobre Mí</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-bg-primary)]/50 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Soy un Ingeniero en Computación de Venezuela, apasionado por el desarrollo de software y la innovación tecnológica. 
              Mi experiencia se centra en el desarrollo web full stack, con un fuerte enfoque en arquitecturas escalables y buenas prácticas de desarrollo.
            </p>
            <div className="bg-[var(--color-bg-secondary)]/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Experiencia Destacada</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "💻", text: "Desarrollo de aplicaciones web full stack con React, Next.js y Node.js" },
                  { icon: "☁️", text: "Implementación de arquitecturas cloud en AWS" },
                  { icon: "🗄️", text: "Diseño y optimización de bases de datos SQL y NoSQL" },
                  { icon: "🔄", text: "Desarrollo de APIs RESTful y microservicios" },
                  { icon: "🐳", text: "Containerización y orquestación con Docker" },
                  { icon: "🚀", text: "Implementación de CI/CD y metodologías ágiles" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-[var(--color-bg-primary)]/30 hover:bg-[var(--color-bg-primary)]/50 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-[var(--color-text-secondary)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 