import imgImageAdventureParkRopesCourse from "figma:asset/ecd5a3ac10f5dfc4bf2cc0272fb0050c8dd115cb.png";
import svgPaths from "../imports/svg-yoycaldmkr";
import { ScrollReveal } from "./ScrollReveal";
import { useTranslation } from "react-i18next";

export function Intro() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-[#e87c46] overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center text-white relative z-10">
          {/* Background decorative circle */}
          <div className="absolute top-[-64px] left-[-64px] w-[128px] h-[128px] bg-[#eec643] opacity-20 blur-[64px] rounded-full pointer-events-none" />

          <ScrollReveal>
            <div className="inline-flex items-center justify-center border-2 border-white/30 rounded-full px-4 py-1 w-fit mb-6">
              <span className="font-['Oswald',sans-serif] font-bold text-[12px] uppercase tracking-[1.2px]">
                {t('intro.badge')}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-['Oswald',sans-serif] font-bold text-[32px] md:text-[48px] leading-tight uppercase mb-6">
              {t('intro.title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-['Oswald',sans-serif] font-normal text-[18px] leading-relaxed opacity-90 mb-8 max-w-xl">
              {t('intro.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 flex items-start gap-4 max-w-xl backdrop-blur-sm">
              <div className="shrink-0 w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <path d={svgPaths.p1cce7000} stroke="#EEC643" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 24H20" stroke="#EEC643" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3333 29.3333H18.6667" stroke="#EEC643" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Oswald',sans-serif] font-medium text-[14px] leading-relaxed">
                {t('intro.feature_text')}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
          <img
            src={imgImageAdventureParkRopesCourse}
            alt="Adventure Park"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Orange strip overlay on the left edge of the image to blend */}
          <div className="absolute top-0 left-0 w-16 h-full bg-[#e87c46] hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
