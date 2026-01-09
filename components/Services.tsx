
import React from 'react';

interface ServicesProps {
  lang: 'RU' | 'EN';
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const services = [
    {
      id: '01',
      title: lang === 'RU' ? 'Дизайн' : 'Design',
      description: lang === 'RU' 
        ? 'Специализируюсь на создании современных цифровых продуктов с фокусом на функциональность.' 
        : 'With a solid track record in designing digital products, I deliver strong and user-friendly experiences.'
    },
    {
      id: '02',
      title: lang === 'RU' ? 'Разработка' : 'Development',
      description: lang === 'RU'
        ? 'Создаю сайты, которые работают быстро и выглядят безупречно на любом устройстве.'
        : 'I build websites that are fast, responsive, and easy to manage. Pixel perfect implementation.'
    },
    {
      id: '03',
      title: lang === 'RU' ? 'Прототипирование' : 'The Full Package',
      description: lang === 'RU'
        ? 'От идеи до работающего прототипа: глубокие исследования и продуманная архитектура.'
        : 'A complete strategy from research to execution. Helping brands to grow in the digital world.'
    }
  ];

  return (
    <section className="bg-[#f1f1f1] py-40 px-6 md:px-20 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-20 opacity-30">
          {lang === 'RU' ? 'Чем я могу помочь' : 'I can help you with'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          {services.map((service) => (
            <div key={service.id} className="group border-t border-black/10 pt-10 flex flex-col h-full min-h-[350px]">
              <span className="text-[10px] font-bold opacity-30 mb-10 group-hover:opacity-100 transition-opacity duration-500">
                {service.id}
              </span>
              <h3 className="text-4xl lg:text-5xl font-normal tracking-tighter mb-8 transition-transform duration-500 group-hover:translate-x-2">
                {service.title}
              </h3>
              <p className="text-sm opacity-50 font-light leading-relaxed mt-auto max-w-[280px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
