import { CheckCircle, Flask, FileText, ShieldCheck, MapPin, UsersThree } from '@phosphor-icons/react';

export default function Differentials() {
  const differentialsData = [
    { 
      icon: CheckCircle, 
      title: "Mais de 25 Anos de Domínio", 
      desc: "Histórico comprovado de resultados eficazes em residências e empresas. Onde os outros falham, nós resolvemos." 
    },
    { 
      icon: Flask, 
      title: "Química de Alta Performance", 
      desc: "Utilizamos formulações avançadas e exclusivas, aplicadas com precisão cirúrgica por técnicos especializados." 
    },
    { 
      icon: FileText, 
      title: "Documentação e Laudo", 
      desc: "Emitimos certificado de execução de serviço e laudos técnicos completos para empresas, condomínios e indústrias." 
    },
    { 
      icon: ShieldCheck, 
      title: "Garantia Real e Formal", 
      desc: "Nosso compromisso é com o resultado. Se a praga persistir dentro da garantia, o retorno é por nossa conta." 
    },
    { 
      icon: MapPin, 
      title: "Cobertura Ampla", 
      desc: "Frota própria e equipe tática com atendimento ágil em Caldas Novas, Goiânia e região. Plantão emergencial." 
    },
    { 
      icon: UsersThree, 
      title: "Equipe Capacitada", 
      desc: "Esqueça amadores. Nossos profissionais são uniformizados, discretos e constantemente treinados em novas tecnologias." 
    }
  ];

  return (
    <section className="relative py-[100px] md:py-[140px] bg-[#f4f4f5] overflow-hidden">
      
      {/* Luzes de Fundo (Efeito 3D) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7600]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="text-[#00A859] font-black text-[0.85rem] tracking-[0.2em] uppercase mb-[15px] block">
            Padrão Inset Lar
          </span>
          <h2 className="text-[2.5rem] md:text-[4rem] text-[#111] font-black mb-6 leading-[0.9] tracking-tighter uppercase">
            Por que somos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7600] to-[#ff9b40]">escolha definitiva?</span>
          </h2>
          <p className="text-[1.1rem] md:text-[1.2rem] text-[#555] leading-relaxed font-medium">
            Não oferecemos "quebra-galho". Entregamos de controle de pragas profissional, segurança para sua família e proteção contínua para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[40px]">
          
          {differentialsData.map((item, index) => (
            <div 
              key={index} 
              className={`fade-in-up delay-${(index % 3 + 1) * 100} group relative bg-white p-[40px_30px] rounded-[24px] shadow-sm border border-gray-100 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col items-center text-center`}
            >
              
              {/* Glow Laranja no Hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FF7600]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gray-100 group-hover:bg-[#00A859] transition-colors duration-500"></div>

              {/* Ícone 3D */}
              <div className="w-[80px] h-[80px] rounded-[20px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center mb-6 group-hover:-translate-y-3 transition-transform duration-500 relative z-10">
                <item.icon size={40} weight="duotone" className="text-[#FF7600] group-hover:text-[#00A859] transition-colors duration-500" />
              </div>
              
              <h3 className="font-black text-[#111] text-[1.2rem] mb-3 relative z-10 uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-[#666] text-[0.95rem] leading-relaxed relative z-10 font-medium">
                {item.desc}
              </p>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}