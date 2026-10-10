import React, { useState } from 'react';
import { CurrencyCode, TourPackage } from '../types';
import { formatPrice } from '../utils/currency';

interface ItineraryModalProps {
  tour: TourPackage | null;
  currency: CurrencyCode;
  onClose: () => void;
  onBookTour: (tour: TourPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  tour,
  currency,
  onClose,
  onBookTour,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);

  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header with Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img
            src={tour.imageUrl}
            alt={tour.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/50 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Header Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#1b6b4a] text-white font-bold text-[11px] uppercase tracking-wider">
                {tour.region}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-[11px] flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-[#a6f3c9]">schedule</span>
                {tour.duration}
              </span>
              <div className="flex items-center gap-1 text-[#ffdcc3] text-[12px] font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>{tour.rating.toFixed(2)}</span>
                <span className="text-white/70 text-[11px]">({tour.reviewCount} traveler reviews)</span>
              </div>
            </div>

            <h2 className="font-serif text-[26px] sm:text-[34px] leading-tight font-semibold">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Overview */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-2">
              Expedition Overview
            </h3>
            <p className="text-[15px] leading-relaxed text-[#43474d]">
              {tour.description} Handcrafted by senior Travel Ceylon naturalists, every transfer is conducted in private executive air-conditioned vehicles with continuous chilled refreshments, Wi-Fi, and native storytelling.
            </p>
          </div>

          {/* Day-by-day Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a]">
                Day-by-Day Expedition Schedule ({tour.days.length} Days)
              </h3>
              <span className="text-[12px] text-[#74777e]">Select a day to expand</span>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-4">
              {tour.days.map((d) => (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setActiveDay(d.day)}
                  className={`px-4 py-2 rounded-xl text-[13px] font-bold transition whitespace-nowrap cursor-pointer ${
                    activeDay === d.day
                      ? 'bg-[#000f22] text-white shadow-sm'
                      : 'bg-[#f5f3f0] text-[#43474d] hover:bg-[#eae8e5]'
                  }`}
                >
                  Day {d.day}
                </button>
              ))}
            </div>

            {/* Selected Day Details */}
            {tour.days
              .filter((d) => d.day === activeDay)
              .map((d) => (
                <div
                  key={d.day}
                  className="p-6 rounded-2xl bg-[#fbf9f6] border border-black/5 space-y-4 animate-in fade-in duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-serif text-[20px] text-[#000f22] font-semibold">
                      Day {d.day}: {d.title}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#43474d] leading-relaxed">
                    {d.description}
                  </p>

                  {d.highlights && d.highlights.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#d27200] mb-2">
                        Day Highlights
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {d.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-[13px] text-[#1b1c1a]">
                            <span className="material-symbols-outlined text-sm text-[#1b6b4a]">
                              check_circle
                            </span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(d.accommodation || d.meals) && (
                    <div className="pt-3 border-t border-black/5 flex flex-wrap gap-4 text-[12px] text-[#43474d]">
                      {d.accommodation && (
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-[#000f22]">hotel</span>
                          <span><strong>Stay:</strong> {d.accommodation}</span>
                        </div>
                      )}
                      {d.meals && (
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-[#d27200]">restaurant</span>
                          <span><strong>Dining:</strong> {d.meals}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Inclusions */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-3">
              Privileges & What’s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tour.inclusions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-black/5 shadow-xs text-[13px] text-[#1b1c1a]"
                >
                  <span className="material-symbols-outlined text-base text-[#1b6b4a] shrink-0 mt-0.5">
                    verified
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-6 bg-[#f5f3f0] border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="block text-[11px] text-[#74777e] uppercase font-bold tracking-wider">
              All-inclusive private tariff
            </span>
            <div className="text-[24px] text-[#000f22] font-bold font-serif">
              {formatPrice(tour.startingPriceUSD, currency)}{' '}
              <span className="text-[13px] font-normal text-[#43474d]">/ person (all taxes included)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full text-[#43474d] hover:bg-white text-[13px] font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => onBookTour(tour)}
              className="flex-1 sm:flex-initial px-8 py-3 rounded-full bg-[#d27200] hover:bg-[#b05f00] text-white font-bold text-[13px] tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Reserve Journey</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
