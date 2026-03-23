import React from 'react';
import { Phone, Smartphone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#050505]/95 backdrop-blur-md border-b-2 border-brand-yellow/80 z-[1000] py-3 md:py-4 transition-all gpu-accelerated shadow-2xl">
      <div className="container-custom flex justify-between items-center">
        
        {/* Puxando logo direto da public */}
        <a href="/" className="group relative">
          <img 
            src="/logo junin.png" 
            alt="Junin Auto Som" 
            className="h-8 md:h-10 block transition-transform duration-300 group-hover:scale-105 relative z-10" 
          />
          <div className="absolute inset-0 bg-brand-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="tel:+556236363610"
            className="hidden md:flex items-center gap-2 text-[#A3A3A3] text-xs font-black uppercase tracking-widest transition-colors hover:text-brand-yellow border-r border-white/10 pr-6"
          >
            <Phone size={16} strokeWidth={2.5} /> (62) 3636-3610
          </a>

          <a 
            href="https://wa.me/5562996628238?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento%20VIP!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-yellow text-black font-black px-4 py-2 md:px-5 md:py-2.5 text-[0.75rem] md:text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-[3px_3px_0px_rgba(255,255,255,0.1)] hover:bg-white hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(255,255,255,0.2)]"
          >
            <Smartphone size={16} strokeWidth={2.5} /> 
            <span className="mt-[2px]">Orçamento</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;