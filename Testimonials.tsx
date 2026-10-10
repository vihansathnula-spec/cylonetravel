import React, { useState } from 'react';
import { REVIEWS } from '../data/toursData';
import { Review } from '../types';

export const Testimonials: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    location: '',
    rating: 5,
    quote: '',
    tourTaken: 'Custom Ceylon Tour',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.quote) return;

    const createdReview: Review = {
      id: `review-${Date.now()}`,
      author: newReview.author,
      location: newReview.location || 'Global Wanderer',
      flag: '🌏',
      rating: newReview.rating,
      quote: `“${newReview.quote}”`,
      tourTaken: newReview.tourTaken,
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIcpyWAptNcYwVc7WPa36lPno6-gP145u9xz-5YTIo3AxLA1D7JS9W4GXQKKVZ2akQJ31jHsaGtkpgIimJNynJNoHyX1RvHbhPBYVweiSISZEV4vG5ux1Kv73ZD1p_K5LiEPS7iAIbEVXXtDbrrQdaYCSLHWj0m8KUWUhnEx5414_It9CiqL_O56aK3VqP5zT5qiSDw7CszFj6c4TlsgVoR1HH0PahPrVT07L7yfMx-fF9rkLIt4Ku',
      avatarAlt: 'Traveler avatar portrait',
      verified: true,
      date: 'Just now',
    };

    setReviewsList([createdReview, ...reviewsList]);
    setShowReviewModal(false);
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 5000);
  };

  return (
    <section className="w-full bg-[#efeeeb] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
            <span className="w-6 h-[2px] bg-[#1b6b4a]" />
            <span>Real Guest Experiences</span>
            <span className="w-6 h-[2px] bg-[#1b6b4a]" />
          </span>
          <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#000f22] tracking-tight font-semibold">
            Heartfelt Words From Our Travelers
          </h2>
          <p className="text-[15px] text-[#43474d] mt-2 leading-relaxed">
            Discover why couples, solo adventurers, and families rate us 4.96/5 across hundreds of expeditions.
          </p>

          {submittedMessage && (
            <div className="mt-4 p-3 bg-[#a3f0c6] text-[#002113] rounded-xl text-sm font-semibold inline-block">
              Ayubowan! Thank you for sharing your journey testimonial.
            </div>
          )}
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between relative border border-black/5 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#d27200] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="text-[12px] font-bold text-[#1b1c1a] ml-2">
                    {rev.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#43474d] italic mb-6">
                  {rev.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                <img
                  className="w-12 h-12 rounded-full object-cover shadow-inner ring-2 ring-[#eae8e5]"
                  src={rev.avatarUrl}
                  alt={rev.avatarAlt}
                />
                <div>
                  <h4 className="font-semibold text-[16px] text-[#000f22] leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-[13px] text-[#43474d] mt-0.5">
                    {rev.location} {rev.flag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action to share a review */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#eae8e5] text-[#000f22] text-[13px] font-semibold transition-colors border border-black/10 shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#d27200]">rate_review</span>
            <span>Share Your Travel Ceylon Story</span>
          </button>
        </div>
      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative border border-black/5">
            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <h3 className="font-serif text-[24px] text-[#000f22] font-semibold mb-2">
              Share Your Journey Review
            </h3>
            <p className="text-[13px] text-[#43474d] mb-6">
              Your stories guide fellow wanderers seeking authentic Ceylon expeditions.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor & Arthur Pendelton"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Location (City, Country)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sydney, Australia"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Rating
                </label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                >
                  <option value={5}>5.0 - Unforgettable Aristocratic Expedition</option>
                  <option value={4.8}>4.8 - Exceptional Journey & Service</option>
                  <option value={4.5}>4.5 - Wonderful Island Escape</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#43474d] mb-1">
                  Your Story or Feedback
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your encounters, highlights, and chauffeur guides..."
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d27200] text-[14px]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-5 py-2.5 rounded-full text-gray-600 hover:bg-gray-100 text-[13px] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#d27200] text-white hover:bg-[#b05f00] text-[13px] font-bold tracking-wider uppercase cursor-pointer shadow-md"
                >
                  Submit Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
