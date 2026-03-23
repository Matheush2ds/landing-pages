import { YoutubeLogo, PlayCircle, InstagramLogo } from "@phosphor-icons/react";

export default function SocialProof() {
  return (
    <section className="relative py-[100px] md:py-[140px] bg-[#050505] overflow-hidden border-y border-white/5">
      
      {/* Efeitos de luz sutis (Vermelho YouTube / Rosa Instagram) - IMPORTANTE: pointer-events-none para não bugar no mobile */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] bg-red-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] bg-pink-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      {/* Grid de Fundo Sutil (Versão Escura) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center fade-in-up">
        <span className="flex items-center justify-center gap-2 text-[#FF7600] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          <PlayCircle size={20} weight="fill" /> Operações na Prática
        </span>
        
        <h2 className="text-[2.5rem] md:text-[4.5rem] text-white font-black mb-6 leading-[0.9] tracking-tighter uppercase">
          Acompanhe nossas <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7600] via-[#ff3b8f] to-[#7b2cbf]">
            Redes Sociais
          </span>
        </h2>

        <p className="text-[1rem] md:text-[1.15rem] text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Sem truques, sem edições mágicas. Veja nossa equipe técnica em campo resolvendo os problemas mais difíceis direto no seu feed do Instagram e YouTube.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
          <a
            href="https://www.youtube.com/@InsetLarDedetizadora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-md border border-red-600/50 text-white rounded-xl md:rounded-full font-black uppercase tracking-widest text-[0.85rem] hover:bg-red-600 hover:border-red-600 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <YoutubeLogo size={24} weight="fill" className="text-red-500 group-hover:text-white transition-colors" />
            Ver no YouTube
          </a>

          <a
            href="https://www.instagram.com/insetlarcaldasnovas/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-md border border-pink-500/50 text-white rounded-xl md:rounded-full font-black uppercase tracking-widest text-[0.85rem] hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 hover:border-transparent hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <InstagramLogo size={24} weight="fill" className="text-pink-500 group-hover:text-white transition-colors" />
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}