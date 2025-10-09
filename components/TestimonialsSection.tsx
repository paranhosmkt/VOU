import React from 'react';
import { QuoteIcon } from './icons';

const testimonials = [
  {
    quote: "Quando eu precisei de serviços de Designer Gráfico para meu negócio e clientes, logo me veiona cabeça a equipe da VOU! Além de serem super confiáveis e nunca me deixarem na mão, a qualidade da entrega é impecável.",
    name: "Flávia Popia",
    title: "Agência Finds",
    avatar: "https://i.postimg.cc/j2Bk4Mqv/Flavia-Popia.png"
  },
  {
    quote: "A VOU deu uma cara pra Eleve, que era apenas um projeto que estava no papel. Com a VOU a Eleve ganhou vida!",
    name: "Thamires Assis",
    title: "Eleve Gestão",
    avatar: "https://i.postimg.cc/3w6STLmY/Thamires-Assis.png"
  },
  {
    quote: "Utilizo serviços do Guilherme e da VOU desde 2021 e já recomendei para diversos colegas e amigos, sempre um trabalho e atendimento impecável e resultados excelentes, extremamente comprometidos e confiáveis.",
    name: "Douglas Mota",
    title: "Doug Trading",
    avatar: "https://i.postimg.cc/mZqbnRty/Douglas-Consultor-de-Copy-e-Marketing.png"
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, title, avatar }) => (
  <div className="bg-brand-card p-8 rounded-lg border border-gray-800/50 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/50 shadow-lg hover:shadow-brand-blue/10">
    <div className="text-brand-blue mb-4">
        <QuoteIcon />
    </div>
    <p className="text-brand-gray flex-grow mb-6">"{quote}"</p>
    <div className="flex items-center mt-auto">
      <img className="w-12 h-12 rounded-full object-cover mr-4" src={avatar} alt={name} />
      <div>
        <p className="font-bold text-brand-light">{name}</p>
        <p className="text-sm text-brand-gray">{title}</p>
      </div>
    </div>
  </div>
);


const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-brand-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Marcas de impacto construídas com base na confiança e colaboração.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;