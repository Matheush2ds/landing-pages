import { MapPin, FacebookLogo, InstagramLogo, Phone } from '@phosphor-icons/react';

export default function TopBar() {
  return (
    <div className="bg-black text-[#a3a3a3] text-[0.8rem] md:text-[0.85rem] py-2.5 font-medium relative z-[1002] border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-2 md:gap-0">
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-[30px]">
          <span className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
            <MapPin size={16} weight="fill" className="text-[#FF7600]" />
            Termal, Caldas Novas - GO
          </span>
          <span className="hidden md:flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
            <Phone size={16} weight="fill" className="text-[#00A859]" />
            <div className="flex items-center gap-1.5">
              Plantão 24h: (64) 99288-6851
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A859] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A859]"></span>
              </span>
            </div>
          </span>
        </div>
        
        <div className="flex gap-[20px] justify-center items-center">
          <span className="hidden md:block text-[#333]">|</span>
          <span className="text-white/60 font-bold uppercase tracking-[1px] text-[0.7rem] mr-2">Siga-nos:</span>
          <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#a3a3a3] hover:text-[#00A859] hover:scale-110 transition-all duration-300">
            <FacebookLogo size={20} weight="fill" />
          </a>
          <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#a3a3a3] hover:text-[#FF7600] hover:scale-110 transition-all duration-300">
            <InstagramLogo size={20} weight="fill" />
          </a>
        </div>

      </div>
    </div>
  )
}