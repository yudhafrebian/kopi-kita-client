import CTASection from "@/view/menu/CTA";
import HeaderSection from "@/view/menu/Header";
import MenuSection from "@/view/menu/Menu";

export default function MenuPage({ searchParams }: any) {
  const category = Array.isArray(searchParams?.category)
    ? searchParams?.category[0]
    : searchParams?.category;

  return (
    <main>
      <HeaderSection />
      <MenuSection searchParams={{ category }} />
      <CTASection />
    </main>
  );
}
