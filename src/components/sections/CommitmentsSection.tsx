import React from 'react';
import { ShieldCheck, Feather, Sparkles, Clock, MessageSquare } from 'lucide-react';

const commitments = [
  {
    icon: ShieldCheck,
    color: 'bg-[#FF3864]/10 text-[#FF3864]',
    title: 'Qualité Contrôlée & Zéro Défaut',
    description: 'Chaque vêtement, couture et semelle est rigoureusement inspecté avant mise en rayon pour garantir durabilité et finitions soignées.',
  },
  {
    icon: Feather,
    color: 'bg-[#06D6A0]/10 text-[#06D6A0]',
    title: 'Textiles Doux & Respirants',
    description: 'Cotons peignés, lins légers et doublures anti-irritations pensés spécialement pour le confort des enfants sous le climat de Dakar.',
  },
  {
    icon: MessageSquare,
    color: 'bg-[#FFD166]/20 text-[#1A1D1A]',
    title: 'Conseil Pointure & Vidéo Direct',
    description: 'Un doute sur la pointure ou la taille en mois/années ? Notre conseillère vous envoie photos réelles et mesures en direct sur WhatsApp.',
  },
  {
    icon: Clock,
    color: 'bg-[#118AB2]/10 text-[#118AB2]',
    title: 'Livraison Rapide Dakar & Sénégal',
    description: 'Livraison en moins de 24h à domicile ou au bureau sur Dakar et expéditions sécurisées vers Thiès, Saint-Louis, Mbour et toutes les régions.',
  },
];

export default function CommitmentsSection() {
  return (
    <section className="py-18 bg-[#FDFBF7] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#FF3864] mb-2">
            La Promesse Ashla Kids
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1A1D1A]">
            Pourquoi les parents nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1A1D1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
