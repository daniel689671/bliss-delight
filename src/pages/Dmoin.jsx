import React from "react";
import {
  ArrowLeft,
  Bell,
  Utensils,
  HelpCircle,
  Home,
  Receipt,
  Wallet,
  User,
} from "lucide-react";

const Dmoin = () => {
  return (
    <div>
      <div className="bg-[#fbf9f9] text-[#1b1c1c] antialiased min-h-screen flex flex-col font-sans relative max-w-md mx-auto pb-24">
        {/* Main Content */}
        <main className="flex-1 w-full px-6 py-12 flex flex-col items-center justify-center text-center">
          {/* Illustration Graphic */}
          <div className="relative mb-8">
            {/* <div className="w-48 h-48 rounded-full bg-[#f3efee] flex items-center justify-center">
              <Utensils className="w-24 h-24 text-[#8e8d8d]" />
            </div> */}
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-[#fde8e5] text-[#ba1a1a] rounded-full flex items-center justify-center shadow-md">
              <HelpCircle className="w-7 h-7 text-[#a04100]" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-[#1b1c1c] tracking-tight mb-4 max-w-xs leading-tight">
            Whoops! This Deployment is temporarily unavailable.
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm text-[#5f5e5e] leading-relaxed max-w-sm mb-8">
            Your free trial deployment has ended. To keep your website live and
            accessible to your customers, purchase a domain for the site.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dmoin;
