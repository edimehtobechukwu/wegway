import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Calendar, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Booking() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow pt-[120px] pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-[#1a4d2e] font-['Oswald',sans-serif] font-bold uppercase mb-8 hover:text-[#e87c46] transition-colors">
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#1a4d2e]/10">
            {/* Header */}
            <div className="bg-[#1a4d2e] p-8 text-center">
              <h1 className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[32px] md:text-[48px] uppercase">
                Buche dein Abenteuer
              </h1>
              <p className="font-['Oswald',sans-serif] font-normal text-white/80 text-[18px] mt-2">
                Sichere dir jetzt deine Tickets für WEG WAY
              </p>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12">
              <form className="flex flex-col gap-8">
                
                {/* Section 1: Activity */}
                <div className="flex flex-col gap-4">
                  <h3 className="flex items-center gap-2 font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[24px] uppercase border-b border-[#1a4d2e]/10 pb-2">
                    <CheckCircle className="text-[#e87c46]" size={24} />
                    1. Wähle eine Aktivität
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Kletterwald", "Hüpfburgen", "Klettern", "Paintball", "Trampoline"].map((activity) => (
                      <label key={activity} className="relative cursor-pointer group">
                        <input type="radio" name="activity" className="peer sr-only" />
                        <div className="p-4 border-2 border-[#e5e7eb] rounded-xl peer-checked:border-[#1a4d2e] peer-checked:bg-[#1a4d2e]/5 transition-all hover:border-[#1a4d2e]/50">
                          <span className="font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[16px] uppercase">
                            {activity}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 2: Date & Participants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="flex items-center gap-2 font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[24px] uppercase border-b border-[#1a4d2e]/10 pb-2">
                      <Calendar className="text-[#e87c46]" size={24} />
                      2. Datum & Uhrzeit
                    </h3>
                    <input 
                      type="date" 
                      className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif] focus:outline-none focus:border-[#1a4d2e] focus:ring-1 focus:ring-[#1a4d2e]"
                    />
                    <select className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif] focus:outline-none focus:border-[#1a4d2e] focus:ring-1 focus:ring-[#1a4d2e]">
                      <option value="">Uhrzeit wählen</option>
                      <option>10:00</option>
                      <option>12:00</option>
                      <option>14:00</option>
                      <option>16:00</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="flex items-center gap-2 font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[24px] uppercase border-b border-[#1a4d2e]/10 pb-2">
                      <Users className="text-[#e87c46]" size={24} />
                      3. Teilnehmer
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <label className="block font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[14px] uppercase mb-1">Erwachsene</label>
                        <input 
                          type="number" 
                          min="0" 
                          placeholder="0"
                          className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif] focus:outline-none focus:border-[#1a4d2e]"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[14px] uppercase mb-1">Kinder</label>
                        <input 
                          type="number" 
                          min="0" 
                          placeholder="0"
                          className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif] focus:outline-none focus:border-[#1a4d2e]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Personal Info */}
                <div className="flex flex-col gap-4">
                  <h3 className="flex items-center gap-2 font-['Oswald',sans-serif] font-bold text-[#1a4d2e] text-[24px] uppercase border-b border-[#1a4d2e]/10 pb-2">
                    4. Deine Daten
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Vorname" className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif]" />
                    <input type="text" placeholder="Nachname" className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif]" />
                    <input type="email" placeholder="E-Mail Adresse" className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif]" />
                    <input type="tel" placeholder="Telefonnummer" className="w-full p-4 border border-[#e5e7eb] rounded-xl font-['Oswald',sans-serif]" />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-4">
                  <button type="button" className="w-full bg-[#e87c46] text-white font-['Oswald',sans-serif] font-bold text-[20px] uppercase py-5 rounded-xl hover:bg-[#d66a35] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all">
                    Jetzt Buchen
                  </button>
                  <p className="text-center mt-4 text-sm text-gray-500 font-['Oswald',sans-serif]">
                    * Die Zahlung erfolgt vor Ort. Stornierung bis 24h vorher kostenlos.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
