import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "A instalação de som ou multimídia perde a garantia da concessionária?",
    answer: "De jeito nenhum. Trabalhamos com sistemas Plug and Play, mantendo o chicote original intacto. Sem cortes de fios, sem adaptações amadoras. A parte elétrica e a garantia de fábrica da sua nave continuam 100% preservadas."
  },
  {
    question: "O PPF amarela, resseca ou descasca com o tempo?",
    answer: "Esqueça isso. Usamos apenas PPF com tecnologia regenerativa e proteção UV de ponta. Ele não amarela, não resseca e cria um escudo real contra pedras, arranhões e seiva de árvore, mantendo o brilho original da pintura por anos."
  },
  {
    question: "Quanto tempo meu carro precisa ficar na loja?",
    answer: "Nós respeitamos o seu tempo e o fato de você querer estar com o carro. Serviços como Window Blue ou Insulfilm saem no mesmo dia. Projetos complexos de som ou estética detalhada (Vitrificação/PPF) levam de 24h a 48h. Agendou, seu carro é prioridade."
  },
  {
    question: "Vocês parcelam os projetos? Como funciona o pagamento?",
    answer: "Sim! O projeto dos seus sonhos não precisa esperar. Parcelamos tudo no cartão de crédito em até 10x sem dor de cabeça, com condições especiais para projetos completos (Ex: Som + PPF + Multimídia)."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 relative z-10" id="faq">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      <div className="container-custom max-w-[900px] relative z-10">
        
        {/* Header Automotivo Seco */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] font-black uppercase tracking-tighter mb-4 text-white">
            Tirando a <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Limpo</span>
          </h2>
          <p className="text-[#A3A3A3] text-lg font-bold tracking-wider uppercase">Dúvidas Frequentes. Sem enrolação.</p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-2 transition-all duration-300 bg-black gpu-accelerated ${isOpen ? 'border-brand-yellow' : 'border-white/10 hover:border-white/30'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className={`font-black uppercase tracking-widest text-[0.9rem] md:text-[1rem] transition-colors duration-300 pr-8 drop-shadow-md ${isOpen ? 'text-brand-yellow' : 'text-white group-hover:text-brand-yellow'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 transition-transform duration-300 ${isOpen ? 'text-black bg-brand-yellow rotate-180' : 'text-brand-yellow bg-white/5 group-hover:bg-white/10'}`}>
                    {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-[#ccc] font-medium leading-relaxed border-l-4 border-brand-yellow ml-6 mb-6 bg-white/[0.02]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;