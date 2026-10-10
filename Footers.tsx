import React from 'react';
import { LOGO_URL } from '../data/toursData';

interface FootersProps {
  onOpenPlanCustomTrip: () => void;
  onFilterCategory?: (category: string) => void;
}

export const Footers: React.FC<FootersProps> = ({ onOpenPlanCustomTrip }) => {
  return (
    <>
      {/* Primary Comprehensive Footer */}
      <footer className="w-full bg-[#eae8e5] pt-28 pb-16 text-[#1b1c1a]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand Summary Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-[#1b6b4a]">
                  temple_buddhist
                </span>
                <span className="font-serif text-[24px] text-[#000f22] font-semibold">
                  Travel Ceylon
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-[#43474d] max-w-md mb-6">
                The premier boutique expedition house crafting bespoke tailor-made luxury voyages across Sri Lanka. Committed to biodiversity regeneration, cultural heritage stewardship, and native empowerment.
              </p>

              {/* Accreditations & Badges */}
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-[#1b1c1a] text-[12px] font-bold shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-[#1b6b4a] text-base">verified</span>
                  <span>SLTDA Tour Operator License #A-19402</span>
                </div>
                <div className="flex items-center gap-2 text-[#43474d] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-[#d27200] text-base">military_tech</span>
                  <span>TripAdvisor Travellers&apos; Choice Award 2024</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#000f22] hover:text-white text-[#000f22] transition-colors flex items-center justify-center shadow-sm border border-black/5"
                >
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                </a>
                <a
                  href="#youtube"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#000f22] hover:text-white text-[#000f22] transition-colors flex items-center justify-center shadow-sm border border-black/5"
                >
                  <span className="material-symbols-outlined text-lg">smart_display</span>
                </a>
                <a
                  href="#pinterest"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#000f22] hover:text-white text-[#000f22] transition-colors flex items-center justify-center shadow-sm border border-black/5"
                >
                  <span className="material-symbols-outlined text-lg">push_pin</span>
                </a>
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#000f22] hover:text-white text-[#000f22] transition-colors flex items-center justify-center shadow-sm border border-black/5"
                >
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a
                  href="#twitter"
                  aria-label="X Twitter"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#000f22] hover:text-white text-[#000f22] transition-colors flex items-center justify-center shadow-sm border border-black/5"
                >
                  <span className="material-symbols-outlined text-lg">tag</span>
                </a>
              </div>
            </div>

            {/* Column 2: Key Destinations */}
            <div>
              <h4 className="text-[16px] text-[#000f22] mb-4 font-bold font-serif">
                Destinations
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#43474d]">
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Colombo Metropolis</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Sigiriya & Dambulla</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Kandy Cultural Basin</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Nuwara Eliya Little England</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Ella Valley</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Galle Dutch Ramparts</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Mirissa Coastal Bay</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Yala National Wilderness</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#destinations">Jaffna Northern Peninsula</a></li>
              </ul>
            </div>

            {/* Column 3: Experience Themes */}
            <div>
              <h4 className="text-[16px] text-[#000f22] mb-4 font-bold font-serif">
                Experience Themes
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#43474d]">
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Cultural Heritage & Ruined Cities</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Big-Game Wildlife & Leopards</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Honeymoon & Romantic Escapes</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Private Scenic Train Charters</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Authentic Ayurvedic Wellness</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Ceylon Tea Country Bungalows</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Geoffrey Bawa Architecture</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#curated-tours">Scuba Diving & Blue Whales</a></li>
              </ul>
            </div>

            {/* Column 4: Travel Essentials */}
            <div>
              <h4 className="text-[16px] text-[#000f22] mb-4 font-bold font-serif">
                Travel Essentials
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#43474d]">
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Sri Lanka ETA Visa Guide</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Best Monsoon Seasons by Coast</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Health, Packing & Safety Protocol</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Scenic Train Seat Reservation FAQs</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Currency, Cash & Cards in Ceylon</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Responsible Temple Etiquette</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Chauffeur Guide Standards</a></li>
                <li><a className="hover:text-[#1b6b4a] transition-colors" href="#travel-guide">Emergency Island Assistance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright and Legal Bar */}
          <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#43474d]">
            <p>© 2026 Travel Ceylon Luxury Expeditions (Pvt) Ltd. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a className="hover:text-[#000f22] transition-colors" href="#privacy">Privacy Charter</a>
              <a className="hover:text-[#000f22] transition-colors" href="#terms">Terms of Booking</a>
              <a className="hover:text-[#000f22] transition-colors" href="#sustainability">Sustainable Tourism Code</a>
              <button
                type="button"
                onClick={onOpenPlanCustomTrip}
                className="hover:text-[#d27200] transition-colors cursor-pointer font-bold"
              >
                Concierge Desk
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Secondary Clean Sanctuary Footer */}
      <footer className="w-full bg-[#f5f3f0] py-16 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  alt="Travel Ceylon Logo"
                  className="h-8 w-auto object-contain"
                  src={LOGO_URL}
                />
                <span className="font-serif text-[22px] text-[#000f22] font-semibold">
                  Travel Ceylon
                </span>
              </div>
              <p className="text-[13px] text-[#43474d] max-w-sm leading-relaxed">
                Curating intimate journeys, private rail expeditions, and heritage sanctuaries across the enchanted teardrop isle.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] text-[#000f22] font-bold font-serif mb-4">
                Sanctuaries
              </h4>
              <ul className="space-y-3 text-[13px] text-[#43474d]">
                <li><a className="hover:text-[#000f22] transition-colors" href="#destinations">Southern Coast & Galle</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#destinations">Central Highlands & Tea Estates</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#destinations">Cultural Triangle & Anuradhapura</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#destinations">Yala & Wild Savannas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] text-[#000f22] font-bold font-serif mb-4">
                Expeditions
              </h4>
              <ul className="space-y-3 text-[13px] text-[#43474d]">
                <li><a className="hover:text-[#000f22] transition-colors" href="#curated-tours">Private Tea Train Charters</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#curated-tours">Ayurvedic Wellness Retreats</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#curated-tours">Leopard Conservation Safaris</a></li>
                <li><a className="hover:text-[#000f22] transition-colors" href="#curated-tours">Bawa Architectural Tours</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] text-[#000f22] font-bold font-serif mb-4">
                Concierge
              </h4>
              <p className="text-[13px] text-[#43474d] mb-4 leading-relaxed">
                Reach our Colombo private client desk for personalized itineraries and VIP aviation transfers.
              </p>
              <a
                className="text-[13px] font-bold text-[#1b6b4a] hover:underline"
                href="mailto:concierge@travelceylon.com"
              >
                concierge@travelceylon.com
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#43474d] border-t border-black/5">
            <p>© 2026 Travel Ceylon Luxury Expeditions Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-[#1b1c1a] transition-colors" href="#privacy">Privacy Policy</a>
              <a className="hover:text-[#1b1c1a] transition-colors" href="#terms">Terms of Service</a>
              <a className="hover:text-[#1b1c1a] transition-colors" href="#protocol">Guest Protocol</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
