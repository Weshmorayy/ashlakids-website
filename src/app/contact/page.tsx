import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomOrderSection from '@/components/sections/CustomOrderSection';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import { siteConfig } from '@/config/site';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact & Commandes Sur-Mesure",
  description: "Contactez Ashla Kids à Dakar par WhatsApp ou téléphone pour commander vos articles enfants, vérifier une pointure ou demander un devis de gros.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#1A1D1A] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-[#FF3864] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
            Service Client Dédié
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            Contactez la Boutique Ashla Kids
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Une question sur un modèle, une pointure ou une commande urgente ? Notre équipe vous répond immédiatement.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href={`https://wa.me/${siteConfig.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#25D366] transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F5] text-[#25D366] flex items-center justify-center mb-3">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900">WhatsApp Direct</h3>
            <p className="text-xs text-gray-500 mt-1">{siteConfig.phonePrimary}</p>
            <span className="text-xs font-bold text-[#25D366] mt-3 group-hover:underline">Ouvrir le chat →</span>
          </a>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F3] text-[#FF3864] flex items-center justify-center mb-3">
              <Phone size={24} />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900">Ligne Téléphonique</h3>
            <p className="text-xs text-gray-500 mt-1">{siteConfig.phoneSecondary}</p>
            <span className="text-xs font-semibold text-gray-400 mt-3">Lun - Sam : 09h-20h</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] text-[#B78103] flex items-center justify-center mb-3">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900">Boutique &amp; Relais</h3>
            <p className="text-xs text-gray-500 mt-1">Dakar, Sénégal</p>
            <span className="text-xs font-semibold text-gray-400 mt-3">Livraison express</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3">
              <Mail size={24} />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900">Email</h3>
            <p className="text-xs text-gray-500 mt-1 truncate max-w-full">{siteConfig.email}</p>
            <span className="text-xs font-semibold text-gray-400 mt-3">Commandes pro &amp; devis</span>
          </div>
        </div>
      </section>

      <CustomOrderSection />
      <MarqueeBanner />
      <Footer />
    </main>
  );
}
