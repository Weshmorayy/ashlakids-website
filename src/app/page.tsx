import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import BrandStorySection from '@/components/sections/BrandStorySection';
import CommitmentsSection from '@/components/sections/CommitmentsSection';
import ParentsTestimonials from '@/components/sections/ParentsTestimonials';
import VipClubBanner from '@/components/sections/VipClubBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      <Hero />
      <MarqueeBanner />
      <BrandStorySection />
      <CommitmentsSection />
      <ParentsTestimonials />
      <VipClubBanner />
      <Footer />
    </main>
  );
}
