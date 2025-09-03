import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-rx-black/90 backdrop-blur-sm border-b border-rx-gold/30 touch-manipulation">
      <div className="container-custom py-2 xs:py-3 md:py-4">
        <div className="flex justify-between items-center">
          <img 
            src="/revolutionx-logo.png"
            alt="RevolutionX Logo"
            className="h-8 xs:h-10 md:h-12 w-auto object-contain"
            loading="eager"
            decoding="sync"
          />
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-rx-gold/10 rounded-lg transition-colors duration-200 focus-ring md:hidden"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-rx-gold" />
            ) : (
              <Menu className="w-6 h-6 text-rx-gold" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 pb-4 border-t border-rx-gold/20 md:hidden">
            <ul className="space-y-2 pt-4">
              <li>
                <a href="#inicio" className="block px-4 py-2 text-white hover:bg-rx-gold/10 rounded-lg transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#equipo" className="block px-4 py-2 text-white hover:bg-rx-gold/10 rounded-lg transition-colors duration-200">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#patrocinadores" className="block px-4 py-2 text-white hover:bg-rx-gold/10 rounded-lg transition-colors duration-200">
                  Patrocinadores
                </a>
              </li>
              <li>
                <a href="#contacto" className="block px-4 py-2 text-white hover:bg-rx-gold/10 rounded-lg transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;