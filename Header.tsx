import React, { useState } from 'react';
import { LOGO_URL, USER_AVATAR_URL } from '../data/toursData';
import { CurrencyCode } from '../types';

interface HeaderProps {
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenPlanCustomTrip: () => void;
  onOpenSearch: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyChange,
  onOpenPlanCustomTrip,
  onOpenSearch,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (navId: string, anchorId: string) => {
    setActiveNav(navId);
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbf9f6]/90 backdrop-blur-xl border-b border-[#000f22]/5 shadow-[0_12px_32px_-4px_rgba(10,37,64,0.07)] transition-all">
      <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveNav('destinations');
            }}
            className="flex items-center gap-3 group"
          >
            <img
              alt="Travel Ceylon Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
            />
            <span className="font-serif text-[22px] leading-tight tracking-tight text-[#000f22] font-semibold">
              Travel Ceylon
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <button
            type="button"
            onClick={() => handleNavClick('destinations', 'destinations')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'destinations' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            Destinations
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('curated-tours', 'curated-tours')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'curated-tours' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            Curated Tours
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('experiences', 'experiences')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'experiences' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            Experiences
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('wildlife', 'wildlife-nature')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'wildlife' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            Wildlife & Nature
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('cultural', 'cultural-heritage')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'cultural' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            Cultural Heritage
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about', 'about-ceylon')}
            className={`text-[13px] font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
              activeNav === 'about' ? 'text-[#000f22] font-bold' : 'text-[#43474d] hover:text-[#000f22]'
            }`}
          >
            About Ceylon
          </button>
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Currency Selector */}
          <div className="flex items-center bg-[#f5f3f0] hover:bg-[#eae8e5] rounded-full px-3 py-1.5 transition-colors border border-[#000f22]/5">
            <label htmlFor="currency-select" className="sr-only">
              Select Currency
            </label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="bg-transparent text-[11px] font-bold tracking-wider text-[#1b1c1a] focus:outline-none cursor-pointer pr-1"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="LKR">LKR (Rs)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>

          {/* Search Trigger Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search Expeditions"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#43474d] hover:bg-[#efeeeb] hover:text-[#1b1c1a] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          {/* Primary CTA: Plan Custom Trip */}
          <button
            type="button"
            onClick={onOpenPlanCustomTrip}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#d27200] hover:bg-[#b05f00] text-white text-[13px] font-semibold tracking-wider shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
          >
            Plan Custom Trip
          </button>

          {/* Profile / Concierge Access */}
          <button
            type="button"
            onClick={onOpenPlanCustomTrip}
            title="VIP Travel Concierge Desk"
            className="flex items-center cursor-pointer p-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d27200]"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#eae8e5]"
              src={USER_AVATAR_URL}
            />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#1b1c1a] hover:bg-[#efeeeb] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f6] border-b border-[#000f22]/10 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => handleNavClick('destinations', 'destinations')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              Destinations
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('curated-tours', 'curated-tours')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              Curated Tours
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('experiences', 'experiences')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              Experiences
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('wildlife', 'wildlife-nature')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              Wildlife & Nature
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('cultural', 'cultural-heritage')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              Cultural Heritage
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about', 'about-ceylon')}
              className="text-left text-base font-semibold text-[#1b1c1a] py-2 border-b border-[#000f22]/5"
            >
              About Ceylon
            </button>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanCustomTrip();
                }}
                className="w-full py-3 rounded-full bg-[#d27200] text-white font-semibold text-center tracking-wider"
              >
                Plan Custom Trip
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
