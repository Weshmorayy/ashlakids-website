import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BoutiqueCatalogue from '@/components/sections/BoutiqueCatalogue';
import MarqueeBanner from '@/components/sections/MarqueeBanner';

export const metadata: Metadata = {
  title: "Boutique & Catalogue Enfants",
  description: "Recherchez et filtrez nos collections chaussures, baskets rétro, robes de princesse, ensembles et sacs Disney à Dakar.",
};

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#1A1D1A] text-white py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-2.5">
          <span className="inline-block bg-[#FF3864] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
            Catalogue &amp; Moteur de Recherche
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            La Boutique Ashla Kids
          </h1>
          <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto">
            Trouvez instantanément la pointure ou la tenue idéale pour vos enfants.
          </p>
        </div>
      </div>

      <BoutiqueCatalogue />
      <MarqueeBanner />
      <Footer />
    </main>
  );
}
