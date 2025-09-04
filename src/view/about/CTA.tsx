import { MapPin, Utensils } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="px-44 py-24 bg-gradient-to-r from-[#6F4E37] to-[#5A3E2B]">
        <div className="flex flex-col justify-between items-center font-poppins text-white gap-2">
            <h1 className="text-5xl font-bold">Rasakan Pengalaman Kopi Kita</h1>
            <p className="text-2xl w-3/4 text-center font-light">Kunjungi cafe kami dan nikmati cita rasa kopi autentik dalam suasana yang hangat dan bersahabat</p>
            <div className="flex gap-4 mt-7">
                <Link href={"/location"} role="button" className="btn btn-lg rounded-full shadow-none text-[#6F4E37]"><MapPin fill="#6F4E37" stroke="white"/>Kunjungi Kami</Link>
                <Link href={"/menu"} role="button" className="btn btn-lg rounded-full btn-outline"><Utensils/>Lihat Menu</Link>
            </div>
        </div>
    </div>
  )
};

export default CTASection;
