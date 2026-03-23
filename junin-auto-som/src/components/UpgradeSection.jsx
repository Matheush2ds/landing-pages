import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Settings, Music4, ArrowRight } from 'lucide-react';

const UpgradeSection = () => {
  return (
    <section className="bg-transparent border-t border-white/5 overflow-hidden section-padding contain-content relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[60px] items-center text-center lg:text-left">
          
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow text-black px-4 py-1.5 rounded-none text-[0.75rem] font-black uppercase tracking-[2px] mb-6">
              <Settings size={14} strokeWidth={3} /> Instalação Especializada
            </div>
            
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.95] mb-6 font-black uppercase tracking-tighter">
              Comprou acessórios e <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">não sabe instalar?</span>
            </h2>
            
            <p className="text-[#A3A3A3] mb-10 text-[1.05rem] max-w-[480px] leading-[1.6] font-medium border-l-4 border-white/10 pl-4">
              Não arrisque a parte elétrica do seu carro. Somos certificados para instalar multimidias e acessórios comprados na internet. Garantimos o funcionamento dos <strong className="text-white">comandos de volante</strong> e sistemas originais.
            </p>

            <ul className="flex flex-col gap-5 mb-10 items-start text-left w-full lg:w-auto">
              <li className="flex items-center gap-[15px] text-white font-bold text-[1rem] uppercase tracking-wide">
                <div className="text-black bg-brand-yellow p-2 rounded-none flex"><CheckCircle2 size={20} strokeWidth={3} /></div>
                <span>Kit Multimídia (Android/Apple)</span>
              </li>
              <li className="flex items-center gap-[15px] text-white font-bold text-[1rem] uppercase tracking-wide">
                <div className="text-black bg-brand-yellow p-2 rounded-none flex"><Settings size={20} strokeWidth={3} /></div>
                <span>Comandos no Volante</span>
              </li>
              <li className="flex items-center gap-[15px] text-white font-bold text-[1rem] uppercase tracking-wide">
                <div className="text-black bg-brand-yellow p-2 rounded-none flex"><Music4 size={20} strokeWidth={3} /></div>
                <span>Calibração de Áudio</span>
              </li>
            </ul>

            <a 
              href="https://wa.me/556236363610?text=Comprei%20um%20acessório%20e%20preciso%20instalar" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              AGENDAR INSTALAÇÃO <ArrowRight size={20} strokeWidth={3} />
            </a>
          </motion.div>

          <motion.div 
            className="relative flex justify-center z-10 mt-8 lg:mt-0 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,184,0,0.08)_0%,transparent_60%)] z-[1] pointer-events-none"></div>
            
            <div className="relative z-[2] border-b-4 border-r-4 border-brand-yellow">
              {/* Arquivo puxado direto da public */}
              <img 
                src="/multimidia.webp" 
                alt="Instalação de Multimídia em Goiânia" 
                className="w-full max-w-[520px] h-auto object-cover contrast-[1.15] block" 
                decoding="async"
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
            
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 lg:left-[-30px] lg:-translate-x-0 lg:bottom-[30px] bg-black/90 backdrop-blur-md border-y border-r border-white/10 border-l-4 border-l-brand-yellow py-4 px-6 rounded-none z-[3] shadow-2xl w-max gpu-accelerated">
              <div className="flex items-center gap-4">
                <div className="text-brand-yellow animate-pulse">
                  <CheckCircle2 size={28} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <span className="block text-white font-black text-sm uppercase tracking-widest">Garantia Total</span>
                  <span className="block text-xs text-[#888] font-bold uppercase tracking-wider">Serviço Certificado</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UpgradeSection;