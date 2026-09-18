import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DeliveryInfoSection from '@/components/sections/DeliveryInfoSection';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import { HelpCircle, ChevronDown, ShieldCheck, RefreshCw, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Livraison à Dakar & FAQ",
  description: "Tout savoir sur nos délais de livraison à Dakar, les expéditions en régions du Sénégal, les retours et les paiements Wave & Orange Money.",
};

const faqs = [
  {
    q: "Quels sont les délais de livraison à Dakar ?",
    a: "Pour toute commande passée avant 14h, la livraison est effectuée dans la journée (2 à 4h selon votre quartier : Plateau, Almadies, Maristes, Yoff, etc.). En banlieue (Pikine, Guédiawaye, Rufisque), le délai est de 24h chrono."
  },
  {
    q: "Comment être sûr de choisir la bonne pointure ?",
    a: "Nous indiquons les pointures exactes (21 à 36) et les centimètres de semelle. Si vous hésitez, notre équipe sur WhatsApp (+221 77 108 98 63) vous aide à mesurer le pied de votre enfant pour garantir un chaussant parfait."
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Vous pouvez régler via Wave, Orange Money, Free Money ou directement en espèces au coursier lors de la livraison à domicile."
  },
  {
    q: "Expédiez-vous dans les autres régions du Sénégal ?",
    a: "Oui ! Nous expédions quotidiennement vers Thiès, Mbour, Saint-Louis, Touba, Kaolack, Tamba, Ziguinchor et partout au Sénégal via les transporteurs relais express (24h à 48h)."
  },
  {
    q: "Est-il possible d'échanger un article si la taille ne convient pas ?",
    a: "Absolument. En cas d'erreur de pointure ou de taille, l'échange est possible sous 48h sous réserve que l'article soit neuf et dans son emballage d'origine."
  },
];

export default function LivraisonFaqPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#1A1D1A] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-[#2EC4B6] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
            Guide Client &amp; FAQ
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
            Livraison &amp; Questions Fréquentes
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Retrouvez toutes les informations sur les expéditions, les pointures et les modalités de paiement.
          </p>
        </div>
      </div>

      <DeliveryInfoSection />

      {/* FAQ Accordion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF3864]">Vos Questions</span>
          <h2 className="font-serif text-3xl font-extrabold text-[#1A1D1A] mt-1">Foire Aux Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-serif font-bold text-base text-gray-900 flex items-start gap-2.5">
                <HelpCircle size={18} className="text-[#FF3864] flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <MarqueeBanner />
      <Footer />
    </main>
  );
}
