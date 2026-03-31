import { useState, useEffect } from 'react';
import { WhatsappLogo, X, PaperPlaneRight, CheckCircle } from '@phosphor-icons/react';
import logoImg from '../assets/logo.png';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  // Aparece após o usuário dar scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Fecha se o usuário voltar pro topo
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Tira a bolinha vermelha quando abre a primeira vez
  const handleOpen = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[1001] flex flex-col items-end fade-in-up">
      
      {/* Janela de Chat */}
      <div 
        className={`mb-4 w-[340px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden origin-bottom-right transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        
        {/* Header do Chat */}
        <div className="bg-[#00A859] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 overflow-hidden shrink-0 shadow-sm relative">
              <img src={logoImg} alt="Avatar" className="w-full h-auto object-contain" />
              {/* Bolinha verde de "Online" */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h4 className="text-white font-bold text-[1rem] leading-tight">Saiba onde estamos</h4>
              <p className="text-white/90 text-[0.8rem] m-0 flex items-center gap-1">
                Equipe Online <span className="animate-pulse">●</span>
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-colors">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Corpo do Chat (Fundo cinza claro) */}
        <div className="bg-[#f0f2f5] p-5 h-[180px] relative flex flex-col justify-end">
           {/* Balão de mensagem falso */}
           <div className="relative z-10 bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] float-slow">
             <p className="text-[0.95rem] text-[#333] leading-relaxed m-0 font-medium">
               Olá! 👋 Como podemos te ajudar hoje?
             </p>
             <p className="text-[0.95rem] text-[#333] leading-relaxed m-0 mt-2 font-medium">
               Precisa de um orçamento para dedetização ou desentupimento?
             </p>
             <div className="flex justify-end items-center gap-1 mt-1">
               <span className="text-[0.7rem] text-gray-400">Agora mesmo</span>
               <CheckCircle size={14} weight="fill" className="text-[#53bdeb]" />
             </div>
           </div>
        </div>

        {/* Rodapé (Botão que leva para o Whats) */}
        <div className="p-3 bg-white flex items-center gap-2">
          <a 
            href="https://api.whatsapp.com/send/?phone=5564992886851&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+falar+com+um+especialista." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-grow bg-[#f0f2f5] hover:bg-gray-200 rounded-full px-4 py-3 text-gray-500 text-[0.95rem] transition-colors flex items-center"
          >
            Digite sua mensagem...
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=5564992886851&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+falar+com+um+especialista." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 bg-[#00A859] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-[#008a49] hover:scale-105 transition-all shadow-md"
          >
            <PaperPlaneRight size={22} weight="fill" />
          </a>
        </div>
      </div>

      {/* Botão Flutuante (Toggle) */}
      <button 
        onClick={handleOpen} 
        className="relative bg-[#25D366] text-white w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      >
        {/* Animação de pulso atrás do botão */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
        
        {/* Bolinha vermelha de notificação */}
        {showNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white text-[10px] items-center justify-center font-bold">1</span>
          </span>
        )}

        {isOpen ? <X size={32} weight="bold" /> : <WhatsappLogo size={36} weight="fill" />}
      </button>

    </div>
  );
}