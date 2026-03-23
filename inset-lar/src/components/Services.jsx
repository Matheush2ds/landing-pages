import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from '@phosphor-icons/react';

import imgDedetizacao from '../assets/serviços/dedetizando.webp';
import imgDesentupimento from '../assets/serviços/desentupimento.webp';
import imgCaixaGordura from '../assets/serviços/caminhao-desentupimento.webp';
import imgCaixaAgua from '../assets/serviços/limpeza caixa.webp';
import imgDescupinizacao from '../assets/serviços/descupinização.webp';
import imgDesratizacao from '../assets/serviços/desratização.webp';
import imgSanitizacao from '../assets/serviços/termonebulização.webp';
import imgFumace from '../assets/serviços/fumace.webp';

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const servicesData = [
    { title: "Dedetização Geral", img: imgDedetizacao, text: "Extermínio imediato de baratas, aranhas e formigas com efeito residual." },
    { title: "Desentupimento", img: imgDesentupimento, text: "Hidrojateamento de alta pressão. Desobstrução bruta sem quebrar pisos." },
    { title: "Caixa de Gordura", img: imgCaixaGordura, text: "Sucção a vácuo com caminhão tanque. Limpeza profunda e descarte legal." },
    { title: "Caixa d'Água", img: imgCaixaAgua, text: "Higienização técnica profunda com emissão de certificado e laudo de potabilidade." },
    { title: "Descupinização", img: imgDescupinizacao, text: "Barreira química no solo e madeira. Proteção estrutural pesada contra infestações." },
    { title: "Desratização", img: imgDesratizacao, text: "Mapeamento e erradicação estratégica de roedores com iscas profissionais seguras." },
    { title: "Sanitização", img: imgSanitizacao, text: "Termonebulização para controle microbiológico pesado em clínicas e indústrias." },
    { title: "Fumacê", img: imgFumace, text: "Controle em massa de mosquitos e vetores em grandes áreas externas." },
  ];

  return (
    <section id="servicos" className="py-[80px] md:py-[140px] bg-[#f4f4f5] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4 md:gap-6 fade-in-up">
          <div className="max-w-2xl">
            <span className="text-[#FF7600] font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-3 md:mb-4 block">
              Operações
            </span>
            <h2 className="text-[2.5rem] md:text-[4.5rem] font-black leading-[0.9] uppercase tracking-tighter text-black">
              Nosso <br className="hidden md:block"/> Arsenal
            </h2>
          </div>
          <p className="text-[1rem] md:text-lg text-gray-600 font-medium max-w-sm pb-2">
            Equipamentos de ponta e equipe tática para qualquer nível de infestação ou obstrução.
          </p>
        </div>

        {/* GRID ESTILO BENTO / DARK UI COM ANIMAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service, index) => (
            <article 
              key={index} 
              onClick={() => setSelectedImage(service.img)}
              className={`fade-in-up delay-${(index % 4) * 100} group relative bg-[#111] overflow-hidden cursor-pointer h-[280px] md:h-[320px] flex flex-col justify-end p-5 md:p-6 rounded-xl border border-transparent hover:border-[#00A859]/30 transition-colors duration-500`}
            >
              {/* Imagem de Fundo Escurecida */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 md:opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent md:via-black/80"></div>
              </div>
              
              {/* Conteúdo do Card - Textos visíveis no mobile, ocultos no desktop */}
              <div className="relative z-10 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <div className="w-8 h-8 bg-[#00A859] rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                    <ArrowUpRight size={18} weight="bold" className="text-white" />
                  </div>
                </div>
                {/* Aqui a mágica do mobile: opacity-100 no mobile, e opacity-0 no md */}
                <p className="text-gray-300 md:text-gray-400 text-[0.85rem] md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Imagem em Destaque */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 md:p-6 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 md:-top-12 text-white hover:text-[#FF7600] transition-colors">
                <X size={32} md:size={40} />
              </button>
              <img src={selectedImage} alt="Operação Inset Lar" className="w-full h-auto border-4 border-white/10 rounded-lg shadow-2xl" />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}