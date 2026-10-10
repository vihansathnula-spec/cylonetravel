/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookingModal } from './components/BookingModal';
import { CustomTripModal } from './components/CustomTripModal';
import { DestinationModal } from './components/DestinationModal';
import { DestinationsShowcase } from './components/DestinationsShowcase';
import { ExperiencesShowcase } from './components/ExperiencesShowcase';
import { FeaturedTours } from './components/FeaturedTours';
import { Footers } from './components/Footers';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ItineraryModal } from './components/ItineraryModal';
import { Newsletter } from './components/Newsletter';
import { SearchModal } from './components/SearchModal';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WildlifeAndCultureSections } from './components/WildlifeAndCultureSections';
import { DESTINATIONS, TOUR_PACKAGES } from './data/toursData';
import { CurrencyCode, Destination, Experience, SearchState, TourPackage } from './types';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [activeNav, setActiveNav] = useState<string>('destinations');

  // Modal States
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingTour, setBookingTour] = useState<TourPackage | null>(null);
  const [bookingTravelers, setBookingTravelers] = useState<number>(2);
  const [isCustomTripOpen, setIsCustomTripOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Handle Hero Search submission
  const handleHeroSearch = (params: SearchState) => {
    // Map selected destination to a tour
    let matchedTour = TOUR_PACKAGES.find((t) =>
      t.id.includes(params.destination) || t.category === params.style
    );

    if (!matchedTour) {
      matchedTour = TOUR_PACKAGES[0];
    }

    const guests = parseInt(params.travelers, 10) || 2;
    setBookingTravelers(guests);
    setBookingTour(matchedTour);
  };

  const handleSelectTourById = (tourId: string) => {
    const tour = TOUR_PACKAGES.find((t) => t.id === tourId) || TOUR_PACKAGES[0];
    setSelectedTour(tour);
  };

  const handleExperienceClick = (exp: Experience) => {
    // Open corresponding tour or Custom Trip Modal with this experience
    const matchedTour = TOUR_PACKAGES.find((t) =>
      t.title.toLowerCase().includes(exp.location.toLowerCase().split(' ')[0]) ||
      t.category.toLowerCase().includes(exp.category.toLowerCase().split(' ')[0])
    );
    if (matchedTour) {
      setSelectedTour(matchedTour);
    } else {
      setIsCustomTripOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] flex flex-col font-sans selection:bg-[#d27200]/20 selection:text-[#000f22]">
      {/* Fixed Sticky Header */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenPlanCustomTrip={() => setIsCustomTripOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Layout */}
      <main className="w-full pt-20 bg-[#fbf9f6] min-h-screen flex flex-col">
        {/* 1. Hero Section with Search Engine & Trust Badges */}
        <Hero onSearchSubmit={handleHeroSearch} />

        {/* 2. Featured Handcrafted Journeys with Filter Tabs */}
        <FeaturedTours
          currency={currency}
          onSelectTour={(tour) => setSelectedTour(tour)}
        />

        {/* 3. Popular Destinations Carousel & Climate Tags */}
        <DestinationsShowcase
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* 4. Why Discerning Travelers Choose Travel Ceylon (3-Column Proposition) */}
        <WhyChooseUs />

        {/* 5. Signature Experiences Showcase */}
        <ExperiencesShowcase onSelectExperience={handleExperienceClick} />

        {/* 6. Wildlife Sanctuaries & Sacred Cultural Heritage Sections */}
        <WildlifeAndCultureSections
          onExploreHeritageTours={() => {
            const el = document.getElementById('curated-tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreWildlifeTours={() => {
            const el = document.getElementById('curated-tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectTourById={handleSelectTourById}
        />

        {/* 7. Real Guest Stories & Testimonials with Interactive Review Creation */}
        <Testimonials />

        {/* 8. Newsletter Signup Banner */}
        <Newsletter />

        {/* 9. Comprehensive Footers */}
        <Footers
          onOpenPlanCustomTrip={() => setIsCustomTripOpen(true)}
        />
      </main>

      {/* MODALS */}

      {/* Itinerary Modal */}
      <ItineraryModal
        tour={selectedTour}
        currency={currency}
        onClose={() => setSelectedTour(null)}
        onBookTour={(tour) => {
          setSelectedTour(null);
          setBookingTour(tour);
        }}
      />

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onSelectTour={(tour) => setSelectedTour(tour)}
      />

      {/* Booking Checkout Modal */}
      <BookingModal
        isOpen={Boolean(bookingTour)}
        tour={bookingTour}
        currency={currency}
        initialTravelers={bookingTravelers}
        onClose={() => setBookingTour(null)}
      />

      {/* Plan Custom Trip Wizard Modal */}
      <CustomTripModal
        isOpen={isCustomTripOpen}
        currency={currency}
        onClose={() => setIsCustomTripOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        currency={currency}
        onClose={() => setIsSearchOpen(false)}
        onSelectTour={(tour) => setSelectedTour(tour)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />
    </div>
  );
}
