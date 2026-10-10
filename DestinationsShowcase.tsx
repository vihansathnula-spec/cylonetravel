import React, { useRef } from 'react';
import { DESTINATIONS } from '../data/toursData';
import { Destination } from '../types';

interface DestinationsShowcaseProps {
  onSelectDestination: (destination: Destination) => void;
}

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({
  onSelectDestination,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="destinations" className="w-full bg-[#f5f3f0] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header & Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-[#1b6b4a]" />
              <span>Regions of Wonder</span>
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#000f22] tracking-tight font-semibold">
              Wander Across the Paradise Isle
            </h2>
            <p className="text-[15px] text-[#43474d] mt-2 max-w-xl leading-relaxed">
              From the UNESCO cobblestone ramparts of the south coast to mist-shrouded highland ridges and sacred Buddhist sanctums.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous Destination"
              className="w-12 h-12 rounded-full bg-white text-[#000f22] hover:bg-[#000f22] hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer border border-black/5 active:scale-95"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next Destination"
              className="w-12 h-12 rounded-full bg-white text-[#000f22] hover:bg-[#000f22] hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer border border-black/5 active:scale-95"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Destination Cards Container */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-none"
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-[460px] cursor-pointer border border-black/5"
            >
              {/* Background Image */}
              <div
                className="bg-cover bg-center absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url('${dest.imageUrl}')` }}
                title={dest.imageAlt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/40 to-transparent" />

              {/* Climate Tag on Top */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#000f22] font-bold text-[11px] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-xs text-[#d27200]">
                    {dest.climateIcon}
                  </span>
                  {dest.climate}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#000f22]/60 backdrop-blur-md text-white font-medium text-[11px]">
                  {dest.season}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 mt-auto p-6 text-white">
                <div className="text-[#a6f3c9] font-bold text-[11px] uppercase tracking-wider mb-1">
                  {dest.region}
                </div>
                <h3 className="font-serif text-[26px] mb-2 leading-tight font-semibold">
                  {dest.name}
                </h3>
                <p className="text-[13px] text-white/80 line-clamp-2 mb-4 font-light leading-relaxed">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[12px] text-white/75">{dest.sightsCount}</span>
                  <span className="text-[13px] font-semibold text-[#ffdcc3] group-hover:text-white flex items-center gap-1 transition-colors">
                    Discover Destination{' '}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
