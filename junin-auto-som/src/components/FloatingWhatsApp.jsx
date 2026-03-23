import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Wrench } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    servico: 'Som Automotivo',
    mensagem: ''
  });

  // Número do WhatsApp (configurei com o celular que estava no Navbar/Hero)
  const phoneNumber = "5562996628238"; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatação agressiva e profissional para chegar no seu WhatsApp
    const text = `Fala, equipe Junin! 🏎️\n\n*Meu Nome:* ${formData.nome}\n*Tenho interesse em:* ${formData.servico}\n\n*Detalhes:* ${formData.mensagem || 'Gostaria de um orçamento VIP.'}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    
    // Fecha o chat e limpa o formulário após enviar
    setIsOpen(false);
    setFormData({ nome: '', servico: 'Som Automotivo', mensagem: '' });
  };

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[9999] flex flex-col items-end gap-4">
      
      {/* Janela de Chat Aberta */}
      <div 
        className={`bg-black border-2 border-brand-yellow/50 w-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 origin-bottom-right gpu-accelerated ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Cabeçalho do Chat */}
        <div className="bg-[#0A0A0A] border-b border-brand-yellow/30 p-4 flex justify-between items-center">
          <div>
            <h4 className="text-brand-yellow font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Atendimento VIP
            </h4>
            <p className="text-[#888] text-xs font-bold uppercase mt-1">Respostas em minutos</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[#888] hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] text-[#A3A3A3] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <User size={12} className="text-brand-yellow" /> Seu Nome
            </label>
            <input 
              type="text" 
              name="nome"
              required
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Ex: Matheus" 
              className="bg-[#111] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-[#444]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] text-[#A3A3A3] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Wrench size={12} className="text-brand-yellow" /> Serviço
            </label>
            <select 
              name="servico"
              value={formData.servico}
              onChange={handleInputChange}
              className="bg-[#111] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23FFB800' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="Som Automotivo">Som Automotivo</option>
              <option value="Window Blue / Insulfilm">Window Blue / Insulfilm</option>
              <option value="Multimídia">Multimídia</option>
              <option value="PPF (Proteção de Pintura)">PPF (Proteção)</option>
              <option value="Vitrificação / Estética">Vitrificação / Estética</option>
              <option value="Bancos em Couro">Bancos em Couro</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] text-[#A3A3A3] font-bold uppercase tracking-widest flex items-center gap-1.5">
              Como podemos ajudar?
            </label>
            <textarea 
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              rows="2"
              placeholder="Qual o modelo do seu carro?" 
              className="bg-[#111] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-[#444] resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-2 bg-[#25D366] text-black font-black uppercase tracking-widest text-sm p-4 flex justify-center items-center gap-2 hover:bg-[#20BA56] transition-colors"
          >
            <Send size={16} strokeWidth={3} /> Enviar Mensagem
          </button>
        </form>
      </div>

      {/* Botão Flutuante Principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#25D366] text-white w-[60px] h-[60px] rounded-none flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative transition-all duration-300 hover:scale-110 hover:bg-[#20BA56] ${!isOpen ? 'animate-pulse-green' : ''}`}
        aria-label="Falar no WhatsApp"
      >
        {!isOpen && (
          <>
            <div className="absolute -top-2 -right-2 bg-black text-brand-yellow text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#25D366] z-10">
              1
            </div>
            <MessageCircle size={32} fill="white" />
          </>
        )}
        {isOpen && <X size={32} />}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;