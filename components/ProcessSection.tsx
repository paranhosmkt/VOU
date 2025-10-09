import React from 'react';
import { OneIcon, TwoIcon, ThreeIcon, FourIcon } from './icons';

interface ProcessStepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, step }) => (
    <div className="relative pl-12 pb-12">
        <div className="absolute left-[17px] top-0 h-full w-px bg-gray-700/50"></div>
        <div className="absolute left-0 top-0 flex items-center justify-center h-9 w-9 rounded-full bg-brand-dark border-2 border-brand-purple">
            {icon}
        </div>
        <h3 className="text-2xl font-heading font-bold mb-2 text-brand-purple">{title}</h3>
        <p className="text-brand-gray">{description}</p>
    </div>
);


const ProcessSection: React.FC = () => {
    const steps = [
        { icon: <OneIcon />, title: "Imersão e Diagnóstico", description: "Mergulhamos no seu universo para entender seus desafios, público e objetivos. O Raio-X da marca nos dá o mapa para a transformação." },
        { icon: <TwoIcon />, title: "Estratégia e Conceito", description: "Definimos o novo posicionamento, a personalidade e a mensagem central da marca. Aqui, a base para o futuro é solidificada." },
        { icon: <ThreeIcon />, title: "Criação e Design", description: "É hora de dar vida à estratégia. Desenvolvemos toda a identidade visual, do logo à tipografia, com criatividade e precisão." },
        { icon: <FourIcon />, title: "Implementação e Lançamento", description: "Entregamos um guia completo da marca e apoiamos a implementação em todos os canais para um lançamento de sucesso e impacto." },
    ];

  return (
    <section id="process" className="py-20 md:py-32 bg-brand-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light">Nosso Processo de Transformação</h2>
          <p className="text-lg text-brand-gray mt-4 max-w-2xl mx-auto">Uma jornada estruturada em quatro fases para garantir resultados excepcionais.</p>
        </div>
        <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
                <ProcessStep 
                    key={index} 
                    step={index + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;