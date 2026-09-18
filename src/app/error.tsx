'use client';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-[#1A1D1A] p-6 text-center">
      <h1 className="font-serif text-3xl text-[#FF3864] font-bold">Oups, une erreur est survenue</h1>
      <p className="text-gray-600 text-sm mt-2">
        Veuillez rafraîchir la page ou revenir à l&apos;accueil de la boutique.
      </p>
      <Link
        href="/"
        className="mt-6 bg-[#1A1D1A] text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#FF3864] transition-colors"
      >
        Retourner à l&apos;accueil
      </Link>
    </div>
  );
}
