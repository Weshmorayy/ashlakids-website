import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import CategoryShowcase from '@/components/sections/CategoryShowcase';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import SpecialRentreeCeremonie from '@/components/sections/SpecialRentreeCeremonie';
import WholesaleBanner from '@/components/sections/WholesaleBanner';
import DeliveryInfoSection from '@/components/sections/DeliveryInfoSection';
import CustomOrderSection from '@/components/sections/CustomOrderSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      <Hero />
      <MarqueeBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <SpecialRentreeCeremonie />
      <WholesaleBanner />
      <DeliveryInfoSection />
      <CustomOrderSection />
      <Footer />
    </main>
  );
}
