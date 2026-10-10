import { CURRENCY_RATES } from '../data/toursData';
import { CurrencyCode } from '../types';

export function formatPrice(priceUSD: number, currency: CurrencyCode = 'USD'): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = Math.round(priceUSD * config.rate);

  if (currency === 'LKR') {
    return `Rs. ${converted.toLocaleString()}`;
  }
  return `${config.symbol}${converted.toLocaleString()}`;
}
