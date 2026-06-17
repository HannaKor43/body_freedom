/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Flame, Clock } from 'lucide-react';

export default function PromoHeader() {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  const [spotsLeftSolo, setSpotsLeftSolo] = useState(8);
  const [spotsLeftGroup, setSpotsLeftGroup] = useState(11);

  // Dynamic live countdown simulation to build strong urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to keep the active FOMO ticking
          return { hours: 11, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulating active spots decrementing over time
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setSpotsLeftSolo(prev => (prev > 2 ? prev - 1 : 2));
      }
      if (Math.random() > 0.75) {
        setSpotsLeftGroup(prev => (prev > 3 ? prev - 1 : 3));
      }
    }, 45000); // every 45s, there's a chance a spot gets reserved

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Urgent Promo-bar */}
      <div className="bg-brand-terracotta text-brand-beige py-2.5 px-4 text-xs md:text-sm font-display-modern font-semibold leading-relaxed relative overflow-hidden flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 z-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(45deg,#ffe_10%,transparent_90%)] pointer-events-none animate-[pulse_3s_infinite]" />
        
        <div className="flex items-center gap-1.5 z-10">
          <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-bounce" />
          <span>Старт нового потока — 16 июня · Цена растет с каждой 100-й оплатой</span>
        </div>
        
        <div className="flex items-center gap-3 z-10 shrink-0">
          <span className="opacity-80 flex items-center gap-1 text-[11px] md:text-xs">
            <Clock className="w-3.5 h-3.5" />
            До повышения цены:
          </span>
          <div className="flex gap-1 font-mono text-sm tracking-wider bg-black/20 px-2 py-0.5 rounded-md items-center">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <span className="text-[11px] bg-brand-teal text-white px-2 py-0.5 rounded-full font-sans tracking-tight animate-pulse shrink-0">
            Осталось: {spotsLeftSolo + spotsLeftGroup} мест
          </span>
        </div>
      </div>

      {/* Sticky Navigation Menu */}
      <header className="sticky top-0 bg-brand-beige/90 backdrop-blur-md border-b border-brand-teal/10 shadow-sm z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo & Brand title */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-brand-beige font-serif font-bold text-lg select-none group-hover:bg-brand-terracotta transition-colors duration-300 shadow">
              С
            </div>
            <div className="flex flex-col">
              <span className="text-brand-dark font-display-modern font-bold tracking-tight leading-none text-base md:text-lg">
                СТРОЙНОСТЬ <span className="text-brand-terracotta font-serif-elegant italic font-normal">по характеру</span>
              </span>
              <span className="text-brand-teal/60 font-mono tracking-widest text-[9px] md:text-[10px] leading-none uppercase">
                Революция снижения веса
              </span>
            </div>
          </a>

          {/* Center Navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { label: 'Преимущества', url: '#why' },
              { label: 'Для кого', url: '#types' },
              { label: 'Тест типов', url: '#quiz' },
              { label: 'Тарифы', url: '#pricing' },
              { label: 'Об Алле', url: '#expert' },
              { label: 'FAQ', url: '#faq' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="px-3 py-2 text-sm text-brand-dark/80 font-medium hover:text-brand-terracotta hover:bg-brand-teal/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a 
              href="#pricing"
              className="bg-brand-teal text-white hover:bg-brand-teal/90 px-4 md:px-6 py-2.5 rounded-full font-display-modern font-semibold text-xs md:text-sm tracking-tight shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Занять место
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
