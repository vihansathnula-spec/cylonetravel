import React from 'react';
import { TourPackage } from '../types';

interface WildlifeAndCultureProps {
  onExploreHeritageTours: () => void;
  onExploreWildlifeTours: () => void;
  onSelectTourById: (id: string) => void;
}

export const WildlifeAndCultureSections: React.FC<WildlifeAndCultureProps> = ({
  onExploreHeritageTours,
  onExploreWildlifeTours,
  onSelectTourById,
}) => {
  return (
    <>
      {/* Wildlife & Nature Section */}
      <section id="wildlife-nature" className="w-full bg-[#fbf9f6] py-20 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest">
                <span className="w-8 h-[2px] bg-[#1b6b4a]" />
                <span>Biodiversity Hotspot of Asia</span>
              </span>
              <h2 className="font-serif text-[34px] md:text-[42px] leading-tight text-[#000f22] font-semibold">
                Wild Encounters in Untamed Sanctuaries
              </h2>
              <p className="text-[16px] text-[#43474d] leading-relaxed">
                Sri Lanka is among the world’s top biodiversity hotspots, packing more large mammal density per square kilometer than any nation in Asia. From the highest concentration of leopards in Yala to the colossal blue whales roaming Mirissa’s continental shelf.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                  <div className="text-[24px] font-bold text-[#1b6b4a] font-serif">Block 1 & 5</div>
                  <div className="text-[13px] font-semibold text-[#000f22] mt-0.5">Yala Leopard Density</div>
                  <div className="text-[12px] text-[#43474d] mt-1">World-renowned predator sightings</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                  <div className="text-[24px] font-bold text-[#d27200] font-serif">300+ Elephants</div>
                  <div className="text-[13px] font-semibold text-[#000f22] mt-0.5">Minneriya Gathering</div>
                  <div className="text-[12px] text-[#43474d] mt-1">Ranked by BBC as a Top Wildlife Wonder</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectTourById('yala-wildlife-safari')}
                  className="px-6 py-3 rounded-full bg-[#000f22] hover:bg-[#1b6b4a] text-white text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  Explore Yala Safari Expedition
                </button>
                <button
                  type="button"
                  onClick={onExploreWildlifeTours}
                  className="px-6 py-3 rounded-full bg-white hover:bg-[#efeeeb] text-[#000f22] border border-[#000f22]/20 text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  View All Wildlife Expeditions
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 h-[480px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJR-buOHwyOBoTyIdShqSZkPyG0JssuXgFu0hiVYMvQ3BkkN1DDu0yZzri8cpGWrNlJ3MEerC08vItU1mF2pcP2w7Hq1h4UsrpFHwpEQkbjoA6pQMYJo2UtNVLBQE48Mu-cUhE6RtmkYlTQA1zCKkI6ttVl-3blue69QbX39ME_Fk5XXftI77pfwjc96FEFG6vxvk2mu0ntxGHhfcxjgxYK-MEKjXvbm5CNgO5IPDRsVHGoLeRQXgD"
                  alt="Sri Lankan Leopard in Yala National Park"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f22]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#1b6b4a] text-white text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Exclusive Ranger Access
                  </span>
                  <p className="text-[15px] font-light text-white/90">
                    Travel Ceylon maintains ethical wildlife codes: low-impact silent electric cruising, minimal vehicle crowding, and native tracker royalties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section id="cultural-heritage" className="w-full bg-[#f5f3f0] py-20 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 h-[480px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RFxK0PGtCYJ1coF2pK02OKjzAF8dadG92LuPbPn5FusIa68uT9NBESX7iZQgI4y3UASCMCaY86tch2r439-8H7lw1J2VBQfIzo2uOwVL-Oh6wJk8e9csjKR7seygPVx692sG906EILLtyp35VwKQqE7r4DBx0YfMWR_QeYcH8Nc97Vzw1CHtqHmSRia-2XqDfAccYDBvCqatOJ0CMsTz4Iqk0lM5_uBFHlHXG-TtbcDuDdYwXoqY"
                  alt="Sigiriya Rock Fortress and Water Gardens"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f22]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#d27200] text-white text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    UNESCO World Heritage
                  </span>
                  <p className="text-[15px] font-light text-white/90">
                    Sigiriya Citadel: An architectural feat of royal hydraulic engineering, 5th-century mirror wall literature, and celestial maiden paintings.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-flex items-center gap-2 text-[#d27200] font-bold text-[11px] uppercase tracking-widest">
                <span className="w-8 h-[2px] bg-[#d27200]" />
                <span>2,500 Years of Living Antiquity</span>
              </span>
              <h2 className="font-serif text-[34px] md:text-[42px] leading-tight text-[#000f22] font-semibold">
                Sacred Monasteries & Royal Citadels
              </h2>
              <p className="text-[16px] text-[#43474d] leading-relaxed">
                Step inside the Sacred Cultural Triangle where colossal brick stupas outsized the Egyptian Pyramids of their era, cave sanctums glow with thousand-year-old ochre frescoes, and the living branch of the historic Bodhi tree has been venerated since 288 BC.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-[14px] text-[#1b1c1a]">
                  <span className="material-symbols-outlined text-[#1b6b4a] shrink-0 mt-0.5">temple_buddhist</span>
                  <div>
                    <span className="font-bold">Sri Dalada Maligawa (Kandy):</span> Private dawn ceremony beside the golden casket housing the sacred tooth relic of Gautama Buddha.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[14px] text-[#1b1c1a]">
                  <span className="material-symbols-outlined text-[#1b6b4a] shrink-0 mt-0.5">castle</span>
                  <div>
                    <span className="font-bold">Galle Dutch Ramparts:</span> Living 400-year-old maritime fortress inhabited by jewelers, poets, and spice traders.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onExploreHeritageTours}
                  className="px-6 py-3 rounded-full bg-[#000f22] hover:bg-[#d27200] text-white text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  Explore Cultural Triangle Journeys
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ceylon Section */}
      <section id="about-ceylon" className="w-full bg-[#fbf9f6] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
            <span className="w-6 h-[2px] bg-[#1b6b4a]" />
            <span>The Resplendent Isle</span>
            <span className="w-6 h-[2px] bg-[#1b6b4a]" />
          </span>
          <h2 className="font-serif text-[34px] md:text-[42px] leading-tight text-[#000f22] font-semibold mb-6">
            Aristocratic Hospitality & Sustainable Guardianship
          </h2>
          <p className="text-[16px] text-[#43474d] leading-relaxed mb-8">
            Founded with a passion for preserving the teardrop island’s pristine wilderness and timeless cultural dignity, Travel Ceylon pairs private client travel with real conservation. 5% of every voyage is directly reinvested into Sri Lanka’s endemic wildlife sanctuaries and rural craftsman trusts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-[#1b6b4a] font-serif text-[28px] font-bold mb-1">100%</div>
              <div className="font-bold text-[14px] text-[#000f22] mb-2">Native Chauffeur Guides</div>
              <p className="text-[13px] text-[#43474d]">
                SLTDA-licensed cultural storytellers with deep native roots and encyclopedic botanical insight.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-[#d27200] font-serif text-[28px] font-bold mb-1">Carbon-Offset</div>
              <div className="font-bold text-[14px] text-[#000f22] mb-2">Private Expedition Fleet</div>
              <p className="text-[13px] text-[#43474d]">
                Luxury executive transportation with complimentary Wi-Fi and certified carbon-neutral offset.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-[#000f22] font-serif text-[28px] font-bold mb-1">24/7 Desk</div>
              <div className="font-bold text-[14px] text-[#000f22] mb-2">Colombo Private Concierge</div>
              <p className="text-[13px] text-[#43474d]">
                Immediate flight dispatch, helicopter transfers, and restaurant reservations throughout your stay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
