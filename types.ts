export type CurrencyCode = 'USD' | 'EUR' | 'LKR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to USD
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string;
  highlights?: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  category: 'heritage' | 'highlands' | 'wildlife' | 'coastal';
  region: string;
  duration: string;
  daysCount: number;
  rating: number;
  reviewCount: number;
  badge: {
    label: string;
    variant: 'bestseller' | 'iconic' | 'seasonal' | 'wildlife';
  };
  startingPriceUSD: number;
  imageUrl: string;
  imageAlt: string;
  description: string;
  inclusions: string[];
  days: DayItinerary[];
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  climate: string;
  climateIcon: string;
  season: string;
  sightsCount: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
  bestTime: string;
  recommendedTours: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  description: string;
  imageUrl: string;
  highlightTag: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  flag: string;
  rating: number;
  quote: string;
  tourTaken: string;
  avatarUrl: string;
  avatarAlt: string;
  verified: boolean;
  date: string;
}

export interface SearchState {
  destination: string;
  style: string;
  duration: string;
  travelers: string;
}
