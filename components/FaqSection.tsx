import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

const faqData = [
  {
    question: "Qual é a duração média de um projeto de rebranding?",
    answer: "A duração de um projeto de rebranding pode variar dependendo da complexidade e do escopo. Em média, um projeto completo, da imersão à entrega final, leva de 4 a 8 semanas. Nosso processo é estruturado para garantir profundidade e agilidade."
  },
  {
    question: "Vocês trabalham com empresas de todos os portes?",
    answer: "Sim, atendemos desde startups em estágio inicial que buscam construir uma marca forte desde o começo, até empresas estabelecidas que precisam de um rebranding estratégico para se manterem relevantes e competitivas no mercado."
  },
  {
    question: "O que está incluído na entrega final do projeto?",
    answer: "Nossa entrega final é completa e prática. Você receberá um Brand Guideline detalhado, que inclui todas as versões do seu logo, paleta de cores, tipografia, regras de aplicação da marca, e templates para materiais de marketing e redes sociais."
  },
  {
    question: "Como medimos o sucesso de um projeto de rebranding?",
    answer: "O sucesso é medido através de uma combinação de métricas quantitativas e qualitativas, definidas no início do projeto. Isso pode incluir aumento no reconhecimento de marca, melhoria no engajamento do público, feedback positivo dos stakeholders e, claro, o impacto nos seus objetivos de negócio."
  }
];

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-light">{question}</h3>
        <span className="transform transition-transform duration-300">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="text-brand-gray pb-6 pr-8">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">Perguntas Frequentes</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Respostas para as dúvidas mais comuns sobre nosso processo e serviços.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;