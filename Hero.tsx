import React, { useState } from 'react';
import { HERO_BG_URL } from '../data/toursData';
import { SearchState } from '../types';

interface HeroProps {
  onSearchSubmit: (searchParams: SearchState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit }) => {
  const [searchParams, setSearchParams] = useState<SearchState>({
    destination: 'sigiriya',
    style: 'heritage',
    duration: '3-5',
    travelers: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchParams);
  };

  return (
    <section className="relative w-full -mt-20 overflow-hidden">
      {/* Immersive Background Image Container */}
      <div
        id="hero-bg"
        className="bg-cover bg-center absolute inset-0 w-full h-full scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${HERO_BG_URL}')`,
        }}
      />

      {/* Editorial Gradients for Scrim Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000f22]/80 via-[#000f22]/50 to-[#fbf9f6]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000f22]/65 via-transparent to-[#000f22]/45" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col items-center text-center">
        {/* Curated Luxury Micro-Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md shadow-sm mb-6 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-[#d27200] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-white">
            Curated Luxury & Wild Expeditions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-[44px] leading-[50px] md:text-[68px] md:leading-[76px] text-white max-w-4xl tracking-tight drop-shadow-sm mb-6">
          Explore the Wonder of <span className="italic font-serif text-[#ffdcc3]">Ceylon</span>
        </h1>

        {/* Inspiring Subtitle */}
        <p className="text-[17px] md:text-[18px] text-white/90 max-w-2xl font-light leading-relaxed mb-12 drop-shadow-sm">
          Unveil emerald tea plantations, golden coastal shores, wild safaris, and 2,500 years of living heritage on an unforgettable tropical journey.
        </p>

        {/* Glassmorphic Booking Search Module */}
        <div className="w-full max-w-5xl bg-white/85 backdrop-blur-2xl rounded-2xl shadow-2xl p-3 md:p-4 mb-8 border border-white/60">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center"
          >
            {/* Filter 1: Destination */}
            <div className="lg:col-span-3 text-left px-4 py-2.5 bg-[#f5f3f0]/80 rounded-xl transition hover:bg-[#efeeeb]">
              <label
                htmlFor="search-destination"
                className="font-bold text-[11px] uppercase tracking-wider text-[#43474d] flex items-center gap-1.5 mb-1"
              >
                <span className="material-symbols-outlined text-base text-[#1b6b4a]">explore</span>
                Destination
              </label>
              <select
                id="search-destination"
                value={searchParams.destination}
                onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                className="w-full bg-transparent font-semibold text-[15px] text-[#1b1c1a] focus:outline-none cursor-pointer"
              >
                <option value="sigiriya">Sigiriya & Cultural Triangle</option>
                <option value="ella">Ella & Hill Country</option>
                <option value="galle">Galle & South Coast</option>
                <option value="yala">Yala & Safari Territory</option>
                <option value="kandy">Kandy Royal Capital</option>
                <option value="bentota">Bentota & Golden Sands</option>
              </select>
            </div>

            {/* Filter 2: Expedition Style */}
            <div className="lg:col-span-3 text-left px-4 py-2.5 bg-[#f5f3f0]/80 rounded-xl transition hover:bg-[#efeeeb]">
              <label
                htmlFor="search-tour-type"
                className="font-bold text-[11px] uppercase tracking-wider text-[#43474d] flex items-center gap-1.5 mb-1"
              >
                <span className="material-symbols-outlined text-base text-[#1b6b4a]">interests</span>
                Expedition Style
              </label>
              <select
                id="search-tour-type"
                value={searchParams.style}
                onChange={(e) => setSearchParams({ ...searchParams, style: e.target.value })}
                className="w-full bg-transparent font-semibold text-[15px] text-[#1b1c1a] focus:outline-none cursor-pointer"
              >
                <option value="heritage">Heritage & Culture</option>
                <option value="wildlife">Wildlife & Leopard Safari</option>
                <option value="trains">Scenic Trains & Highlands</option>
                <option value="beach">Luxury Beach Retreat</option>
                <option value="wellness">Ayurvedic Sanctuary</option>
              </select>
            </div>

            {/* Filter 3: Duration */}
            <div className="lg:col-span-2 text-left px-4 py-2.5 bg-[#f5f3f0]/80 rounded-xl transition hover:bg-[#efeeeb]">
              <label
                htmlFor="search-duration"
                className="font-bold text-[11px] uppercase tracking-wider text-[#43474d] flex items-center gap-1.5 mb-1"
              >
                <span className="material-symbols-outlined text-base text-[#1b6b4a]">calendar_today</span>
                Duration
              </label>
              <select
                id="search-duration"
                value={searchParams.duration}
                onChange={(e) => setSearchParams({ ...searchParams, duration: e.target.value })}
                className="w-full bg-transparent font-semibold text-[15px] text-[#1b1c1a] focus:outline-none cursor-pointer"
              >
                <option value="3-5">3 - 5 Days</option>
                <option value="7-10">7 - 10 Days</option>
                <option value="12-16">12 - 16 Days</option>
                <option value="17+">17+ Days Custom</option>
              </select>
            </div>

            {/* Filter 4: Travelers */}
            <div className="lg:col-span-2 text-left px-4 py-2.5 bg-[#f5f3f0]/80 rounded-xl transition hover:bg-[#efeeeb]">
              <label
                htmlFor="search-guests"
                className="font-bold text-[11px] uppercase tracking-wider text-[#43474d] flex items-center gap-1.5 mb-1"
              >
                <span className="material-symbols-outlined text-base text-[#1b6b4a]">group</span>
                Travelers
              </label>
              <select
                id="search-guests"
                value={searchParams.travelers}
                onChange={(e) => setSearchParams({ ...searchParams, travelers: e.target.value })}
                className="w-full bg-transparent font-semibold text-[15px] text-[#1b1c1a] focus:outline-none cursor-pointer"
              >
                <option value="2">2 Guests (Couple)</option>
                <option value="1">1 Solo Traveler</option>
                <option value="4">Small Family (3-4)</option>
                <option value="6">Private Party (5+)</option>
              </select>
            </div>

            {/* Primary Action Button */}
            <div className="lg:col-span-2 flex w-full h-full min-h-[52px]">
              <button
                type="submit"
                className="w-full h-full py-3.5 px-6 rounded-xl bg-[#d27200] hover:bg-[#b05f00] text-white font-bold text-[13px] tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group cursor-pointer hover:shadow-orange-900/20"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover:rotate-45">
                  auto_awesome
                </span>
                <span>Book Trip</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quick Trust Indicators & Accreditations */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-sm text-[#d27200]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="text-[12px] font-semibold text-[#1b1c1a]">4.9/5 Traveler Rating</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-sm text-[#1b6b4a]">design_services</span>
            <span className="text-[12px] font-semibold text-[#1b1c1a]">100% Tailor-made Journeys</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-sm text-[#000f22]">verified_user</span>
            <span className="text-[12px] font-semibold text-[#1b1c1a]">Certified Local Chauffeur Guides</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-black/5">
            <span className="material-symbols-outlined text-sm text-[#1b6b4a]">nest_eco_leaf</span>
            <span className="text-[12px] font-semibold text-[#1b1c1a]">Sustainable Tourism Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
