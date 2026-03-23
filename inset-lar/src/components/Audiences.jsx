import { House, Buildings, Factory, GraduationCap, ForkKnife, FirstAidKit } from '@phosphor-icons/react';

export default function Audiences() {
  const audienceList = [
    { Icon: House, text: 'Residências' },
    { Icon: GraduationCap, text: 'Escolas' },
    { Icon: Buildings, text: 'Empresas' },
    { Icon: Factory, text: 'Indústrias' },
    { Icon: ForkKnife, text: 'Restaurantes' },
    { Icon: FirstAidKit, text: 'Clínicas' },
  ];

  // Duplicamos 4 vezes para garantir que preencha telas gigantes sem quebrar a animação
  const repeatedList = [...audienceList, ...audienceList, ...audienceList, ...audienceList];

  return (
    <section className="relative z-30 w-[95%] md:w-full md:max-w-[1200px] mx-auto -mt-[50px] md:-mt-[60px] fade-in-up delay-400">

      {/* Painel de Vidro Flutuante (Glassmorphism) */}
      <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-4 md:py-6">
        
        {/* Luz de neon superior */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF7600] to-transparent opacity-70"></div>

        <div className="overflow-hidden">
          {/* Adicionado hover:[animation-play-state:paused] para pausar ao passar o mouse */}
          <div className="flex w-max gap-4 md:gap-8 px-5 md:px-10 animate-marquee hover:[animation-play-state:paused]">
            
            {repeatedList.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-3 uppercase font-extrabold tracking-widest text-[0.7rem] md:text-[0.85rem] bg-black/40 border border-white/5 px-6 py-3 rounded-xl text-white/90 transition-all duration-300 shrink-0 hover:-translate-y-1 hover:bg-black/60 hover:border-[#00A859]/50 hover:shadow-[0_10px_20px_rgba(0,168,89,0.2)] cursor-default"
              >
                <item.Icon
                  size={24}
                  weight="duotone"
                  className="text-[#FF7600] transition-all duration-300 group-hover:scale-110 group-hover:text-[#00A859]"
                />
                <span className="relative z-10 whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}