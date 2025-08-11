import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black p-10">
      <aside className="text-white">
        <p className="font-bold text-xl font-playfair">Kopi Kita</p>
        <p className="text-[#9CA3AF] font-poppins">
          Tempat di mana setiap tegukan adalah cerita, setiap aroma adalah
          kenangan.
        </p>
      </aside>
      <nav className="font-poppins">
        <h6 className="footer-title text-white">Navigasi</h6>
        <a className="link link-hover text-[#9CA3AF]">Beranda</a>
        <a className="link link-hover text-[#9CA3AF]">Tentang Kami</a>
        <a className="link link-hover text-[#9CA3AF]">Menu</a>
        <a className="link link-hover text-[#9CA3AF]">Lokasi</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white font-poppins">Ikuti Kami</h6>
        <div className="flex gap-4">
            <Instagram className="text-white hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            <Twitter className="text-white hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            <Facebook className="text-white hover:scale-110 ease-in-out duration-300 cursor-pointer" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
