import React from "react";
import { Phone, MapPin } from "lucide-react";

import logo from "../assets/logo.png";
import whatsappLogo from "../assets/whataa.png";

import tiktokLogo from "../assets/tick.png";

export default function Footer() {
  return (
    <div>
      {/* =========================================================================
          FOOTER
      ========================================================================= */}
      <footer className="bg-[#260006] text-white pt-12 pb-8 border-t-4 border-[#E5A910] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            {/* =========================
                BRAND
            ========================== */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* LARGE LOGO */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 rounded-full border-2 border-[#F4C430] bg-[#260006] flex items-center justify-center p-0.5 shadow-lg">
                  <img
                    src={logo}
                    alt="Bliss Delight logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* BRAND NAME */}
                <div>
                  <span className="font-bold text-lg sm:text-xl text-white">
                    Bliss Delight
                  </span>

                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#F4C430] font-semibold mt-1">
                    Gourmet &amp; Event
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4 max-w-md">
                A premier culinary brand in the Bliss Delight food ecosystem,
                delivering unforgettable dining and event catering services
                across Lagos.
              </p>

              {/* WhatsApp Order */}
              <a
                href="https://wa.me/2348086022550"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-xs text-[#F4C430] font-bold hover:text-[#FDE68A] transition-colors"
              >
                <img
                  src={whatsappLogo}
                  alt="WhatsApp"
                  className="w-9 h-9 object-contain"
                />

                <span>Order Food on Bliss Delight Platform →</span>
              </a>

              {/* =========================
                  SOCIAL MEDIA
              ========================== */}
              <div className="flex items-center gap-3 mt-5">
                {/* TikTok */}
                <a
                  href="#tiktok"
                  aria-label="TikTok"
                  className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-[#F4C430] transition-all hover:scale-105"
                >
                  <img
                    src={tiktokLogo}
                    alt="TikTok"
                    className="w-15 h-16 object-contain rounded-full"
                  />
                </a>
              </div>
            </div>

            {/* =========================
                QUICK CONTACT
            ========================== */}
            <div>
              <h4 className="font-bold text-sm text-[#F4C430] mb-3">
                Direct Contact &amp; Ordering
              </h4>

              <ul className="text-xs text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span>08086022550</span>
                </li>

                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </li>

                <li className="flex items-center gap-2">
                  <span>Available 24/7 on WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* =========================
                OPERATING HOURS
            ========================== */}
            <div>
              <h4 className="font-bold text-sm text-[#F4C430] mb-3">
                Kitchen &amp; Event Hours
              </h4>

              <p className="text-xs text-gray-300 mb-1">
                Monday - Sunday: 8:00 AM - 10:00 PM
              </p>

              <p className="text-xs text-gray-400">
                Advance catering booking required for weekend galas.
              </p>
            </div>
          </div>

          {/* =========================
              COPYRIGHT
          ========================== */}
          <div className="mt-8 text-center text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} Bliss Delight — Gourmet &amp;
            Event. Powered by Bliss Delight Food Ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
}
