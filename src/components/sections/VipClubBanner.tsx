import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MessageCircle, Sparkles, ArrowRight, PackageCheck } from 'lucide-react';

export default function VipClubBanner() {
  return (
    <section className="py-16 bg-[#1A1D1A] text-white relative overflow-hidden">
      {/* Subtle colorful glow backgrounds */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FF3864]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#FFD166]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-white/5 to-white/10 p-8 sm:p-12 rounded-3xl border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FF3864] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 shadow-sm">
              <Sparkles size={13} />
              <span>Communauté &amp; Nouveautés Privilèges</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Ne manquez aucun arrivage exclusif sur Dakar.
            </h3>
            <p className="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed">
              Rejoignez les parents Ashla Kids sur WhatsApp pour recevoir nos nouvelles collections en avant-première, réserver vos pointures avant rupture et bénéficier d&apos;un conseil sur mesure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, je souhaite rejoindre le canal VIP des arrivages et recevoir les nouveautés.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg btn-bounce"
            >
              <MessageCircle size={17} />
              <span>Rejoindre sur WhatsApp</span>
            </a>
            <Link
              href="/boutique"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Voir la boutique</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
