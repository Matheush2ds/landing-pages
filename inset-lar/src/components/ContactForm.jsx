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
    <section id="orcamento" className="py-[100px] bg-[#0B3220]">
      <div className="max-w-[1280px] mx-auto px-6 fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] text-white font-extrabold mb-6 leading-tight">
              Agende uma <span className="text-[#8cd76a]">Avaliação</span><br/>
              com nossa Equipe
            </h2>

            <p className="text-[1.1rem] text-white/80 leading-relaxed mb-8 max-w-lg">
              Sua emergência é a nossa prioridade.
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-[40px] rounded-3xl shadow-xl flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-[#143F2E] text-sm flex items-center gap-2 cursor-pointer">
                  <User size={18} className="text-[#00A859]" />
                  Seu Nome
                </label>

                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ex: João da Silva"
                  onChange={handleChange}
                  className="w-full bg-[#f4f7f6] border border-gray-200 rounded-xl px-5 py-4 text-[#143F2E] focus:outline-none focus:border-[#00A859] focus:ring-1 focus:ring-[#00A859]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-bold text-[#143F2E] text-sm flex items-center gap-2 cursor-pointer">
                  <Wrench size={18} className="text-[#00A859]" />
                  Qual o Problema?
                </label>

                <select 
                  id="service"
                  name="service"
                  required
                  onChange={handleChange}
                  defaultValue=""
                  className="w-full bg-[#f4f7f6] border border-gray-200 rounded-xl px-5 py-4 text-[#143F2E]"
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-[#143F2E] text-sm flex items-center gap-2 cursor-pointer">
                  <ChatText size={18} className="text-[#00A859]" />
                  Situação (Opcional)
                </label>

                <textarea 
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Descreva brevemente a situação..."
                  onChange={handleChange}
                  className="w-full bg-[#f4f7f6] border border-gray-200 rounded-xl px-5 py-4 text-[#143F2E]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-[1.1rem] p-[18px] mt-2 rounded-xl font-bold bg-[#00A859] text-white active:scale-95 transition"
              >
                <WhatsappLogo size={24} weight="fill" />
                Iniciar Atendimento
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}