import { House, Buildings, Factory, GraduationCap, ForkKnife, FirstAidKit } from '@phosphor-icons/react';

export default function Audiences() {
  const audienceList = [
    { Icon: House, text: 'Residências' },
    { Icon: Buildings, text: 'Empresas' },
    { Icon: Factory, text: 'Indústrias' },
    { Icon: GraduationCap, text: 'Escolas' },
    { Icon: ForkKnife, text: 'Restaurantes' },
    { Icon: FirstAidKit, text: 'Clínicas' },
  ];

  return (
    <section className="relative z-30 w-[95%] md:w-full md:max-w-[1100px] mx-auto -mt-[40px] md:-mt-[50px] fade-in-up">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] py-8 md:py-10 px-6 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {audienceList.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-3 group">
              <item.Icon size={42} weight="duotone" className="text-[#FF7600] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-[#143F2E] text-[1rem]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}