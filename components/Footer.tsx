import React from 'react';
import { LinkedInIcon, InstagramIcon, BehanceIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-card">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold text-brand-light">VOU Agência</h3>
            <p className="text-gray-500 mt-1">Transformando marcas, criando futuro.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300"><LinkedInIcon /></a>
            <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300"><InstagramIcon /></a>
            <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors duration-300"><BehanceIcon /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} VOU Agência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;