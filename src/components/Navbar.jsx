import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import whatsappLogo from "../assets/whataa.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* =========================
          TOP BANNER
      ========================== */}
      <aside
        aria-label="Order Banner"
        className="bg-[#260006] text-[#F4C430] text-xs py-2 px-3 sm:px-4 border-b border-[#E5A910]/20"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 sm:gap-2">
          {/* Banner Message */}
          <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 flex-shrink-0 rounded-full bg-[#FF6B00] animate-ping"></span>

            <span className="font-medium tracking-wide text-[10px] sm:text-xs">
              A Proud Member of the Bliss Delight Food Ecosystem
            </span>
          </div>

          {/* Contact Information */}
          <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6 text-[10px] sm:text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#F4C430]" />
              Lagos, Nigeria
            </span>

            <a
              href="tel:08086022550"
              className="font-bold text-white hover:text-[#FDE68A] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>08086022550</span>
            </a>
          </div>
        </div>
      </aside>

      {/* =========================
          MAIN NAVIGATION
      ========================== */}
      <header className="sticky top-0 z-50 bg-[#3D000B]/95 backdrop-blur-md border-b border-[#C88A06]/30 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-20 py-2 flex items-center justify-between gap-3">
          {/* =========================
              LOGO
          ========================== */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none min-w-0"
          >
            {/* LARGE LOGO */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 rounded-full border-2 border-[#F4C430] bg-[#260006] flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Bliss Delight logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* BRAND TEXT */}
            <div className="min-w-0">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-[#FDE68A] transition-colors whitespace-nowrap">
                  Bliss Delight
                </span>
              </div>

              <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#F4C430] font-semibold whitespace-nowrap">
                Gourmet &amp; Event
              </p>
            </div>
          </a>

          {/* =========================
              DESKTOP NAV LINKS
          ========================== */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-xs xl:text-sm font-medium">
            <a
              href="#specialties"
              className="text-gray-200 hover:text-[#F4C430] transition-colors whitespace-nowrap"
            >
              Signature Dishes
            </a>

            <a
              href="#services"
              className="text-gray-200 hover:text-[#F4C430] transition-colors whitespace-nowrap"
            >
              Event Services
            </a>

            <a
              href="#menu-highlights"
              className="text-gray-200 hover:text-[#F4C430] transition-colors whitespace-nowrap"
            >
              Menu Catalog
            </a>

            <a
              href="#packages"
              className="text-gray-200 hover:text-[#F4C430] transition-colors whitespace-nowrap"
            >
              Catering Packages
            </a>

            <a
              href="#about"
              className="text-gray-200 hover:text-[#F4C430] transition-colors whitespace-nowrap"
            >
              Why Us
            </a>
          </nav>

          {/* =========================
              DESKTOP ACTION BUTTONS
          ========================== */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <a
              href="https://wa.me/2348086022550"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-3 text-sm font-bold text-[#260006] bg-[#F4C430] hover:bg-[#FDE68A] px-3 lg:px-4 rounded-full shadow-md transition-all hover:scale-105"
            >
              {/* Large WhatsApp Image */}
              <div className="w-9 h-9 lg:w-11 lg:h-11 shrink-0 flex items-center justify-center">
                <img
                  src={whatsappLogo}
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="whitespace-nowrap">Quick WhatsApp</span>
            </a>

            <a
              href="#catering-inquiry"
              className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs lg:text-sm px-4 lg:px-5 py-2.5 rounded-full shadow-lg shadow-[#FF6B00]/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Catering
            </a>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full border border-[#F4C430]/40 bg-[#260006]/60 text-[#F4C430] hover:bg-[#F4C430] hover:text-[#260006] transition-all"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#C88A06]/20 bg-[#260006]/95 px-4 py-5">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col">
              <a
                href="#specialties"
                onClick={closeMobileMenu}
                className="py-3.5 border-b border-white/10 text-gray-200 hover:text-[#F4C430] transition-colors"
              >
                Signature Dishes
              </a>

              <a
                href="#services"
                onClick={closeMobileMenu}
                className="py-3.5 border-b border-white/10 text-gray-200 hover:text-[#F4C430] transition-colors"
              >
                Event Services
              </a>

              <a
                href="#menu-highlights"
                onClick={closeMobileMenu}
                className="py-3.5 border-b border-white/10 text-gray-200 hover:text-[#F4C430] transition-colors"
              >
                Menu Catalog
              </a>

              <a
                href="#packages"
                onClick={closeMobileMenu}
                className="py-3.5 border-b border-white/10 text-gray-200 hover:text-[#F4C430] transition-colors"
              >
                Catering Packages
              </a>

              <a
                href="#about"
                onClick={closeMobileMenu}
                className="py-3.5 text-gray-200 hover:text-[#F4C430] transition-colors"
              >
                Why Us
              </a>
            </nav>

         
            {/* Mobile Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <a
                href="https://wa.me/2348086022550"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="flex-1 inline-flex items-center justify-center gap-3 text-sm font-bold text-[#260006] bg-[#F4C430] hover:bg-[#FDE68A] px-3 py-2 rounded-full shadow-md transition-all hover:scale-[1.02]"
              >
                {/* Large WhatsApp Image */}
                <div className="w-15 h-12 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
                  <img
                    src={whatsappLogo}
                    alt="WhatsApp"
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="whitespace-nowrap">Quick WhatsApp</span>
              </a>

              <a
                href="#catering-inquiry"
                onClick={closeMobileMenu}
                className="flex-1 inline-flex items-center justify-center bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-sm px-4 py-3 rounded-full transition-all"
              >
                Book Catering
              </a>
            </div>

            {/* Mobile Location */}
            <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-[#F4C430]" />
              Lagos, Nigeria
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
