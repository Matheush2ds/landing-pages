import { Skull, ShieldCheck, Wind, Lightning, Flask } from '@phosphor-icons/react';

export default function Technology() {
  return (
    <section className="relative py-[100px] md:py-[140px] bg-white overflow-hidden">
      
      {/* Grid de Fundo Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          
          {/* LADO ESQUERDO: TEXTOS */}
          <div className="max-w-xl fade-in-up">
            
            <h2 className="text-[2.5rem] md:text-[4rem] font-black text-[#111] leading-[0.9] mb-6 tracking-tighter uppercase">
              Tecnologia de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A859] to-[#007a41]"> Alta Precisão</span>
            </h2>
            
            <p className="text-[1.15rem] text-[#555] leading-relaxed mb-8 font-medium">
              Não usamos veneno de supermercado. Trabalhamos com formulações de uso restrito profissional, desenvolvidas para exterminar a praga na raiz e blindar o ambiente contra novos ataques.
            </p>
            
            {/* BOX DE DESTAQUE ANIMADO */}
            <div className="relative bg-gradient-to-br from-[#00A859] to-[#006033] p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,168,89,0.3)] overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              
              {/* Brilho no fundo do box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex items-start gap-5">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shrink-0 float-slow">
                  <ShieldCheck size={32} color="#ffffff" weight="fill" />
                </div>
                <div>
                  <h4 className="text-white font-black text-[1.2rem] mb-1 tracking-wide uppercase">
                    Segurança Máxima
                  </h4>
                  <p className="text-white/90 text-[0.95rem] leading-relaxed m-0 font-medium">
                    Protocolos rigorosos com produtos certificados. Aplicação cirúrgica que garante o retorno seguro de pessoas e pets ao ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* LADO DIREITO: CARDS 3D */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

            <div className="fade-in-up delay-100 bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group">
              <Lightning size={36} className="text-[#00A859] mb-4 group-hover:scale-110 transition-transform" weight="duotone" />
              <h4 className="text-[#111] font-black mb-3 text-[1.2rem] uppercase">Efeito Choque</h4>
              <p className="text-[#666] text-[0.95rem] leading-relaxed font-medium">
                Ação fulminante que paralisa e elimina insetos adultos no exato momento da aplicação.
              </p>
            </div>

            <div className="fade-in-up delay-200 bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group">
              <Wind size={36} className="text-[#FF7600] mb-4 group-hover:scale-110 transition-transform" weight="duotone" />
              <h4 className="text-[#111] font-black mb-3 text-[1.2rem] uppercase">Alcance Extremo</h4>
              <p className="text-[#666] text-[0.95rem] leading-relaxed font-medium">
                Gás e micropartículas que penetram em frestas, conduítes e locais inacessíveis.
              </p>
            </div>

            <div className="fade-in-up delay-300 bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group">
              <ShieldCheck size={36} className="text-[#00A859] mb-4 group-hover:scale-110 transition-transform" weight="duotone" />
              <h4 className="text-[#111] font-black mb-3 text-[1.2rem] uppercase">Poder Residual</h4>
              <p className="text-[#666] text-[0.95rem] leading-relaxed font-medium">
                Micromoléculas que cristalizam no piso e continuam matando pragas por meses.
              </p>
            </div>

            <div className="fade-in-up delay-400 bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group">
              <Skull size={36} className="text-[#FF7600] mb-4 group-hover:scale-110 transition-transform" weight="duotone" />
              <h4 className="text-[#111] font-black mb-3 text-[1.2rem] uppercase">Fim da Colônia</h4>
              <p className="text-[#666] text-[0.95rem] leading-relaxed font-medium">
                Iscas inteligentes levadas para o ninho, quebrando o ciclo reprodutivo por completo.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}