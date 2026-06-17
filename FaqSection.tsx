/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Faq {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: Faq[] = [
    {
      q: "Сколько времени моей жизни будет занимать этот курс каждый день?",
      a: "Наши уроки созданы для вашего удобства. Аудиоурок длится всего 15–35 минут, а практическая медитация-настрой — до 20 минут. Курс длится всего 6 дней. Вы можете слушать материалы в дороге, за рулем, гуляя в парке или отдыхая вечером в постели."
    },
    {
      q: "Я всей душой ненавижу диеты, спорт и строгие рамки. Мне подойдет?",
      a: "Да, это подойдет вам идеально! На нашем курсе действует абсолютный запрет на любые ограничения или издевательства едой. Мы работаем с первопричинами перееданий — структурой твоего характера и психосоматическими блоками. Практики разработаны так, чтобы вечерняя тяга исчезла САМА без насилия над телом."
    },
    {
      q: "Я уже перепробовала курсы по РПП и годы психотерапии. Это поможет?",
      a: "Многие наши участницы уже ранее изучали психосоматику или лечили РПП. Но проблема оставалась, потому что они не работали на уровне «характера тела». Наш курс «Стройность по характеру 2.0» проникает в совершенно другое глубокое измерение защитных реакций тела. Это ваш новый шаг к освобождению."
    },
    {
      q: "Все это звучит слишком хорошо, чтобы быть правдой. Это не сказка?",
      a: "Никаких сказок. Баланс вашего тела — это биологическая и психологическая реакция на гормоны стресса и напряжение характера. Снимая напряжение, вы снижаете уровень кортизола, и вес уходит естественно. Чтобы вы ничем не рисковали, у нас действует железная гарантия возврата средств в течение 14 дней."
    },
    {
      q: "Где проходят занятия и когда запланирован старт потока?",
      a: "Мы работаем в удобном и привычном формате закрытых Telegram-каналов (один для уроков, второй для общения в рамках Max-тарифа). Новый поток официально стартует в понедельник, 16.06.2026, в 7:00 по Киевскому времени. Но вы можете слушать уроки в любом часовом поясе, они остаются доступными в записи."
    },
    {
      q: "Какие есть противопоказания для прохождения велнес-курса?",
      a: "Программа не подойдет при клинических расстройствах: нервная анорексия, булимия, критически низкая масса тела, острая клиническая депрессия, суицидальные мысли, психические расстройства в острой фазе или регулярные случаи самоповреждения. В этих случаях вам необходима очная работа с врачом или клиническим психотерапевтом."
    },
    {
      q: "Как именно заказать и вернуть средства при необходимости?",
      a: "Если после первых прослушиваний вы поймете, что курс вам не откликается — просто напишите на электронный адрес body.freedom.support@gmail.com. Мы проведем полный возврат средств. Просим учесть, что после возврата вы не сможете в будущем приобретать программы автора."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-beige/30 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Title row */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-brand-teal tracking-widest font-mono font-bold uppercase block mb-3">
            Есть вопросы?
          </span>
          <h2 className="text-brand-dark font-serif font-bold text-3xl md:text-4xl text-center tracking-tight mb-4">
            Откровенно о деталях программы
          </h2>
          <p className="text-sm text-brand-dark/75">
            Мы подготовили честные и прямые ответы на частые вопросы наших будущих участниц.
          </p>
        </div>

        {/* Dynamic Accordion rows */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-brand-teal/5 shadow-sm transition-all duration-300 overflow-hidden"
              >
                
                {/* Header Toggle Clicker */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 px-6 flex justify-between items-center gap-4 focus:outline-none focus:ring-1 focus:ring-brand-terracotta/20 rounded-t-2xl hover:bg-brand-beige/25 transition-colors"
                >
                  <span className="font-display-modern font-semibold text-brand-dark text-sm md:text-base leading-snug">
                    {faq.q}
                  </span>
                  
                  {/* Dynamic icon toggle */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-brand-teal/10 transition-transform duration-300 ${
                    isOpen ? 'bg-brand-terracotta text-white rotate-180 border-transparent' : 'text-brand-teal'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Inner Content Box */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-brand-teal/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm leading-relaxed text-brand-dark/80 whitespace-pre-line bg-brand-beige/10">
                    {faq.a}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
