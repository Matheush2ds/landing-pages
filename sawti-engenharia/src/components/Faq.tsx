"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown, Building2, Zap } from 'lucide-react';

export default function Faq() {
  const [openFaqInst, setOpenFaqInst] = useState<number | null>(null);
  const [openFaqTec, setOpenFaqTec] = useState<number | null>(null);

  const [faqsInstitucionais, setFaqsInstitucionais] = useState<any[]>([]);
  const [faqsTecnicas, setFaqsTecnicas] = useState<any[]>([]);

  const toggleFaqInst = (index: number) => setOpenFaqInst(openFaqInst === index ? null : index);
  const toggleFaqTec = (index: number) => setOpenFaqTec(openFaqTec === index ? null : index);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  useEffect(() => {
    // Busca os FAQs editados no painel. Se falhar, carrega os padrões.
    fetch('/faq.json?' + new Date().getTime())
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setFaqsInstitucionais(data.filter((faq: any) => faq.tipo === 'Institucional'));
          setFaqsTecnicas(data.filter((faq: any) => faq.tipo === 'Técnica'));
        } else {
          carregarFaqsPadrao();
        }
      })
      .catch(() => {
        carregarFaqsPadrao();
      });
  }, []);

  const carregarFaqsPadrao = () => {
    setFaqsInstitucionais([
      { q: "Em quais regiões a Sawti possui atuação operacional?", a: "Temos forte atuação de campo e equipes móveis preparadas para realizar atendimentos in loco. Nossa infraestrutura logística permite operação plena em projetos por toda a região de Goiás, Minas Gerais, Distrito Federal (Brasília), Mato Grosso e demais localidades sob consulta técnica." },
      { q: "Quais disciplinas de engenharia elétrica integram o escopo da Sawti?", a: "Atuamos de ponta a ponta na infraestrutura elétrica corporativa e industrial. Nosso escopo abrange o desenvolvimento e execução de redes de distribuição, construção e comissionamento de subestações de energia, usinas solares, implantação de SPDA e instalações de baixa tensão." },
      { q: "Os projetos da Sawti seguem as normativas das concessionárias?", a: "Absolutamente. Todos os nossos projetos e execuções são rigorosamente fundamentados nas normas da ABNT e nas diretrizes específicas de cada concessionária local, garantindo 100% de conformidade, segurança operacional NR10 e aprovação célere das obras." },
      { q: "Como iniciar um estudo de viabilidade técnica ou solicitar uma proposta?", a: "Basta preencher o formulário rápido de orçamento localizado no rodapé desta página ou acionar o botão do WhatsApp. Um especialista fará a triagem técnica da sua demanda instantaneamente." }
    ]);

    setFaqsTecnicas([
      { q: "Por que investir em uma Subestação de Energia própria?", a: "Ao migrar para a média/alta tensão com uma subestação própria, a indústria reduz drasticamente a tarifa de energia cobrada pela concessionária, melhora a qualidade da energia e viabiliza a expansão do maquinário." },
      { q: "Quais as etapas elétricas cruciais em um loteamento?", a: "A infraestrutura elétrica exige aprovação rigorosa. Envolve o projeto de rede de distribuição, dimensionamento de transformadores, implantação de postes, iluminação pública em LED e a homologação final." },
      { q: "Qual a importância do estudo de proteção e seletividade?", a: "O estudo garante que, em caso de um curto-circuito, apenas o disjuntor mais próximo do problema desarme. Isso evita que a fábrica inteira fique sem energia (apagão geral)." },
      { q: "Como a instalação de usinas solares impacta a rede existente?", a: "Sistemas fotovoltaicos injetam energia na rede. É necessário realizar estudos de fluxo de carga e adequar a subestação na entrada para que a energia seja aceita sem instabilidades." }
    ]);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-white scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12 sm:mb-20">
          <h2 className="text-xs sm:text-sm font-extrabold text-[#CE3235] tracking-widest uppercase mb-2 sm:mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#CE3235]"></span> Suporte Estratégico <span className="w-8 h-px bg-[#CE3235]"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Perguntas Frequentes</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#CE3235]"><Building2 size={20} /></div> Dúvidas Institucionais
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {faqsInstitucionais.map((faq, index) => (
                <motion.div variants={fadeUp} key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#CE3235]/30 transition-all duration-300">
                  <button onClick={() => toggleFaqInst(index)} className="w-full px-5 sm:px-8 py-5 text-left font-bold text-base text-slate-900 flex justify-between items-center focus:outline-none gap-4">
                    <span className="leading-snug flex-1">{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaqInst === index ? 'bg-[#CE3235] text-white shadow-md' : 'bg-white border border-slate-200 text-slate-400'}`}>
                      <ChevronDown size={16} className={`transform transition-transform duration-300 ${openFaqInst === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqInst === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 sm:px-8 pb-6 text-slate-600 font-medium leading-relaxed text-sm sm:text-base pt-2 border-t border-slate-200 mx-5 mt-2">{faq.a}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} transition={{ delay: 0.2 }}>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#CE3235]"><Zap size={20} /></div> Dúvidas Técnicas
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {faqsTecnicas.map((faq, index) => (
                <motion.div variants={fadeUp} key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#CE3235]/30 transition-all duration-300">
                  <button onClick={() => toggleFaqTec(index)} className="w-full px-5 sm:px-8 py-5 text-left font-bold text-base text-slate-900 flex justify-between items-center focus:outline-none gap-4">
                    <span className="leading-snug flex-1">{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaqTec === index ? 'bg-[#CE3235] text-white shadow-md' : 'bg-white border border-slate-200 text-slate-400'}`}>
                      <ChevronDown size={16} className={`transform transition-transform duration-300 ${openFaqTec === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqTec === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 sm:px-8 pb-6 text-slate-600 font-medium leading-relaxed text-sm sm:text-base pt-2 border-t border-slate-200 mx-5 mt-2">{faq.a}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}