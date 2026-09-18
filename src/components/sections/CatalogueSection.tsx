'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Product, ProductCategory } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, MessageCircle, Check, Sparkles, Filter } from 'lucide-react';

export default function CatalogueSection() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const filterTabs = [
    { id: 'all', label: 'Toutes les créations' },
    { id: 'chaussures', label: 'Chaussures & Baskets' },
    { id: 'vetements', label: 'Vêtements & Ensembles' },
    { id: 'ceremonie', label: 'Robes & Cérémonies' },
    { id: 'sacs-accessoires', label: 'Sacs & Bérets' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? siteConfig.products
    : siteConfig.products.filter((p) => p.category === activeCategory);

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleColorChange = (productId: string, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const handleDirectWhatsApp = (product: Product) => {
    const size = selectedSizes[product.id] || (product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const color = selectedColors[product.id] || (product.colors && product.colors.length > 0 ? product.colors[0] : '');

    let text = `Bonjour Ashla Kids ! 👋\nJe souhaite commander l'article :\n• *${product.name}*\n• Taille/Pointure : *${size}*`;
    if (color) {
      text += `\n• Couleur souhaitée : ${color}`;
    }
    text += `\n• Prix : *${formatPriceFCFA(product.price)}*`;
    text += `\n\nEst-il disponible pour livraison à Dakar ?`;

    const url = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="boutique" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/60">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 bg-[#FFF0F3] text-[#FF3864] text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
          <Sparkles size={13} />
          Boutique &amp; Prêt-à-livrer
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1A1D1A]">
          La sélection coup de cœur de nos petits
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3">
          Des articles disponibles immédiatement en stock. Choisissez votre pointure ou taille et commandez en un clic.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === tab.id
                ? 'bg-[#1A1D1A] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const currentSize = selectedSizes[product.id] || (product.sizes.length > 0 ? product.sizes[0] : 'Unique');
          const currentColor = selectedColors[product.id] || (product.colors && product.colors.length > 0 ? product.colors[0] : '');

          return (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-4 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge placed outside inner overflow */}
                <div className="relative">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-[#FF3864] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">
                      {product.badge}
                    </div>
                  )}

                  {/* Clean white background image holder */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="pt-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-gray-900 text-base leading-snug group-hover:text-[#FF3864] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#1A1D1A]">
                      {formatPriceFCFA(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPriceFCFA(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Size / Pointure Selector */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        {product.category === 'chaussures' ? 'Pointures :' : 'Tailles :'}
                      </p>
                      <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto scrollbar-hide">
                        {product.sizes.map((s) => (
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

                  {/* Colors if available */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mt-2.5">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Coloris :
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {product.colors.map((c) => (
                          <button
                            key={c}
                            onClick={() => handleColorChange(product.id, c)}
                            className={`px-2 py-0.5 text-[9px] font-semibold rounded border ${
                              currentColor === c
                                ? 'bg-[#1A1D1A] text-white border-[#1A1D1A]'
                                : 'bg-gray-50 text-gray-600 border-gray-200'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="mt-5 pt-3 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => addToCart(product, currentSize, currentColor)}
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
                  <span>WhatsApp 1-Clic</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
