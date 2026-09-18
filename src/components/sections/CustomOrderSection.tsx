'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { MessageCircle, Send, Sparkles } from 'lucide-react';

export default function CustomOrderSection() {
  const [itemName, setItemName] = useState('');
  const [sizeOrAge, setSizeOrAge] = useState('');
  const [category, setCategory] = useState('Chaussures');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `Bonjour Ashla Kids 👋\n\nJe recherche un article spécifique :\n`;
    message += `• Catégorie : *${category}*\n`;
    if (itemName) message += `• Modèle souhaité : *${itemName}*\n`;
    if (sizeOrAge) message += `• Pointure ou Âge de l'enfant : *${sizeOrAge}*\n`;
    if (notes) message += `• Précisions / Couleur : ${notes}\n`;
    message += `\nAvez-vous ce modèle ou des propositions similaires en boutique ? Merci !`;

    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3864]">
            Service Sur-Mesure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] leading-tight">
            Vous cherchez un modèle ou une pointure précise ?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Envoyez-nous la photo ou la description du vêtement ou de la paire de chaussures que vous désirez. Notre équipe vérifie instantanément le stock disponible à Dakar.
          </p>
          <div className="pt-2 text-xs text-gray-500 space-y-1">
            <p>💬 Réponse rapide sur WhatsApp : <strong>{siteConfig.phonePrimary}</strong></p>
            <p>📍 Retrait boutique ou livraison partout à Dakar</p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                  Rayon concerné
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-gray-900 font-medium focus:outline-none focus:border-[#FF3864]"
                >
                  <option value="Chaussures & Baskets">Chaussures &amp; Baskets</option>
                  <option value="Vêtements & Ensembles">Vêtements &amp; Ensembles</option>
                  <option value="Robes & Cérémonies">Robes &amp; Cérémonies</option>
                  <option value="Sacs de Maternelle">Sacs de Maternelle</option>
                  <option value="Bérets & Accessoires">Bérets &amp; Accessoires</option>
                  <option value="Layette Bébé & Gros">Layette Bébé &amp; Gros</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                  Pointure ou Âge de l&apos;enfant
                </label>
                <input
                  type="text"
                  placeholder="Ex: Pointure 28 ou 4 ans"
                  value={sizeOrAge}
                  onChange={(e) => setSizeOrAge(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#FF3864]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                Article ou style recherché
              </label>
              <input
                type="text"
                placeholder="Ex: Baskets rétro rouges ou robe princesse bleu ciel"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#FF3864]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                Précisions supplémentaires
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Besoin pour ce samedi, livraison Almadies..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#FF3864]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A1D1A] hover:bg-[#FF3864] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors btn-bounce shadow-md"
            >
              <Send size={15} />
              <span>Vérifier la disponibilité sur WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
