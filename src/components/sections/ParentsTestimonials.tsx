import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ParentsTestimonials() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3864] mb-2">
              <Star size={14} className="fill-[#FF3864]" />
              <span>Avis Vérifiés des Parents</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A]">
              Ce que disent les mamans &amp; papas
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#FDFBF7] px-4 py-2 rounded-2xl border border-gray-200/80">
            <div className="flex text-[#FFD166]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#FFD166]" />
              ))}
            </div>
            <span className="text-xs font-black text-[#1A1D1A]">4.9 / 5 sur Dakar</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] p-7 rounded-3xl border border-gray-200/70 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <Quote size={28} className="text-[#FF3864]/20 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                <div>
                  <h4 className="font-bold text-xs text-[#1A1D1A]">{testi.name}</h4>
                  <p className="text-[11px] text-gray-500">📍 {testi.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#06D6A0]">
                  <CheckCircle2 size={13} />
                  <span>Achat vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
