'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { siteConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin } from 'lucide-react';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [selectedZone, setSelectedZone] = useState(siteConfig.deliveryZones[0].area);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeZoneObj = siteConfig.deliveryZones.find((z) => z.area === selectedZone) || siteConfig.deliveryZones[0];
  const grandTotal = totalPrice + (cart.length > 0 ? activeZoneObj.price : 0);

  const handleSendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `Bonjour *Ashla Kids* 👋\n\nJe souhaite passer une commande :\n\n`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.product.name}*\n`;
      message += `   • Pointure / Taille : *${item.selectedSize}*\n`;
      if (item.selectedColor) {
        message += `   • Couleur : ${item.selectedColor}\n`;
      }
      message += `   • Quantité : ${item.quantity}\n`;
      message += `   • Prix : ${formatPriceFCFA(item.product.price * item.quantity)}\n\n`;
    });

    message += `──────────────\n`;
    message += `💰 *Sous-total :* ${formatPriceFCFA(totalPrice)}\n`;
    message += `🚚 *Livraison :* ${activeZoneObj.area} (+${formatPriceFCFA(activeZoneObj.price)})\n`;
    message += `⭐️ *TOTAL ESTIMÉ :* *${formatPriceFCFA(grandTotal)}*\n\n`;

    if (customerName.trim()) {
      message += `👤 *Nom du client :* ${customerName.trim()}\n`;
    }
    if (customerAddress.trim()) {
      message += `📍 *Adresse de livraison :* ${customerAddress.trim()}\n`;
    }

    message += `\nPouvez-vous me confirmer la disponibilité et le délai de livraison ? Merci !`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 !z-[999999] flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-[#FDFBF7]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#FF3864] flex items-center justify-center font-bold">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900 text-lg leading-none">Mon Panier Express</h3>
              <p className="text-xs text-gray-500 mt-1">{totalItems} article{totalItems > 1 ? 's' : ''} sélectionné{totalItems > 1 ? 's' : ''}</p>
            </div>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Fermer le panier"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-[#FFF9E6] text-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={28} />
              </div>
              <h4 className="font-serif text-lg font-bold text-gray-900">Votre panier est vide</h4>
              <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">
                Parcourez nos collections chaussures, vêtements et accessoires pour vos petits.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 inline-block bg-[#1A1D1A] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#FF3864] transition-colors"
              >
                Découvrir la boutique
              </button>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div className="space-y-3 divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="pt-3 first:pt-0 flex gap-3.5 items-center">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-gray-100 bg-white flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 truncate leading-snug">{item.product.name}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Taille : <span className="font-semibold text-gray-800">{item.selectedSize}</span>
                        {item.selectedColor && ` · ${item.selectedColor}`}
                      </p>
                      <p className="text-xs font-bold text-[#FF3864] mt-1">
                        {formatPriceFCFA(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-black"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold px-1">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-black"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Delete item */}
                    <button 
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      title="Supprimer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery Zone Selector */}
              <div className="pt-4 border-t border-gray-100">
                <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2">
                  <MapPin size={14} className="text-[#FF3864]" />
                  Zone de livraison (Dakar &amp; Régions)
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 font-medium focus:outline-none focus:border-[#FF3864]"
                >
                  {siteConfig.deliveryZones.map((zone) => (
                    <option key={zone.area} value={zone.area}>
                      {zone.area} — {formatPriceFCFA(zone.price)} ({zone.timeframe})
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Client Details */}
              <div className="space-y-2 pt-2">
                <input
                  type="text"
                  placeholder="Votre nom (facultatif)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#FF3864]"
                />
                <input
                  type="text"
                  placeholder="Votre quartier ou adresse à Dakar (facultatif)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#FF3864]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer with WhatsApp CTA */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-[#FDFBF7] space-y-3">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Sous-total articles :</span>
                <span className="font-semibold text-gray-900">{formatPriceFCFA(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frais de livraison :</span>
                <span className="font-semibold text-gray-900">+{formatPriceFCFA(activeZoneObj.price)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-900 pt-1.5 border-t border-gray-200">
                <span>Total estimé :</span>
                <span className="text-base text-[#FF3864] font-extrabold">{formatPriceFCFA(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all btn-bounce"
            >
              <Send size={15} />
              Commander sur WhatsApp
            </button>
            <p className="text-[10px] text-gray-400 text-center">
              Paiement Wave, Orange Money ou Espèces à la réception.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
