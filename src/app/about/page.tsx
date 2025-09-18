import CTASection from "@/view/about/CTA";
import ExcellenceSection from "@/view/about/Excellence";
import FounderSection from "@/view/about/Founder";
import ShortHistorySection from "@/view/about/ShortHistory";
import ValueSection from "@/view/about/Value";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang | Kopi Kita Cafe",
  description: "Kenali Kopi Kita Cafe dan sejarahnya",
}

export default function AboutPage() {
    return (
        <main>
            <ShortHistorySection />
            <ValueSection />
            <FounderSection />
            <ExcellenceSection />
            <CTASection />
        </main>
    )
}