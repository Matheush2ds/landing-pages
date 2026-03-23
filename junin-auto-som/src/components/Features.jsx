import React from 'react';
import { ShieldCheck, UserCheck, Award, Clock } from 'lucide-react';

const features = [
  { icon: Award, title: "Qualidade de Primeira", text: "Acabamento impecável e materiais de primeira linha." },
  { icon: ShieldCheck, title: "Garantia Real", text: "Nota fiscal e garantia de serviço e produtos." },
  { icon: UserCheck, title: "Profissionais Capacitados", text: "Equipe treinada para mexer em carros de luxo." },
  { icon: Clock, title: "Agilidade", text: "Respeitamos seu tempo com agendamento pontual." },
];

const Features = () => {
  return (
    <section className="bg-transparent py-12 relative z-20">
      <div className="container-custom">
        {/* Container com fundo claro para criar as bordas milimétricas através do gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 shadow-2xl">
          
          {features.map((f, i) => (
            <div 
              className="flex flex-col p-8 md:p-10 bg-[#050505] transition-colors duration-500 hover:bg-[#0A0A0A] group cursor-pointer relative overflow-hidden gpu-accelerated" 
              key={i}
            >
              {/* Marca d'água de Garagem (01, 02, 03...) */}
              <span className="absolute -right-4 -bottom-6 text-[7rem] leading-none font-black text-white/[0.02] select-none transition-colors duration-500 group-hover:text-brand-yellow/[0.05]">
                0{i + 1}
              </span>

              {/* Linha amarela de aceleração no topo (anima no hover) */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-yellow transition-all duration-500 group-hover:w-full"></div>

              {/* Ícone (Sobe levemente no hover) */}
              <div className="text-brand-yellow mb-8 transition-transform duration-300 group-hover:-translate-y-2">
                <f.icon size={36} strokeWidth={1.5} />
              </div>
              
              {/* Textos (Deslizam levemente para a direita) */}
              <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                <h4 className="text-[1rem] font-black text-white mb-2.5 uppercase tracking-widest">{f.title}</h4>
                <p className="text-[0.85rem] text-[#888] font-medium leading-relaxed">{f.text}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}; 

export default Features;