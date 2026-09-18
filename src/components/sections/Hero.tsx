'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Truck, Package, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF9F2] to-[#FDFBF7] pt-8 pb-16 md:py-20 border-b border-gray-200/60">
      {/* Decorative background playful soft orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FF3864]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF0F3] border border-[#FF3864]/20 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF3864] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3864]">
                Nouvelle Collection Enfants &amp; Bébés 2026
              </span>
            </div>

            {/* Main Headline with Burstiness & Personality */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1D1A] font-extrabold leading-[1.12] tracking-tight">
              Habillez leurs plus beaux moments avec{' '}
              <span className="relative inline-block text-[#FF3864]">
                style &amp; douceur.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD166]/60 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle with Real Concrete Details */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              De la paire de baskets rétro pour l&apos;école aux robes de princesse pour les cérémonies, des ensembles chic aux sacs de maternelle. 
              Tout pour sublimer vos enfants de <strong>3 mois à 12 ans</strong> à Dakar, au <strong>détail comme en gros</strong>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/boutique"
                className="bg-[#FF3864] hover:bg-[#E02854] text-white px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-pink-500/25 transition-all btn-bounce"
              >
                <ShoppingBag size={16} />
                <span>Voir le catalogue</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, je souhaite voir les articles disponibles en boutique !")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border-2 border-gray-200 text-[#1A1D1A] px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all btn-bounce"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* Live Key Metrics / Trust Chips */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-gray-200/80">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Pointures</p>
                <p className="text-sm font-extrabold text-gray-900 mt-0.5">21 au 36</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Livraison</p>
                <p className="text-sm font-extrabold text-[#FF3864] mt-0.5">Dakar &amp; Régions</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Formule</p>
                <p className="text-sm font-extrabold text-gray-900 mt-0.5">Gros &amp; Détail</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Lookbook Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main big showcase card */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                <img
                  src="/images/products/baskets-retro-collection.jpg"
                  alt="Baskets Rétro Ashla Kids"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Floating sticker badge */}
                <div className="absolute top-4 right-4 bg-[#FFD166] text-[#1A1D1A] px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Dès 7.500 F</span>
                </div>

                {/* Bottom card content */}
                <div className="p-5 bg-gradient-to-t from-white via-white to-white/95">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF3864]">
                        Spécial Rentrée &amp; Sorties
                      </span>
                      <h3 className="font-serif text-lg font-bold text-gray-900">Baskets Rétro Multicolores</h3>
                    </div>
                    <span className="text-xs bg-gray-100 font-bold px-2.5 py-1 rounded-lg text-gray-800">
                      Du 23 au 36
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating secondary cards for depth */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[220px] hidden sm:flex">
                <img
                  src="/images/products/sac-mickey-minnie.jpg"
                  alt="Sac Disney Maternelle"
                  className="w-14 h-14 object-cover rounded-xl bg-gray-50 flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">Maternelle</p>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Sac Mickey &amp; Minnie</p>
                  <p className="text-xs font-extrabold text-[#FF3864] mt-0.5">8.000 F CFA</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#1A1D1A] text-white p-3 rounded-2xl shadow-xl max-w-[200px] hidden sm:flex items-center gap-3">
                <img
                  src="/images/products/robe-princesse-noeud-dos.jpg"
                  alt="Robe Princesse Cérémonie"
                  className="w-12 h-12 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                  <p className="text-[9px] font-bold text-[#FFD166] uppercase tracking-wider">Cérémonie</p>
                  <p className="text-xs font-bold text-white leading-tight">Robes Féeriques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
