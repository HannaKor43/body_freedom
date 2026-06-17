/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Review } from '../types';

export default function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Диана Г.",
      country: "Цюрих, Швейцария",
      quote: "После сессии с Аллой тяга к хлебу, который я просто обожала, значительно уменьшилась — и это произошло абсолютно САМО!",
      text: "Я годами сидела на безглютеновой диете, срывалась, плакала и снова начинала. После первого урока по типу характера 'Лидер' поняла, что хлеб был моим щитом от внешней агрессии. Когда убрала внутреннее напряжение, хлеб просто перестал вызывать эмоции. Он теперь обычная еда. Это фантастика!",
      rating: 5,
      type: "Лидер"
    },
    {
      id: 2,
      name: "Светлана Н.",
      country: "Реховот, Израиль",
      quote: "Есть по вечерам уже совсем не хотелось, а утром я проснулась невероятно бодрой и легкой впервые за годы.",
      text: "Всегда считала себя слабовольной, потому что по вечерам сметала все сладкое. Прошла курс в формате 'Золушки'. Наконец разрешила себе сказать 'нет' маме и детям, когда они хотели снова загрузить меня делами вечером. Живот начал таять первым. Чувствую себя свободным человеком, который дышит!",
      rating: 5,
      type: "Золушка"
    },
    {
      id: 3,
      name: "Мария П.",
      country: "Киев, Украина",
      quote: "Я думала, что мне всю жизнь не хватает железной дисциплины. Этот курс — просто роскошный подарок судьбы.",
      text: "Терапия длилась 2 года, но тема перееданий стояла мертвой точкой. На курсе 'Стройность по характеру' я узнала себя в типе 'Звезда' за первые 15 минут. Когда спал мой перфекционизм и страх стыда — ушел и защитный отек. Спасибо Алле за такую простую, глубокую и человечную подачу без поучений.",
      rating: 5,
      type: "Звезда"
    },
    {
      id: 4,
      name: "Екатерина В.",
      country: "Варшава, Польша",
      quote: "Уже за первые 6 дней почувствовала свободу. Эмоциональный голод наконец отделился от физического.",
      text: "Раньше я жевала постоянно, чтобы заглушить тревогу. Сейчас, благодаря практикам Аллы, я наконец чувствую свой желудок и его естественные потребности. Даже муж заметил, насколько я стала спокойной. Вес снижается плавно и приятно.",
      rating: 5,
      type: "Золушка"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-brand-beige/20 border-y border-brand-teal/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Core Stats / Social proof highlight block */}
        <div className="bg-brand-teal text-brand-beige rounded-3xl p-8 md:p-12 shadow-xl mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center relative">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="flex flex-col justify-center items-center py-4 md:py-0 px-4">
            <span className="font-mono text-3.5xl md:text-5xl font-extrabold text-brand-beige mb-2 tracking-tight">
              31 000+
            </span>
            <p className="text-xs md:text-sm text-[#DFECEB] uppercase tracking-wider font-display-modern font-semibold">
              Участниц прошли методику
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-4 md:py-0 px-4">
            <span className="font-mono text-3.5xl md:text-5xl font-extrabold text-brand-terracotta mb-2 tracking-tight">
              9 из 10
            </span>
            <p className="text-xs md:text-sm text-[#DFECEB] uppercase tracking-wider font-display-modern font-semibold">
              Полностью избавились от переедания
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-4 md:py-0 px-4">
            <span className="font-mono text-3.5xl md:text-5xl font-extrabold text-brand-beige mb-2 tracking-tight">
              2 000+
            </span>
            <p className="text-xs md:text-sm text-[#DFECEB] uppercase tracking-wider font-display-modern font-semibold">
              Личных клиентов в терапии
            </p>
          </div>

        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-brand-dark font-serif font-bold text-3xl md:text-4xl tracking-tight mb-3">
            Живые истории наших участниц
          </h2>
          <p className="text-brand-dark/75 text-sm md:text-base">
            Узнайте результаты женщин, которые перестали контролировать граммы и наконец обрели гармонию благодаря пониманию своего характера.
          </p>
        </div>

        {/* Testimonials Slider Board */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Card Slider Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Left Box (Highlighted Audited Quote - Scan-friendly) */}
            <div className="lg:col-span-5 bg-brand-terracotta text-brand-beige rounded-2.5xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 text-brand-beige/25">
                <Quote className="w-14 h-14" />
              </div>

              <div>
                <div className="flex text-amber-300 gap-1 mb-4">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <h3 className="font-serif-elegant italic text-xl md:text-2xl leading-normal font-semibold">
                  "{reviews[activeIndex].quote}"
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-beige/20">
                <p className="font-display-modern font-bold text-base text-white">
                  {reviews[activeIndex].name}
                </p>
                <div className="flex items-center gap-2 text-xs opacity-85 font-sans mt-1">
                  <span>{reviews[activeIndex].country}</span>
                  <span className="px-2 py-0.5 bg-black/15 text-[10px] rounded-full uppercase tracking-wider font-mono font-bold text-white">
                    Тип: {reviews[activeIndex].type}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Box (Full detailed story text) */}
            <div className="lg:col-span-7 bg-white rounded-2.5xl p-6 md:p-10 flex flex-col justify-between border border-brand-teal/5 shadow-md">
              <div className="space-y-4">
                <span className="text-[10px] bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider">
                  Подробный отзыв
                </span>
                <p className="text-brand-dark/85 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {reviews[activeIndex].text}
                </p>
              </div>

              {/* Slider Slider navigation triggers */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-brand-teal/10">
                <div className="flex gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'w-8 bg-brand-terracotta' : 'w-2 bg-brand-teal/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-brand-teal/10 hover:border-brand-terracotta hover:bg-brand-beige/50 flex items-center justify-center text-brand-teal hover:text-brand-terracotta transition-colors active:scale-95"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-brand-teal/10 hover:border-brand-terracotta hover:bg-brand-beige/50 flex items-center justify-center text-brand-teal hover:text-brand-terracotta transition-colors active:scale-95"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
