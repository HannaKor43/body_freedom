/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Check, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { CharacterType } from '../types';

interface PackagesProps {
  discountApplied: boolean;
  dominantType: CharacterType | null;
  onSelectPackage: (packageId: 'solo' | 'group', finalPrice: number) => void;
}

export default function PackagesBlock({ discountApplied, dominantType, onSelectPackage }: PackagesProps) {
  const [spotsSolo, setSpotsSolo] = useState(8);
  const [spotsGroup, setSpotsGroup] = useState(11);

  // Scarcity countdown ticker
  useEffect(() => {
    const timer = setInterval(() => {
      if (spotsSolo > 3 && Math.random() > 0.8) {
        setSpotsSolo(prev => prev - 1);
      }
      if (spotsGroup > 4 && Math.random() > 0.85) {
        setSpotsGroup(prev => prev - 1);
      }
    }, 60000); // Check every minute
    return () => clearInterval(timer);
  }, [spotsSolo, spotsGroup]);

  // Pricing constants (UAH)
  const soloBasePrice = 690;
  const soloOldPrice = 2559;
  
  const groupBasePrice = 1590;
  const groupOldPrice = 5890;

  // Calculate discounted prices
  const finalSoloPrice = discountApplied ? Math.round(soloBasePrice * 0.9) : soloBasePrice;
  const finalGroupPrice = discountApplied ? Math.round(groupBasePrice * 0.9) : groupBasePrice;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-brand-dark text-brand-beige relative overflow-hidden">
      
      {/* Absolute graphic pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#FAF6F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-terracotta/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-terracotta tracking-widest font-mono font-bold uppercase block mb-3 animate-pulse">
            🔥 Старт потока уже скоро
          </span>
          <h2 className="text-white font-serif font-bold text-3.5xl md:text-5xl tracking-tight leading-tight mb-4">
            Выбери свой вариант участия
          </h2>
          <p className="text-brand-beige/70 text-sm md:text-base">
            Получи комплексную программу исцеления пищевых расстройств. Каждая оплата закрывает очередной блок мест, после чего цена возрастает. Действует полная гарантия возврата.
          </p>

          {/* Discount feedback tag */}
          {discountApplied && (
            <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/25 border border-emerald-500/35 text-emerald-300 py-1.5 px-4 rounded-full font-display-modern text-xs font-bold uppercase tracking-wider animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Скидка 10% за прохождение теста активирована!</span>
            </div>
          )}
        </div>

        {/* Pricing Cards Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: SOLO Package */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-brand-teal transition-all duration-300 transform hover:-translate-y-1">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-white font-bold leading-none mb-1">
                    Хочу разобраться сама
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                    Самостоятельный запуск
                  </span>
                </div>
                <span className="bg-brand-teal text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase">
                  Solo-формат
                </span>
              </div>

              {/* Spots indicator */}
              <div className="flex items-center gap-1.5 p-2 bg-white/5 rounded-xl border border-white/5 text-xs text-brand-beige/80 mb-6">
                <Flame className="w-4 h-4 text-brand-terracotta animate-pulse" />
                <span>Осталось всего <strong className="text-brand-terracotta">{spotsSolo} мест</strong> по текущей цене!</span>
              </div>

              {/* Price display blocks */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-3.5xl md:text-4.5xl font-mono font-bold text-brand-terracotta">
                    {finalSoloPrice} грн
                  </span>
                  <span className="text-sm md:text-base font-mono line-through opacity-40">
                    {soloOldPrice} грн
                  </span>
                </div>
                <p className="text-xs text-brand-beige/60 mt-1">
                  Экономия {soloOldPrice - finalSoloPrice} грн  ·  Доступ на 60 дней
                </p>
              </div>

              {/* Contents list */}
              <ul className="space-y-3.5 text-sm text-brand-beige/85 mb-8">
                {[
                  "6 дней полного аудиокурса",
                  "3 психосоматических типа тела: Лидер, Золушка, Звезда — аудиоуроки, глубокие практики и нейронастрои",
                  "Слушать можно в наушниках в записи в любое время",
                  "Самостоятельное прохождение в закрытом канале"
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Bonuses list */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl mb-8">
                <span className="text-[10px] text-brand-terracotta font-mono font-bold tracking-wider uppercase block mb-1">
                  🎁 Подарки при оплате сейчас:
                </span>
                <ul className="space-y-2 text-xs text-brand-beige/75">
                  <li>— Аудиоурок + практика «Худая ведьма» (ценность 52 €)</li>
                  <li>— Аудиоурок «Дух противоречия в теле» (ценность 28 €)</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('solo', finalSoloPrice)}
              className="w-full bg-transparent hover:bg-white text-white hover:text-brand-dark border-2 border-white font-display-modern font-semibold py-4 px-6 rounded-xl transition-all duration-300 tracking-wide text-center uppercase text-sm"
            >
              Занять место за {finalSoloPrice} грн
            </button>
          </div>

          {/* Card 2: GROUP Package (HIGH CONVERTING HIGHLIGHT) */}
          <div className="bg-gradient-to-br from-brand-teal via-brand-teal to-[#163533] rounded-3xl p-6 md:p-8 border-2 border-brand-terracotta flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-terracotta/10 transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="absolute -top-4 right-6 bg-brand-terracotta text-white text-[10px] font-display-modern font-bold tracking-wider py-1 px-3.5 rounded-full uppercase shadow">
              🚀 РЕКОМЕНДОВАНО
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-white font-bold leading-none mb-1">
                    Хочу движ вместе
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-85 text-brand-terracotta font-bold">
                    Сопровождение и чат потока
                  </span>
                </div>
                <span className="bg-brand-terracotta text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase">
                  Max-формат
                </span>
              </div>

              {/* Spots indicator */}
              <div className="flex items-center gap-1.5 p-2 bg-black/15 rounded-xl border border-white/5 text-xs text-[#DFECEB] mb-6">
                <Flame className="w-4 h-4 text-brand-terracotta animate-pulse fill-brand-terracotta" />
                <span>Осталось всего <strong className="text-brand-terracotta">{spotsGroup} мест</strong> по цене со скидкой!</span>
              </div>

              {/* Price display blocks */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-3.5xl md:text-4.5xl font-mono font-bold text-white">
                    {finalGroupPrice} грн
                  </span>
                  <span className="text-sm md:text-base font-mono line-through opacity-50">
                    {groupOldPrice} грн
                  </span>
                </div>
                <p className="text-xs text-[#DFECEB] mt-1">
                  Экономия {groupOldPrice - finalGroupPrice} грн  ·  Доступ на 1 год
                </p>
              </div>

              {/* Contents list */}
              <ul className="space-y-3.5 text-sm text-brand-beige mb-8">
                {[
                  "Вся программа пакета «Хочу сама»",
                  "10 дней активного сопровождения Аллой: ответы на вопросы в чате, терапевтические разборы",
                  "Закрытый поддерживающий чат участниц",
                  "Секретная живая встреча «Успешность и лишний вес» с записью"
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Bonuses list */}
              <div className="bg-black/10 border border-white/5 p-4 rounded-2xl mb-8">
                <span className="text-[10px] text-brand-terracotta font-mono font-bold tracking-wider uppercase block mb-1">
                  🎁 Подарки при оплате сейчас:
                </span>
                <ul className="space-y-2 text-xs text-[#DFECEB]">
                  <li>— Аудиоурок + практика «Худая ведьма» (ценность 52 €)</li>
                  <li>— Аудиоурок «Дух противоречия в теле» (ценность 28 €)</li>
                  <li>— Дополнительные живые разборы ситуаций от Аллы</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('group', finalGroupPrice)}
              className="w-full bg-brand-terracotta hover:bg-brand-terracotta/95 text-white font-display-modern font-bold py-4 px-6 rounded-xl transition-all duration-300 tracking-wide text-center uppercase text-sm shadow-md"
            >
              Занять место за {finalGroupPrice} грн
            </button>
          </div>

        </div>

        {/* Safe Guarantee Row */}
        <div className="mt-16 bg-white/5 p-6 rounded-2xl max-w-2xl mx-auto border border-white/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 bg-brand-terracotta/20 rounded-full flex items-center justify-center text-brand-terracotta text-2xl shrink-0">
            🛡️
          </div>
          <div>
            <h4 className="font-display-modern font-bold text-sm text-white flex items-center justify-center sm:justify-start gap-1">
              <ShieldAlert className="w-4 h-4 text-brand-terracotta" />
              100% железная гарантия возврата — 14 дней
            </h4>
            <p className="text-xs text-brand-beige/70 leading-relaxed mt-1">
              Если после первых уроков вы поймете, что методология работы с характерами вам не подходит — напишите нам на почту body.freedom.support@gmail.com. Мы вернем полную стоимость оплаты в течение 24 часов. Без лишних вопросов.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
