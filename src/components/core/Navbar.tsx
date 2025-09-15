"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-poppins ${
      pathname === href
        ? "text-[#6F4E37] font-bold underline underline-offset-4"
        : "text-[#6F4E37]"
    }`;

  return (
    <div className="px-20 sticky top-0 z-50 bg-white">
      <div className="px-6 py-4 flex justify-between">
        <Link
          href="/"
          className="font-playfair text-[#6F4E37] font-bold text-2xl"
        >
          Kopi Kita
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className={linkClass("/")}>
            Beranda
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            Tentang
          </Link>
          <Link href="/menu" className={linkClass("/menu")}>
            Menu
          </Link>
          <Link href="/location" className={linkClass("/location")}>
            Lokasi
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
