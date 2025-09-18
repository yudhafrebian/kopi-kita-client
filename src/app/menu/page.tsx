import CTASection from "@/view/menu/CTA";
import HeaderSection from "@/view/menu/Header";
import MenuSection from "@/view/menu/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Kopi Kita Cafe",
  description: "Temukan berbagai pilihan kopi berkualitas di Kopi Kita Cafe",
}

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
