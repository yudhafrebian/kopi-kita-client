import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[700px]">
      <Image
        src="https://res.cloudinary.com/dc4rzqyzq/image/upload/v1757923281/hero-banner_fpajv3.webp"
        alt="hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center px-28 z-10">
        <div className="text-white">
          <h1 className="mb-4 text-7xl font-bold font-playfair">Kopi Kita</h1>
          <p className="text-2xl w-[80%] mb-8 font-poppins">
            Tempat di mana setiap tegukan adalah cerita, setiap aroma adalah
            kenangan
          </p>
          <Link href="/menu" className="btn rounded-full btn-lg font-poppins bg-[#FFF6E5] text-[#6F4E37]">Lihat Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
