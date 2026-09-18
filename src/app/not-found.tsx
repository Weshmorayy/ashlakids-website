import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-[#1A1D1A] p-6 text-center">
      <span className="text-6xl font-serif text-[#FF3864] font-bold">404</span>
      <h1 className="font-serif text-3xl font-bold mt-2">Article ou Page Introuvable</h1>
      <p className="text-gray-600 text-sm mt-2 max-w-sm">
        Le modèle ou la page que vous recherchez n&apos;est plus disponible dans le catalogue Ashla Kids.
      </p>
      <Link
        href="/"
        className="mt-6 bg-[#FF3864] text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#1A1D1A] transition-colors"
      >
        Retour à la boutique →
      </Link>
    </div>
  );
}
