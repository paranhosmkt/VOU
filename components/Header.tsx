import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#services', label: 'Serviços' },
        { href: '#process', label: 'Processo' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#about', label: 'Sobre' },
        { href: '#testimonials', label: 'Depoimentos' },
        { href: '#faq', label: 'FAQ' },
    ];

    const scrollTo = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-heading font-bold text-white">
                    AGÊNCIA VOU
                </div>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-brand-gray hover:text-white transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="https://wa.me/5548999542785?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20transformar%20minha%20marca%20para%20gerar%20impacto."
                    onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                    className="hidden md:inline-block bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300"
                >
                    Contato
                </a>
                <div className="md:hidden">
                    {/* Mobile menu button can be added here */}
                </div>
            </div>
        </header>
    );
};

export default Header;