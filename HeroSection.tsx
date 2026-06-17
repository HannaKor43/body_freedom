/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import harmonyImage from '../assets/images/harmony_body_mind_1781690450498.jpg';

export default function HeroSection() {
  // A/B test Header state for marketing interaction
  const [headerVariant, setHeaderVariant] = useState<0 | 1 | 2 | 3>(0);
  
  // Audio podcast state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  
  const headers = [
    {
      main: "За 6 дней — перестань переедать.",
      highlight: "Без диет, без силы воли, без борьбы с собой."
    },
    {
      main: "6 дней, которые изменят твои отношения с едой",
      highlight: "Навсегда и без какого-либо насилия над собой"
    },
    {
      main: "Узнай, какой тип характера мешает быть стройной",
      highlight: "И освободи тело от эмоциональных перееданий"
    },
    {
      main: "6 дней до момента, когда еда",
      highlight: "Перестанет полностью управлять твоей жизнью"
    }
  ];

  // Active audio timeline simulator
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1.2;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="hero" className="relative min-h-[90vh] bg-gradient-to-b from-slate-50 via-white to-slate-100/40 pt-8 md:pt-16 pb-12 md:pb-24 overflow-hidden">
      
      {/* Background soft glow spots */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-terracotta/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-teal/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* A/B Test Toggles Bar - High converting micro-interaction */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 max-w-2xl mx-auto bg-brand-teal/5 p-1 text-xs rounded-full border border-brand-teal/10">
          <span className="text-brand-teal/70 font-display-modern font-semibold px-3 py-1 bg-white/60 rounded-full shadow-sm">
            А/Б Тест Крючков:
          </span>
          {headers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeaderVariant(idx as any)}
              className={`px-3 py-1 rounded-full transition-all duration-300 font-medium ${
                headerVariant === idx
                  ? 'bg-brand-teal text-white shadow'
                  : 'text-brand-dark/70 hover:bg-white/40'
              }`}
            >
              Версия {idx + 1}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline & Core Arguments */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            
            {/* Live glowing microtag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta rounded-full font-display-modern text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              Психосоматический прорыв 2026 года
            </div>

            {/* Dynamic Headlines driven by A/B test */}
            <div className="space-y-3 md:space-y-4 max-w-2xl">
              <h1 className="text-brand-dark font-serif font-semibold text-3.5xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
                {headers[headerVariant].main}
              </h1>
              <p className="text-brand-terracotta font-serif-elegant italic text-2xl md:text-3xl leading-relaxed">
                {headers[headerVariant].highlight}
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-brand-dark/80 font-sans text-base md:text-lg max-w-xl leading-relaxed">
              <strong className="text-brand-teal">6 аудио-уроков по 35 минут</strong> – и переедание перестает владеть твоим телом. Только практическая психология, определение типа характера и исцеление травм. Никаких правил, ограничений и издевательств.
            </p>

            {/* Bullet list benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg text-sm text-brand-dark/75">
              {[
                "Без изнурительных тренировок",
                "Без подсчета калорий",
                "Без запретов на сладкое",
                "Через психологию характера",
              ].map((bullet, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA action cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href="#pricing"
                className="bg-brand-terracotta text-brand-beige hover:bg-brand-terracotta/95 px-8 py-4.5 rounded-full font-display-modern font-semibold text-base md:text-lg tracking-tight text-center shadow-lg shadow-brand-terracotta/25 hover:shadow-xl hover:shadow-brand-terracotta/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Хочу перестать переедать
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 bg-brand-teal/5 text-brand-teal hover:bg-brand-teal/10 px-8 py-4.5 rounded-full font-display-modern font-semibold text-base tracking-tight text-center border border-brand-teal/15 transition-all duration-300"
              >
                <span>Пройти тест характера</span>
                <span className="text-[11px] bg-brand-teal text-white px-2 py-0.5 rounded-full font-sans tracking-normal uppercase">Бесплатно</span>
              </a>
            </div>

            {/* Trust Badges - Social proof Row */}
            <div className="border-t border-brand-teal/10 pt-6 w-full max-w-2xl flex flex-wrap gap-x-8 gap-y-4 items-center">
              <div>
                <div className="text-2xl md:text-3xl font-display-modern font-bold text-brand-teal">
                  31 000+
                </div>
                <div className="text-xs text-brand-dark/70 tracking-tight uppercase">
                  Женщин успешно прошли курс
                </div>
              </div>
              <div className="w-px h-8 bg-brand-teal/15 hidden sm:block" />
              <div>
                <div className="text-2xl md:text-3xl font-display-modern font-bold text-brand-teal">
                  2 000+
                </div>
                <div className="text-xs text-brand-dark/70 tracking-tight uppercase">
                  Личных клиентов в терапии
                </div>
              </div>
              <div className="w-px h-8 bg-brand-teal/15 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
                </div>
                <div className="text-xs text-brand-dark/75">
                  <strong className="text-brand-dark">9 из 10</strong> устранили переедание
                </div>
              </div>
            </div>

          </div>

          {/* Right: Immersive Premium Graphics & Audio Player Widget */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Background design ornaments */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-brand-terracotta/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-brand-teal/40 rounded-br-xl pointer-events-none" />
            
            {/* Main graphic container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group hover:scale-[1.01] transition-all duration-300">
              
              <img
                src={harmonyImage}
                alt="Стройность по характеру - гармония ума и тела"
                className="w-full aspect-[4/3] object-cover filter brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating Expert Badge */}
              <div className="absolute top-4 left-4 bg-brand-teal/95 backdrop-blur-sm text-brand-beige text-xs font-display-modern font-medium tracking-wide py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
                <span>Метод Аллы Никитенко (Полищук)</span>
              </div>

              {/* Bottom Interactive Telegram Player - Audio Lesson Demonstration */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 text-brand-beige">
                <p className="text-[11px] uppercase tracking-widest text-emerald-300 font-display-modern font-bold mb-1 ml-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta animate-ping" />
                  Вводный Подкаст-Практика
                </p>
                <h3 className="text-sm md:text-base font-serif font-medium mb-3 ml-1 text-white">
                  «Почему сила воли разрушает ваше тело» — фрагмент урока
                </h3>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/15 transition-all">
                  
                  {/* Play Button icon */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 rounded-full bg-brand-terracotta hover:bg-brand-terracotta/90 flex items-center justify-center text-white focus:outline-none transition-transform active:scale-95 shrink-0 shadow-md"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Player Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] opacity-75 mb-1.5 font-mono">
                      <span>{isPlaying ? "Воспроизведение" : "Прослушать (3:45)"}</span>
                      <span>{Math.floor((audioProgress / 100) * 3)}:{String(Math.floor(((audioProgress / 100) * 225) % 60)).padStart(2, '0')}</span>
                    </div>

                    {/* Fake Sound Bars playing animation */}
                    <div className="flex items-end gap-0.5 h-6 overflow-hidden">
                      {[...Array(28)].map((_, idx) => {
                        // Generate waves that bounce when playing
                        const barHeight = isPlaying 
                          ? Math.sin(audioProgress * 0.4 + idx) * 10 + 14 
                          : Math.floor(Math.sin(idx * 0.5) * 6) + 10;
                        
                        return (
                          <div 
                            key={idx}
                            style={{ height: `${Math.max(4, barHeight)}px` }}
                            className={`w-1 rounded-full transition-all duration-300 ${
                              idx < (audioProgress / 100) * 28 
                                ? 'bg-brand-terracotta' 
                                : 'bg-brand-beige/30'
                            }`}
                          />
                        )
                      })}
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Overlapping client quote banner */}
            <div className="absolute -bottom-10 -left-6 md:-left-8 bg-brand-beige p-4 rounded-xl shadow-xl max-w-[280px] border border-brand-teal/10 hidden md:block animate-fade-in">
              <p className="text-xs italic text-brand-dark/80 font-serif leading-relaxed">
                «Я думала, что мне не хватает воли, но после первого года практики с Аллой тяга к ночным заеданиям исчезла САМА!»
              </p>
              <div className="mt-2 text-[10px] uppercase font-mono font-bold tracking-wider text-brand-terracotta">
                — Светлана К., 36 лет
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
