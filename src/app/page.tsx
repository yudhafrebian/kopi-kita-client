import AboutSection from "@/view/home/About";
import FeaturedProductSection from "@/view/home/FeaturedProduct";
import HeroSection from "@/view/home/Hero";
import LocationSection from "@/view/home/Location";
import TestimonySection from "@/view/home/Testimonials";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedProductSection />
      <TestimonySection />
      <LocationSection />
    </main>
  );
}
