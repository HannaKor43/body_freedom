/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, Sparkles } from 'lucide-react';
import expertAllaPose from '../assets/images/expert_alla_pose_1781698732186.jpg';

export default function AboutExpert() {
  return (
    <section id="expert" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-brand-beige/50 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Generated expert image portrait + floating status cards */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-teal/40 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-terracotta/40 rounded-br-xl" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-brand-beige p-3 border border-brand-teal/5">
              <img
                src={expertAllaPose}
                alt="Алла Никитенко (Полищук) — Психолог, автор курса Стройность по характеру 2.0"
                className="w-full aspect-[3/4] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay active therapist registration label */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/95 backdrop-blur-md text-brand-beige rounded-2xl p-4 shadow-lg border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-400 font-bold">Сертифицированный метод</span>
                </div>
                <h4 className="font-display-modern font-bold text-sm text-white">Алла Никитенко (Полищук)</h4>
                <p className="text-[11px] text-brand-beige/70 font-sans mt-0.5">Клинический психолог, специалист по РПП и психосоматике</p>
              </div>
            </div>

            {/* Float badge 1 */}
            <div className="absolute -top-6 right-6 bg-brand-terracotta text-brand-beige py-2 px-4 rounded-xl shadow-lg border border-brand-terracotta/10 text-xs font-display-modern font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>10+ лет практики</span>
            </div>
          </div>

          {/* Right Side: Professional Credentials details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div>
              <span className="text-xs text-brand-terracotta tracking-widest font-mono font-bold uppercase block mb-3">
                Автор уникального подхода
              </span>
              <h2 className="text-brand-dark font-serif font-bold text-3.5xl md:text-5xl tracking-tight leading-tight">
                Приручение голода — через душу, а не насилие.
              </h2>
            </div>

            <p className="text-brand-dark/85 text-base md:text-lg leading-relaxed">
              Я — Алла Никитенко (Полищук), автор революционного метода <strong className="text-brand-teal">«Стройность по характеру»</strong> и программы <strong className="text-brand-teal">«Вкус жизни»</strong>. Я сопровождаю женщин в естественном похудении уже более 10 лет. Я отказалась от калорийных таблиц и изнуряющих тренировок, так как лишний вес — это лишь защитные доспехи вашей души.
            </p>

            {/* Quick credentials keypoints bullet grid */}
            <div className="space-y-4">
              {[
                { title: "Работа с первопричиной, а не с весом", desc: "Мы находим детские деструктивные сценарии защиты от мира и нейтрализуем их с помощью глубоких нейронастроев и психологических практик." },
                { title: "Никаких ультиматумов", desc: "В моем подходе нет фраз вроде 'держи себя в руках' или 'прояви дисциплину'. Мы уважаем твои эмоциональные срывы как единственную возможность души сбросить напряжение." },
                { title: "Мягкая терапевтическая интеграция", desc: "Практики проходят в удобном аудиоформате (35 мин), их можно легко слушать в наушниках по дороге на работу, на прогулке или дома в уютной обстановке." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 text-brand-teal mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-display-modern font-bold text-sm md:text-base text-brand-dark">{item.title}</h4>
                    <p className="text-xs md:text-sm text-brand-dark/75 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature high-end quote bubble layout */}
            <div className="border-l-4 border-brand-terracotta p-4 md:p-6 bg-brand-beige/30 rounded-r-2xl">
              <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-brand-terracotta block mb-1">Мой главный девиз</span>
              <p className="text-sm md:text-base italic text-brand-dark/80 font-serif leading-relaxed">
                «Самый частый отзыв, который я получаю: "Я искренне думала, что мне не хватает силы воли, ваш курс — это просто подарок судьбы. Годы традиционной психотерапии не дали столько спокойствия и легкости, сколько я обрела всего за эти 6 дней"»
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
