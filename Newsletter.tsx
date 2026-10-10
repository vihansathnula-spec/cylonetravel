import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 -mb-12 relative z-20">
      <div className="bg-[#000f22] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
        {/* Decorative Backdrop Graphics */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#1b6b4a]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#d27200]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl text-left">
          <span className="text-[11px] font-bold text-[#d27200] uppercase tracking-widest">
            Exclusive Ceylon Dispatches
          </span>
          <h3 className="font-serif text-[28px] md:text-[36px] text-white mt-2 mb-3 leading-tight font-semibold">
            Receive Our Curated Ceylon Travel Guide & Seasonal Offers
          </h3>
          <p className="text-[15px] text-white/80 leading-relaxed font-light">
            Join 28,000+ wanderers receiving secret villa previews, seasonal weather forecasts, and private rail schedule releases.
          </p>
        </div>

        <div className="relative z-10 w-full lg:max-w-md">
          {subscribed ? (
            <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center animate-in fade-in duration-300">
              <span className="material-symbols-outlined text-3xl text-[#a6f3c9] mb-1">
                check_circle
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-1">
                Ayubowan & Welcome!
              </h4>
              <p className="text-xs text-white/90">
                Our 2026 Ceylon Expedition Field Guide & Secret Rail Map has been dispatched to{' '}
                <span className="font-bold underline">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email..."
                className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#1b1c1a] text-[15px] placeholder:text-[#74777e] focus:outline-none focus:ring-2 focus:ring-[#d27200] shadow-inner"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#d27200] hover:bg-[#b05f00] text-white text-[13px] font-bold tracking-wider uppercase transition shadow-md whitespace-nowrap cursor-pointer active:scale-95"
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="mt-2.5 text-white/60 text-[11px] text-center sm:text-left">
            No spam, strictly island stories. Unsubscribe anytime with one tap.
          </div>
        </div>
      </div>
    </section>
  );
};
