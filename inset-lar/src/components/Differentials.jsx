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
    <section className="relative py-[80px] md:py-[120px] bg-[#f4f7f6]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 fade-in-up">
          <h2 className="text-[2.2rem] md:text-[3.5rem] text-[#143F2E] font-extrabold mb-4 leading-tight">
            Por que somos a <span className="text-[#00A859]">escolha definitiva?</span>
          </h2>
          
          <p className="text-[1.1rem] text-gray-500 leading-relaxed font-medium">
            Não oferecemos "quebra-galho". Entregamos controle de pragas profissional, segurança para sua família e proteção contínua para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {differentialsData.map((item, index) => (
            <div 
              key={index} 
              className="fade-in-up group bg-white p-[40px_30px] rounded-3xl border border-gray-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Ícone com fundo verde claro */}
              <div className="w-[70px] h-[70px] rounded-2xl bg-[#EAF3EF] flex items-center justify-center mb-6 group-hover:bg-[#00A859] transition-colors duration-300">
                <item.icon size={36} weight="duotone" className="text-[#00A859] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-bold text-[#143F2E] text-[1.2rem] mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-[0.95rem] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}