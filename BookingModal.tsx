import React, { useState } from 'react';
import { CurrencyCode, TourPackage } from '../types';
import { formatPrice } from '../utils/currency';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: TourPackage | null;
  currency: CurrencyCode;
  initialTravelers?: number;
  initialDate?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tour,
  currency,
  initialTravelers = 2,
}) => {
  const [guests, setGuests] = useState<number>(initialTravelers);
  const [startDate, setStartDate] = useState<string>('2026-11-15');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<string | null>(null);

  if (!isOpen || !tour) return null;

  const totalPriceUSD = tour.startingPriceUSD * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CEYLON-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingConfirmed(ref);
  };

  const handleFinish = () => {
    setBookingConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#000f22] p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <span className="text-[11px] font-bold text-[#d27200] uppercase tracking-widest block mb-1">
            Expedition Reservation Desk
          </span>
          <h2 className="font-serif text-[24px] font-semibold">{tour.title}</h2>
          <div className="flex items-center gap-2 text-[12px] text-white/80 mt-1">
            <span>{tour.region}</span>
            <span>·</span>
            <span>{tour.duration}</span>
            <span>·</span>
            <span className="text-[#ffdcc3]">★ {tour.rating.toFixed(2)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {bookingConfirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#a3f0c6] text-[#1b6b4a] flex items-center justify-center mx-auto shadow-md">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="font-serif text-[24px] text-[#000f22] font-semibold">
                Expedition Reserved!
              </h3>
              <p className="text-[14px] text-[#43474d] max-w-sm mx-auto">
                Ayubowan, {name || 'Honored Guest'}! Your reservation has been provisionally registered.
              </p>

              <div className="p-4 bg-[#fbf9f6] rounded-2xl max-w-md mx-auto border border-black/5 text-left space-y-2 text-[13px]">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#000f22]">{bookingConfirmed}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Scheduled Departure:</span>
                  <span className="font-semibold text-[#000f22]">{startDate}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Total Travelers:</span>
                  <span className="font-semibold text-[#000f22]">{guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Tariff:</span>
                  <span className="font-bold text-[#d27200]">
                    {formatPrice(totalPriceUSD, currency)}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                A formal expedition itinerary with Chauffeur Guide contact and voucher details was dispatched to{' '}
                <strong className="text-black">{email}</strong>.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleFinish}
                  className="px-8 py-3 rounded-full bg-[#000f22] text-white font-bold text-[13px] tracking-wider uppercase hover:bg-[#1b6b4a] transition-colors cursor-pointer"
                >
                  Close & Explore More
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date & Guests Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                    Guests (Travelers)
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px] bg-white cursor-pointer"
                  >
                    <option value={1}>1 Solo Guest</option>
                    <option value={2}>2 Guests (Couple)</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Small Family)</option>
                    <option value={6}>6 Guests (Private Party)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Lead Traveler Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name as appears on passport"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Special Requests (Airport transfers, room style, dietary)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. King bed, vegetarian Ceylon curry, Colombo airport pickup..."
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                />
              </div>

              {/* Price Calculation Card */}
              <div className="p-4 bg-[#f5f3f0] rounded-2xl border border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 block">
                    {guests} × {formatPrice(tour.startingPriceUSD, currency)}:
                  </span>
                  <div className="text-[22px] font-serif font-bold text-[#000f22]">
                    {formatPrice(totalPriceUSD, currency)}
                  </div>
                </div>
                <div className="text-right text-xs text-[#1b6b4a] font-semibold">
                  <span>Includes all permits & chauffeur fees</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-gray-600 hover:bg-gray-100 text-[13px] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#d27200] hover:bg-[#b05f00] text-white font-bold text-[13px] tracking-wider uppercase transition shadow-md cursor-pointer active:scale-95"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
