import React from 'react';
import { siteConfig } from '@/config/site';
import { ArrowRight, Footprints, Shirt, Sparkles, Backpack, Package } from 'lucide-react';

const categoryImages: Record<string, string> = {
  chaussures: "/images/products/baskets-sneakers-retro.jpg",
  vetements: "/images/products/ensemble-duo-chemisier.jpg",
  ceremonie: "/images/products/robe-princesse-noeud-dos.jpg",
  "sacs-accessoires": "/images/products/sac-mickey-minnie.jpg",
  "gros-puériculture": "/images/products/derbies-ville-cuir.jpg",
};

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3864]">
            L&apos;Univers Ashla Kids
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] mt-1">
            Découvrez nos rayons coups de cœur
          </h2>
        </div>
        <p className="text-sm text-gray-600 max-w-md">
          Chaque catégorie regroupe des pièces sélectionnées pour leur résistance, leur confort et leur style irréprochable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {siteConfig.categories.map((cat) => (
          <a
            key={cat.id}
            href={`#boutique`}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col btn-bounce"
          >
            {/* Image Box */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#FDFBF7]">
              <img
                src={categoryImages[cat.id] || "/images/products/baskets-retro-collection.jpg"}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Label and Count */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white">
              <div>
                <span className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${cat.tagColor} mb-1.5`}>
                  {cat.count}
                </span>
                <h3 className="font-serif font-bold text-gray-900 text-base group-hover:text-[#FF3864] transition-colors leading-snug">
                  {cat.label}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-bold text-gray-500 group-hover:text-[#FF3864] pt-2 border-t border-gray-100">
                <span>Voir les articles</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
