import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFD166]/20 text-[#1A1D1A] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            <Sparkles size={14} className="text-[#FF3864]" />
            <span>L&apos;Univers Ashla Kids Dakar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1D1A] leading-tight">
            Des tenues conçues pour faire briller vos enfants en toute liberté.
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Installée au cœur de Dakar, la maison Ashla Kids sélectionne avec amour des pièces qui allient élégance européenne, tissus doux adaptés au climat tropical et finitions irréprochables — de la layette premier âge jusqu&apos;à 12 ans.
          </p>
        </div>

        {/* 3 Immersive Universe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Cérémonie */}
          <div className="group relative bg-[#FDFBF7] rounded-3xl overflow-hidden border border-gray-200/70 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-white mb-6 relative">
                <img
                  src="/images/products/robe-princesse-bleu-tulle.jpg"
                  alt="Robes de princesse et cérémonies Ashla Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#FF3864] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Cérémonie &amp; Fêtes
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1D1A] mb-2">
                Les Grands Jours &amp; Fêtes
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Robes féeriques en tulle vaporeux, détails de dentelle délicate et costumes raffinés pour baptêmes, anniversaires et sorties du dimanche.
              </p>
            </div>
            <Link
              href="/boutique?cat=Robes%20%26%20C%C3%A9r%C3%A9monie"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3864] group-hover:translate-x-1 transition-transform"
            >
              <span>Voir la collection Cérémonie</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: Baskets & École */}
          <div className="group relative bg-[#FDFBF7] rounded-3xl overflow-hidden border border-gray-200/70 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-white mb-6 relative">
                <img
                  src="/images/products/baskets-retro-collection.jpg"
                  alt="Baskets et derbies enfants Dakar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#1A1D1A] text-[#FFD166] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Pointures 21 à 36
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1D1A] mb-2">
                Baskets Rétro &amp; Chaussures Ville
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Semelles souples antichocs, cuirs soignés et velcros faciles à enfiler. La robustesse indispensable pour l&apos;école et les terrains de jeu.
              </p>
            </div>
            <Link
              href="/boutique?cat=Chaussures%20%26%20Baskets"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3864] group-hover:translate-x-1 transition-transform"
            >
              <span>Voir les Baskets &amp; Souliers</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3: Accessoires & Disney */}
          <div className="group relative bg-[#FDFBF7] rounded-3xl overflow-hidden border border-gray-200/70 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-white mb-6 relative">
                <img
                  src="/images/products/sac-mickey-minnie.jpg"
                  alt="Sacs Disney et bérets fleurs 3D"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#06D6A0] text-[#1A1D1A] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Coups de Cœur
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1D1A] mb-2">
                Sacs Maternelle &amp; Bérets Fleurs
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Mini-sacs à dos Mickey &amp; Minnie ultra-légers et bérets en laine aux fleurs tridimensionnelles brodées à la main.
              </p>
            </div>
            <Link
              href="/boutique?cat=Sacs%20%26%20Accessoires"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3864] group-hover:translate-x-1 transition-transform"
            >
              <span>Voir les Accessoires</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
