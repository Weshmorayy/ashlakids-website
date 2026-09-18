import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/ui/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Boutique & Vente en Gros Enfants à Dakar`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Ashla Kids",
    "Boutique enfant Dakar",
    "Chaussures enfant Dakar",
    "Baskets enfant Sénégal",
    "Robes de princesse Dakar",
    "Sacs maternelle Disney",
    "Vente en gros vêtements enfants Dakar",
    "Layette bébé Sénégal",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: siteConfig.url,
    title: `${siteConfig.name} — Mode Enfant & Layette Bébé à Dakar`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/products/baskets-retro-collection.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#FDFBF7] text-[#1A1D1A] antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
