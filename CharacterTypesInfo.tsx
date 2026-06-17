/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, ArrowRight, Star, Heart, Flame } from 'lucide-react';
import { CharacterType } from '../types';

export default function CharacterTypesInfo() {
  const [activeTab, setActiveTab] = useState<CharacterType>('leader');

  const typesData = {
    leader: {
      title: "👑 ТИП: ЛИДЕР (Борющаяся за справедливость)",
      quote: "«Я все должна тащить на себе. Если я хоть немного расслаблюсь — все развалится, а меня предадут»",
      bodyShape: "Верх тела выглядит воинственным и зажатым. Округлая спина (сутулость «воробья» или «бойца»), твердая задняя часть шеи, сильный пресс или твердый выпуклый живот, который никак не втягивается, несмотря на качание пресса.",
      soulReality: "Внутренняя энергия борьбы, ненависть к запретам и жестким правилам, глубоко законсервированный гнев, страх расслабиться и быть слабой, подозрительность к людям.",
      foodModel: "Вечернее или ночное переедание возникает как компенсация контроля. Поскольку днем вы держите колоссальное напряжение и все контролируете, вечером психика дает сбой и взрывается у холодильника. Ограничение калорий для вас — триггер ненависти, провоцирующий немедленный еще более сильный срыв.",
      bonusGift: "Бонус «Аудиоурок: Дух противоречия в теле» (ценность 28 €) — бесплатно в вашем тарифе."
    },
    cinderella: {
      title: "🧹 ТИП: ЗОЛУШКА (Спасательница-Жертва)",
      quote: "«Я забочусь обо всех вокруг, помогаю, спасаю. А о себе вспоминаю только под покровом ночи...»",
      bodyShape: "Дряблость кожи и тканей, живот провисает и теряет форму, будто карман. Осанка увядшая, тяжесть в ногах, отеки. Тело будто тает и тяжелеет под гнетом чужой ответственности.",
      soulReality: "Жертвенность, тотальная безотказность, синдром хорошей девочки, растворение в проблемах мужа/детей. Запрет на проявление эгоизма, подавленные обиды.",
      foodModel: "Еда — это твое единственное персональное пространство радости и свободы. Проводя день в служении семье, вечером ты остаешься наедине с собой в тишине, где еда — единственное доступное удовольствие. Любые спортивные истязания твоим телом воспринимаются как каторжный труд, от которого хочется плакать и заедать еще больше.",
      bonusGift: "Бонус «Аудиокурс: Худая ведьма — тайная цена твоей силы» (ценность 52 €) — бесплатно в вашем тарифе."
    },
    star: {
      title: "⭐ ТИП: ЗВЕЗДА (Перфекционистка)",
      quote: "«Я должна выглядеть безупречно. Мой стыд от того, что я не идеальна — невыносим»",
      bodyShape: "Объемы растут равномерно со всех сторон. Тело будто обрастает подушкой безопасности или идеальным пуховым коконом. Спина напряжена, шея спазмирована от постоянного ношения тяжелой воображаемой короны.",
      soulReality: "Скрытый перфекционизм, синдром отложенной жизни, хронический страх быть высмеянной или осужденной, глубокая неприемлемость собственных недостатков. Заедание тревоги о неидеальности.",
      foodModel: "Еда является амортизатором твоей повышенной тревожности. Ты считываешь каждый съеденный грамм или конфету как катастрофическое фиаско: «Я уже не идеальна, все пропало, сгорел сарай — гори и хата!» — и начинается тотальное переедание.",
      bonusGift: "Специальный Нейронастрой-программирование на снятие стыда перед сладким — в тарифе сразу после оплаты."
    }
  };

  return (
    <section id="types" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-terracotta tracking-widest font-mono font-bold uppercase block mb-3">
            Анатомия психосоматики
          </span>
          <h2 className="text-brand-dark font-serif font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Процесс: Как характер формирует твое тело
          </h2>
          <p className="text-brand-dark/75 text-sm md:text-base">
            Твое тело — это точное зеркало твоих детских решений и защит. Выберите тип, который вы чувствуете самым близким, и узнайте, почему стандартная борьба с весом вам противопоказана.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {(Object.keys(typesData) as CharacterType[]).map((tabKey) => {
            const isActive = activeTab === tabKey;
            const tabTitle = tabKey === 'leader' ? 'ЛИДЕР' : tabKey === 'cinderella' ? 'ЗОЛУШКА' : 'ЗВЕЗДА';
            const icon = tabKey === 'leader' ? '👑' : tabKey === 'cinderella' ? '🧹' : '⭐';
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-4 rounded-xl border font-display-modern font-bold text-sm md:text-base tracking-tight transition-all duration-300 focus:outline-none ${
                  isActive 
                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg ring-2 ring-brand-teal/20 scale-[1.03]' 
                    : 'bg-brand-beige/30 hover:bg-brand-beige border-brand-teal/10 text-brand-dark/80 hover:text-brand-dark'
                }`}
              >
                <span>{icon}</span>
                <span>{tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box Dashboard with elegant layout */}
        <div className="bg-brand-beige/40 rounded-3xl p-6 md:p-10 border border-brand-teal/5 shadow-xl transition-all duration-500 min-h-[460px] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full filter blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Core Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-[10px] bg-brand-terracotta text-white font-mono uppercase tracking-widest font-bold py-1 px-2.5 rounded-full inline-block mb-3">
                  Карта характера
                </span>
                <h3 className="text-brand-dark font-serif font-bold text-2xl md:text-3.5xl leading-tight">
                  {typesData[activeTab].title}
                </h3>
                <p className="text-brand-terracotta italic font-serif-elegant text-lg md:text-xl mt-2">
                  {typesData[activeTab].quote}
                </p>
              </div>

              {/* Struct Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-brand-teal/5 shadow-sm">
                  <h4 className="text-xs uppercase font-display-modern font-bold tracking-wider text-brand-teal mb-1.5 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-brand-terracotta" />
                    Признаки в теле
                  </h4>
                  <p className="text-xs md:text-sm text-brand-dark/85 leading-relaxed">
                    {typesData[activeTab].bodyShape}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-brand-teal/5 shadow-sm">
                  <h4 className="text-xs uppercase font-display-modern font-bold tracking-wider text-brand-teal mb-1.5 flex items-center gap-1.5">
                     <Heart className="w-3.5 h-3.5 text-brand-terracotta" />
                    Душевные блоки
                  </h4>
                  <p className="text-xs md:text-sm text-brand-dark/85 leading-relaxed">
                    {typesData[activeTab].soulReality}
                  </p>
                </div>
              </div>

              {/* Bottom Gift Alert */}
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shrink-0">
                  🎁
                </div>
                <p className="text-xs md:text-sm font-semibold text-brand-teal leading-snug">
                  <span className="text-brand-dark block text-[10px] uppercase font-mono tracking-wider mb-0.5">Эксклюзивный подарок потока:</span>
                  {typesData[activeTab].bonusGift}
                </p>
              </div>

            </div>

            {/* Right Col: Food Model description - highly targeted argument focus */}
            <div className="lg:col-span-5 bg-brand-dark text-brand-beige rounded-2.5xl p-6 md:p-8 border border-brand-teal/25 shadow-lg relative min-h-[300px] flex flex-col justify-between">
              
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs text-brand-terracotta font-display-modern font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-4.5 h-4.5 text-yellow-300 animate-spin" />
                  Модель переедания
                </span>
                
                <h4 className="text-base md:text-lg text-white font-serif font-medium mb-3">
                  Почему классическая диета разбивается о характер?
                </h4>
                
                <p className="text-xs md:text-sm text-brand-beige/85 leading-relaxed font-sans mb-4">
                  {typesData[activeTab].foodModel}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    const priceElement = document.getElementById('pricing');
                    if (priceElement) {
                      priceElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-display-modern font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 group"
                >
                  <span>Занять место в программе</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
