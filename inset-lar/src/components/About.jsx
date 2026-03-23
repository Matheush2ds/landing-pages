import { ShieldCheck, Leaf, Drop, ClockUser } from '@phosphor-icons/react';
import bgImg from '../assets/fachada.webp';
import bgImg2 from '../assets/serviços/dedetizando.webp';

export default function About() {
  return (
    <section id="sobre" className="py-[100px] md:py-[140px] relative bg-white overflow-hidden">
      
      {/* Grid de Fundo Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          
          {/* FOTOS ANIMADAS */}
          <div className="relative h-[500px] md:h-[600px] fade-in-up">
            <img 
              src={bgImg} 
              alt="Dedetizadora Inset Lar" 
              className="absolute right-0 top-0 w-4/5 h-4/5 object-cover rounded-[2rem] shadow-2xl z-10 hover:-translate-y-2 transition-transform duration-500"
            />
            <img 
              src={bgImg2} 
              alt="Serviço Inset Lar" 
              className="absolute left-0 bottom-0 w-3/5 h-3/5 object-cover rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-8 border-white z-20 hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FF7600]/10 rounded-full blur-2xl"></div>
          </div>

          {/* TEXTOS E ÍCONES */}
          <div className="fade-in-up delay-200">
            <span className="text-[#00A859] font-extrabold uppercase tracking-[2px] text-sm mb-4 block flex items-center gap-2">
              <Leaf size={18} weight="bold"/> Nossa História
            </span>
            <h2 className="text-[2.2rem] md:text-[3.5rem] font-black leading-[1.1] mb-6 text-[#111] tracking-tighter uppercase">
              Duas décadas <br/> entregando <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7600] to-[#ff9b40]">Tranquilidade para seu bem.</span>
            </h2>

            <p className="mb-6 text-[1.1rem] text-[#555] leading-relaxed font-medium">
              Sabemos o quanto uma infestação ou um entupimento pode ser estressante. Por isso, a <strong>Inset Lar</strong> uniu tecnologia química, agilidade e muito respeito pelo seu espaço.
            </p>

            <p className="mb-10 text-[1.1rem] text-[#555] leading-relaxed font-medium">
              Trabalhamos com laudo técnico e produtos devidamente registrados, garantindo a segurança de crianças, pets e clientes do seu estabelecimento comercial.
            </p>

            {/* Grid de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:border-[#00A859]/30 transition-all duration-300 shadow-sm">
                <div className="bg-[#f8fafc] p-2 rounded-xl shadow-inner group-hover:-translate-y-1 transition-transform">
                  <Drop size={26} weight="duotone" className="text-[#00A859]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111] text-[1.05rem]">Sem Sujeira</h4>
                  <p className="text-[#666] text-[0.9rem] leading-snug mt-1">Processos limpos e organizados na sua casa.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:border-[#FF7600]/30 transition-all duration-300 shadow-sm">
                <div className="bg-[#f8fafc] p-2 rounded-xl shadow-inner group-hover:-translate-y-1 transition-transform">
                  <ClockUser size={26} weight="duotone" className="text-[#FF7600]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111] text-[1.05rem]">Prontidão</h4>
                  <p className="text-[#666] text-[0.9rem] leading-snug mt-1">Plantão 24h para emergências urgentes.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}