import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-light max-w-4xl mx-auto leading-tight">
          Pronto para elevar sua marca ao <span className="text-brand-blue">próximo nível</span>?
        </h2>
        <p className="text-lg text-brand-gray mt-6 mb-10 max-w-2xl mx-auto">
          Vamos conversar sobre como a VOU pode criar uma marca de impacto que reflete o verdadeiro valor do seu negócio.
        </p>
        <a
          href="mailto:contato@vouagencia.com"
          className="bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg py-4 px-12 rounded-md inline-block hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
        >
          Vamos Conversar
        </a>
      </div>
    </section>
  );
};

export default CtaSection;