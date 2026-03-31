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
    <nav className={`h-[90px] md:h-[100px] sticky top-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-[#050505] shadow-lg' : 'bg-[#050505] border-b border-white/10'}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-full">
        
        <a href="#home" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 relative z-50">
            <img src={logoImg} alt="Inset Lar Logo" className="h-[50px] md:h-[60px] w-auto" />
        </a>
        
        <ul className={`flex flex-col md:flex-row gap-[30px] lg:gap-[45px] items-center fixed md:static top-[90px] left-0 w-full md:w-auto bg-[#050505] md:bg-transparent p-10 md:p-0 transition-all duration-300 ease-in-out border-b border-white/10 md:border-none shadow-2xl md:shadow-none z-40 ${isOpen ? 'translate-y-0 opacity-100 visible pointer-events-auto' : '-translate-y-[150%] md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible pointer-events-none md:pointer-events-auto'}`}>
          
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="text-[1rem] font-medium text-gray-300 hover:text-[#00A859] transition-colors">
              Home
            </a>
          </li>
          
          <li>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="text-[1rem] font-medium text-gray-300 hover:text-[#00A859] transition-colors">
              Serviços
            </a>
          </li>
          
          <li>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-[1rem] font-medium text-gray-300 hover:text-[#00A859] transition-colors">
              Sobre Nós
            </a>
          </li>
          
          <li className="mt-4 md:mt-0">
            <a href="https://api.whatsapp.com/send/?phone=5564992886851" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-2 bg-[#00A859] text-white px-[24px] py-[10px] rounded-full hover:bg-[#008f4c] transition-all duration-300 text-[1rem] font-bold">
              <WhatsappLogo size={22} weight="fill" />
              Obter Orçamento
            </a>
          </li>
        </ul>

        <div className="block md:hidden cursor-pointer text-white p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </div>

      </div>
    </nav>
  )
}