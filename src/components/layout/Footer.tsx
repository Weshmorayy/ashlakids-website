import React from 'react';
import { siteConfig } from '@/config/site';
import { MessageCircle, Phone, MapPin, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1D1A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <img
              src="/images/brand/logo.png"
              alt={siteConfig.name}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="text-xs text-white/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-white/10 text-[#FFD166] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Vente en Gros &amp; Détail · Dakar
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4">Nos Rayons</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#chaussures" className="hover:text-[#FF3864] transition-colors">Chaussures &amp; Baskets (21 à 36)</a></li>
              <li><a href="#vetements" className="hover:text-[#FF3864] transition-colors">Ensembles &amp; Prêt-à-porter</a></li>
              <li><a href="#ceremonie" className="hover:text-[#FF3864] transition-colors">Robes de Cérémonie &amp; Princesse</a></li>
              <li><a href="#sacs" className="hover:text-[#FF3864] transition-colors">Sacs Maternelle Disney &amp; Bérets</a></li>
              <li><a href="#gros" className="hover:text-[#FF3864] transition-colors">Tarifs Grossistes &amp; Revendeurs</a></li>
            </ul>
          </div>

          {/* Contact & Store Info */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4">Contact &amp; Commandes</h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#FFD166] flex-shrink-0" />
                <span>{siteConfig.phonePrimary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#FFD166] flex-shrink-0" />
                <span>{siteConfig.phoneSecondary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#FFD166] flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-[#FFD166] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </p>
            </div>
          </div>

          {/* Opening Hours & Socials */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4">Horaires &amp; Réseaux</h4>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {siteConfig.location.hours}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-[#FFD166] transition-colors"
              >
                Facebook : Ashla kids
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-[#FFD166] transition-colors"
              >
                Instagram : @ashla_kids
              </a>
              <a
                href={siteConfig.social.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-[#FFD166] transition-colors"
              >
                Snapchat : Ashla_style
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar - Zero agency credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ashla Kids Dakar. Tous droits réservés.</p>
          <p>Boutique d&apos;habillement enfant &amp; puériculture au Sénégal.</p>
        </div>
      </div>
    </footer>
  );
}
