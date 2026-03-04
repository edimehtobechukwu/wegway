import imgImage from "figma:asset/e35a249b72e72f28fd1f6d6d854f0ff5d5e84495.png";
import imgImage1 from "figma:asset/b7ed87b5c67253b00f87b15309dfb169931aa60d.png";
import imgImage2 from "figma:asset/b94f578d8c02ae960ad3937684532e8e9c0a14bd.png";
import imgImageTrampoline from "figma:asset/dffa930104097e824954fe9c47c2aa6fa5df4df2.png";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Parties() {
  const steps = [
    {
      number: "01",
      title: "Wähle die Aktivitäten",
      text: "Wähle aus Kletterwald, Paintball, Klettern und vielem mehr."
    },
    {
      number: "02",
      title: "Definiere das Menü",
      text: "Wir haben Catering-Optionen für jeden Geschmack und Bedarf."
    },
    {
      number: "03",
      title: "Lade Freunde ein",
      text: "Wir haben Platz für kleine Gruppen und große Events."
    },
    {
      number: "04",
      title: "Hab Spaß!",
      text: "Unser Team kümmert sich um die Sicherheit und Animation."
    }
  ];

  return (
    <div className="bg-[#fcfbf7] py-20 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-[-128px] right-[-128px] w-[256px] h-[256px] bg-[#a8c66c] opacity-30 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Images (Grid) */}
        <div className="w-full lg:w-1/2 flex gap-4 h-[500px]">
          <div className="w-1/2 flex flex-col gap-4 pt-8">
             <ScrollReveal delay={0.1} className="h-full">
               <div className="h-[192px] rounded-2xl overflow-hidden shadow-lg mb-4">
                 <img src={imgImage} alt="Party 1" className="w-full h-full object-cover" />
               </div>
               <div className="h-[256px] rounded-2xl overflow-hidden shadow-lg">
                 <img src={imgImage1} alt="Party 2" className="w-full h-full object-cover" />
               </div>
             </ScrollReveal>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
             <ScrollReveal delay={0.2} className="h-full">
               <div className="h-[256px] rounded-2xl overflow-hidden shadow-lg mb-4">
                 <img src={imgImage2} alt="Party 3" className="w-full h-full object-cover" />
               </div>
               <div className="h-[192px] rounded-2xl overflow-hidden shadow-lg">
                 <img src={imgImageTrampoline} alt="Party 4" className="w-full h-full object-cover" />
               </div>
             </ScrollReveal>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
           <ScrollReveal>
             <div className="flex items-start gap-2 mb-2">
                <span className="bg-[#eec643] text-[#1a4d2e] font-['Oswald',sans-serif] font-bold text-[12px] uppercase px-2 py-1 rounded">
                  Gruppen
                </span>
             </div>
             
             <h2 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[32px] md:text-[48px] leading-tight uppercase">
               Bei <span className="text-[#e87c46]">WEG WAY</span> kannst du dein Universum neu erschaffen – für die perfekte Party!
             </h2>
           </ScrollReveal>

           <div className="flex flex-col gap-6">
             {steps.map((step, i) => (
               <ScrollReveal key={step.number} delay={0.1 * i}>
                 <div className="flex gap-4">
                   <span className="text-[#e87c46] font-['Oswald',sans-serif] font-bold text-[20px]">
                     {step.number}
                   </span>
                   <div className="flex flex-col">
                     <h4 className="text-[#1a4d2e] font-['Oswald',sans-serif] font-bold text-[14px] uppercase">
                       {step.title}
                     </h4>
                     <p className="text-[#6a7282] font-['Oswald',sans-serif] font-normal text-[14px]">
                       {step.text}
                     </p>
                   </div>
                 </div>
               </ScrollReveal>
             ))}
           </div>

           <ScrollReveal delay={0.4}>
             <button className="bg-[#1a4d2e] text-white px-8 py-3 rounded-lg font-['Oswald',sans-serif] font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#143a22] transition-colors w-full sm:w-fit mt-4">
               Party-Pakete ansehen
               <ArrowRight size={18} />
             </button>
           </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
