import React from 'react';
import { CURATED_EXPERIENCES } from '../data/toursData';
import { Experience } from '../types';

interface ExperiencesShowcaseProps {
  onSelectExperience: (exp: Experience) => void;
}

export const ExperiencesShowcase: React.FC<ExperiencesShowcaseProps> = ({
  onSelectExperience,
}) => {
  return (
    <section id="experiences" className="w-full bg-[#efeeeb]/70 py-24 border-y border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[#1b6b4a] font-bold text-[11px] uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-[#1b6b4a]" />
              <span>Signature Island Moments</span>
            </span>
            <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#000f22] tracking-tight font-semibold">
              Curated Ceylon Experiences
            </h2>
            <p className="text-[15px] text-[#43474d] mt-2 max-w-xl leading-relaxed">
              Rare privileges and private encounters crafted exclusively for our travelers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURATED_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <div
                  className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${exp.imageUrl}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#000f22] font-bold text-[11px] uppercase tracking-wider shadow-sm">
                    {exp.highlightTag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#000f22]/75 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#ffdcc3]">timer</span>
                  {exp.duration}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-[11px] font-bold text-[#1b6b4a] uppercase tracking-wider mb-2">
                  {exp.location}
                </div>
                <h3 className="font-serif text-[18px] text-[#000f22] mb-2 leading-snug group-hover:text-[#1b6b4a] transition-colors font-semibold">
                  {exp.title}
                </h3>
                <p className="text-[13px] text-[#43474d] line-clamp-3 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[12px] text-[#74777e] font-medium">{exp.category}</span>
                  <button
                    type="button"
                    onClick={() => onSelectExperience(exp)}
                    className="text-[13px] font-bold text-[#d27200] hover:text-[#b05f00] flex items-center gap-1 cursor-pointer"
                  >
                    Experience Details{' '}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
