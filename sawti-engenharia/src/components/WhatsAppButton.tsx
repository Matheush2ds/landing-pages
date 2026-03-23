"use client";

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "5562992571585";
  const defaultMessage = "Olá! Gostaria de tirar uma dúvida ou solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end">
      
      {/* Janela de Chat */}
      <div 
        className={`mb-4 w-[320px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <div className="bg-[#020617] p-4 flex items-center justify-between border-b border-[#CE3235]/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center p-2 border border-white/5">
                 <img src="/home/logo_sawti.webp" alt="Sawti" className="w-full h-auto brightness-0 invert" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#020617] rounded-full"></span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm leading-tight">Atendimento Sawti</h4>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Engenharia</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 bg-slate-50 space-y-3 h-[180px] overflow-y-auto">
          <div className="flex gap-2">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[85%]">
              <p className="text-sm text-slate-700 font-medium">Olá! 👋</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[90%]">
              <p className="text-sm text-slate-700 font-medium">Como podemos ajudar o seu projeto hoje?</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[95%]">
              <p className="text-sm text-slate-600">Fique à vontade para tirar dúvidas técnicas ou solicitar um orçamento.</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20 active:scale-95"
          >
            <Send size={18} /> Iniciar Conversa
          </a>
        </div>
      </div>

      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300 group"
        aria-label="Abrir chat do WhatsApp"
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#CE3235] text-[10px] font-bold text-white border-2 border-white animate-bounce shadow-sm">
            1
          </span>
        )}
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
        )}
        
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0 absolute' : 'rotate-0 scale-100'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.765-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" />
          </svg>
        </div>
        
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0 absolute'}`}>
          <X className="w-8 h-8" />
        </div>
      </button>
    </div>
  );
}