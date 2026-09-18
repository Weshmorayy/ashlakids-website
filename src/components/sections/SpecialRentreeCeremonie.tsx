import React from 'react';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function SpecialRentreeCeremonie() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#1A1D1A] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Playful background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3864]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD166]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FFD166]">
              <Sparkles size={14} />
              Spécial Rentrée &amp; Cérémonies
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
              Des tenues qui marquent les esprits et durent toute l&apos;année.
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Pour le premier jour d&apos;école, un anniversaire ou le baptême de famille : nous combinons robustesse des matières, élégance des coupes et confort total pour que vos enfants soient libres de jouer et d&apos;apprendre.
            </p>

            {/* Checklist highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 size={18} className="text-[#FFD166] flex-shrink-0" />
                <span><strong>Sacs Maternelle Disney matelassés</strong> adaptés aux petites épaules (8.000 F)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 size={18} className="text-[#FFD166] flex-shrink-0" />
                <span><strong>Derbies et Baskets ville</strong> en semelles amortissantes (Dès 7.500 F)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 size={18} className="text-[#FFD166] flex-shrink-0" />
                <span><strong>Robes de princesse à tulle &amp; grand nœud</strong> avec jupon intégré</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#boutique"
                className="bg-[#FF3864] hover:bg-[#E02854] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all btn-bounce shadow-lg shadow-pink-500/25"
              >
                Découvrir la sélection
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, je cherche des articles pour la rentrée / une cérémonie !")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Conseil personnalisé
              </a>
            </div>
          </div>

          {/* Right: Asymmetric Photo Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg aspect-[3/4]">
                <img
                  src="/images/products/robe-princesse-bleu-tulle.jpg"
                  alt="Robe Princesse Ashla Kids"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg aspect-[4/3]">
                <img
                  src="/images/products/derbies-ville-noir.jpg"
                  alt="Chaussures de Ville Ashla Kids"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg aspect-[4/3]">
                <img
                  src="/images/products/sac-mickey-minnie.jpg"
                  alt="Sac Maternelle Ashla Kids"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg aspect-[3/4]">
                <img
                  src="/images/products/berets-fleurs-couleurs.jpg"
                  alt="Bérets Fleurs 3D Ashla Kids"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
