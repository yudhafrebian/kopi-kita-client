import FounderSection from "@/view/about/Founder";
import ShortHistorySection from "@/view/about/ShortHistory";
import ValueSection from "@/view/about/Value";

export default function AboutPage() {
    return (
        <main>
            <ShortHistorySection />
            <ValueSection />
            <FounderSection />
        </main>
    )
}