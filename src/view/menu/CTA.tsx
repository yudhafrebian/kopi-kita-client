import { MapPin } from "lucide-react";
import Link from "next/link";

const CTASection= () => {
  return (
    <div className="p-20 bg-[#6F4E37]">
        <div className="text-center text-white font-poppins">
            <h2 className="text-4xl font-bold">Nikmati Pengalaman Kopi Terbaik</h2>
            <p className="mt-4 text-xl w-1/3 mx-auto font-light">Datang langsung ke tempat kami dan rasakan atmosfer cafe yang hangat dengan kopi berkualitas premium</p>
            <Link href="/location" className="btn rounded-full btn-lg font-poppins text-[#6F4E37] shadow-none mt-8"><MapPin/>Kunjungi Kami</Link>
        </div>
    </div>
  )
};

export default CTASection;
