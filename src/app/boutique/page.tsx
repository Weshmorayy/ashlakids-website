import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CatalogueSection from '@/components/sections/CatalogueSection';
import MarqueeBanner from '@/components/sections/MarqueeBanner';

export const metadata: Metadata = {
  title: "Boutique & Catalogue Enfants",
  description: "Parcourez notre collection de chaussures, baskets rétro, robes de princesse, ensembles et sacs Disney disponibles immédiatement à Dakar.",
};

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#1A1D1A] text-white py-14 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-[#FF3864] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
            Catalogue Officiel Ashla Kids
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            La Boutique des Petits &amp; Grands
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Pointures 21 à 36, vêtements de 3 mois à 12 ans, sacs et accessoires. Commande directe par panier ou sur WhatsApp.
          </p>
        </div>
      </div>

      <CatalogueSection />
      <MarqueeBanner />
      <Footer />
    </main>
  );
}
