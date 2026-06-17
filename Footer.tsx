/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-beige border-t border-brand-teal/25 py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-white/5 text-center md:text-left">
          
          {/* Logo brand info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-terracotta flex items-center justify-center text-brand-beige font-serif font-bold text-base select-none">
                С
              </div>
              <span className="text-white font-display-modern font-bold tracking-tight text-base uppercase">
                СТРОЙНОСТЬ ПО ХАРАКТЕРУ 2.0
              </span>
            </div>
            <p className="text-[11px] text-brand-beige/55 leading-relaxed max-w-xs">
              Программа исцеления от эмоционального переедания и запуска естественного снижения веса через психосоматику тела.
            </p>
          </div>

          {/* Support Email contact */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-wider opacity-80 text-brand-terracotta font-semibold">
              Я на связи! По всем вопросам пишите на нашу почту:
            </span>
            <a 
              href="mailto:body.freedom.support@gmail.com"
              className="inline-flex items-center gap-2 text-brand-terracotta hover:text-white transition-colors text-sm font-semibold font-mono bg-white/5 py-2 px-4 rounded-xl border border-white/5"
            >
              <Mail className="w-4 h-4 text-brand-terracotta" />
              <span>body.freedom.support@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Lower guidelines and agreements */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          {/* Copyright information */}
          <div className="space-y-1">
            <p className="text-xs text-brand-beige/50">
              © 2026 Стройность по характеру 2.0. Все права защищены.
            </p>
            <p className="text-[10px] text-brand-beige/35 leading-relaxed max-w-xl">
              Программа курса направлена на психологическое оздоровление и коррекцию пищевого поведения. Материалы не являются заменой профессиональной психиатрической, медицинской или фармацевтической помощи. Пожалуйста, учитывайте клинические противопоказания.
            </p>
          </div>

          {/* Legal agreements links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-brand-beige/65 font-medium">
            <a href="#offer" onClick={(e) => {e.preventDefault(); alert("Договор публичной оферты загружен.");}} className="hover:text-brand-terracotta underline transition-colors">Договор оферты</a>
            <span className="opacity-30">|</span>
            <a href="#privacy" onClick={(e) => {e.preventDefault(); alert("Политика конфиденциальности загружена.");}} className="hover:text-brand-terracotta underline transition-colors">Политика конфиденциальности</a>
            <span className="opacity-30">|</span>
            <a href="#newsletter" onClick={(e) => {e.preventDefault(); alert("Согласие на рассылку загружено.");}} className="hover:text-brand-terracotta underline transition-colors">Согласие на рассылку</a>
          </div>

        </div>

        {/* Centered credit made with dedication */}
        <div className="mt-8 pt-4 border-t border-white/5 text-center flex items-center justify-center gap-1.5 text-[10px] text-brand-beige/25 uppercase font-mono">
          <span>Создано с заботой о женской свободе</span>
          <Heart className="w-3 h-3 text-brand-terracotta fill-brand-terracotta" />
          <span>&copy; 2026</span>
        </div>

      </div>
    </footer>
  );
}
