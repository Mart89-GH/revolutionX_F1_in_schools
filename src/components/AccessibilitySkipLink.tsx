import React from 'react';

const AccessibilitySkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-rx-gold focus:text-rx-black focus:rounded-lg focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-rx-gold focus:ring-offset-2 focus:ring-offset-rx-black"
    >
      Saltar al contenido principal
    </a>
  );
};

export default AccessibilitySkipLink;