import { MapPin, FacebookLogo, InstagramLogo, Phone } from '@phosphor-icons/react';

export default function TopBar() {
  return (
    <div className="bg-[#143F2E] text-white/90 text-[0.8rem] md:text-[0.85rem] py-3 font-medium relative z-[1002] border-b border-white/10 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-2 md:gap-0">
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-[30px]">
          <span className="flex items-center justify-center md:justify-start gap-2 hover:text-[#FF7600] transition-colors cursor-default">
            <MapPin size={18} weight="fill" className="text-[#FF7600]" />
            Termal, Caldas Novas - GO
          </span>
          
          <span className="hidden md:flex items-center justify-center md:justify-start gap-2 hover:text-[#FF7600] transition-colors cursor-default">
            <Phone size={18} weight="fill" className="text-[#FF7600]" />
            <div className="flex items-center gap-2">
              Plantão 24h: (64) 99288-6851
            </div>
          </span>
        </div>
        
        <div className="flex gap-[15px] justify-center items-center">
          <span className="hidden md:block text-white/20">|</span>
          <span className="text-white/70 font-bold uppercase tracking-wider text-[0.7rem] mr-1">Siga-nos:</span>
          
          <a href="https://www.facebook.com/INSERTLAR?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF7600] transition-all duration-300">
            <FacebookLogo size={16} weight="fill" />
          </a>
          
          <a href="https://www.instagram.com/insetlarcaldasnovas/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF7600] transition-all duration-300">
            <InstagramLogo size={16} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  )
}