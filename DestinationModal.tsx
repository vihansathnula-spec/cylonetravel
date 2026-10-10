import React from 'react';
import { Destination, TourPackage } from '../types';
import { TOUR_PACKAGES } from '../data/toursData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onSelectTour: (tour: TourPackage) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onSelectTour,
}) => {
  if (!destination) return null;

  const connectedTours = TOUR_PACKAGES.filter((t) =>
    destination.recommendedTours.includes(t.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Destination Image Hero */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={destination.imageUrl}
            alt={destination.imageAlt}
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

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#a6f3c9] text-[11px] font-bold uppercase tracking-wider">
                {destination.region}
              </span>
              <span className="text-white/60">·</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold">
                {destination.climate}
              </span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-semibold leading-tight">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-2">
              About This Sanctuary
            </h3>
            <p className="text-[15px] leading-relaxed text-[#43474d]">
              {destination.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#fbf9f6] rounded-2xl border border-black/5">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase text-[#d27200] mb-1">
                <span className="material-symbols-outlined text-base">sunny</span>
                Best Travel Window
              </div>
              <p className="text-[13px] text-[#1b1c1a] font-medium">{destination.bestTime}</p>
            </div>
            <div className="p-4 bg-[#fbf9f6] rounded-2xl border border-black/5">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase text-[#1b6b4a] mb-1">
                <span className="material-symbols-outlined text-base">attractions</span>
                Curated Sights
              </div>
              <p className="text-[13px] text-[#1b1c1a] font-medium">{destination.sightsCount}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-3">
              Signature Highlights
            </h3>
            <div className="space-y-2.5">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[14px] text-[#1b1c1a]">
                  <span className="material-symbols-outlined text-base text-[#1b6b4a] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Expeditions */}
          {connectedTours.length > 0 && (
            <div className="pt-4 border-t border-black/5">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#1b6b4a] mb-3">
                Featured Expeditions Visiting {destination.name}
              </h3>
              <div className="space-y-3">
                {connectedTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="p-4 rounded-xl bg-[#f5f3f0] hover:bg-[#eae8e5] transition-colors flex items-center justify-between gap-4 border border-black/5"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-[16px] text-[#000f22]">
                        {tour.title}
                      </h4>
                      <p className="text-[12px] text-[#43474d] mt-0.5">
                        {tour.duration} · {tour.region}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectTour(tour);
                      }}
                      className="px-4 py-2 rounded-full bg-[#000f22] text-white text-[12px] font-semibold hover:bg-[#1b6b4a] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      View Itinerary
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#f5f3f0] border-t border-black/5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#000f22] text-white text-[13px] font-semibold hover:bg-[#1b6b4a] transition-colors cursor-pointer"
          >
            Close Explorer
          </button>
        </div>
      </div>
    </div>
  );
};
