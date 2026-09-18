import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WholesaleBanner from '@/components/sections/WholesaleBanner';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import { siteConfig } from '@/config/site';
import { Package, Truck, Percent, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Espace Grossistes & Revendeurs",
  description: "Approvisionnez votre boutique en lots de vêtements enfants, cartons de chaussures et layette bébé aux meilleurs tarifs revendeurs à Dakar.",
};

export default function GrossistesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#1A1D1A] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-[#FFD166] text-[#1A1D1A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
            Espace Pro &amp; Commerçants
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            Vente en Gros &amp; Demi-gros à Dakar
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Partenaire privilégié des boutiques physiques et vendeuses en ligne au Sénégal.
          </p>
        </div>
      </div>

      <WholesaleBanner />

      {/* Detailed Wholesale Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F3] text-[#FF3864] flex items-center justify-center font-bold">
              <Package size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900">Cartons de Chaussures</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cartons de 12 à 24 paires avec répartition harmonieuse des pointures les plus vendues (23 au 36). Modèles rétro, derbies et sandales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] text-[#B78103] flex items-center justify-center font-bold">
              <Percent size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900">Balles &amp; Lots Prêt-à-porter</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Ensembles 2 et 3 pièces, chemisiers, robes et jeans enfants conditionnés par tranches d&apos;âges prêtes à l&apos;étalage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F5] text-[#1E9589] flex items-center justify-center font-bold">
              <Truck size={24} />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900">Expéditions Sécurisées</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Envois vers toutes les régions (Thiès, Touba, Kaolack, Saint-Louis, Ziguinchor) avec suivi colis rigoureux.
            </p>
          </div>
        </div>
      </section>

      <MarqueeBanner />
      <Footer />
    </main>
  );
}
