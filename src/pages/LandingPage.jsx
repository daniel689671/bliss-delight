import React, { useState } from "react";
import {
  Phone,
  MapPin,
  MessageSquare,
  Check,
  ChevronRight,
  Star,
  Calendar,
  Utensils,
  GlassWater,
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  ArrowRight,
  Send,
} from "lucide-react";
import logo from "../assets/logo.png";
import jollofChicken from "../assets/jollofChicken.png";
import creamyPasta from "../assets/creamyPasta.png";
import smoothies from "../assets/smoothies.png";
import smallChops from "../assets/smallChops.png";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    guestCount: "",
    eventType: "Wedding / Reception",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#FFFDF9] text-gray-800 antialiased overflow-x-hidden min-h-screen text-left">
      {/* =========================================================================
          1. TOP NOTIFICATION BAR
         ========================================================================= */}

      {/* =========================================================================
          3. HERO SECTION
         ========================================================================= */}
      <section
        id="home"
        className="relative bg-[#260006] text-white py-16 lg:py-20 border-b-4 border-[#E5A910]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D000B] border border-[#F4C430]/40 text-[#F4C430] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse"></span>
                Bliss Delight Premier Luxury Dining &amp; Event Experience
              </div>

              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl text-[#F4C430]">
                  Taste that blissfully delights ♡
                </p>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
                  Bliss <span className="text-[#F4C430]">Delight</span>
                </h1>
                <p className="text-sm sm:text-lg text-[#FDE68A] tracking-[0.3em] uppercase pt-1">
                  — Gourmet &amp; Event —
                </p>
              </div>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                "We don't just serve food, We create unforgettable moments."
                Bringing together regal Nigerian jollof feasts, gourmet creamy
                pasta, artisan small chops, and bespoke event catering in Lagos.
              </p>

              {/* Signature Promise Card */}
              <div className="p-3.5 rounded-2xl bg-[#3D000B]/80 border border-[#E5A910]/40 max-w-lg mx-auto lg:mx-0 flex items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00] text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[#F4C430] font-bold tracking-wider">
                      Our Signature Promise
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Bliss in every bite, memories in every moment ♡
                    </p>
                  </div>
                </div>
                <span className="text-xl">✨</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/2348086022550"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Order Food
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#catering-inquiry"
                  className="w-full sm:w-auto inline-flex justify-center items-center border-2 border-[#F4C430] hover:border-white text-[#FDE68A] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
                >
                  Request Catering Quote
                </a>
              </div>

              {/* Trust Badges Line */}
              <div className="pt-4 border-t border-[#C88A06]/20 grid grid-cols-3 gap-2 text-center text-xs text-amber-200">
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#FF6B00]" /> Fresh
                  Ingredients
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#FF6B00]" /> Hygienic Prep
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#FF6B00]" /> On-Time
                  Delivery
                </div>
              </div>
            </div>

            {/* Right Showcase Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden border-4 border-[#F4C430] shadow-2xl bg-[#3D000B]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGoPbjpRoCwdS0pj3e8B-S7LOIERt_FFMn34phsT0vuQtQ_Q4Z5nY5A5XCqdsgMekyLEI1Tv91MOfb-NFPctHJaVcUOdR8QLvRRUooyWkd5ZBG8xd-s_arQeID7JgYK8uS8lFJUXe6L60uefP4tvJs0EtcP23BOhU4D21FZa5XE3kg_1MVPOfUfztd2wQxRTUbYYI7kJESk_4O0uRNJf5AhLtT876y1ZcPQ36qQLv3xnYiMteFiIF1"
                  alt="Luxurious Nigerian food spread"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-center bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-[#F4C430]/40">
                  <div>
                    <p className="text-[#F4C430] font-bold text-sm">
                      Bliss Delight Popcorn &amp; Small Chops
                    </p>
                    <p className="text-xs text-gray-300">
                      Crunchy, Delicious, Irresistible! ♡
                    </p>
                  </div>
                  <a
                    href="tel:08086022550"
                    className="mt-2 sm:mt-0 text-xs bg-[#F4C430] text-[#260006] px-4 py-1.5 rounded-full font-black hover:bg-white transition-colors"
                  >
                    Call 08086022550
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE VALUE PILLARS BAR
         ========================================================================= */}
      <section className="bg-[#1c0004] text-[#F4C430] py-6 border-b border-[#F4C430]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#260006] border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430]">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-white">
                Great Food
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#260006] border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-white">
                Memorable Experiences
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#260006] border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430]">
                <Star className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-white">
                Professional Service
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#260006] border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-white">
                Quality You Can Trust
              </span>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#260006] border border-[#F4C430]/40 flex items-center justify-center text-[#F4C430]">
                <Heart className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-wider text-white">
                Made With Passion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SPECIALTIES FROM THE KITCHEN
         ========================================================================= */}
      <section id="specialties" className="py-16 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF6B00] uppercase font-bold tracking-widest text-xs">
              Featured Delights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#260006] mt-1">
              Specialties from the Kitchen
            </h2>
            <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-3 mb-3"></div>
            <p className="text-gray-600 text-sm">
              The crown favorites highlighted on our master culinary menu,
              perfected for parties, corporate luncheons, and intimate
              gatherings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="bg-amber-50/60 text-center border-b border-amber-100">
                  <div className="w-full h-48 sm:h-52 overflow-hidden">
                    <img
                      src={jollofChicken}
                      alt="Party Jollof and Chicken"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#260006] mb-2">
                    Party Jollof &amp; Chicken
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Authentic firewood-smoked Nigerian Jollof rice prepared with
                    rich plum tomatoes, aromatic herbs, and succulent
                    flame-grilled seasoned chicken.
                  </p>

                  <p className="text-[11px] text-[#260006] font-semibold">
                    ✦ Served with golden fried plantains
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="https://wa.me/2348086022550"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block bg-[#3D000B] hover:bg-[#FF6B00] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Order Jollof Pack
                </a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="bg-amber-50/60 text-center border-b border-amber-100">
                  <div className="w-full h-48 sm:h-52 overflow-hidden">
                    <img
                      src={smallChops}
                      alt="Creamy Gourmet Pasta"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#260006] mb-2">
                    Creamy Gourmet Pasta
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Al dente penne stir-fried in rich spiced garlic cream, bell
                    pepper confetti, and generous slices of charred chicken
                    breast or king prawns.
                  </p>

                  <p className="text-[11px] text-[#260006] font-semibold">
                    ✦ Made fresh upon every order
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="https://wa.me/2348086022550"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block bg-[#3D000B] hover:bg-[#FF6B00] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Order Pasta Tray
                </a>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="bg-amber-50/60 text-center border-b border-amber-100">
                  <div className="w-full h-48 sm:h-52 overflow-hidden">
                    <img
                      src={creamyPasta}
                      alt="Artisan Smoothies and Juices"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#260006] mb-2">
                    Artisan Smoothies &amp; Juices
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Signature chilled cup beverages: spicy ginger zobo
                    infusions, mango berry puree, pineapple coconut blends, and
                    strawberry cream coolers.
                  </p>

                  <p className="text-[11px] text-[#260006] font-semibold">
                    ✦ 100% real fruit, no artificial syrup
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="https://wa.me/2348086022550"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block bg-[#3D000B] hover:bg-[#FF6B00] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Order Drink Packs
                </a>
              </div>
            </article>
            {/* Card 4 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="bg-amber-50/60 text-center border-b border-amber-100">
                  <div className="w-full h-48 sm:h-52 overflow-hidden">
                    <img
                      src={smoothies}
                      alt="Bliss Popcorn and Small Chops"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#260006] mb-2">
                    Bliss Popcorn &amp; Chops
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Buttery sweet crunch popcorn buckets, crisp samosas, spicy
                    spring rolls, peppered puff-puff, and skewered BBQ chicken
                    meatballs.
                  </p>

                  <p className="text-[11px] text-[#260006] font-semibold">
                    ✦ Event buckets &amp; snack packs
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="https://wa.me/2348086022550"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block bg-[#3D000B] hover:bg-[#FF6B00] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Order Chops &amp; Popcorn
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR SERVICES SECTION
         ========================================================================= */}
      <section id="services" className="py-16 bg-[#260006] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#F4C430] uppercase tracking-widest text-xs font-bold">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-3 mb-3"></div>
            <p className="text-gray-300 text-sm">
              From corporate gala dinners to grand wedding celebrations, Bliss
              Delight orchestrates the complete feast experience across Lagos
              State.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1: Gourmet Cuisines */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EkWS6Lt6c6CML6boOrLRQbdOCg6E-znZHfFGZxFIGFe6-gY4UlII82uJXtc8ht2OMd-6XSlb3a0nnilKdQqBwQU8Ecn8H4qWRJTQ0xPfiKbpKbwWINgI-rDZYFrAtOuZT1KX7JLNyK0EE6hKFzmjQjFbfEnDa1AF5WzZRfeUeMz3xjk08F1JYfkUUbKmOTnZzhePsDRXMs83Y4TLcjcZO7z0wGn1jxt80l1u5wqVwaevHArdVIi4"
                  alt="Gourmet Cuisines"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Gourmet Cuisines
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Curated African and Continental banquets: from native soups
                  and pounded yam to grilled Atlantic croaker, roasted spiced
                  lamb, and herb-roasted potatoes.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Buffet &amp; fine table service setups</li>
                  <li>Customized dietary menus</li>
                </ul>
              </div>
            </div>

            {/* Service 2: Event Planning */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOy255yqDk3CHdMUylCuyWPKNnj28fAseuHYjUomuR4c2JuCJ7o701vW0046MZxOuo478sbPb53s2NgTa2BmLnyHtocitTa7Zzy-ugtR8pwB4OjdwON2plkn1DWr70RRQadWr7_LvrmIEaNwxBF1PqDogT4EMG6jIUsdD31b1msKbJo-ANwg1GiwDg_5E6_HeUteevMu38avz8aXYezYJvA-kG3iwo17ozaxEHXE_xOYSa7ornwVmu"
                  alt="Event Planning and Management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Event Planning &amp; Management
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Full-cycle coordination ensuring stress-free execution. We
                  handle vendor supervision, timeline tracking, and floor
                  hospitality from inception to clean-up.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Birthdays, anniversaries &amp; corporate galas</li>
                  <li>Dedicated event day coordinator</li>
                </ul>
              </div>
            </div>

            {/* Service 3: Small Chops and Dessert */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQAQfNeYwV9nwoF52iApY7qFXfitZa8eX_kjEKdAWXyI1i9T9R1_qPVq2onVxdqnhEHu_rDJ6X27TqBcGzwPsQgK2RXlTTJSJ240514YDHnHU9t28NinJw_PuoSiV4V8PA4eUsqtEDOwhJqetuyH78Txdxg0XIMN1atBCiRqKkGjPoQ2EykeSffJ87kMm-0LNNtpZx_ucXCDz-pfY50wy-h4nz02v6JtDfn4v9cW-eRW8DvY5vGfK4"
                  alt="Small Chops and Dessert"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Small Chops and Dessert
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Signature finger-food delights, glazed mini cupcakes, drip
                  celebration cakes, chocolate ganache towers, gourmet popcorn
                  carts, and fresh fruit bowls.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Live popcorn station hire</li>
                  <li>Customized dessert tables</li>
                </ul>
              </div>
            </div>

            {/* Service 4: Beverages */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyUxzyKeFU2COBon9JxubhUB-ZmJ5Ngf98xV5k0MHQRr-Yh22smSzY9YwK4Ca_oAFEnUuU5RIqscQVAxZqkzddIq2YgmLzZm4mP_gIKB6ENVuJH24YYj-FTZ2YQidygPpT9-2zUwbsOFYvEzxgPEPmeY8CqLUoxyc-aGkvbQB9O4DpVCVY1UWxZBeFVUZ_lzI6TpgYAQeAB3-y-OrlGgJHLZbLJoUDkuky24GCZFCw-2ZrUEKynzb0"
                  alt="Beverages and Drinks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Beverages (Drinks)
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Artisanal drink bars staffed by skilled mixologists. Fresh
                  cold-pressed fruit cocktails, signature mocktails, chilled
                  smoothies, and bottled artisan zobo.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Mobile drink service stations</li>
                  <li>Temperature controlled storage coolers</li>
                </ul>
              </div>
            </div>

            {/* Service 5: Outdoor Catering */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwLTYcBpLe2bSfGMPb0Pd0E6cYVlJU4t0X2cWP6VRcecxGD_4Zawo94V0D-j-pHmXGF-stZasm38TQn4e1e49EZGrLuOGfRNoGowYtk99gdzITUYnFO7CjfqCbQoLQavqh9KUdF5_N6Hm_gIVuQ5wARSHd8fRziNlR0EIi8Z6HzcyDH3kn9koAI6oAHV7BohUjQTK4R5gIVFocIS9VWtQxmJrs7sRsw4tX8uyxAf4E-fTtxMsH7cWi"
                  alt="Outdoor Catering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Outdoor Catering
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Heavy-duty mobile kitchen logistics and professional
                  chafing-dish banquet setups for up to 2,000 guests at garden
                  estates, marquee halls, or private villas.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Polished uniform serving staff</li>
                  <li>On-time hot food guarantee</li>
                </ul>
              </div>
            </div>

            {/* Service 6: Decoration */}
            <div className="bg-[#3D000B]/80 border border-[#F4C430]/30 rounded-2xl overflow-hidden hover:border-[#F4C430] transition-all duration-300 group flex flex-col">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT5rri_oq1UMehquD9dP2KZITHNdzFZBR6WlNrmpPv2OJM0dtuA5PXWx6bU1m3_430Ty_nIKTABceOJUQ76HnIyGnh13zDplOTiYEo97mN9aoNn3mx-W1FXWc4R30W4r2eA1VPtxEbPRywnL8aJhYfCV9dSqVHJpFgSoWWSy3XSwP7BExwXCZtgGmOAnswglpCjhE_2q7geupwcO0g71gHaWetm046L5UIDSA7czmP5zOV391CdU41"
                  alt="Event Decoration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[#FDE68A] mb-3">
                  Decoration
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Atmospheric venue transformations: floral backdrops, Chiavari
                  seating styling, mood lighting, bespoke table centerpieces,
                  and regal gold-accent stage setups.
                </p>

                <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                  <li>Customized thematic color matching</li>
                  <li>Photobooth and red carpet staging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. MENU CATALOG HIGHLIGHTS
         ========================================================================= */}
      <section id="menu-highlights" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#FF6B00] uppercase font-bold tracking-widest text-xs">
                A-La-Carte &amp; Meal Trays
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#260006] mt-1">
                Gourmet Catalog
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Direct from Bliss Delight on Wagba platform for same-day
                delivery or advance event ordering.
              </p>
            </div>
            <div>
              <a
                href="https://wa.me/2348086022550"
                className="inline-flex items-center gap-1.5 text-[#3D000B] hover:text-[#FF6B00] font-bold text-xs sm:text-sm border-b-2 border-[#3D000B] hover:border-[#FF6B00] pb-0.5 transition-all"
              >
                View All
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Bliss Smoky Party Jollof Combo
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">₦5,500</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Smoky long grain rice, grilled quarter chicken, sweet dodo
                (plantain), and creamy coleslaw salad.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Bestseller
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Spicy Garlic Chicken Pasta
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">₦6,500</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Penne pasta tossed in herb butter, roasted cherry tomatoes,
                savory spiced chicken chunks, and parmesan dust.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Chef Choice
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Grand Small Chops Platter (50 pcs)
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">
                  ₦18,000
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Crispy spring rolls, spicy meat samosas, peppered gizzard,
                glazed chicken drumettes, and sweet puff-puff.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Event Favorite
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Royal Seafood Fried Rice Tray
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">
                  ₦28,000
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Basmati rice sautéed with jumbo prawns, calamari rings, sweet
                corn, green peas, and whole grilled croaker fish.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Serves 5-7
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Gourmet Sweet Popcorn Bucket
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">₦3,500</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Freshly popped golden corn kernels coated in rich honey butter
                glaze. Perfect snack accompaniment.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Snack Bucket
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-base text-[#260006]">
                  Artisan Chilled Zobo Bottle (1L)
                </h4>
                <span className="text-[#3D000B] font-bold text-sm">₦2,500</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Steeped organic hibiscus petals infused with fresh pineapple
                juice, cloves, ginger, and mint syrup.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] bg-[#3D000B] text-white px-2 py-0.5 rounded font-bold">
                  Natural Blend
                </span>
                <a
                  href="https://wa.me/2348086022550"
                  className="text-xs font-bold text-[#3D000B] hover:underline"
                >
                  Order Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CATERING PACKAGES
         ========================================================================= */}
      <section id="packages" className="py-16 bg-[#260006] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#F4C430] uppercase tracking-widest text-xs font-bold">
              Tailored Event Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Curated Event Solutions
            </h2>
            <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-3 mb-3"></div>
            <p className="text-gray-300 text-sm">
              All-inclusive catering and event management tiers engineered for
              extraordinary guest satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Package 1 */}
            <div className="bg-[#3D000B]/90 border border-[#F4C430]/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase text-gray-400 font-bold">
                  50 - 150 Guests
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Intimate Soiree
                </h3>
                <p className="text-sm font-black text-[#F4C430] mt-1">
                  Custom Tier
                </p>
                <hr className="my-4 border-[#F4C430]/20" />
                <ul className="text-xs text-gray-300 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> 2 Main Rice
                    Options (Jollof / Fried)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Flame-Grilled
                    Chicken / Fish
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Small Chops
                    Starter Trays
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Uniformed
                    Buffet Service Staff
                  </li>
                </ul>
              </div>
              <a
                href="#catering-inquiry"
                className="w-full text-center block border border-[#F4C430] hover:bg-[#F4C430] hover:text-[#260006] text-white font-bold py-2.5 rounded-xl text-xs mt-6 transition-colors"
              >
                Request Custom Quote
              </a>
            </div>

            {/* Package 2 (Highlighted) */}
            <div className="bg-[#3D000B] border-2 border-[#F4C430] rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs uppercase text-[#FDE68A] font-bold">
                  150 - 500 Guests
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  The Bliss Banquet
                </h3>
                <p className="text-sm text-[#F4C430] mt-1">Full Banquet Tier</p>
                <hr className="my-4 border-[#F4C430]/40" />
                <ul className="text-xs text-gray-200 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B00]" /> Full African
                    &amp; Continental Menu
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B00]" /> Live Pasta
                    &amp; Small Chops Station
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B00]" /> Artisan
                    Smoothie &amp; Zobo Bar
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B00]" /> Gourmet Popcorn
                    Cart &amp; Sweet Treats
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF6B00]" /> Floor Manager
                    &amp; Complete Serving Crew
                  </li>
                </ul>
              </div>
              <a
                href="#catering-inquiry"
                className="w-full text-center block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold py-3 rounded-xl text-xs mt-6 transition-colors shadow-lg"
              >
                Book This Banquet
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-[#3D000B]/90 border border-[#F4C430]/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase text-gray-400 font-bold">
                  500+ Guests
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Imperial Gala &amp; Event
                </h3>
                <p className="text-sm font-black text-[#F4C430] mt-1">
                  All-Inclusive Executive
                </p>
                <hr className="my-4 border-[#F4C430]/20" />
                <ul className="text-xs text-gray-300 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Bespoke
                    Multi-Course Dining
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> VIP Plated
                    Table Hospitality
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Full Mixology
                    Cocktail Lounge
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4C430]" /> Venue Styling
                    &amp; Decoration Options
                  </li>
                </ul>
              </div>
              <a
                href="#catering-inquiry"
                className="w-full text-center block border border-[#F4C430] hover:bg-[#F4C430] hover:text-[#260006] text-white font-bold py-2.5 rounded-xl text-xs mt-6 transition-colors"
              >
                Book Executive Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. INQUIRY FORM / BOOK TASTING
         ========================================================================= */}
      <section id="catering-inquiry" className="py-16 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-xl">
            <div className="text-center mb-8">
              <span className="text-[#FF6B00] uppercase font-bold tracking-widest text-xs">
                Direct Reservation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#260006] mt-1">
                Book Your Event Tasting &amp; Quote
              </h2>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Chief Adeleke"
                    className="w-full bg-[#F5F3F3] border border-amber-200/60 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="08012345678"
                    className="w-full bg-[#F5F3F3] border border-amber-200/60 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full bg-[#F5F3F3] border border-amber-200/60 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Expected Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F3F3] border border-amber-200/60 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Estimated Guest Count
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  placeholder="e.g. 250"
                  className="w-full bg-[#F5F3F3] border border-amber-200/60 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                  Select Event Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Wedding / Reception",
                    "Corporate Gala",
                    "Birthday Party",
                    "Private Dining",
                  ].map((type) => (
                    <label
                      key={type}
                      className={`border rounded-xl p-3 text-center cursor-pointer text-xs font-semibold transition-all ${
                        formData.eventType === type
                          ? "border-[#FF6B00] bg-orange-50 text-[#FF6B00]"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="eventType"
                        value={type}
                        checked={formData.eventType === type}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3D000B] hover:bg-[#FF6B00] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
              >
                Send Reservation Inquiry
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. TESTIMONIALS SECTION
         ========================================================================= */}
      <section id="about" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FF6B00] uppercase font-bold tracking-widest text-xs">
              Customer Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#260006] mt-1">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
              <div className="flex text-[#F4C430] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed italic mb-4">
                "Bliss Delight handled our daughter's wedding in Lekki. The
                firewood jollof and live popcorn station were the biggest hits
                of the evening!"
              </p>
              <p className="text-xs font-bold text-[#260006]">
                Mrs. Florence O.
              </p>
              <p className="text-[10px] text-gray-400">
                Victoria Island, Lagos
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
              <div className="flex text-[#F4C430] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed italic mb-4">
                "We order their creamy garlic pasta trays weekly to our office
                via Wagba. Fast delivery, hot food, and consistently amazing
                taste."
              </p>
              <p className="text-xs font-bold text-[#260006]">Tobi Bakare</p>
              <p className="text-[10px] text-gray-400">Ikoyi Corporate Exec</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
              <div className="flex text-[#F4C430] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed italic mb-4">
                "The small chops were so crisp and fresh! From the drinks to the
                table setup, everything was handled with pure class and
                professionalism."
              </p>
              <p className="text-xs font-bold text-[#260006]">Sandra E.</p>
              <p className="text-[10px] text-gray-400">Ikeja, Lagos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
