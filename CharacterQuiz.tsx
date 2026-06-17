/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { QuizQuestion, CharacterType } from '../types';
import { Sparkles, Award, RotateCcw, CheckCircle2 } from 'lucide-react';

interface QuizProps {
  onQuizComplete: (type: CharacterType, discountApplied: boolean) => void;
}

export default function CharacterQuiz({ onQuizComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<CharacterType[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [resultType, setResultType] = useState<CharacterType>('leader');

  const questions: QuizQuestion[] = [
    {
      id: 1,
      text: "Как вы обычно чувствуете напряжение в своем теле и где чаще всего замечаете лишние объемы?",
      options: [
        { text: "В верхней части тела, спине, плечах и руках. Живот округлый и твердый, словно я всегда готовлюсь к обороне.", type: "leader" },
        { text: "Мягкие ткани провисают, живот теряет тонус и форму, а тело словно потяжелело под грузом чужих обязанностей.", type: "cinderella" },
        { text: "Набираю килограммы пропорционально со всех сторон. Будто обрастаю защитным коконом, чтобы никто не увидел мою тревожную пустоту.", type: "star" }
      ]
    },
    {
      id: 2,
      text: "Какая именно эмоция чаще всего превращается в неконтролируемое вечернее переедание?",
      options: [
        { text: "Гнев, ярость от несправедливости и усталость от того, что все приходится тащить на баррикады исключительно самостоятельно.", type: "leader" },
        { text: "Горькая обида, усталость и тихая жалость к себе. Чувствую, что меня любят только за пользу, которую я приношу окружению.", type: "cinderella" },
        { text: "Острая тревога о статусе, паника перед критикой и несоответствие собственному идеальному образу.", type: "star" }
      ]
    },
    {
      id: 3,
      text: "Что для вас означает фраза «контролировать личные границы»?",
      options: [
        { text: "Я должна контролировать вообще все вокруг, ведь если я расслаблюсь хоть на минуту — меня сразу предадут.", type: "leader" },
        { text: "Я катастрофически не умею говорить «нет». Всегда спасаю других и решаю чужие беды ценой собственного комфорта.", type: "cinderella" },
        { text: "Я боюсь показать близким свои настоящие слабости, поэтому демонстрирую успешный фасад, скрывая реальные тревоги.", type: "star" }
      ]
    },
    {
      id: 4,
      text: "Опишите свой привычный сценарий взаимодействия с работой и близкими людьми:",
      options: [
        { text: "Я сильный боец, руководитель или опекун. Управляю процессами, но внутри — адская усталость, требующая сладкого допинга.", type: "leader" },
        { text: "Я тихий спасатель. Сначала удовлетворю потребности мужа, родителей, детей, а о себе вспомню только поздно вечером у холодильника.", type: "cinderella" },
        { text: "Я стремлюсь к признанию и совершенству. Ненавижу свои недостатки, откладываю настоящую жизнь на потом, когда «стану идеальной».", type: "star" }
      ]
    }
  ];

  const typeDetails = {
    leader: {
      title: "Психосоматический тип: ЛИДЕР (Борющаяся за правду)",
      physical: "Твердый, упругий верх тела, зажатая трапеция, сутулость «бойца», напряженный живот. Тело постоянно мобилизовано для сдерживания атак.",
      block: "Внутренний блок борьбы с запретами, недоверие людям, глубокий страх предательства и слабости. Переедание возникает как способ сброса законсервированного гнева и усталости.",
      whyFail: "Диеты и строгие правила расцениваются вашей психикой как очередное нападение и тирания. Тело сопротивляется правилам тренера еще жестче — от этого вес растет даже от одного яблока.",
      advice: "Для тебя разработан бонусный аудиоурок «Дух противоречия в теле». На курсе мы уберем напряжение контроля, и живот наконец-то сможет расслабиться и растаять сам.",
      color: "bg-brand-terracotta/10 border-brand-terracotta text-brand-dark"
    },
    cinderella: {
      title: "Психосоматический тип: ЗОЛУШКА (Спасательница-Жертва)",
      physical: "Дряблый живот, гипотонус мышц, провисание нижней трети тела, тяжелые бедра. Тело будто тает под моральным давлением долга.",
      block: "Синдром хорошей девочки, безотказность, попытка заслужить любовь через самопожертвование. Вечерние заедания — это единственная свободная минута для удовольствия эго.",
      whyFail: "Вы садитесь на очередную диету и воспринимаете ее как еще одну повинность! Так как вы заботитесь обо всем мире, а не о себе, ограничения забирают последние крохи энергии, провоцируя срывы.",
      advice: "Твой идеальный спутник на курсе — аудиопрактика «Худая ведьма: тайная цена стройности». Мы научим психику выставлять эгоистичные границы, и твой дряблый живот подтянется сам.",
      color: "bg-emerald-500/10 border-brand-teal text-brand-dark"
    },
    star: {
      title: "Психосоматический тип: ЗВЕЗДА (Нежная Перфекционистка)",
      physical: "Пропорциональное равномерное увеличение объемов, напряженная спина, идеальная осанка со скрытым спазмом шеи и поясницы. Тело «держит марку».",
      block: "Нервный перфекционизм, синдром отложенной жизни, страх скрытых слабостей и стыда. Еда выступает амортизатором между твоим идеальным образом и живой душой.",
      whyFail: "Стремление похудеть идеально приводит к катастрофическому уровню тревоги. При первой же ошибке (например, съеденная конфета) включается программа разрушения: «Я не идеальна, разрушить все навсегда!»",
      advice: "Твой ключ — нейронастрои на принятие слабостей. Мы снимем напряжение тревоги о том, что скажут люди, и объемы-доспехи растают.",
      color: "bg-brand-teal/10 border-brand-teal text-brand-dark"
    }
  };

  const handleAnswerSelect = (type: CharacterType) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate dominant character type
      const counts: Record<CharacterType, number> = { leader: 0, cinderella: 0, star: 0 };
      newAnswers.forEach(ans => {
        counts[ans] = (counts[ans] || 0) + 1;
      });

      let dominant: CharacterType = 'leader';
      if (counts.cinderella > counts[dominant]) {
        dominant = 'cinderella';
      }
      if (counts.star > counts[dominant]) {
        dominant = 'star';
      }

      setResultType(dominant);
      setQuizFinished(true);
      onQuizComplete(dominant, true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-brand-beige/50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs bg-brand-teal text-brand-beige px-3 py-1 rounded-full font-display-modern font-semibold uppercase tracking-wider mb-3 inline-block">
            Шаг за шагом
          </span>
          <h2 className="text-brand-dark font-serif font-bold text-3xl md:text-4xl text-center tracking-tight mb-4">
            Определи свой тип тела по характеру
          </h2>
          <p className="text-brand-dark/75 text-sm md:text-base">
            Пройди экспресс-диагностику за 60 секунд. Это поможет подобрать индивидуальные аудиопрактики и зафиксирует за тобой персональную 10% скидку на курс!
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-brand-teal/5 relative overflow-hidden">
          
          {/* Subtle decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-terracotta/5 rounded-full pointer-events-none" />

          {!quizFinished ? (
            <div>
              {/* Process indicator row */}
              <div className="flex justify-between items-center mb-6 text-xs text-brand-dark/50">
                <span className="font-mono tracking-wider">Вопрос {currentStep + 1} из {questions.length}</span>
                <span className="font-semibold text-brand-teal uppercase">Тест активен</span>
              </div>

              {/* Progress bar line */}
              <div className="w-full h-1.5 bg-brand-beige rounded-full mb-8 overflow-hidden">
                <div 
                  className="h-full bg-brand-terracotta transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question description */}
              <h3 className="text-brand-dark font-serif font-semibold text-lg md:text-xl lg:text-2xl leading-snug mb-8">
                {questions[currentStep].text}
              </h3>

              {/* Interactive choice elements */}
              <div className="space-y-4">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswerSelect(opt.type)}
                    className="w-full text-left p-4 md:p-5 rounded-2xl border border-brand-teal/10 hover:border-brand-terracotta hover:bg-brand-beige/25 transition-all duration-200 flex items-center gap-4 group focus:outline-none"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-beige text-brand-teal font-display-modern font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-brand-terracotta group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="font-sans text-sm md:text-base font-normal text-brand-dark/90 leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Quiz Result Panel (Marketing Trigger)
            <div className="animate-fade-in space-y-8">
              
              {/* Unlock announcement banner */}
              <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-sm md:text-base font-bold text-brand-dark">
                    Тест успешно завершен! Персональная скидка 10% зафиксирована
                  </h4>
                  <p className="text-xs text-brand-dark/75">
                    Тарифы на странице ниже автоматически стали более выгодными для вашего аккаунта.
                  </p>
                </div>
                <div className="md:ml-auto shrink-0 bg-emerald-500 text-white text-xs font-mono font-bold py-1 px-3 rounded-full uppercase animate-bounce">
                  -10% АКТИВНО
                </div>
              </div>

              {/* Type Analysis details */}
              <div className={`p-6 md:p-8 rounded-2xl border-2 ${typeDetails[resultType].color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-brand-terracotta animate-pulse" />
                  <h3 className="font-display-modern font-extrabold text-lg md:text-xl tracking-tight">
                    {typeDetails[resultType].title}
                  </h3>
                </div>

                <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-dark/90">
                  <p>
                    <strong className="text-brand-teal">Физическая структура тела:</strong> {typeDetails[resultType].physical}
                  </p>
                  <p>
                    <strong className="text-brand-teal">Душевный / психический блок:</strong> {typeDetails[resultType].block}
                  </p>
                  <div className="p-3.5 bg-white/50 border border-white rounded-xl text-brand-terracotta italic text-sm">
                    <strong className="text-brand-dark font-sans not-italic block mb-1">❌ Почему вам обычные диеты только вредят:</strong>
                    {typeDetails[resultType].whyFail}
                  </div>
                  <p className="text-brand-teal font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{typeDetails[resultType].advice}</span>
                  </p>
                </div>
              </div>

              {/* Bottom buttons cluster */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-4 border-t border-brand-teal/10">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-teal/70 hover:text-brand-terracotta focus:outline-none py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Пройти тест заново
                </button>

                <button
                  onClick={() => {
                    const priceElement = document.getElementById('pricing');
                    if (priceElement) {
                      priceElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto bg-brand-terracotta hover:bg-brand-terracotta/95 text-white font-display-modern font-bold py-4 px-8 rounded-full text-sm md:text-base tracking-tight text-center shadow-lg transition-all"
                >
                  Получить курс с бонусом для меня
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
