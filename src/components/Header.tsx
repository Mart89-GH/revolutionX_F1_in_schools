import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-rx-black/90 border-b border-rx-gold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img 
            src="/revolutionx-logo.png"
            alt="RevolutionX Logo"
            className="h-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;