import React from 'react';
import { AnalysisIcon, BrandIcon, DesignIcon, DigitalIcon, PaletteIcon, TypographyIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-brand-card p-8 rounded-lg border border-gray-800/50 transform transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/50 shadow-lg hover:shadow-brand-purple/10">
    <div className="text-brand-purple mb-4">{icon}</div>
    <h3 className="text-2xl font-heading font-bold mb-3 text-brand-light">{title}</h3>
    <p className="text-brand-gray">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <AnalysisIcon />,
      title: 'Diagnóstico e Estratégia',
      description: 'Analisamos sua marca atual (Raio-X) para construir uma reestruturação estratégica que defina seu novo lugar no mercado.',
    },
    {
      icon: <BrandIcon />,
      title: 'Identidade Visual Completa',
      description: 'Criamos e recriamos logomarcas e logotipos que traduzem a essência do seu negócio de forma memorável e atemporal.',
    },
    {
      icon: <PaletteIcon />,
      title: 'Paleta de Cores',
      description: 'Desenvolvemos uma paleta de cores exclusiva que evoca as emoções certas e garante consistência em todos os pontos de contato.',
    },
    {
      icon: <TypographyIcon />,
      title: 'Tipografia',
      description: 'Selecionamos e combinamos fontes que dão voz à sua marca, garantindo legibilidade e personalidade.',
    },
    {
      icon: <DesignIcon />,
      title: 'Materiais de Marca',
      description: 'Elaboramos o design de brochures, apresentações e outros materiais que comunicam sua qualidade e profissionalismo.',
    },
    {
      icon: <DigitalIcon />,
      title: 'Posicionamento Digital',
      description: 'Criamos o design para suas publicações e definimos o posicionamento ideal para suas redes sociais, gerando engajamento e autoridade.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">Nossa Expertise</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Do conceito à execução, cobrimos todas as facetas da transformação da sua marca.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;