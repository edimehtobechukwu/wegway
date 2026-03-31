import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import imgImageFaqSupport from "figma:asset/4f2b9af3d171f74c251e5dedfccd2647a48b9c66.png";
import { ScrollReveal } from "./ScrollReveal";
import { useTranslation } from "react-i18next";

export function Faq() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.faqs.0.question'),
      answer: t('faq.faqs.0.answer')
    },
    {
      question: t('faq.faqs.1.question'),
      answer: t('faq.faqs.1.answer')
    },
    {
      question: t('faq.faqs.2.question'),
      answer: t('faq.faqs.2.answer')
    },
    {
      question: t('faq.faqs.3.question'),
      answer: t('faq.faqs.3.answer')
    },
    {
      question: t('faq.faqs.4.question'),
      answer: t('faq.faqs.4.answer')
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#eec643] py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column: Image & Contact Info */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 relative">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden bg-[#1a4d2e] aspect-[2/3] shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={imgImageFaqSupport}
                alt="Support Team"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded shadow-sm">
                <span className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[12px] uppercase">
                  {t('faq.badge')}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <h3 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[30px] uppercase leading-tight">
                {t('faq.title_part1')}
                <br />
                {t('faq.title_part2')}
              </h3>
              <div>
                <p className="font-['Oswald',sans-serif] font-medium text-[#1a4d2e] text-[14px] opacity-80">
                  {t('faq.subtitle')}
                </p>
                <a href="#" className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[14px] underline decoration-2 underline-offset-4 hover:opacity-80">
                  {t('faq.contact_link')}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: FAQ List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4 pt-8">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={0.1 * index} className="border-b border-[#1a4d2e]/20 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[18px] uppercase group-hover:opacity-80">
                  {faq.question}
                </span>
                <div className="text-[#1a4d2e]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px] opacity-80 pr-8 pb-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
