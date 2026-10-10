import React, { useState } from 'react';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
}

export const CustomTripModal: React.FC<CustomTripModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [step, setStep] = useState<number>(1);
  const [interests, setInterests] = useState<string[]>([
    'Cultural Triangle & Sigiriya',
    'Scenic Blue Train & Highlands',
  ]);
  const [durationDays, setDurationDays] = useState<number>(10);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [luxuryTier, setLuxuryTier] = useState<string>('heritage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const estimatedBasePerPerson =
    luxuryTier === 'ultra'
      ? 180 * durationDays
      : luxuryTier === 'signature'
      ? 150 * durationDays
      : 125 * durationDays;

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `TC-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedRef(refCode);
  };

  const handleReset = () => {
    setConfirmedRef(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
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
            Bespoke Expedition Studio
          </span>
          <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold">
            Craft Your Custom Ceylon Journey
          </h2>
          <p className="text-[13px] text-white/80 mt-1">
            Collaborate directly with our native curators to sculpt a 100% tailor-made island voyage.
          </p>

          {/* Stepper Progress */}
          {!confirmedRef && (
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full flex-1 transition-colors ${
                    step >= s ? 'bg-[#d27200]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {confirmedRef ? (
            /* Confirmation View */
            <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#a3f0c6] text-[#1b6b4a] flex items-center justify-center mx-auto shadow-md">
                <span className="material-symbols-outlined text-3xl">done_all</span>
              </div>

              <h3 className="font-serif text-[26px] text-[#000f22] font-semibold">
                Ayubowan, {formData.name || 'Wanderer'}!
              </h3>
              <p className="text-[15px] text-[#43474d] max-w-md mx-auto leading-relaxed">
                Your bespoke Ceylon itinerary proposal request has been logged under priority VIP status.
              </p>

              <div className="p-4 bg-[#f5f3f0] rounded-2xl max-w-md mx-auto border border-black/5 text-left space-y-2 text-[13px]">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Expedition Dossier ID:</span>
                  <span className="font-mono font-bold text-[#000f22]">{confirmedRef}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Duration & Guests:</span>
                  <span className="font-semibold text-[#000f22]">{durationDays} Days · {guestCount} Guests</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-500">Estimated Total:</span>
                  <span className="font-bold text-[#d27200]">
                    {formatPrice(estimatedBasePerPerson * guestCount, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Concierge Desk:</span>
                  <span className="font-semibold text-[#1b6b4a]">Assigned Nuwan Senanayake</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                A personal itinerary draft with vehicle specifications and private bungalow options will be emailed to{' '}
                <strong className="text-black">{formData.email}</strong> within 4 business hours.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#000f22] text-white font-bold text-[13px] tracking-wider uppercase hover:bg-[#1b6b4a] transition-colors cursor-pointer"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Interests */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-[20px] font-semibold text-[#000f22] mb-1">
                      Step 1: Choose Your Desired Sanctuaries & Themes
                    </h3>
                    <p className="text-[13px] text-[#43474d]">
                      Select all regions and experiences you wish to incorporate into your voyage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Cultural Triangle & Sigiriya',
                      'Scenic Blue Train & Highlands',
                      'Yala Leopard Safari & Bundala',
                      'Galle Fort & Dutch Ramparts',
                      'Mirissa Blue Whale Marine Cruise',
                      'Ayurvedic Wellness & Panchakarma',
                      'Geoffrey Bawa Architectural Trail',
                      'Bentota Beach & Mangrove Islands',
                    ].map((interest) => {
                      const selected = interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-[13px] transition-all cursor-pointer ${
                            selected
                              ? 'border-[#1b6b4a] bg-[#1b6b4a]/5 font-bold text-[#1b6b4a] shadow-xs'
                              : 'border-gray-200 hover:border-gray-300 text-[#1b1c1a]'
                          }`}
                        >
                          <span>{interest}</span>
                          <span
                            className={`material-symbols-outlined text-base ${
                              selected ? 'text-[#1b6b4a]' : 'text-gray-300'
                            }`}
                          >
                            {selected ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Duration & Guests */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-[20px] font-semibold text-[#000f22] mb-1">
                      Step 2: Expedition Duration & Party Size
                    </h3>
                    <p className="text-[13px] text-[#43474d]">
                      Tailor your length of stay and number of companions.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-2">
                      Duration: {durationDays} Days / {durationDays - 1} Nights
                    </label>
                    <input
                      type="range"
                      min={3}
                      max={21}
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      className="w-full accent-[#d27200] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                      <span>3 Days (Short Escape)</span>
                      <span>10-14 Days (Grand Isle Tour)</span>
                      <span>21 Days (Full Immersion)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-2">
                      Number of Travelers
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {[1, 2, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestCount(num)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                            guestCount === num
                              ? 'border-[#000f22] bg-[#000f22] text-white font-bold'
                              : 'border-gray-200 hover:bg-gray-50 text-[#1b1c1a]'
                          }`}
                        >
                          <div className="text-lg font-serif">{num}</div>
                          <div className="text-[11px]">
                            {num === 1 ? 'Solo' : num === 2 ? 'Couple' : num <= 4 ? 'Family' : 'Group'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Luxury Level */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-[20px] font-semibold text-[#000f22] mb-1">
                      Step 3: Preferred Accommodation & Chauffeur Fleet
                    </h3>
                    <p className="text-[13px] text-[#43474d]">
                      Select your preferred standard of aristocratic living.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        id: 'heritage',
                        title: 'Colonial Heritage & Planter Bungalows',
                        desc: 'Authentic 19th-century Ceylon tea estates, restored Dutch villas, and luxury 4x4 SUVs.',
                        est: `$${125 * durationDays}/person`,
                      },
                      {
                        id: 'signature',
                        title: 'Signature 5-Star Boutique Lodges',
                        desc: 'Boutique architectural retreats (Uga, Heritance, Cape Weligama) with private executive Mercedes van.',
                        est: `$${150 * durationDays}/person`,
                      },
                      {
                        id: 'ultra',
                        title: 'Ultra-Luxury Private Sanctuaries & Heli Transfers',
                        desc: 'Private staffed villas, scenic helicopter jumps over Sigiriya, and dedicated private sommelier & naturalist.',
                        est: `$${180 * durationDays}/person`,
                      },
                    ].map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setLuxuryTier(tier.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          luxuryTier === tier.id
                            ? 'border-[#1b6b4a] bg-[#1b6b4a]/5 shadow-sm ring-1 ring-[#1b6b4a]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-serif font-bold text-[16px] text-[#000f22]">
                            {tier.title}
                          </h4>
                          <span className="text-[12px] font-bold text-[#d27200]">{tier.est}</span>
                        </div>
                        <p className="text-[13px] text-[#43474d]">{tier.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Submission */}
              {step === 4 && (
                <form onSubmit={handleFinish} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-[20px] font-semibold text-[#000f22] mb-1">
                      Step 4: Contact Information & Notes
                    </h3>
                    <p className="text-[13px] text-[#43474d]">
                      We will present an initial dossier within 4 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lady or Lord / Dr. / Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                      WhatsApp / Phone (For immediate chauffeur dispatch)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                      Special Desires or Dietary Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Honeymoon suite with private pool, vegan Ayurvedic dining, wheelchair assistance..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                    />
                  </div>

                  <div className="p-4 bg-[#fbf9f6] rounded-xl border border-black/5 text-[13px] flex items-center justify-between">
                    <div>
                      <span className="text-gray-500">Estimated Total ({guestCount} Guests, {durationDays} Days):</span>
                      <div className="text-[18px] font-bold text-[#000f22] font-serif">
                        {formatPrice(estimatedBasePerPerson * guestCount, currency)}
                      </div>
                    </div>
                    <span className="text-xs text-[#1b6b4a] font-semibold bg-[#a3f0c6] px-2.5 py-1 rounded-full">
                      Zero Booking Fee
                    </span>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer Navigation */}
        {!confirmedRef && (
          <div className="p-5 bg-[#f5f3f0] border-t border-black/5 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-full text-[#43474d] hover:bg-white text-[13px] font-semibold cursor-pointer"
              >
                Previous Step
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-[#43474d] hover:bg-white text-[13px] font-semibold cursor-pointer"
              >
                Cancel
              </button>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-7 py-2.5 rounded-full bg-[#000f22] hover:bg-[#1b6b4a] text-white text-[13px] font-bold tracking-wider uppercase transition shadow-sm cursor-pointer"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="px-8 py-2.5 rounded-full bg-[#d27200] hover:bg-[#b05f00] text-white text-[13px] font-bold tracking-wider uppercase transition shadow-md cursor-pointer"
              >
                Submit Custom Itinerary
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
