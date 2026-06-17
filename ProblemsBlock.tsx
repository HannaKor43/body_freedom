/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AlertTriangle, PlayCircle, HelpCircle, CheckCircle } from 'lucide-react';

interface ProblemItem {
  id: number;
  text: string;
  category: string;
  weight: number;
}

export default function ProblemsBlock() {
  const [selectedProblems, setSelectedProblems] = useState<number[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const list: ProblemItem[] = [
    { id: 1, text: "Переедаешь вечером и ночью — словно на автопилоте, не успевая себя остановить", category: "Автопилот / Вечер", weight: 25 },
    { id: 2, text: "Бесконечный круг: жесткая диета → срыв → чувство вины → новая попытка с понедельника", category: "Диетические качели", weight: 20 },
    { id: 3, text: "Вес стоит на месте или возвращается, что бы ты ни делала — руки опускаются", category: "Плато / Возврат веса", weight: 15 },
    { id: 4, text: "Еда — твой единственный быстрый способ успокоиться, порадовать себя или убежать от суеты", category: "Эмоциональное заедание", weight: 20 },
    { id: 5, text: "После еды всегда чувствуешь стыд и беспощадную самокритику: «со мной что-то не так»", category: "Чувство вины", weight: 10 },
    { id: 6, text: "Ты смертельно устала бороться. Сил начинать сначала и контролировать себя просто нет", category: "Эмоциональное выгорание", weight: 10 }
  ];

  const handleToggle = (id: number) => {
    setSelectedProblems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    setHasCalculated(false);
  };

  const getTensionIndex = () => {
    return selectedProblems.reduce((sum, item) => {
      const prob = list.find(p => p.id === item);
      return sum + (prob ? prob.weight : 0);
    }, 0);
  };

  const indexValue = getTensionIndex();

  const getInterpretation = (score: number) => {
    if (score === 0) return "Выберите пункты, которые вы проживаете, для детального анализа.";
    if (score <= 35) {
      return {
        title: "Начальный уровень напряжения характера",
        text: "Твое тело уже сигнализирует о первых психосоматических блоках. Эмоциональные переедания случаются в моменты временного стресса или усталости. Программа поможет легко выстроить границы и вернуть еде статус топлива, а не успокоительного.",
        badge: "Начало работы"
      };
    }
    if (score <= 70) {
      return {
        title: "Средний уровень: Хроническая эмоциональная компенсация",
        text: "Еда прочно закрепилась в твоей системе как главный компенсатор. Вечерние переедания — это способ твоей психики избежать перегрузки или травмы отвержения. Тебе противопоказаны любые жесткие диеты: они лишь запустят очередной срыв. 6-дневный курс — твой шанс разорвать этот замкнутый круг безопасно.",
        badge: "Требует внимания"
      };
    }
    return {
      title: "Высокий уровень: Синдром тотальной борьбы с собой",
      text: "Твое тело устало жить в постоянном режиме выживания. Ты тратишь колоссальный ресурс энергии на самоконтроль, и когда вечером ресурс заканчивается, случается компенсаторное переедание. Это прямое следствие структуры характера (например, Лидера или Золушки). Тебе остро нужен метод, который работает с причиной напряжения, а не с твоим рационом.",
      badge: "Критическое состояние контроля"
    };
  };

  const currentResult = getInterpretation(indexValue);

  return (
    <section id="why" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-dark font-serif font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            Узнаешь в этом свои вечера?
          </h2>
          <p className="text-brand-teal font-display-modern text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
            Проанализируй свою психологическую связь с едой
          </p>
          <div className="w-16 h-1.5 bg-brand-terracotta mx-auto rounded-full" />
        </div>

        {/* Grid: Questionnaire and Live analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left panel: Bullet checkpoints */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm font-semibold tracking-wide text-brand-dark/50 uppercase ml-2 mb-2">
              Шаг 1: Отметьте пункты, которые вы узнаете у себя
            </p>
            {list.map((item) => {
              const isSelected = selectedProblems.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
                    isSelected 
                      ? 'bg-brand-beige border-brand-terracotta shadow-md translate-x-1' 
                      : 'bg-brand-beige/25 border-brand-teal/10 hover:border-brand-teal/30 hover:bg-brand-beige/10'
                  }`}
                >
                  <div className={`mt-1.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-brand-terracotta text-white' : 'border border-brand-teal/30'
                  }`}>
                    {isSelected && <CheckCircle className="w-4 h-4 fill-brand-terracotta text-brand-beige" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-sans text-sm md:text-base transition-colors ${isSelected ? 'text-brand-dark font-medium' : 'text-brand-dark/80'}`}>
                      {item.text}
                    </p>
                    <span className="inline-block mt-1.5 text-[10px] uppercase tracking-wider text-brand-teal/60 font-mono">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel: Dynamic analysis results (Marketing Agitation) */}
          <div className="lg:col-span-5">
            <div className="bg-brand-dark text-brand-beige rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden border border-brand-teal/25">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-terracotta/10 rounded-full filter blur-xl pointer-events-none" />
              
              <h3 className="font-serif-elegant italic text-2xl text-white mb-4">
                Твой психосоматический баланс
              </h3>

              {selectedProblems.length === 0 ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                  <HelpCircle className="w-12 h-12 text-brand-terracotta animate-pulse" />
                  <p className="text-sm text-brand-beige/70 leading-relaxed max-w-xs">
                    Поставьте галочки напротив хотя бы одной ситуации, чтобы Алла рассчитала индекс психологического напряжения характера.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Energy index score tracking visual */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs uppercase font-mono tracking-wider opacity-80">
                        Индекс напряжения пищевой травмы:
                      </span>
                      <span className="font-mono text-xl md:text-2xl font-bold text-brand-terracotta antialiased">
                        {indexValue}%
                      </span>
                    </div>
                    {/* The slider tube */}
                    <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-teal to-brand-terracotta rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${indexValue}%` }}
                      />
                    </div>
                    
                    {/* Alert tags based on level */}
                    {typeof currentResult === 'object' && (
                      <span className="inline-block mt-2 text-[10px] bg-brand-terracotta/25 border border-brand-terracotta/30 text-brand-terracotta py-0.5 px-2 rounded-full font-sans tracking-wide uppercase">
                        {currentResult.badge}
                      </span>
                    )}
                  </div>

                  {typeof currentResult === 'object' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                        <h4 className="text-sm md:text-base font-semibold text-white flex items-center gap-2 mb-1.5">
                          <AlertTriangle className="w-4 h-4 text-brand-terracotta" />
                          {currentResult.title}
                        </h4>
                        <p className="text-xs md:text-sm text-brand-beige/80 leading-relaxed">
                          {currentResult.text}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 text-xs text-brand-beige/70 border-t border-white/10">
                        <strong className="text-brand-beige flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                          Что меняется уже за 6 дней?
                        </strong>
                        <p className="leading-relaxed">
                          Этот курс работает со структурами характера, которые заставляют тело держаться за жировые депо. Когда убирается первопричина (напряжение характера), тяга к сладкому и ночным заеданиям исчезает сама, без волевых усилий.
                        </p>
                      </div>

                      <button 
                        onClick={() => {
                          const element = document.getElementById('quiz');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-display-modern font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 text-xs md:text-sm tracking-wide text-center uppercase shadow-md flex items-center justify-center gap-1.5 group"
                      >
                        <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Шаг 2: Определить тип тела по характеру
                      </button>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
