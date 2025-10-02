"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
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
    <div className="px-0 md:px-20 sticky top-0 z-50 bg-white">
      <div className="px-6 py-2 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-playfair text-[#6F4E37] font-bold text-2xl flex items-center gap-2"
        >
          <Image src="/assets/logo.png" alt="logo" width={36} height={36} />
          Kopi Kita
        </Link>
        <nav>
          <div className="dropdown dropdown-bottom dropdown-end flex md:hidden">
            <div tabIndex={0} role="button" className="btn btn-sm m-1"><Menu className="text-[#6F4E37]" /></div>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box">
              <li><Link href="/" className={linkClass("/")}>Beranda</Link></li>
              <li><Link href="/about" className={linkClass("/about")}>Tentang</Link></li>
              <li><Link href="/menu" className={linkClass("/menu")}>Menu</Link></li>
              <li><Link href="/location" className={linkClass("/location")}>Lokasi</Link></li>
            </ul>
          </div>
        </nav>
        <nav className="hidden md:flex items-center gap-8">
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
