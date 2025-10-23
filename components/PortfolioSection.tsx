import React from 'react';
import { ArrowUpRightIcon } from './icons';

const portfolioItems = [
  {
    image: "https://i.postimg.cc/T37prtmz/Pety.png",
    category: "Branding & Identidade Visual",
    title: "PETY",
    description: "Criamos uma marca divertida e que se conecta com a ideia de felicidade dos pets e como eles colorem nossa vida.",
    link: "https://www.behance.net/gallery/237139691/Pety-Rebranding"
  },
  {
    image: "https://i.postimg.cc/Y00WcT1Y/L-L.png",
    category: "Rebranding",
    title: "L&L Boutique",
    description: "Mais que uma boutique, um estilo de vida luxuoso e elegante.",
    link: "https://www.behance.net/gallery/237144843/L-L-Boutique-Brand-Design"
  },
  {
    image: "https://i.postimg.cc/RV8cmCp6/Dalonzzo.png",
    category: "Rebranding Completo",
    title: "Dalonzzo Café",
    description: "O grão moído, o café quentinho, os momentos inesquecíveis.",
    link: "https://www.behance.net/gallery/237138625/Dalonzzo-caf-Brand-design"
  },
  {
    image: "https://i.postimg.cc/c1zKg970/Yalla.png",
    category: "Material de Marca",
    title: "Yalla Consórcio",
    description: "Design de materiais corporativos, incluindo brochures e apresentações, que comunicam confiança e profissionalismo.",
    link: "https://drive.google.com/file/d/1lxREPW-aVo0NPyhM9cImOGSfHU2jwpdi/view?usp=sharing"
  },
];

interface PortfolioItemProps {
    image: string;
    category: string;
    title: string;
    description: string;
    link: string;
}

const PortfolioCard: React.FC<PortfolioItemProps> = ({ image, category, title, description, link }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-2xl">
        
        {/* ESTA É A LINHA QUE ESTAVA FALTANDO */}
        <img src={image} alt={title} className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-1">{category}</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">{title}</h3>
            <div className="max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                <p className="text-brand-gray mb-4 text-base">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-white hover:text-brand-blue transition-colors">
                    Ver Projeto
                    <ArrowUpRightIcon />
                </a>
            </div>
        </div>
    </div>
);


const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">Nosso Portfolio</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Projetos que transformaram negócios e elevaram marcas.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
