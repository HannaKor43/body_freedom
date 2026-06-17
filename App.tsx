/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CharacterType } from './types';
import PromoHeader from './components/PromoHeader';
import HeroSection from './components/HeroSection';
import ProblemsBlock from './components/ProblemsBlock';
import CharacterTypesInfo from './components/CharacterTypesInfo';
import CharacterQuiz from './components/CharacterQuiz';
import ResultsSection from './components/ResultsSection';
import AboutExpert from './components/AboutExpert';
import PackagesBlock from './components/PackagesBlock';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { Compass, Gift, MessageCircle, AlertCircle } from 'lucide-react';

export default function App() {
  // Campaign marketing stats
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [dominantType, setDominantType] = useState<CharacterType | null>(null);

  // Billing states
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [selectedPackageId, setSelectedPackageId] = useState<'solo' | 'group' | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  // Callback matching when a user finishes the diagnostic test
  const handleQuizComplete = (type: CharacterType, rewardActive: boolean) => {
    setDominantType(type);
    setDiscountApplied(rewardActive);
    
    // Smoothly toast alert of activation or jump to results
    const element = document.getElementById('quiz');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Callback when purchasing a package
  const handleSelectPackage = (packageId: 'solo' | 'group', finalPrice: number) => {
    setSelectedPackageId(packageId);
    setCurrentPrice(finalPrice);
    setCheckoutOpen(true);
  };

  return (
    <div id="app-viewport" className="min-h-screen bg-brand-beige text-brand-dark overflow-x-hidden selection:bg-brand-terracotta selection:text-white">
      
      {/* 1. Header Promo Banner + Sticky Nav Anchor Menu */}
      <PromoHeader />

      {/* 2. Hero Interactive layout (A/B Title Tester + Audio podcaster file) */}
      <HeroSection />

      {/* 3. Emotional Problems Checklists & Stress Tension indicator gauge */}
      <ProblemsBlock />

      {/* 4. Anatomy of 3 Char Body Types (Responsive Tab Dashboard) */}
      <CharacterTypesInfo />

      {/* 5. Core 4-Step Character Diagnosis Questionnaire (Lead magnet generator) */}
      <CharacterQuiz onQuizComplete={handleQuizComplete} />

      {/* 6. Social testimonies boards featuring shorter highlights panel */}
      <ResultsSection />

      {/* 7. Alla Polishchuk credentials portfolio */}
      <AboutExpert />

      {/* Exit Intent Magnet Card widget: "Що відбувається після оплати: 3 кроки" - added directly above pricing */}
      <section className="bg-brand-beige border-y border-brand-teal/5 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full font-display-modern text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Простая активация
          </div>
          <h3 className="font-serif text-2xl md:text-3.5xl font-bold text-brand-dark">
            Простая процедура активации в 3 шага
          </h3>
          <p className="text-sm text-brand-dark/75 max-w-xl mx-auto leading-relaxed">
            Мы устраняем любые сомнения перед покупкой курса. Вот простая и надежная схема вашего сопровождения сразу после успешной оплаты:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            {[
              { step: "Шаг 1", title: "Доступ в кабинет", text: "Мгновенная ссылка в SMS и на почту перенаправит вас в закрытый интерактивный Telegram-бот программы." },
              { step: "Шаг 2", title: "Получение бонусов", text: "Бот сразу выдаст ваши полноценные аудио-подарки «Худая ведьма» и подробное описание вашего типа характера." },
              { step: "Шаг 3", title: "Живой старт", text: "В понедельник в 7:00 утра начнется первый официальный день курса. Все аудио и настрои остаются у вас навсегда." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-brand-teal/5 shadow-sm space-y-2">
                <span className="text-xs bg-brand-terracotta text-white font-mono font-bold py-0.5 px-2 rounded-full uppercase">
                  {item.step}
                </span>
                <h4 className="font-display-modern font-bold text-sm md:text-base text-brand-dark pt-1">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-brand-dark/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing comparisons block integrating active quiz-saving variables */}
      <PackagesBlock 
        discountApplied={discountApplied} 
        dominantType={dominantType}
        onSelectPackage={handleSelectPackage} 
      />

      {/* 9. Direct FAQ Accordion details */}
      <FaqSection />

      {/* 10. Localized footer details */}
      <Footer />

      {/* Interactive Triggerable Checkout Flow Modal */}
      <CheckoutModal 
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        packageId={selectedPackageId}
        price={currentPrice}
        dominantType={dominantType}
      />

      {/* Floating Auxiliary Scarcity Helper (Always visible to trigger test-engagement) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        
        {/* Floating Discount CTA Button */}
        <button
          onClick={() => {
            const elm = document.getElementById('quiz');
            if (elm) {
              elm.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-display-modern font-bold py-3.5 px-5 rounded-full shadow-2xl flex items-center gap-2 text-xs md:text-sm tracking-tight border-2 border-white hover:scale-105 transition-transform"
        >
          <Gift className="w-4.5 h-4.5 animate-bounce" />
          <span>Получить скидку 10%</span>
        </button>

      </div>

    </div>
  );
}
