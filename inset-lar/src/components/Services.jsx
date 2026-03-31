import { useState, useEffect } from 'react';
import { ArrowRight, X } from '@phosphor-icons/react';

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
    <section id="servicos" className="py-[80px] md:py-[140px] bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-[2.2rem] md:text-[3.5rem] font-extrabold text-[#143F2E] mb-4">
            Nossos Equipamentos & Serviços
          </h2>
          <p className="text-[1rem] md:text-[1.1rem] text-gray-600 max-w-2xl mx-auto font-medium">
            Utilizamos tecnologia limpa, segura e de alta performance para resolver seu problema de forma definitiva. Equipamentos de ponta para qualquer nível de infestação ou obstrução.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <article 
              key={index} 
              onClick={() => setSelectedImage(service.img)}
              className="fade-in-up group bg-[#f8fafc] rounded-[20px] p-5 flex flex-col items-start border border-gray-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-[180px] rounded-xl overflow-hidden mb-5 bg-gray-200">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <h3 className="text-[#143F2E] font-bold text-[1.15rem] mb-2 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-[0.9rem] leading-relaxed mb-4 flex-grow">
                {service.text}
              </p>
              
              <div className="mt-auto text-[#00A859] font-bold text-[0.9rem] flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver Operação <ArrowRight size={16} weight="bold" />
              </div>
            </article>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-[#0B3220]/95 flex items-center justify-center z-[9999] p-4 md:p-6 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 md:-top-12 text-white hover:text-[#00A859] transition-colors">
                <X size={32} md:size={40} />
              </button>
              <img src={selectedImage} alt="Operação Inset Lar" className="w-full h-auto rounded-xl shadow-2xl" />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}