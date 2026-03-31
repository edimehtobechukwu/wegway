import imgImageHupfburgenSpielplatz from "figma:asset/8b53a83afd61cad5d572346a0ca87a19f438eb8c.png";
import imgImageKletterwald from "figma:asset/ecd5a3ac10f5dfc4bf2cc0272fb0050c8dd115cb.png"; // Reusing the one from imports
import imgImageKlettern from "figma:asset/2343f739d21b70089f8531f6ed9d89a87f1ecda9.png";
import imgImagePaintball from "figma:asset/4a91cce0621134ede7d47bea84293b65d43906b8.png";
import imgImageTrampoline from "figma:asset/dffa930104097e824954fe9c47c2aa6fa5df4df2.png";
import { ArrowRight, Tag } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useTranslation } from "react-i18next";

interface ActivityProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  priceText: string;
  details: string;
  isImageRight?: boolean;
}

function ActivityItem({ title, description, image, imageAlt, priceText, details, isImageRight }: ActivityProps) {
  return (
    <ScrollReveal>
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        {/* Mobile: Image always first */}
        <div className={`w-full lg:w-1/2 relative min-h-[300px] lg:min-h-auto ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className={`w-full lg:w-1/2 bg-[#fcfbf7] p-8 md:p-12 lg:p-16 flex flex-col justify-center ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[24px] md:text-[30px] uppercase mb-4">
              {title}
            </h3>
            <p className="font-['Oswald',sans-serif] font-normal text-[#4a5565] text-[16px] leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="h-[40px] px-4 border-2 border-[#1a4d2e] rounded text-[#1a4d2e] font-['Oswald',sans-serif] font-bold text-[14px] uppercase hover:bg-[#1a4d2e] hover:text-white transition-colors">
                Preise
              </button>
              <button className="h-[40px] px-6 bg-[#1a4d2e] rounded text-white font-['Oswald',sans-serif] font-bold text-[14px] uppercase flex items-center gap-2 hover:bg-[#143a22] transition-colors">
                Buchen
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-[#e87c46] rounded-lg p-6 relative mt-4">
              <div className="absolute top-[-12px] left-[24px] bg-[#eec643] px-3 py-1 rounded shadow-sm">
                <span className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[12px] uppercase">
                  Wie es funktioniert
                </span>
              </div>
              <p className="font-['Oswald',sans-serif] font-medium text-white text-[14px] leading-relaxed opacity-90">
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Activities() {
  const { t } = useTranslation();

  const activities = [
    {
      title: t('activities.items.0.title'),
      description: t('activities.items.0.description'),
      image: imgImageHupfburgenSpielplatz,
      imageAlt: "Hüpfburgen",
      priceText: t('activities.button_prices'),
      details: t('activities.items.0.details'),
      howItWorksLabel: t('activities.how_it_works'),
      bookLabel: t('activities.button_book'),
      isImageRight: true
    },
    {
      title: t('activities.items.1.title'),
      description: t('activities.items.1.description'),
      image: imgImageKletterwald,
      imageAlt: "Kletterwald",
      priceText: t('activities.button_prices'),
      details: t('activities.items.1.details'),
      howItWorksLabel: t('activities.how_it_works'),
      bookLabel: t('activities.button_book'),
      isImageRight: false
    },
    {
      title: t('activities.items.2.title'),
      description: t('activities.items.2.description'),
      image: imgImageKlettern,
      imageAlt: "Klettern",
      priceText: t('activities.button_prices'),
      details: t('activities.items.2.details'),
      howItWorksLabel: t('activities.how_it_works'),
      bookLabel: t('activities.button_book'),
      isImageRight: true
    },
    {
      title: t('activities.items.3.title'),
      description: t('activities.items.3.description'),
      image: imgImagePaintball,
      imageAlt: "Paintball",
      priceText: t('activities.button_prices'),
      details: t('activities.items.3.details'),
      howItWorksLabel: t('activities.how_it_works'),
      bookLabel: t('activities.button_book'),
      isImageRight: false
    },
    {
      title: t('activities.items.4.title'),
      description: t('activities.items.4.description'),
      image: imgImageTrampoline,
      imageAlt: "Trampoline",
      priceText: t('activities.button_prices'),
      details: t('activities.items.4.details'),
      howItWorksLabel: t('activities.how_it_works'),
      bookLabel: t('activities.button_book'),
      isImageRight: true
    }
  ];

  return (
    <div className="bg-[#1a4d2e] pt-20 pb-0">
      <div className="text-center mb-16 px-4">
        <ScrollReveal>
          <p className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[14px] uppercase tracking-[1.4px] mb-2">
            {t('activities.section_subtitle')}
          </p>
          <h2 className="font-['Oswald',sans-serif] font-bold text-white text-[32px] md:text-[60px] leading-tight uppercase">
            {t('activities.section_title_part1')}
            <br />
            {t('activities.section_title_part2')}
          </h2>
        </ScrollReveal>
      </div>

      <div className="flex flex-col">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}
