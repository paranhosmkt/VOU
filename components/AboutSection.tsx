import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Equipe da VOU Agência"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-light mb-6">Sobre a VOU</h2>
                        <p className="text-lg text-brand-gray mb-4">
                            Somos uma agência de branding apaixonada por construir marcas que não apenas se destacam, mas que também criam conexões duradouras. Acreditamos que uma marca forte é o alicerce de um negócio de sucesso.
                        </p>
                        <p className="text-lg text-brand-gray mb-6">
                            Nossa equipe combina pensamento estratégico com design criativo para entregar soluções de rebranding que geram resultados reais. Não se trata apenas de um novo logo; trata-se de contar sua história de uma forma que inspire e cative seu público.
                        </p>
                         <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-brand-blue font-semibold hover:underline"
                        >
                            Vamos construir algo incrível juntos →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
