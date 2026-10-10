import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/toursData';
import { CurrencyCode, TourPackage } from '../types';
import { formatPrice } from '../utils/currency';

interface FeaturedToursProps {
  currency: CurrencyCode;
  onSelectTour: (tour: TourPackage) => void;
  selectedCategory?: string;
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({
  currency,
  onSelectTour,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Packages' },
    { id: 'heritage', label: 'Cultural Heritage' },
    { id: 'highlands', label: 'Scenic Highlands' },
    { id: 'wildlife', label: 'Marine & Wildlife' },
    { id: 'coastal', label: 'Coastal Luxury' },
  ];

  const filteredTours = TOUR_PACKAGES.filter((tour) => {
    if (activeFilter === 'all') return true;
    return tour.category === activeFilter;
  });

  return (
    <section id="curated-tours" className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-[#1b6b4a]" />
            <span>Bespoke Expeditions</span>
          </div>
          <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#000f22] tracking-tight font-semibold">
            Handcrafted Sri Lankan Journeys
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="tour-filter-bar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#000f22] text-white shadow-sm'
                    : 'bg-[#eae8e5] text-[#43474d] hover:text-[#1b1c1a] hover:bg-[#efeeeb]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTours.map((tour) => {
          // Determine badge color
          let badgeBg = 'bg-[#1b6b4a] text-white';
          if (tour.badge.variant === 'iconic') badgeBg = 'bg-[#d27200] text-white';
          if (tour.badge.variant === 'seasonal') badgeBg = 'bg-[#0a2540] text-[#d2e4ff]';
          if (tour.badge.variant === 'wildlife') badgeBg = 'bg-[#6e3900] text-white';

          return (
            <div
              key={tour.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-black/5"
            >
              {/* Image & Badges */}
              <div className="relative w-full h-64 overflow-hidden">
                <div
                  className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${tour.imageUrl}')` }}
                  title={tour.imageAlt}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full ${badgeBg} font-bold text-[11px] uppercase tracking-wider shadow-sm`}
                  >
                    {tour.badge.label}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#000f22]/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#a6f3c9]">schedule</span>
                  {tour.duration}
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] text-[#1b6b4a] uppercase font-bold tracking-wider">
                    {tour.region}
                  </span>
                  <div className="flex items-center gap-1 text-[#d27200] text-[12px] font-bold">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span>{tour.rating.toFixed(2)}</span>
                    <span className="text-[#74777e] text-[11px] font-normal">({tour.reviewCount})</span>
                  </div>
                </div>

                <h3 className="font-serif text-[20px] leading-snug text-[#000f22] mb-3 group-hover:text-[#1b6b4a] transition-colors font-semibold">
                  {tour.title}
                </h3>

                <p className="text-[13px] leading-relaxed text-[#43474d] line-clamp-3 mb-6">
                  {tour.description}
                </p>

                {/* Price and CTA Footer */}
                <div className="mt-auto pt-4 bg-[#f5f3f0]/50 -mx-6 -mb-6 p-6 flex items-center justify-between border-t border-black/5">
                  <div>
                    <span className="block text-[10px] text-[#74777e] uppercase font-bold tracking-wider">
                      Starting at
                    </span>
                    <span className="text-[18px] text-[#000f22] font-bold">
                      {formatPrice(tour.startingPriceUSD, currency)}{' '}
                      <span className="text-[13px] font-normal text-[#43474d]">/ person</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTour(tour)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#000f22] text-white text-[13px] font-semibold hover:bg-[#1b6b4a] transition-colors shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
