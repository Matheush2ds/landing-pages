"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useScroll, useSpring, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Zap, Activity, ShieldCheck, ArrowRight, Building2, FileText, SunMedium, Lightbulb, Map, MapPinned, Timer } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Lideranca from '../components/Lideranca';
import PortfolioHome from '../components/PortfolioHome';
import Faq from '../components/Faq';

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: "some" }}
      onViewportEnter={() => {
        animate(count, value, { duration: 2.5, ease: "easeOut" });
      }}
    >
      {rounded}
    </motion.span>
  );
}

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  
  const heroBackgrounds = [
    '/home/loteamento.webp',      
    '/home/projetos.webp',   
    '/home/se.webp',   
    '/home/solar.webp' 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen font-sans bg-[#f8fafc] selection:bg-[#CE3235] selection:text-white overflow-hidden relative w-full">
      <motion.div className="fixed top-0 left-0 right-0 h-1 sm:h-1.5 bg-linear-to-r from-[#CE3235] to-red-500 origin-left z-100" style={{ scaleX }} />
      
      <Header />
      <WhatsAppButton />

      <main className="w-full overflow-x-hidden">
        
        {/* HERO SECTION - Proporções Ajustadas */}
        <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 bg-[#020617] overflow-hidden">
          
          {heroBackgrounds.map((bg, index) => (
            <div 
              key={bg}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[3000ms] ease-in-out ${
                index === currentBg ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ backgroundImage: `url('${bg}')` }}
            ></div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
          <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#CE3235] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none mix-blend-screen z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center text-center max-w-5xl mx-auto">
              
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8 tracking-tighter w-full max-w-full break-words drop-shadow-2xl">
                Engenharia com <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CE3235] via-red-500 to-[#CE3235] block sm:inline mt-2 sm:mt-0 relative">
                  Ética e <br className="block sm:hidden" /> Responsabilidade
                  <svg className="absolute w-full h-3 -bottom-1 left-0 opacity-70 hidden sm:block" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.0002 6.82071C48.4239 1.95475 125.688 -1.82136 198.001 5.92213" stroke="#CE3235" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-xl text-slate-300 mb-8 sm:mb-10 font-medium leading-relaxed max-w-xs sm:max-w-3xl mx-auto px-2 sm:px-0 drop-shadow-md">
                Executamos obras elétricas e projetos de alta complexidade, incluindo redes de distribuição e subestações de energia. Atuamos com rigor técnico e total segurança NR10.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
                <a href="#contato" className="group relative bg-[#CE3235] hover:bg-white hover:text-[#020617] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-500 shadow-[0_0_40px_-10px_rgba(206,50,53,0.6)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] flex items-center justify-center gap-3 w-full sm:w-auto text-center touch-manipulation overflow-hidden relative z-10">
                  <span className="absolute w-0 h-full bg-white/20 top-0 left-0 group-hover:w-full transition-all duration-500 ease-out skew-x-12 transform -translate-x-4"></span>
                  <span className="relative pointer-events-none flex items-center gap-2">Solicitar Proposta Técnica <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAIXA DE ESTATÍSTICAS */}
        <section className="relative z-30 px-3 sm:px-6 lg:px-8 -mt-14 sm:-mt-24 mb-16 sm:mb-24">
          <div className="max-w-5xl mx-auto"> 
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ type: "spring", stiffness: 50, delay: 0.2 }} 
              className="bg-white/95 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white p-4 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-100 via-[#CE3235] to-slate-100 opacity-80"></div>

              <div className="grid grid-cols-3 gap-1 sm:gap-8 divide-x divide-slate-100">
                 
                 <div className="flex flex-col items-center text-center group py-2 sm:py-0 px-1 rounded-2xl hover:bg-slate-50/50 transition-colors">
                   <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-tr from-slate-100 to-white text-[#CE3235] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 group-hover:shadow-red-500/20 group-hover:border-red-100">
                     <Timer className="w-5 h-5 sm:w-8 sm:h-8" />
                   </motion.div>
                   <h4 className="text-xl sm:text-4xl font-extrabold text-slate-900 mb-0.5 sm:mb-1 flex items-center">
                     +<AnimatedNumber value={10} />
                   </h4>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px] sm:text-xs mt-1">
                     Anos de <br className="block sm:hidden"/> Mercado
                   </p>
                 </div>

                 <div className="flex flex-col items-center text-center group py-2 sm:py-0 px-1 rounded-2xl hover:bg-slate-50/50 transition-colors">
                   <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-tr from-slate-100 to-white text-[#CE3235] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 group-hover:shadow-red-500/20 group-hover:border-red-100">
                     <MapPinned className="w-5 h-5 sm:w-8 sm:h-8" />
                   </motion.div>
                   <h4 className="text-xl sm:text-4xl font-extrabold text-slate-900 mb-0.5 sm:mb-1 flex items-center">
                     +<AnimatedNumber value={30} />
                   </h4>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px] sm:text-xs mt-1">
                     Cidades <br className="block sm:hidden"/> Atendidas
                   </p>
                 </div>

                 <div className="flex flex-col items-center text-center group py-2 sm:py-0 px-1 rounded-2xl hover:bg-slate-50/50 transition-colors">
                   <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-tr from-slate-100 to-white text-[#CE3235] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 group-hover:shadow-red-500/20 group-hover:border-red-100">
                     <Map className="w-5 h-5 sm:w-8 sm:h-8" />
                   </motion.div>
                   <h4 className="text-xl sm:text-4xl font-extrabold text-slate-900 mb-0.5 sm:mb-1 flex items-center">
                     <AnimatedNumber value={7} />
                   </h4>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px] sm:text-xs mt-1 mb-1.5 sm:mb-2">
                     Estados <br className="block sm:hidden"/> Atendidos
                   </p>
                   
                   <div className="bg-red-50/80 px-2 sm:px-3 py-1 rounded-xl sm:rounded-full border border-red-100/50 shadow-sm max-w-[95%] sm:max-w-none mx-auto">
                     <span className="text-[7.5px] sm:text-[10px] text-[#CE3235] font-extrabold tracking-[0.1em] sm:tracking-widest leading-relaxed flex flex-wrap justify-center text-center gap-x-1 sm:gap-x-0">
                       GO • MG • PR • RJ • MS • PA • DF
                     </span>
                   </div>
                 </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVIÇOS TÉCNICOS */}
        <section id="segmentos" className="py-16 sm:py-24 lg:py-32 bg-[#020617] scroll-mt-20 relative border-t border-white/5">
          <div className="absolute inset-0 bg-linear-to-b from-[#020617] to-slate-950 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <h2 className="text-xs sm:text-sm font-extrabold text-[#CE3235] tracking-widest uppercase mb-2 sm:mb-3 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#CE3235] rounded-full"></div> Portfólio de Serviços
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight px-2">Capacidade Técnica</h3>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: <Zap size={32} className="sm:w-9 sm:h-9" />, title: "SUBESTAÇÃO DE ENERGIA", tags: "Execução | Projeto | ART", desc: "Execução de subestações de energia 13,8-34,5kV. Solução ponta a ponta com projeto, ART e aprovação junto à concessionária." },
                { icon: <Activity size={32} className="sm:w-9 sm:h-9" />, title: "LOTEAMENTOS E REDES", tags: "Construção Redes | Postes | Trafo", desc: "Rede urbana e rural com postes, transformadores e equipamentos para a concessionária Local." },
                { icon: <SunMedium size={32} className="sm:w-9 sm:h-9" />, title: "USINAS FOTOVOLTAICAS", tags: "Geração Distribuída | Execução", desc: "Projetos e execução de usinas de energia solar (GD e GC), garantindo máxima eficiência energética e rentabilidade." },
                { icon: <Building2 size={32} className="sm:w-9 sm:h-9" />, title: "INSTALAÇÕES PREDIAIS", tags: "Industrial | Comercial | Residencial", desc: "Baixa tensão completa: eletrodutos, cabos, quadros de força e comando, projetos de iluminação e automação predial." },
                { icon: <ShieldCheck size={32} className="sm:w-9 sm:h-9" />, title: "SPDA E ATERRAMENTO", tags: "Projetos | Captores | Malha", desc: "Desenvolvimento e execução de sistemas de proteção contra descargas atmosféricas conforme a norma NBR 5419." },
                { icon: <FileText size={32} className="sm:w-9 sm:h-9" />, title: "ENGENHARIA TÉCNICA", tags: "Projetos | NR10 | Laudos", desc: "Estudos técnicos completos, NR10, estudo de proteção e seletividade, consultoria e emissão de ART." },
                { icon: <Lightbulb size={32} className="sm:w-9 sm:h-9" />, title: "PROJETOS ELÉTRICOS", tags: "Executivos | Dimensionamento", desc: "Elaboração de projetos elétricos executivos para indústrias, comércios e agronegócio, com foco em segurança." },
                { icon: <Zap size={32} className="sm:w-9 sm:h-9" />, title: "MANUTENÇÃO ELÉTRICA", tags: "Preventiva | Corretiva | Preditiva", desc: "Garantia de continuidade operacional e mitigação de riscos de parada em plantas industriais e comerciais." }
              ].map((servico, index) => (
                <motion.div key={index} variants={fadeUp} className="group relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 sm:duration-500 overflow-hidden flex flex-col sm:hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#CE3235] rounded-full blur-[60px] sm:blur-[80px] opacity-10 sm:opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="mb-4 sm:mb-6 text-[#CE3235] group-hover:scale-110 transition-transform duration-300 transform-gpu">{servico.icon}</div>
                  <h3 className="text-xl sm:text-lg font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-tight">{servico.title}</h3>
                  <p className="text-[#CE3235] text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 leading-relaxed">{servico.tags}</p>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mt-auto">{servico.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMPONENTES EXTERNOS */}
        <Lideranca />
        <PortfolioHome />
        <Faq />

      </main>
      <Footer />
    </div>
  );
}