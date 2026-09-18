import React from 'react';
import { siteConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';
import { Truck, MapPin, Clock, ShieldCheck, CreditCard, Banknote } from 'lucide-react';

export default function DeliveryInfoSection() {
  return (
    <section id="livraison" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/60">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF3864]">
          Transparence &amp; Rapidité
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A] mt-1">
          Zones de Livraison à Dakar &amp; Sénégal
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Recevez vos articles directement à votre domicile ou point relais dans les meilleurs délais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Delivery Rates Table */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <Truck className="text-[#FF3864]" size={20} />
            Tarifs et délais d&apos;expédition
          </h3>

          <div className="divide-y divide-gray-100">
            {siteConfig.deliveryZones.map((zone) => (
              <div key={zone.area} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">{zone.area}</p>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock size={11} />
                      {zone.timeframe}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right pl-6 sm:pl-0">
                  <span className="inline-block bg-[#FDFBF7] border border-gray-200 text-gray-900 font-extrabold text-xs px-3 py-1 rounded-lg">
                    {formatPriceFCFA(zone.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment and Guarantees info */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-[#E8F8F5] rounded-3xl p-6 border border-[#2EC4B6]/30">
            <h4 className="font-serif font-bold text-lg text-[#136F63] flex items-center gap-2 mb-2">
              <ShieldCheck size={20} />
              Moyens de Paiement Acceptés
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Pour votre sécurité et votre tranquillité, vous pouvez régler par mobile money ou à la réception du colis.
            </p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.payments.map((p) => (
                <span key={p} className="bg-white text-gray-900 font-bold text-xs px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm">
            <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
              Besoin d&apos;une livraison urgente ?
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Un anniversaire aujourd&apos;hui ou une rentrée imminente ? Contactez notre coursier express sur WhatsApp.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, j'ai une commande urgente à faire livrer à Dakar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#1EBE5D]"
            >
              Contacter le service livraison
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
