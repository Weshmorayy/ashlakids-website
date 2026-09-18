'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/boutique" },
  { label: "Grossistes", href: "/grossistes" },
  { label: "Livraison & FAQ", href: "/livraison-faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Micro announcement bar — strictly 1 single line on all screen sizes */}
      <div className="bg-[#1A1D1A] text-white h-8 flex items-center px-3 sm:px-6 text-[11px] font-medium border-b border-white/10 relative z-40 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 whitespace-nowrap">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-[#FF3864] text-[9px] uppercase font-black px-2 py-0.5 rounded text-white flex-shrink-0">
              Dakar
            </span>
            <span className="text-white/85 text-[11px] truncate">
              Vente en Gros &amp; Détail · Livraison Express Dakar &amp; Régions
            </span>
          </div>

          <a 
            href={`https://wa.me/${siteConfig.whatsappRaw}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-[#FFD166] hover:underline font-bold text-[11px] flex-shrink-0"
          >
            <MessageCircle size={13} className="text-[#25D366]" />
            <span>{siteConfig.phonePrimary}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar — sleek, compact, elegant height */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2' 
          : 'bg-[#FDFBF7] border-b border-gray-200/60 py-2.5 sm:py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group py-1">
            <img
              src="/images/brand/logo.png"
              alt={siteConfig.name}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Multi-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative ${
                    isActive 
                      ? 'text-[#FF3864]' 
                      : 'text-gray-700 hover:text-[#FF3864]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF3864] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* WhatsApp Fast Order */}
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Ashla Kids, je souhaite me renseigner sur vos articles.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all btn-bounce shadow-sm"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#FF3864] text-gray-800 transition-colors shadow-sm"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF3864] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              aria-label="Menu mobile"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 !z-[999999] flex justify-end">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-xs bg-[#1A1D1A] text-white h-full shadow-2xl flex flex-col p-6 z-10 overflow-y-auto">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <img
                src="/images/brand/logo-white.png"
                alt={siteConfig.name}
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Fermer le menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="py-6 flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-lg py-2 border-b border-white/5 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#FFD166] font-bold' : 'text-white/90 hover:text-[#FFD166]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#FF3864] text-xs">→</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={15} />
                WhatsApp: {siteConfig.phonePrimary}
              </a>
              <div className="text-[11px] text-white/50 text-center">
                <p>📍 {siteConfig.location.city}, {siteConfig.location.country}</p>
                <p className="mt-0.5 text-[#FFD166]">Paiements Wave &amp; Orange Money</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
