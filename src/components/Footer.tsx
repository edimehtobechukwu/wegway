import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#fcfbf7] pt-20 pb-8 relative border-t-8 border-[#eec643]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col gap-6">
            <div className="w-24 h-24 bg-[#1a4d2e] rounded-full flex items-center justify-center flex-col">
               <span className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[20px] leading-none">WEG</span>
               <span className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[20px] leading-none">WAY</span>
            </div>
            <p className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px] opacity-80 max-w-[200px]">
              Abenteuer, Natur und Spaß in Berlin, Grunewald. Dein Lieblingspark.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white hover:bg-[#eec643] hover:text-[#1a4d2e] transition-colors">
                  <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white hover:bg-[#eec643] hover:text-[#1a4d2e] transition-colors">
                  <Instagram size={18} />
               </a>
            </div>
          </div>

          {/* Column 2: Entdecken */}
          <div className="flex flex-col gap-6">
             <h4 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[18px] uppercase">
               Entdecken
             </h4>
             <ul className="flex flex-col gap-3 opacity-80">
                {["Der Park", "Aktivitäten", "Feiern", "Schulen", "Teambuilding"].map((item) => (
                   <li key={item}>
                      <a href="#" className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[14px] uppercase hover:text-[#e87c46] transition-colors">
                        {item}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Kontakt */}
          <div className="flex flex-col gap-6">
             <h4 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[18px] uppercase">
               Kontakt
             </h4>
             <ul className="flex flex-col gap-4 opacity-80">
                <li className="flex gap-3">
                   <Phone size={18} className="text-[#e87c46] mt-1" />
                   <div className="flex flex-col">
                      <span className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px]">
                        +49 30 12345678
                      </span>
                      <span className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[12px] opacity-60">
                        (Mobilfunknetz / Festnetz)
                      </span>
                   </div>
                </li>
                <li className="flex gap-3">
                   <Mail size={18} className="text-[#e87c46] mt-1" />
                   <a href="mailto:hallo@wegway.de" className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px]">
                     hallo@wegway.de
                   </a>
                </li>
                <li className="flex gap-3">
                   <MapPin size={18} className="text-[#e87c46] mt-1" />
                   <span className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px]">
                     Grunewald, 14193 Berlin
                   </span>
                </li>
             </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
             <h4 className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[18px] uppercase">
               Newsletter
             </h4>
             <p className="font-['Oswald',sans-serif] font-normal text-[#1a4d2e] text-[14px] opacity-80">
               Erhalte Neuigkeiten und exklusive Angebote.
             </p>
             <form className="flex">
                <input 
                  type="email" 
                  placeholder="Deine E-Mail" 
                  className="flex-1 h-[42px] px-4 border border-[#e5e7eb] rounded-l-md font-['Oswald',sans-serif] text-[14px] focus:outline-none focus:border-[#1a4d2e]"
                />
                <button 
                  type="submit"
                  className="h-[42px] px-4 bg-[#1a4d2e] text-white font-['Oswald',sans-serif] font-bold text-[16px] rounded-r-md hover:bg-[#143a22] transition-colors"
                >
                  OK
                </button>
             </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a4d2e]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-60">
           <p className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[12px] uppercase">
             © 2026 WEG WAY. HERR KELVIN EDIMEH.
           </p>
           <div className="flex gap-6">
              {["Datenschutz", "AGB", "Impressum"].map((item) => (
                 <a key={item} href="#" className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[12px] uppercase hover:text-[#e87c46] transition-colors">
                   {item}
                 </a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
}
