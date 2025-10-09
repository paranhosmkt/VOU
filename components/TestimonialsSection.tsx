import React from 'react';
import { QuoteIcon } from './icons';

const testimonials = [
  {
    quote: "A VOU não apenas redesenhou nossa marca, eles revitalizaram nosso negócio. O processo foi colaborativo e o resultado superou todas as nossas expectativas. Vimos um aumento de 40% no engajamento online.",
    name: "Juliana Silva",
    title: "CEO da InovaTech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "O trabalho de posicionamento digital foi um divisor de águas. A equipe da VOU entendeu profundamente nosso público e criou uma estratégia de conteúdo que nos conectou de forma autêntica e eficaz.",
    name: "Ricardo Mendes",
    title: "Diretor de Marketing da Moda Consciente",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "Profissionalismo, criatividade e um foco incansável em resultados. Essa é a VOU. Eles nos entregaram uma identidade visual que finalmente reflete a qualidade dos nossos serviços.",
    name: "Fernanda Costa",
    title: "Fundadora da EduLearn",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&h=128&q=80"
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