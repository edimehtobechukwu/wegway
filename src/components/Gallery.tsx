import imgImage1 from "figma:asset/b7ed87b5c67253b00f87b15309dfb169931aa60d.png";
import imgImage2 from "figma:asset/b94f578d8c02ae960ad3937684532e8e9c0a14bd.png";
import { ScrollReveal } from "./ScrollReveal";

export function Gallery() {
  return (
    <div className="bg-[#1a4d2e] py-20 px-4">
       <div className="max-w-[1502px] mx-auto flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center">
             <ScrollReveal>
               <p className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[14px] uppercase tracking-[1.4px] mb-2">
                 Galerie
               </p>
               <h2 className="font-['Oswald',sans-serif] font-bold text-white text-[32px] md:text-[48px] leading-tight uppercase">
                 Momente der Freude
                 <br />
                 zum gemeinsamen Feiern!
               </h2>
             </ScrollReveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
             {/* Card 1: Schulen */}
             <ScrollReveal delay={0.1} className="w-full">
               <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                  <img 
                    src={imgImage2} 
                    alt="Schulen" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                     <h3 className="font-['Oswald',sans-serif] font-bold text-white text-[30px] uppercase tracking-wide">
                       Schulen
                     </h3>
                  </div>
               </div>
             </ScrollReveal>

             {/* Card 2: Firmen & Gruppen */}
             <ScrollReveal delay={0.2} className="w-full">
               <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                  <img 
                    src={imgImage1} 
                    alt="Firmen & Gruppen" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                     <h3 className="font-['Oswald',sans-serif] font-bold text-white text-[30px] uppercase tracking-wide">
                       Firmen & Gruppen
                     </h3>
                  </div>
               </div>
             </ScrollReveal>
          </div>
       </div>
    </div>
  );
}
