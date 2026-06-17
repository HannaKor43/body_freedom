/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { X, Sparkles, CheckCircle2, Loader2, ArrowRight, BookOpen, MessageSquare, Compass } from 'lucide-react';
import { CharacterType } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageId: 'solo' | 'group' | null;
  price: number;
  dominantType: CharacterType | null;
}

export default function CheckoutModal({ isOpen, onClose, packageId, price, dominantType }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Success checklist tasks for dynamic interaction
  const [tasks, setTasks] = useState([
    { id: 1, text: "Проверить папку 'Спам' или 'Промоакции' в почте", checked: false },
    { id: 2, text: "Подписаться на закрытый бот сопровождения в Telegram", checked: false },
    { id: 3, text: "Подготовить любимые наушники для первого аудиоурока", checked: false }
  ]);

  if (!isOpen) return null;

  const handleTaskToggle = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Пожалуйста, заполните все обязательные поля!");
      return;
    }

    setIsSubmitting(true);
    // Simulate real billing proxy/auth pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const packageTitle = packageId === 'solo' 
    ? 'Хочу разобраться сама (Solo)' 
    : 'Хочу движ вместе (Max-сопровождение)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Dark overlay backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      {/* Main Card content */}
      <div className="relative bg-brand-beige border border-brand-teal/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 animate-scale-up">
        
        {/* Absolute header colors */}
        <div className="bg-brand-teal text-brand-beige py-5 px-6 pr-14 flex items-center justify-between relative">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase py-0.5 px-2 bg-brand-terracotta text-white rounded-full">
              Запись на поток 2.0
            </span>
            <h3 className="text-lg md:text-xl font-serif font-semibold mt-1">
              Оформление участия
            </h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">

          {!isSuccess ? (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Selected package review cluster */}
              <div className="p-4 bg-white rounded-2xl border border-brand-teal/5 shadow-sm">
                <span className="text-[9px] uppercase tracking-wider text-brand-teal/70 font-mono font-bold block mb-1">
                  Выбранный Вами тариф:
                </span>
                <p className="font-serif font-bold text-brand-dark text-base">
                  {packageTitle}
                </p>
                <div className="flex justify-between items-end mt-3 pt-3 border-t border-brand-teal/5">
                  <span className="text-xs text-brand-dark/70">К оплате:</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-brand-terracotta">
                    {price} грн
                  </span>
                </div>
                {dominantType && (
                  <div className="mt-2 text-[11px] bg-emerald-500/10 text-brand-teal py-1 px-2.5 rounded-lg font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
                    <span>Твой психосоматический тип: <strong className="uppercase">{dominantType}</strong> (+персональные бонусы)</span>
                  </div>
                )}
              </div>

              {/* Input details */}
              <div className="space-y-3">
                <label className="block text-xs font-display-modern font-bold tracking-wider text-brand-dark uppercase">
                  Ваши контактные данные для связи:
                </label>
                
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Ваше полное имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-brand-teal/20 focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Электронная почта (для отправки уроков)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-brand-teal/20 focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Мобильный телефон (Telegram / Viber)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-brand-teal/20 focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Auditor anxiety-reductive Section: 3 Steps after Payment */}
              <div className="p-4 bg-brand-dark text-brand-beige rounded-2xl space-y-3.5">
                <h4 className="text-xs uppercase font-display-modern font-bold tracking-wider text-brand-terracotta flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <Compass className="w-4 h-4 text-brand-terracotta" />
                  Что произойдет после оплаты?
                </h4>
                
                <div className="space-y-3 text-[11.5px] leading-relaxed text-brand-beige/85">
                  <div className="flex gap-2 items-start">
                    <span className="w-4.5 h-4.5 rounded-full bg-brand-terracotta/30 text-brand-terracotta flex items-center justify-center font-bold font-mono text-[10px] shrink-0">1</span>
                    <p>
                      <strong>Мгновенная ссылка:</strong> Сразу после оплаты вы получите письмо на почту и перенаправление в закрытый Telegram-бот.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="w-4.5 h-4.5 rounded-full bg-brand-terracotta/30 text-brand-terracotta flex items-center justify-center font-bold font-mono text-[10px] shrink-0">2</span>
                    <p>
                      <strong>Тест-распределение:</strong> Бот попросит тебя выбрать свой тип характера (Лидер, Золушка или Звезда) для загрузки твоих бонусов.
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="w-4.5 h-4.5 rounded-full bg-brand-terracotta/30 text-brand-terracotta flex items-center justify-center font-bold font-mono text-[10px] shrink-0">3</span>
                    <p>
                      <strong>Старт:</strong> В понедельник в 7:00 утра ты получишь свой первый 35-минутный аудиоурок и практическую медитацию потока.
                    </p>
                  </div>
                </div>

              </div>

              {/* Primary submit action trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-terracotta hover:bg-brand-terracotta/95 disabled:bg-brand-teal/40 text-white font-display-modern font-semibold py-4 px-6 rounded-xl transition-all duration-300 tracking-wide text-center uppercase text-xs md:text-sm shadow-md flex items-center justify-center gap-2 focus:outline-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Авторизация платежа...</span>
                  </>
                ) : (
                  <>
                    <span>Подтвердить заказ и оплатить</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          ) : (
            
            // Dynamic Success & Onboarding Screen Checklist (Saves Conversions!)
            <div className="animate-fade-in text-center space-y-6">
              
              <div className="w-16 h-16 rounded-full bg-emerald-500 mx-auto flex items-center justify-center text-white shadow-lg animate-scale-up">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  Добро пожаловать в поток!
                </h3>
                <p className="text-sm text-brand-dark/75 max-w-xs mx-auto leading-relaxed">
                  Спасибо, {name}! Ваша оплата зафиксирована, и место успешно забронировано по самой низкой цене.
                </p>
              </div>

              {/* Dynamic user onboarding checklist card and actions */}
              <div className="p-4 bg-white border border-brand-teal/10 rounded-2xl text-left space-y-4">
                
                <h4 className="text-xs font-display-modern font-bold tracking-wider text-brand-teal uppercase flex items-center gap-1.5 border-b border-brand-teal/5 pb-2">
                  <BookOpen className="w-4 h-4 text-brand-terracotta" />
                  Твой индивидуальный Onboarding-чеклист:
                </h4>

                <div className="space-y-3.5">
                  {tasks.map((t) => (
                    <div 
                      key={t.id}
                      onClick={() => handleTaskToggle(t.id)}
                      className={`flex items-start gap-3 cursor-pointer p-1.5 rounded-lg transition-colors select-none ${
                        t.checked ? 'bg-emerald-500/5' : 'hover:bg-brand-beige/50'
                      }`}
                    >
                      <div className={`mt-0.5 w-4.5 h-4.5 rounded border flex items-center justify-center shrink-0 transition-all ${
                        t.checked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-brand-teal/30 bg-white'
                      }`}>
                        {t.checked && <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-500 text-white" />}
                      </div>
                      <span className={`text-xs ${
                        t.checked ? 'line-through text-brand-dark/45' : 'text-brand-dark/85'
                      }`}>
                        {t.text}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* CTA trigger link to Telegram bot mock directly */}
              <a 
                href="https://t.me/" 
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-teal text-white hover:bg-brand-teal/90 py-4 px-6 rounded-xl font-display-modern font-semibold flex items-center justify-center gap-2 shadow transition-all tracking-wide text-xs uppercase"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Войти в закрытый Telegram-бот потока</span>
              </a>

              <p className="text-[10px] text-brand-dark/40 font-mono tracking-wider">
                body.freedom.support@gmail.com · Почта службы поддержки
              </p>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
