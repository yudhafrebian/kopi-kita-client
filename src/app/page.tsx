import AboutSection from "@/view/home/About";
import FeaturedProductSection from "@/view/home/FeaturedProduct";
import HeroSection from "@/view/home/Hero";
import TestimonySection from "@/view/home/Testimonials";
import { Heart, ThumbsUp } from "lucide-react";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedProductSection />
      <TestimonySection />
    </main>
  );
}
