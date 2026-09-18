import React from 'react';

const marqueeItems = [
  "✨ Vente au Détail & En Gros",
  "👟 Baskets & Chaussures (Pointures 21 à 36)",
  "👗 Robes de Princesse & Cérémonie",
  "🎒 Sacs Maternelle Matelassés Disney",
  "🌸 Bérets Tricotés à Fleurs 3D",
  "🚚 Livraison Express Dakar & Régions",
  "💳 Paiement Wave & Orange Money",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-[#1A1D1A] text-white py-3.5 overflow-hidden border-y border-white/10">
      <div className="animate-marquee whitespace-nowrap">
        {marqueeItems.concat(marqueeItems).map((item, index) => (
          <span key={index} className="inline-flex items-center mx-6">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/90">
              {item}
            </span>
            <span className="ml-6 text-[#FFD166] text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
