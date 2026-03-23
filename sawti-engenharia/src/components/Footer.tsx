"use client";

import React, { FormEvent } from 'react';
import { Phone, Mail, Instagram, ArrowRight, Zap, Send, MapPin, Linkedin, Link as LinkIcon } from 'lucide-react';

export default function Footer() {
  
  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const servico = formData.get('servico');
    const detalhes = formData.get('detalhes');

    const mensagem = `Olá! Meu nome é *${nome}*.\n\nGostaria de falar sobre: *${servico}*.\n\n*Resumo do que preciso:*\n${detalhes}`;
    const numeroWhatsApp = "5562992571585";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
  };

  return (
    <footer id="contato" className="bg-[#020617] text-white pt-24 pb-12 scroll-mt-20 relative overflow-hidden border-t border-white/5">
      {/* Linha vermelha com Glow no topo do rodapé */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#CE3235] to-transparent opacity-70"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[30px] bg-[#CE3235] blur-[50px] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Marca e Info */}
          <div className="lg:col-span-4">
            <div className="mb-8">
               <img 
                src="/home/logo_sawti.webp" 
                alt="Sawti Engenharia" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm font-medium">
              Engenharia com Ética e Responsabilidade. Entregamos soluções elétricas confiáveis para garantir a segurança e conformidade total do seu patrimônio.
            </p>
            
            <div className="space-y-6 text-slate-400 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CE3235] group-hover:bg-[#CE3235] group-hover:text-white transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div className="pt-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5562992571585" target="_blank" rel="noreferrer" className="block text-white hover:text-[#CE3235] transition-colors text-base font-bold">(62) 99257-1585</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CE3235] group-hover:bg-[#CE3235] group-hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div className="pt-1 w-full">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">E-mail Comercial</p>
                  <a href="mailto:contato@sawtiengenharia.com.br" className="block text-white hover:text-[#CE3235] transition-colors break-all text-sm font-medium">contato@sawtiengenharia.com.br</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#CE3235] group-hover:bg-[#CE3235] group-hover:text-white transition-colors duration-300">
                  <MapPin size={18} />
                </div>
                <div className="pt-1 w-full">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Localização</p>
                  <span className="block text-white text-sm font-medium leading-relaxed">
                    Rua do Esmalte<br />
                    Parque Oeste Industrial<br />
                    Goiânia - GO
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <a href="https://www.instagram.com/sawtiengenharia/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#CE3235] hover:border-[#CE3235] hover:-translate-y-1 transition-all duration-300 text-white"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/in/thiago-queiroz-barbosa-60559690/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#CE3235] hover:border-[#CE3235] hover:-translate-y-1 transition-all duration-300 text-white"><Linkedin size={18} /></a>
              <a href="https://linktr.ee/sawtiengenharia" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#CE3235] hover:border-[#CE3235] hover:-translate-y-1 transition-all duration-300 text-white" aria-label="Linktree"><LinkIcon size={18} /></a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Institucional</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/" className="hover:text-white transition-colors flex items-center gap-2 font-medium"><ArrowRight size={14} className="text-[#CE3235]"/> Início</a></li>
              <li><a href="/#segmentos" className="hover:text-white transition-colors flex items-center gap-2 font-medium"><ArrowRight size={14} className="text-[#CE3235]"/> Áreas de Atuação</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors flex items-center gap-2 font-medium"><ArrowRight size={14} className="text-[#CE3235]"/> Acervo Técnico</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors flex items-center gap-2 font-medium"><ArrowRight size={14} className="text-[#CE3235]"/> Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna 3: Formulário Inteligente */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl">
            <h4 className="text-xl font-bold text-white mb-2">Solicitar Orçamento Rápido</h4>
            <p className="text-sm text-slate-400 mb-6">Resuma sua necessidade e fale com nosso engenheiro diretamente pelo WhatsApp.</p>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="nome" 
                  required 
                  placeholder="Seu Nome / Empresa" 
                  className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#CE3235] focus:ring-1 focus:ring-[#CE3235] transition-all"
                />
              </div>
              <div>
                <select 
                  name="servico" 
                  required
                  defaultValue=""
                  className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#CE3235] focus:ring-1 focus:ring-[#CE3235] transition-all appearance-none"
                >
                  <option value="" disabled className="text-slate-500">Selecione o tipo de serviço...</option>
                  <option value="Subestação">Subestação de Energia</option>
                  <option value="Loteamentos e Redes">Loteamentos e Redes Elétricas</option>
                  <option value="Usina Fotovoltaica">Usinas Solares Fotovoltaicas</option>
                  <option value="Instalações Prediais">Instalações Prediais / Baixa Tensão</option>
                  <option value="SPDA e Aterramento">SPDA e Aterramento</option>
                  <option value="Engenharia Técnica">Engenharia Técnica (Projetos/Laudos)</option>
                  <option value="Outros Projetos">Outros Projetos</option>
                </select>
              </div>
              <div>
                <textarea 
                  name="detalhes" 
                  required 
                  rows={3}
                  placeholder="Descreva brevemente o que você precisa..." 
                  className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#CE3235] focus:ring-1 focus:ring-[#CE3235] transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#CE3235] hover:bg-white hover:text-[#020617] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(206,50,53,0.4)]"
              >
                <Send size={18} /> Enviar Solicitação
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Sawti Engenharia. Todos os direitos reservados. CNPJ: 40.609.084/0001-80</p>
          
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Desenvolvido por</span>
            <a href="https://optimasistemas.com/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#CE3235] transition-colors flex items-center gap-1">
              Optima Sistemas <Zap size={14} className="text-[#CE3235]"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}