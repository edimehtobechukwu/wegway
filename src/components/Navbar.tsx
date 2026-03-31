import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Use absolute paths with hash to ensure correct routing from any page
  // We will handle the scrolling behavior in App.tsx or a ScrollToHash component
  const getLink = (anchor: string) => `/${anchor}`;

  const navLinks = [
    { name: t('nav.start'), href: getLink("#") },
    { name: t('nav.park'), href: getLink("#park") },
    { name: t('nav.activities'), href: getLink("#activities") },
    { name: t('nav.parties'), href: getLink("#parties") },
    { name: t('nav.contact'), href: getLink("#contact") },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "DE" ? "EN" : "DE";
    i18n.changeLanguage(newLang);
  };

  const language = i18n.language || "DE";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#1a4d2e] text-white">
      <div className="max-w-[1534px] mx-auto px-4 sm:px-8 lg:px-[159px] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="border border-transparent">
            <p className="font-['Oswald',sans-serif] font-bold text-[#eec643] text-[24px] tracking-[-1.2px] uppercase">
              WEG WAY
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-['Oswald',sans-serif] font-bold text-[14px] tracking-[0.35px] uppercase hover:text-[#eec643] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Toggle Desktop */}
            <button
              onClick={toggleLanguage}
              className="ml-4 font-['Oswald',sans-serif] font-bold text-[14px] tracking-[0.35px] hover:text-[#eec643] transition-colors flex items-center gap-1"
            >
              <span className={language === "DE" ? "text-[#eec643]" : "text-white/70"}>DE</span>
              <span className="text-white/50">/</span>
              <span className={language === "EN" ? "text-[#eec643]" : "text-white/70"}>EN</span>
            </button>
          </div>
          <Link
            to="/booking"
            className="bg-[#eec643] text-[#1a4d2e] px-6 py-2 rounded-full font-['Oswald',sans-serif] font-bold text-[16px] tracking-[0.4px] uppercase hover:bg-white transition-colors whitespace-nowrap"
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language Toggle Mobile (Header) */}
          <button
            onClick={toggleLanguage}
            className="font-['Oswald',sans-serif] font-bold text-[14px] tracking-[0.35px] flex items-center gap-1"
          >
            <span className={language === "DE" ? "text-[#eec643]" : "text-white/70"}>DE</span>
            <span className="text-white/50">/</span>
            <span className={language === "EN" ? "text-[#eec643]" : "text-white/70"}>EN</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#eec643] focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a4d2e] px-4 pb-4 shadow-lg absolute w-full left-0 top-[80px]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-['Oswald',sans-serif] font-bold text-[14px] tracking-[0.35px] uppercase hover:text-[#eec643] block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#eec643] text-[#1a4d2e] px-6 py-2 rounded-full font-['Oswald',sans-serif] font-bold text-[16px] tracking-[0.4px] uppercase text-center w-full block hover:bg-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.book')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
