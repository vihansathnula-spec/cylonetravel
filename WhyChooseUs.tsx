import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
          <span className="w-6 h-[2px] bg-[#1b6b4a]" />
          <span>The Travel Ceylon Promise</span>
          <span className="w-6 h-[2px] bg-[#1b6b4a]" />
        </span>
        <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#000f22] tracking-tight font-semibold">
          Why Discerning Travelers Choose Travel Ceylon
        </h2>
        <p className="text-[17px] md:text-[18px] text-[#43474d] mt-3 font-light leading-relaxed">
          We marry private aristocratic hospitality with authentic conservation-first island exploration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1: Unrivaled Access */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col border border-black/5">
          <div className="w-14 h-14 rounded-2xl bg-[#ffdcc3] flex items-center justify-center text-[#d27200] mb-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl">explore</span>
          </div>
          <div className="font-bold text-[11px] text-[#d27200] uppercase tracking-wider mb-2">
            Unrivaled Access
          </div>
          <h3 className="font-serif text-[22px] text-[#000f22] mb-3 font-semibold leading-snug">
            Local Expertise & Native Storytellers
          </h3>
          <p className="text-[15px] leading-relaxed text-[#43474d]">
            Born and bred in Ceylon, our certified naturalist guides and chauffeur experts open private doors no standard guidebook can unlock. Walk hidden monastery paths and dine with village elders.
          </p>
          <div className="mt-8 pt-4 flex items-center gap-3 text-[#43474d] text-[12px] font-semibold">
            <span className="material-symbols-outlined text-base text-[#1b6b4a]">check_circle</span>
            <span>Government Licensed SLTDA Guides</span>
          </div>
        </div>

        {/* Col 2: Absolute Tailoring */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col border border-black/5">
          <div className="w-14 h-14 rounded-2xl bg-[#a3f0c6] flex items-center justify-center text-[#1b6b4a] mb-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
          </div>
          <div className="font-bold text-[11px] text-[#1b6b4a] uppercase tracking-wider mb-2">
            Absolute Tailoring
          </div>
          <h3 className="font-serif text-[22px] text-[#000f22] mb-3 font-semibold leading-snug">
            100% Bespoke Custom Itineraries
          </h3>
          <p className="text-[15px] leading-relaxed text-[#43474d]">
            From private helicopter transfers over Sigiriya to private tea tastings with master blenders, every moment is sculpted to your travel style, pace, dietary preferences, and personal passions.
          </p>
          <div className="mt-8 pt-4 flex items-center gap-3 text-[#43474d] text-[12px] font-semibold">
            <span className="material-symbols-outlined text-base text-[#1b6b4a]">check_circle</span>
            <span>Zero Cookie-Cutter Schedules</span>
          </div>
        </div>

        {/* Col 3: Uncompromised Comfort */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col border border-black/5">
          <div className="w-14 h-14 rounded-2xl bg-[#d2e4ff] flex items-center justify-center text-[#000f22] mb-6 shadow-sm">
            <span className="material-symbols-outlined text-3xl">verified_user</span>
          </div>
          <div className="font-bold text-[11px] text-[#000f22] uppercase tracking-wider mb-2">
            Uncompromised Comfort
          </div>
          <h3 className="font-serif text-[22px] text-[#000f22] mb-3 font-semibold leading-snug">
            24/7 Dedicated Concierge & Safety
          </h3>
          <p className="text-[15px] leading-relaxed text-[#43474d]">
            Round-the-clock on-ground care, luxury air-conditioned transport with private Wi-Fi, complimentary SIM cards, and immediate personal concierge support via WhatsApp or direct dispatch.
          </p>
          <div className="mt-8 pt-4 flex items-center gap-3 text-[#43474d] text-[12px] font-semibold">
            <span className="material-symbols-outlined text-base text-[#1b6b4a]">check_circle</span>
            <span>Private Chauffeur & Real-time Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
