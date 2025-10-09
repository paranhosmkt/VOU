import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-brand-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-brand-purple to-brand-blue rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-brand-light leading-tight mb-4">
            Transformamos Marcas.
            <br />
            Criamos <span className="text-brand-blue">Impacto</span>.
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-gray mb-8">
            Um rebranding completo para posicionar sua marca como líder de mercado, com identidade forte e uma voz inesquecível.
            </p>
           <a
    href="https://wa.me/5548999542785?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20transformar%20minha%20marca%20para%20gerar%20impacto." // <-- COLOQUE O LINK DESEJADO AQUI
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg py-4 px-10 rounded-md hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
>
    Descubra Como
</a>
      </div>
    </section>
  );
};

export default HeroSection;