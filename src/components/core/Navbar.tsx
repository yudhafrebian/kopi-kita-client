import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="px-20">
        <div className="px-6 py-4 flex justify-between">
            <Link href="/" className="font-playfair text-[#6F4E37] font-bold text-2xl">Kopi Kita</Link>
            <nav className="flex items-center gap-8">
                <ThemeSwitcher />
                <Link href="/" className="font-poppins text-[#6F4E37] ">Beranda</Link>
                <Link href="/about" className="font-poppins text-[#6F4E37] ">Tentang</Link>
                <Link href="/menu" className="font-poppins text-[#6F4E37] ">Menu</Link>
                <Link href="/contact" className="font-poppins text-[#6F4E37] ">Lokasi</Link>
            </nav>
        </div>
    </div>
  )
};

export default Navbar;
