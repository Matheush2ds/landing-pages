import { ShieldCheck, Leaf, Drop, ClockUser, ArrowRight } from '@phosphor-icons/react';
import bgImg from '../assets/fachada.webp';
import bgImg2 from '../assets/serviços/dedetizando.webp';

export default function About() {
  return (
    <section id="sobre" className="py-[100px] md:py-[140px] relative bg-white overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          
          {/* FOTOS COM MOLDURA CLEAN */}
          <div className="relative h-[500px] md:h-[600px] fade-in-up">
            <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-[2.5rem] overflow-hidden shadow-xl border-[8px] border-[#f4f7f6] z-10">
              <img 
                src={bgImg} 
                alt="Dedetizadora Inset Lar" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white z-20">
              <img 
                src={bgImg2} 
                alt="Serviço Inset Lar" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Shape decorativo sutil atrás das fotos */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#EAF3EF] rounded-full -z-10"></div>
          </div>

          {/* TEXTOS */}
          <div className="fade-in-up delay-200">

            <h2 className="text-[2.2rem] md:text-[3.5rem] font-extrabold leading-[1.1] mb-6 text-[#143F2E] tracking-tight">
              Duas décadas entregando <span className="text-[#FF7600]">Tranquilidade para você.</span>
            </h2>

            <p className="mb-6 text-[1.1rem] text-gray-500 leading-relaxed font-medium">
              Sabemos o quanto uma infestação ou um entupimento pode ser estressante. Por isso, a <strong>Inset Lar</strong> uniu tecnologia química, agilidade e muito respeito pelo seu espaço.
            </p>

            <p className="mb-10 text-[1.1rem] text-gray-500 leading-relaxed font-medium">
              Trabalhamos com laudo técnico e produtos devidamente registrados, garantindo a segurança de crianças, pets e clientes.
            </p>

            {/* Grid de Diferenciais Compacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-[#00A859]/30 transition-all duration-300">
                <div className="bg-white p-3 rounded-xl shadow-sm text-[#00A859]">
                  <Drop size={24} weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-[#143F2E] text-[1rem]">Sem Sujeira</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-tight">Processos limpos na sua casa.</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-[#FF7600]/30 transition-all duration-300">
                <div className="bg-white p-3 rounded-xl shadow-sm text-[#FF7600]">
                  <ClockUser size={24} weight="duotone" />
                </div>
                <div>
                  <h4 className="font-bold text-[#143F2E] text-[1rem]">Prontidão</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-tight">Plantão 24h especializado.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}