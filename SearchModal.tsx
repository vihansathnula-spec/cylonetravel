import React, { useState } from 'react';
import { DESTINATIONS, TOUR_PACKAGES } from '../data/toursData';
import { CurrencyCode, Destination, TourPackage } from '../types';
import { formatPrice } from '../utils/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onSelectTour: (tour: TourPackage) => void;
  onSelectDestination: (dest: Destination) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currency,
  onSelectTour,
  onSelectDestination,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingTours = TOUR_PACKAGES.filter((t) => {
    if (!trimmed) return true;
    return (
      t.title.toLowerCase().includes(trimmed) ||
      t.region.toLowerCase().includes(trimmed) ||
      t.description.toLowerCase().includes(trimmed)
    );
  });

  const matchingDestinations = DESTINATIONS.filter((d) => {
    if (!trimmed) return true;
    return (
      d.name.toLowerCase().includes(trimmed) ||
      d.region.toLowerCase().includes(trimmed) ||
      d.description.toLowerCase().includes(trimmed)
    );
  });

  const quickTags = ['Sigiriya', 'Ella Train', 'Leopard Safari', 'Galle Fort', 'Whale Watching', 'Kandy'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full mt-12 sm:mt-20 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-black/5 bg-[#fbf9f6] flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-[#1b6b4a]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search expeditions, wildlife, ruins, tea valleys..."
            className="w-full bg-transparent text-[16px] text-[#1b1c1a] focus:outline-none placeholder:text-gray-400 font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-black cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-6 py-3 bg-[#f5f3f0] border-b border-black/5 flex items-center gap-2 overflow-x-auto scrollbar-none text-[12px]">
          <span className="text-gray-500 font-semibold shrink-0">Popular:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="px-3 py-1 rounded-full bg-white hover:bg-[#eae8e5] text-[#000f22] font-medium transition-colors border border-black/5 shrink-0 cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Matching Tours */}
          {matchingTours.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-3">
                Curated Expeditions ({matchingTours.length})
              </div>
              <div className="space-y-2.5">
                {matchingTours.map((tour) => (
                  <div
                    key={tour.id}
                    onClick={() => {
                      onClose();
                      onSelectTour(tour);
                    }}
                    className="p-3.5 rounded-2xl bg-white hover:bg-[#f5f3f0] transition-colors border border-black/5 flex items-center gap-4 cursor-pointer group"
                  >
                    <img
                      src={tour.imageUrl}
                      alt={tour.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#1b6b4a] uppercase">
                          {tour.region}
                        </span>
                        <span className="text-gray-400 text-xs">·</span>
                        <span className="text-xs text-gray-500">{tour.duration}</span>
                      </div>
                      <h4 className="font-serif font-bold text-[15px] text-[#000f22] group-hover:text-[#1b6b4a] transition-colors truncate">
                        {tour.title}
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[14px] font-bold text-[#d27200]">
                        {formatPrice(tour.startingPriceUSD, currency)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Destinations */}
          {matchingDestinations.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#d27200] mb-3">
                Destinations & Sanctuaries ({matchingDestinations.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => {
                      onClose();
                      onSelectDestination(dest);
                    }}
                    className="p-3.5 rounded-2xl bg-white hover:bg-[#f5f3f0] transition-colors border border-black/5 flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-[14px] text-[#000f22] group-hover:text-[#1b6b4a] transition-colors truncate">
                        {dest.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 truncate">{dest.region} · {dest.climate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingTours.length === 0 && matchingDestinations.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
              <p className="text-sm">No expeditions found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-gray-400 mt-1">Try &ldquo;train&rdquo;, &ldquo;leopard&rdquo;, or &ldquo;Sigiriya&rdquo;.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
