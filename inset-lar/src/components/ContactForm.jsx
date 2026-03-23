import { useState } from 'react';
import { WhatsappLogo, User, Wrench, ChatText } from '@phosphor-icons/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const services = [
    "Dedetização Geral",
    "Desentupimento",
    "Limpeza de Caixa de Gordura",
    "Limpeza de Caixa d'Água",
    "Descupinização",
    "Desratização",
    "Sanitização de Ambientes",
    "Fumacê",
    "Outros / Dúvida"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, service, message } = formData;
    
    const text = `Olá! Meu nome é *${name}*.\nVim pelo site e preciso de agilidade para o serviço de *${service}*.\n\n${message ? `Detalhes: ${message}` : ''}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5564992886851&text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="orcamento" className="py-[100px] md:py-[140px] relative bg-[#050505] overflow-hidden">
      
      {/* Efeitos de Luz no Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A859]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF7600]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[100px] items-center">
          
          {/* TEXTO DA ESQUERDA */}
          <div className="fade-in-up">
            
            {/* Status Indicator Animado */}
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full w-fit border border-white/10 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A859] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00A859]"></span>
              </span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Central 24h Online</span>
            </div>

            <h2 className="text-[2.5rem] md:text-[4rem] text-white font-black mb-6 leading-[0.9] tracking-tighter uppercase">
              Acione nossa <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7600] to-[#ff9b40]">
                Equipe AGORA!.
              </span>
            </h2>
            
            <p className="text-[1.15rem] text-gray-400 leading-relaxed font-medium mb-8 max-w-lg">
              Sua emergência é a nossa prioridade. Selecione o serviço, preencha seus dados e nossa central em Caldas Novas receberá seu chamado imediatamente no WhatsApp.
            </p>

            <div className="hidden lg:block p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">Atendimento Direto</p>
              <p className="text-gray-400 text-sm">Sem robôs, sem burocracia. Você fala direto com um especialista técnico pronto para enviar uma proposta para você.</p>
            </div>
          </div>
          
          {/* FORMULÁRIO GLASSMORPHISM */}
          <div className="fade-in-up delay-200">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-[30px] md:p-[50px] rounded-[24px] shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex flex-col gap-[20px] relative">
              
              {/* Borda superior de destaque */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#00A859] via-[#FF7600] to-[#00A859] rounded-t-[24px]"></div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-gray-300 text-[0.85rem] uppercase tracking-wider flex items-center gap-2">
                  <User size={18} className="text-[#00A859]" /> Seu Nome
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Ex: João da Silva" 
                  onChange={handleChange} 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00A859] focus:ring-1 focus:ring-[#00A859] transition-all duration-300"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-bold text-gray-300 text-[0.85rem] uppercase tracking-wider flex items-center gap-2">
                  <Wrench size={18} className="text-[#FF7600]" /> Qual o Problema?
                </label>
                <div className="relative">
                  <select 
                    id="service" 
                    name="service" 
                    required 
                    onChange={handleChange} 
                    defaultValue=""
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7600] focus:ring-1 focus:ring-[#FF7600] transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-500">Selecione uma opção...</option>
                    {services.map(s => (
                      <option key={s} value={s} className="bg-[#111] text-white">{s}</option>
                    ))}
                  </select>
                  {/* Seta customizada pro Select */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-gray-300 text-[0.85rem] uppercase tracking-wider flex items-center gap-2">
                  <ChatText size={18} className="text-gray-400" /> Situação (Opcional)
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  placeholder="Descreva brevemente a situação. Ex: Casa com 3 quartos / Pia entupida..." 
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all duration-300 resize-y"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-[12px] text-[1rem] p-[20px] mt-[10px] rounded-xl font-black uppercase tracking-widest cursor-pointer transition-all duration-300 border-none bg-[#00A859] text-white shadow-[0_10px_25px_rgba(0,168,89,0.3)] hover:bg-[#00d672] hover:shadow-[0_15px_35px_rgba(0,168,89,0.5)] hover:-translate-y-1">
                <WhatsappLogo size={28} weight="fill" />
                Iniciar Atendimento
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}