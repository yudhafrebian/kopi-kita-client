import CTASection from "@/view/menu/CTA";
import HeaderSection from "@/view/menu/Header";
import MenuSection from "@/view/menu/Menu";

export default function MenuPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <main>
      <HeaderSection />
      <MenuSection searchParams={searchParams} />
      <CTASection />
    </main>
  );
}
