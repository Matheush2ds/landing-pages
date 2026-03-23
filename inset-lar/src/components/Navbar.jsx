import { List, X, WhatsappLogo } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`h-[90px] md:h-[100px] sticky top-0 z-[1000] transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/90 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.6)]' : 'bg-[#050505]'}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-full">
        
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 relative z-50">
            <img src={logoImg} alt="Inset Lar Logo" className="h-[60px] md:h-[70px] w-auto drop-shadow-lg" />
        </a>
        
        {/* Links (Desktop e Mobile) */}
        {/* CORREÇÃO: Adicionado pointer-events-none e opacity-0 quando fechado no mobile */}
        <ul className={`flex flex-col md:flex-row gap-[30px] lg:gap-[45px] items-center fixed md:static top-[90px] left-0 w-full md:w-auto bg-[#0a0a0a] md:bg-transparent p-10 md:p-0 transition-all duration-300 ease-in-out border-b border-white/10 md:border-none shadow-2xl md:shadow-none z-40 ${isOpen ? 'translate-y-0 opacity-100 visible pointer-events-auto' : '-translate-y-[150%] md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible pointer-events-none md:pointer-events-auto'}`}>
          
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="text-[0.95rem] font-bold uppercase text-gray-300 tracking-widest relative hover:text-white transition-colors group">
              Home
              <span className="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00A859] to-[#FF7600] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          
          <li>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="text-[0.95rem] font-bold uppercase text-gray-300 tracking-widest relative hover:text-white transition-colors group">
              Serviços
              <span className="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00A859] to-[#FF7600] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          
          <li>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-[0.95rem] font-bold uppercase text-gray-300 tracking-widest relative hover:text-white transition-colors group">
              Sobre Nós
              <span className="absolute -bottom-[6px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00A859] to-[#FF7600] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          
          {/* Botão CTA */}
          <li className="mt-4 md:mt-0">
            <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-2 bg-[#FF7600] text-white px-[28px] py-[14px] rounded-full hover:bg-[#e66a00] hover:shadow-[0_0_20px_rgba(255,118,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-[0.95rem] font-black uppercase tracking-widest">
              <WhatsappLogo size={22} weight="fill" />
              Contato
            </a>
          </li>
        </ul>

        {/* Menu Hamburguer Mobile */}
        <div className="block md:hidden cursor-pointer text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </div>

      </div>
    </nav>
  )
}