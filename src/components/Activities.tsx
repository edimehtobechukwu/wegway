import imgImageHupfburgenSpielplatz from "figma:asset/8b53a83afd61cad5d572346a0ca87a19f438eb8c.png";
import imgImageKletterwald from "figma:asset/ecd5a3ac10f5dfc4bf2cc0272fb0050c8dd115cb.png"; // Reusing the one from imports
import imgImageKlettern from "figma:asset/2343f739d21b70089f8531f6ed9d89a87f1ecda9.png";
import imgImagePaintball from "figma:asset/4a91cce0621134ede7d47bea84293b65d43906b8.png";
import imgImageTrampoline from "figma:asset/dffa930104097e824954fe9c47c2aa6fa5df4df2.png";
import { ArrowRight, Tag } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

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
  const activities = [
    {
      title: "Hüpfburgen & Spielplatz",
      description: "Entwickelt für Kinder von 3 bis 12 Jahren. Beinhaltet verschiedene Hüpfburgen, einen zweistöckigen Spielplatz, Rutschen, Kletterwände und ein Bällebad. Ein sicherer Ort, an dem Kinder frei spielen können.",
      image: imgImageHupfburgenSpielplatz,
      imageAlt: "Hüpfburgen",
      priceText: "Preise",
      details: "Kinder müssen immer Socken tragen. Die Aufsicht durch einen verantwortlichen Erwachsenen im umliegenden Bereich ist obligatorisch.",
      isImageRight: true
    },
    {
      title: "Kletterwald",
      description: "Der Kletterwald bietet Parcours zwischen Plattformen in den Baumkronen. Überwinde deine Grenzen mit Hängebrücken, Netzen und Tunneln.",
      image: imgImageKletterwald,
      imageAlt: "Kletterwald",
      priceText: "Preise",
      details: "Sicherheitsausrüstung (Gurt) inklusive. Einweisung obligatorisch. Parcours mit verschiedenen Schwierigkeitsgraden verfügbar.",
      isImageRight: false
    },
    {
      title: "Klettern",
      description: "Unser Kletterturm verfügt über 4 Routen mit unterschiedlichen Schwierigkeitsgraden. Teste deine Kraft und Beweglichkeit in völliger Sicherheit.",
      image: imgImageKlettern,
      imageAlt: "Klettern",
      priceText: "Preise",
      details: "Automatisches Sicherungssystem 'TruBlue'. Betreuung durch spezialisierte Monitore. Mindestgröße: 1,10m.",
      isImageRight: true
    },
    {
      title: "Paintball",
      description: "Ein Schlachtfeld mitten im Wald. Verstecke dich hinter Bäumen, entwickle Strategien mit deinem Team und eliminiere die Gegner mit Farbkugeln.",
      image: imgImagePaintball,
      imageAlt: "Paintball",
      priceText: "Preise",
      details: "Inklusive Markierer, Maske, Weste und 100 Bällen. Zusätzliche Nachfüllungen erhältlich. Mindestens 6 Teilnehmer.",
      isImageRight: false
    },
    {
      title: "Trampoline",
      description: "Springe, drehe dich und habe Spaß in unserer Trampolinzone. Eine Aktivität, um viel Energie loszuwerden!",
      image: imgImageTrampoline,
      imageAlt: "Trampoline",
      priceText: "Preise",
      details: "Sitzungen von 30 Minuten. Rutschfeste Socken sind Pflicht. Maximal 1 Person pro Trampolin.",
      isImageRight: true
    }
  ];

  return (
    <div className="bg-[#1a4d2e] pt-20 pb-0">
      <div className="text-center mb-16 px-4">
        <ScrollReveal>
          <p className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[14px] uppercase tracking-[1.4px] mb-2">
            Abenteuer
          </p>
          <h2 className="font-['Oswald',sans-serif] font-bold text-white text-[32px] md:text-[60px] leading-tight uppercase">
            Erlebe Spaß mit unseren
            <br />
            exklusiven Erlebnissen
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
