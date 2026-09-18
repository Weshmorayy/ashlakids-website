'use client';

import React, { useState, useMemo } from 'react';
import { siteConfig } from '@/config/site';
import { Product } from '@/types';
import { formatPriceFCFA } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Search, X, ShoppingBag, MessageCircle, SlidersHorizontal, Sparkles, RotateCcw } from 'lucide-react';

export default function BoutiqueCatalogue() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const categories = [
    { id: 'all', label: 'Tous les rayons' },
    { id: 'chaussures', label: 'Chaussures & Baskets' },
    { id: 'vetements', label: 'Vêtements & Ensembles' },
    { id: 'ceremonie', label: 'Robes & Cérémonies' },
    { id: 'sacs-accessoires', label: 'Sacs & Bérets' },
  ];

  const allAvailableSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    siteConfig.products.forEach((p) => {
      p.sizes.forEach((s) => sizeSet.add(s));
    });
    return Array.from(sizeSet);
  }, []);

  const filteredProducts = useMemo(() => {
    return siteConfig.products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Size filter
        if (selectedSizeFilter !== 'all' && !product.sizes.includes(selectedSizeFilter)) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchCategory = product.category.toLowerCase().includes(q);
          const matchSizes = product.sizes.some((s) => s.toLowerCase().includes(q));
          const matchColors = product.colors?.some((c) => c.toLowerCase().includes(q));
          const matchFeatures = product.features?.some((f) => f.toLowerCase().includes(q));

          if (!matchName && !matchDesc && !matchCategory && !matchSizes && !matchColors && !matchFeatures) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0; // featured default
      });
  }, [searchQuery, selectedCategory, selectedSizeFilter, sortBy]);

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
      text += `\n• Couleur : ${color}`;
    }
    text += `\n• Prix : *${formatPriceFCFA(product.price)}*`;
    text += `\n\nEst-il disponible pour livraison à Dakar ?`;

    const url = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSizeFilter('all');
    setSortBy('featured');
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Search Bar & Primary Filters */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4 mb-10">
        {/* Real-time Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par mot-clé, article, pointure (ex: baskets, derbies, 28, robe, mickey)..."
            className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#FF3864] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              title="Effacer la recherche"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF3864] text-white shadow-sm'
                    : 'bg-[#FDFBF7] text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
            <span>Trier :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FDFBF7] border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-800 font-semibold focus:outline-none focus:border-[#FF3864]"
            >
              <option value="featured">Sélection vedette</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Quick Pointure Filter Pills */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
            Pointure/Taille :
          </span>
          <button
            onClick={() => setSelectedSizeFilter('all')}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all ${
              selectedSizeFilter === 'all'
                ? 'bg-[#1A1D1A] text-white border-[#1A1D1A]'
                : 'bg-[#FDFBF7] text-gray-600 border-gray-200'
            }`}
          >
            Toutes
          </button>
          {allAvailableSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSizeFilter(size)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border whitespace-nowrap transition-all ${
                selectedSizeFilter === size
                  ? 'bg-[#1A1D1A] text-white border-[#1A1D1A]'
                  : 'bg-[#FDFBF7] text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-xs sm:text-sm font-bold text-gray-700">
          <span className="text-[#FF3864] font-extrabold">{filteredProducts.length}</span> article{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
          {searchQuery && <span> pour &ldquo;{searchQuery}&rdquo;</span>}
        </p>

        {(searchQuery || selectedCategory !== 'all' || selectedSizeFilter !== 'all') && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#FF3864] font-semibold transition-colors"
          >
            <RotateCcw size={13} />
            <span>Réinitialiser les filtres</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-md mx-auto my-12">
          <div className="w-14 h-14 bg-[#FFF0F3] text-[#FF3864] rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} />
          </div>
          <h3 className="font-serif font-bold text-lg text-gray-900">Aucun article trouvé</h3>
          <p className="text-xs text-gray-500 mt-1 mb-6">
            Essayez un autre mot-clé ou réinitialisez les filtres pour voir tout le catalogue.
          </p>
          <button
            onClick={resetFilters}
            className="bg-[#1A1D1A] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#FF3864] transition-colors"
          >
            Voir tous les articles
          </button>
        </div>
      )}

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
                {/* Image Holder with Badge */}
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

                {/* Details */}
                <div className="pt-4">
                  <h3 className="font-serif font-bold text-gray-900 text-base leading-snug group-hover:text-[#FF3864] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

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

                  {/* Size Selector */}
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

                  {/* Colors */}
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

              {/* Action Buttons */}
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
