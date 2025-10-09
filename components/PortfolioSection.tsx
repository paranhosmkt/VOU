import React from 'react';
import { ArrowUpRightIcon } from './icons';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Branding & Identidade Visual',
    title: 'Fintech Disruptiva',
    description: 'Rebranding completo para uma fintech, focando em confiança, tecnologia e uma experiência de usuário simplificada.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Posicionamento Digital',
    title: 'Marca de Moda Sustentável',
    description: 'Criação de identidade e estratégia de conteúdo para redes sociais, gerando autoridade e engajamento no nicho de moda consciente.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Estratégia de Marca',
    title: 'Startup de EdTech',
    description: 'Desenvolvimento de uma nova marca a partir do zero, incluindo naming, identidade visual e estratégia de lançamento no mercado.'
  },
];

const PortfolioCard: React.FC<typeof projects[0]> = ({ image, category, title, description }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg border border-gray-800/50">
            <img src={image} alt={title} className="w-full h-96 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                    <p className="text-sm font-medium text-brand-blue uppercase tracking-wider">{category}</p>
                    <h3 className="text-2xl font-heading font-bold text-white mt-1">{title}</h3>
                </div>
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2 overflow-hidden">
                    <p className="text-brand-gray text-sm mb-4">{description}</p>
                    <a href="#" className="inline-flex items-center text-white font-semibold hover:text-brand-blue transition-colors duration-300">
                        Ver Projeto <ArrowUpRightIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};


const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">Nossos Projetos de Impacto</h2>
                    <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Veja como transformamos marcas em líderes de mercado.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;