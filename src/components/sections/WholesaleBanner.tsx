import React from 'react';
import { siteConfig } from '@/config/site';
import { Package, MessageCircle, Truck, Check, Percent, ArrowRight } from 'lucide-react';

export default function WholesaleBanner() {
  return (
    <section id="gros" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FFF9E6] border-2 border-[#FFD166] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#B78103] text-white px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
            <Percent size={14} />
            Espace Revendeurs &amp; Boutiques
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] leading-tight">
            Vous tenez une boutique ou vendez en ligne ? Profitez de nos tarifs en Gros &amp; Demi-gros.
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
            Nous approvisionnons les commerces de Dakar et de toutes les régions du Sénégal en <strong>cartons de chaussures, lots de vêtements enfants, sacs de rentrée et layette bébé</strong> à des prix grossistes imbattables.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200">
              <p className="font-bold text-xs text-gray-900">📦 Lots Mixtes</p>
              <p className="text-xs text-gray-600 mt-1">Pointures &amp; coloris assortis prêts pour la revente.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200">
              <p className="font-bold text-xs text-gray-900">🚚 Expéditions Régions</p>
              <p className="text-xs text-gray-600 mt-1">Envois sécurisés par La Poste, GP ou transporteurs.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200">
              <p className="font-bold text-xs text-gray-900">💰 Marge Garantie</p>
              <p className="text-xs text-gray-600 mt-1">Prix dégressifs selon les volumes commandés.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, je souhaite obtenir votre catalogue et les tarifs en GROS pour revendeurs.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1D1A] hover:bg-[#FF3864] text-white px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all btn-bounce shadow-md"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>Demander le tarif de gros sur WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
