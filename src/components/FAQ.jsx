import React, { useState } from 'react';
import { faqData } from '../data/faq';
import Reveal from './Reveal';

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-backgroundlight border-t border-primarymed/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primarydark uppercase tracking-widest bg-softcream/50 px-3 py-1 rounded-full">
              Bantuan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primarydark mt-4">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <Reveal key={index} direction="up" delay={100 + index * 100} duration={600}>
                <div className="bg-white rounded-2xl border border-primarymed/15 overflow-hidden shadow-sm hover-trigger transition-all">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left font-heading font-bold text-primarydark flex justify-between items-center focus:outline-none hover:text-primarymed transition-colors"
                  >
                    <span className="text-base sm:text-lg">{item.question}</span>
                    <i
                      className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 text-primarymed ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-charcoalgrey/80 leading-relaxed border-t border-gray-100 pt-3 animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
