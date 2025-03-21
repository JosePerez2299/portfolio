'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Detectar sección activa
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inicialmente para establecer el estado correcto
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // altura del navbar
      const extraOffset = 32; // espacio adicional para mejor visibilidad
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Actualizar el hash después del scroll
      window.history.pushState({}, '', href);
      // Disparar el evento hashchange manualmente
      window.dispatchEvent(new HashChangeEvent('hashchange'));

      setIsMenuOpen(false);
      setActiveSection(targetId);
    }
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = activeSection === item.href.replace('#', '');

    return (
      <a
        href={item.href}
        className={twMerge(
          'px-4 py-2 rounded-lg transition-all duration-200 text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)]',
          isActive && 'text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10'
        )}
        onClick={(e) => handleNavClick(e, item.href)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav className={twMerge(
      'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
      isScrolled ? 'bg-[var(--color-bg-primary)] shadow-lg backdrop-blur-sm bg-opacity-80' : 'bg-transparent'
    )}>
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-xl font-bold gradient-text"
          >
            Mi Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 h-full">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-[var(--color-accent-primary)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--color-bg-primary)] border-t border-[var(--color-accent-primary)]/10 backdrop-blur-sm bg-opacity-80">
            <div className="container mx-auto py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.href} className="px-4">
                  <NavLink item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
