'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Product } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  // Display top 4 popular items on home page
  const featured = siteConfig.products.filter((p) => p.isPopular).slice(0, 4);

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleDirectWhatsApp = (product: Product) => {
    const size = selectedSizes[product.id] || (product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const text = `Bonjour Ashla Kids ! 👋\nJe souhaite commander le modèle vedette : *${product.name}* (Taille : ${size}, Prix : ${formatPriceFCFA(product.price)}). Est-il disponible pour livraison à Dakar ?`;
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#FF3864]">
            <Sparkles size={13} />
            Les Incontournables
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] mt-1">
            Les Coups de Cœur de la Semaine
          </h2>
        </div>

        <Link
          href="/boutique"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3864] hover:underline"
        >
          <span>Accéder à toute la boutique ({siteConfig.products.length} articles)</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => {
          const currentSize = selectedSizes[product.id] || (product.sizes.length > 0 ? product.sizes[0] : 'Unique');

          return (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-4 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-[#FF3864] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">
                      {product.badge}
                    </div>
                  )}

                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base leading-snug group-hover:text-[#FF3864] transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#1A1D1A]">
                      {formatPriceFCFA(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPriceFCFA(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        {product.category === 'chaussures' ? 'Pointures :' : 'Tailles :'}
                      </p>
                      <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto scrollbar-hide">
                        {product.sizes.slice(0, 6).map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSizeChange(product.id, s)}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-md border transition-all ${
                              currentSize === s
                                ? 'bg-[#FF3864] text-white border-[#FF3864]'
                                : 'bg-[#FDFBF7] text-gray-700 border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => addToCart(product, currentSize)}
                  className="w-full bg-[#1A1D1A] hover:bg-[#FF3864] text-white py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <ShoppingBag size={14} />
                  <span>Ajouter au Panier</span>
                </button>

                <button
                  onClick={() => handleDirectWhatsApp(product)}
                  className="w-full bg-[#E8F8F5] hover:bg-[#25D366] text-[#1E9589] hover:text-white py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp direct</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Boutique Banner Link */}
      <div className="mt-12 text-center">
        <Link
          href="/boutique"
          className="inline-flex items-center gap-2.5 bg-[#FF3864] hover:bg-[#E02854] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/20 transition-all btn-bounce"
        >
          <span>Explorer toute la Boutique Ashla Kids</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
