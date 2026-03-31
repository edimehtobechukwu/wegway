import imgImageAerialForest from "figma:asset/628cb00de3d8eaf721ebba1149ecc924447afa87.png";
import svgPaths from "../imports/svg-yoycaldmkr";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[990px] w-full overflow-hidden bg-[#1a4d2e]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={imgImageAerialForest}
          alt="Aerial Forest"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10 pt-[80px]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-['Oswald',sans-serif] font-bold text-white uppercase text-[40px] md:text-[64px] lg:text-[96px] leading-[1.1] tracking-[-1px] md:tracking-[-4.8px]"
          >
            {t('hero.title_part1')}
            <br />
            <span className="text-[#eec643]">{t('hero.title_part2')}</span>
            <br />
            {t('hero.title_part3')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="bg-[#e87c46] hover:bg-[#d66a35] text-white px-8 py-4 rounded-full font-['Oswald',sans-serif] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg">
              {t('hero.button_activities')}
              <ArrowDown size={20} />
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a4d2e] px-8 py-4 rounded-full font-['Oswald',sans-serif] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg">
              {t('hero.button_learn')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve SVGs */}
      <div className="absolute bottom-0 left-0 w-full h-[96px] z-20 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Layer 1 - Opacity 0.25 Orange */}
          <div className="absolute bottom-0 left-0 w-full h-[73px] opacity-25">
            <svg viewBox="0 0 1534 73" preserveAspectRatio="none" className="w-full h-full">
              <path d={svgPaths.p46d68c0} fill="#E87C46" />
            </svg>
          </div>
          {/* Layer 2 - Opacity 0.5 Green */}
          <div className="absolute bottom-0 left-0 w-full h-[88px] opacity-50">
            <svg viewBox="0 0 1534 88" preserveAspectRatio="none" className="w-full h-full">
              <path d={svgPaths.p3afae180} fill="#1A4D2E" />
            </svg>
          </div>
          {/* Layer 3 - Solid Orange */}
          <div className="absolute bottom-0 left-0 w-full h-[73px]">
            <svg viewBox="0 0 1534 73" preserveAspectRatio="none" className="w-full h-full">
              <path d={svgPaths.p3c794c00} fill="#E87C46" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
