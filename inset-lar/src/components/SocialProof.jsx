import { YoutubeLogo, InstagramLogo, PlayCircle } from "@phosphor-icons/react";

export default function SocialProof() {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6 fade-in-up">
        
        <div className="bg-[#EAF3EF] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          
          <div className="text-center lg:text-left max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00A859] font-bold uppercase tracking-wider text-sm mb-3">
              <PlayCircle size={20} weight="fill" /> 
              Operações na Prática
            </div>
            
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#143F2E] font-extrabold mb-3 leading-tight">
              Acompanhe nossas <br className="hidden md:block"/> Redes Sociais
            </h2>
            
            <p className="text-[1rem] text-[#143F2E]/70 font-medium">
              Conheça e saiba como cada serviço funciona, e aproveite promoções
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            
            <a
              href="https://www.youtube.com/@InsetLarDedetizadora"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 text-[#143F2E] rounded-full font-bold text-[0.95rem] active:scale-95 transition"
            >
              <YoutubeLogo size={24} weight="fill" className="text-red-500" />
              Ver no YouTube
            </a>

            <a
              href="https://www.instagram.com/insetlarcaldasnovas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 text-[#143F2E] rounded-full font-bold text-[0.95rem] active:scale-95 transition"
            >
              <InstagramLogo size={24} weight="fill" className="text-pink-500" />
              Siga no Instagram
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}