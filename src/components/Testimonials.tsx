import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  return (
    <div className="bg-[#1a4d2e] py-20 px-4 relative overflow-hidden">
       {/* Decorative light blob */}
       <div className="absolute top-0 left-[20%] w-[60%] h-[100%] bg-[#a8c66c] opacity-5 blur-[100px] pointer-events-none" />

       <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
             <ScrollReveal>
               <div className="bg-white/10 rounded-full px-6 py-2 flex items-center gap-3 backdrop-blur-sm w-fit mx-auto">
                  <div className="flex gap-1">
                     {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#eec643]" />
                     ))}
                  </div>
                  <span className="font-['Oswald',sans-serif] font-bold text-white text-[12px] uppercase">
                    Exzellent
                  </span>
               </div>
               
               <h2 className="font-['Oswald',sans-serif] font-bold text-white text-[32px] md:text-[48px] text-center uppercase mt-4">
                 Feedback auf TripAdvisor
               </h2>
             </ScrollReveal>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
             {/* Review 1 */}
             <ScrollReveal delay={0.1}>
               <div className="bg-[#153e25] rounded-2xl p-8 border border-white/5 relative h-full">
                  <Quote className="absolute top-8 right-8 text-[#eec643] opacity-20" size={48} />
                  
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-[#a8c66c] flex items-center justify-center">
                        <span className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[20px]">S</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="font-['Oswald',sans-serif] font-bold text-white text-[16px]">
                          Stefan M.
                        </span>
                        <div className="flex gap-1">
                           {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="w-3 h-3 rounded-full bg-[#eec643]" />
                           ))}
                        </div>
                     </div>
                  </div>

                  <p className="font-['Oswald',sans-serif] font-normal text-[#d1d5dc] text-[16px] leading-relaxed">
                    "Ein fantastischer Tag mit der Familie! Die Kinder liebten den Kletterwald und fühlten sich bei den Betreuern super sicher. Der Ort ist sehr schön und gepflegt. Wir kommen auf jeden Fall wieder!"
                  </p>
               </div>
             </ScrollReveal>

             {/* Review 2 */}
             <ScrollReveal delay={0.2}>
               <div className="bg-[#153e25] rounded-2xl p-8 border border-white/5 relative h-full">
                  <Quote className="absolute top-8 right-8 text-[#eec643] opacity-20" size={48} />
                  
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-[#e87c46] flex items-center justify-center">
                        <span className="font-['Oswald',sans-serif] font-bold text-white text-[20px]">P</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="font-['Oswald',sans-serif] font-bold text-white text-[16px]">
                          Petra R.
                        </span>
                        <div className="flex gap-1">
                           {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="w-3 h-3 rounded-full bg-[#eec643]" />
                           ))}
                        </div>
                     </div>
                  </div>

                  <p className="font-['Oswald',sans-serif] font-normal text-[#d1d5dc] text-[16px] leading-relaxed">
                    "Hervorragender Ort für Geburtstagsfeiern. Die Organisation war tadellos und die Kinder waren keine Sekunde still. Das Paintball war das Highlight des Tages für die Älteren."
                  </p>
               </div>
             </ScrollReveal>
          </div>
       </div>
    </div>
  );
}
