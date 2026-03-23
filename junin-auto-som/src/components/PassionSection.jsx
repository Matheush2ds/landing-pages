import React from 'react';
import { Zap, Trophy } from 'lucide-react';

const PassionSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden z-20 border-y border-white/5">

      <div 
        className="absolute inset-0 bg-[url('/internacarro.webp')] bg-cover bg-center bg-fixed opacity-30 transform-gpu"
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15)_0%,transparent_60%)]"></div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 border border-brand-yellow/50 bg-brand-yellow/10 px-5 py-2 rounded-none font-black uppercase tracking-[0.3em] text-[0.65rem] md:text-xs text-brand-yellow mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(255,184,0,0.2)]">
          <Trophy size={16} strokeWidth={2.5} />
          <span>O Padrão Junin de Qualidade</span>
        </div>

        <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-black text-white uppercase tracking-tighter leading-[0.85] mb-10 drop-shadow-2xl">
          Para quem é <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-yellow to-[#B38000] drop-shadow-[0_0_40px_rgba(255,184,0,0.3)]">
            Louco por Carro.
          </span>
        </h2>

        <div className="max-w-[850px] bg-black/40 backdrop-blur-md border-l-4 border-brand-yellow p-6 md:p-10 mb-12 shadow-2xl text-left md:text-center">
          <p className="text-[#E5E5E5] text-lg md:text-xl font-medium leading-relaxed">
            Sabemos que o seu carro não é apenas um meio de transporte. <span className="text-white font-black underline decoration-brand-yellow decoration-4 underline-offset-4">É uma paixão.</span> É por isso que transformamos veículos comuns em verdadeiras <strong className="text-brand-yellow font-black uppercase tracking-widest text-xl md:text-2xl drop-shadow-md">máquinas de luxo</strong>. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            Sem cortes, sem gambiarras. Apenas padrão impecável, tecnologia de ponta e um acabamento cirúrgico para quem não aceita menos que o melhor.
          </p>
        </div>

        <a 
          href="https://wa.me/5562996628238?text=Olá,%20sou%20louco%20por%20carro%20e%20quero%20um%20projeto%20VIP!" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-brand-yellow text-black font-black uppercase tracking-widest px-8 py-5 text-[0.9rem] md:text-lg transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,184,0,0.4)] hover:shadow-[0_0_50px_rgba(255,184,0,0.6)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          
          <Zap size={24} strokeWidth={3} className="relative z-10 group-hover:text-black transition-colors" />
          <span className="relative z-10 group-hover:text-black transition-colors">Quero o melhor para o meu carro</span>
        </a>

      </div>
    </section>
  );
};

export default PassionSection;